# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from . import forms

# Create your views here.


def root_view(request):
    """
    The view for the index page (I'm calling it root).
    :return: The rendering of the Index page.
    """

    return render(request, template_name="website/index.html")


def about_view(request):
    """
    The view for the About page.
    :param request: An HttpRequest
    :return: A rendering of the About page.
    """

    return render(request, template_name="website/about.html")


def signup_view(request):
    """
    The view for a sign up action.
    :param request: An HttpRequest
    :return: A rendering of the Sign up page.
    """
    if request.method == 'POST':
        # Make a new form
        signup_form = forms.SignUpForm(request.POST)

        if signup_form.is_valid():
            return HttpResponseRedirect(reverse('website:root'))
    else:
        signup_form = forms.SignUpForm()

    return render(request, template_name="website/signup.html", context={'signup_form': signup_form})


def signin_view(request):
    """
    The view for a sign in action.
    :param request: An HttpRequest
    :return: A rendering of the Sign in page.
    """

    return render(request, template_name="website/signin.html")