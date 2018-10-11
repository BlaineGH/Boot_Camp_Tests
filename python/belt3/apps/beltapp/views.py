from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime
from django.utils.crypto import get_random_string
from random import randint
from datetime import datetime
from models import *
import bcrypt
from django.contrib import messages

def index(request):
	return render(request, 'beltapp/index.html')

def register(request):
	errors = User.objects.basic_validator(request.POST)
	if len(errors):
		for tag, error in errors.iteritems():
			messages.error(request, error, extra_tags=tag)
		return redirect('/')
	else:
		hashword = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
		User.objects.create(name=request.POST['name'],aliasname=request.POST['alias_name'],email=request.POST['email'],password=hashword,birthdate=request.POST['date'])
		user = User.objects.get(email=request.POST['email'])
		request.session['id'] = user.id
		return redirect('/quotes')

def login(request):
	errors = User.objects.login_validator(request.POST)
	if len(errors):
		for tag, error in errors.iteritems():
			messages.error(request, error, extra_tags=tag)
		return redirect('/')
	else:
		user = User.objects.get(email=request.POST['email'])
		request.session['id'] = user.id
		return redirect('/quotes')

def logout(request):
	request.session.pop('id')
	return redirect('/')

def quotes(request):
	context = {
		'username' : User.objects.get(id = request.session['id']).aliasname,
		'allquotes' : Quote.objects.all(),
		'userfavs' : User.objects.get(id=request.session['id']).fav_quotes.all(),
	}
	return render(request, 'beltapp/quotes.html/', context)

def add(request, id):
	q = Quote.objects.get(id=id)
	u = User.objects.get(id = request.session['id'])
	u.fav_quotes.add(q)
	return redirect('/quotes')

def remove(request, id):
	q = Quote.objects.get(id=id)
	u = User.objects.get(id = request.session['id'])
	u.fav_quotes.remove(q)
	return redirect('/quotes')

def create(request):
	errors = Quote.objects.quote_validator(request.POST)
	if len(errors):
		for tag, error in errors.iteritems():
			messages.error(request, error, extra_tags=tag)
		return redirect('/quotes')
	else:
		Quote.objects.create(name=request.POST['name'],msg=request.POST['msg'], uploader=User.objects.get(id=request.session['id']))
	return redirect('/quotes')

def show(request, id):
	context = {
		'user' : User.objects.get(id=id).aliasname,
		'usermade' : Quote.objects.filter(uploader = id).all(),
		'count' : len(User.objects.filter(created_quotes = id)),
	}
	return render(request, 'beltapp/show.html/', context)

def logout(request):
	request.session.pop('id')
	return redirect('/')