from django.urls import path
from .views import login_view, dashboard_view, pacientes_view, medicos_view, pedidos_view

urlpatterns = [
    path('login/', login_view, name='login'),
    path('dashboard/', dashboard_view, name='dashboard'),
    path('pacientes/', pacientes_view, name='pacientes'),    
    path('medicos/', medicos_view, name='medicos'),    
    path('pedidos/', pedidos_view, name='pedidos'),    
]
