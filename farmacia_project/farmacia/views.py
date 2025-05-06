from django.shortcuts import render

def login_view(request):
    return render(request, 'login.html')

def dashboard_view(request):
    return render(request, 'dashboard.html')

def pacientes_view(request):
    return render(request, 'pacientes.html')

def medicos_view(request):
    return render(request, 'medicos.html')

from django.shortcuts import render

def pedidos_view(request):
    context = {
        'titulo': 'Gestão de Pedidos',
        # Outros dados que quiser passar para o template
    }
    return render(request, 'pedidos.html', context)
