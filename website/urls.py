"""
This is the URLs page for the "website" app of Ting. The entire website is controlled through here.
"""
from django.conf.urls import url

from website import views

app_name = 'website'

urlpatterns = [
    url(r'^$', views.root_view, name='root'),
    url(r'^about$', views.about_view, name='about'),
    url(r'^signup$', views.signup_view, name='signup'),
    url(r'^signin$', views.signin_view, name='signin')
]