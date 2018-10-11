from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.index),
	url(r'^register$', views.register),
	url(r'^login$', views.login),
	url(r'^quotes$', views.quotes, name='quotes'),
	url(r'^add/(?P<id>\d+)$', views.add, name='addtolist'),
	url(r'^remove/(?P<id>\d+)$', views.remove, name='remove'),
	url(r'^create$', views.create),
	url(r'^show/(?P<id>\d+)$', views.show, name='show'),
	url(r'^logout$', views.logout, name='logout'),
]