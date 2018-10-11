from __future__ import unicode_literals
from django.db import models
from datetime import datetime
import re
import bcrypt

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]$')
NAME_REGEX = re.compile(r'^[a-zA-Z]$')

class UserManager(models.Manager):

	def basic_validator(self, postData):
		errors = {}
		if len(postData['name']) < 1:
			errors["name"] =  "Your name should be more than 1 characters"
		if NAME_REGEX.match(postData['name']):
			errors['name'] = "Please, enter a valid name"
		if len(postData['alias_name']) < 1:
			errors["alias_name"] = "alias name should be more than 1 characters"
		if NAME_REGEX.match(postData['alias_name']):
			errors['alias_name'] = "Please, enter a valid alias name"
		if len(postData['email']) < 1:
			errors['"email'] = "Email is needed"
		if EMAIL_REGEX.match(postData['email']):
			errors["email"] = "Not a valid Email"
		if len(postData['password']) < 8:
			errors['password'] = "Your password must be longer than 8 characters"
		if postData['password'] != postData['confirmpassword']:
			errors['password'] = "Your passwords do not match"
		now = datetime.today().strftime('%Y %m %d')
		if postData['date'] > now:
			errors['date'] = "Invalid date"
		dbemailcheck = User.objects.filter(email=postData['email'])
		if len(dbemailcheck) != 0:
			errors['password'] = "You already have a account, please login"
		return errors

	def login_validator(self, postData):
		errors = {}
		user = User.objects.filter(email=postData['email'])
		if len(user) == 0:
			errors['error2'] = "Not a registered email or password, please register"
		else:
			if postData['email'] == User.objects.get(email=postData['email']).email:
				dbpassword = User.objects.get(email=postData['email']).password
				if bcrypt.checkpw(postData['password'].encode(), dbpassword.encode()) == False:
					errors['error3'] = "Invalid login"
		return errors

class User(models.Model):
	name = models.CharField(max_length=255)
	aliasname = models.CharField(max_length=255)
	email = models.CharField(max_length=255)
	password = models.CharField(max_length=50)
	birthdate = models.DateField()	
	objects = UserManager()


class QuoteManager(models.Manager):

	def quote_validator(self, postData):
		errors = {}
		if len(postData['name']) < 3:
			errors['name'] = "Name needs more characters"
		if NAME_REGEX.match(postData['name']):
			errors['name'] = "Please, enter a valid name"
		if len(postData['msg']) < 10:
			errors['msg'] = "Quote message needs to be greater than 10 characters"
		return errors

class Quote(models.Model):
	name = models.CharField(max_length=255)
	msg = models.TextField()
	uploader = models.ForeignKey(User, related_name="created_quotes")
	userfavs = models.ManyToManyField(User, related_name='fav_quotes')
	objects = QuoteManager()