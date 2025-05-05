from django.shortcuts import render

def login_view(request):
    return render(request, 'login.html')

def dashboard_view(request):
    return render(request, 'dashboard.html')

def pacientes_view(request):
    return render(request, 'pacientes.html')