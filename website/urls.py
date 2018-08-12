"""
This is the URLs page for the "website" app of Ting. The entire website is controlled through here.
"""
from django.conf.urls import url

from website import views

urlpatterns = [
    url(r'^$', views.root_view, name='root'),
]