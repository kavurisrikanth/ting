from django import forms


class SignUpForm(forms.Form):
    username = forms.CharField(label="Username", max_length=50)
    password = forms.CharField(label="Password", widget=forms.PasswordInput)