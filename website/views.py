# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.


def root_view(request):
    """
    The view for the index page (I'm calling it root).
    :return: Nothing.
    """

    return render(request, template_name="base.html")