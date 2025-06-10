from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import (
    ListView,
    CreateView,
    UpdateView,
    DeleteView,
)

from .forms import PacienteForm, MedicoForm, PedidoForm

from .models import Paciente, Medico, Pedido

def login_view(request):
    return render(request, 'login.html')

def dashboard_view(request):
    return render(request, 'dashboard.html')

def pacientes_view(request):
    return render(request, 'pacientes.html')

def medicos_view(request):
    return render(request, 'medicos.html')

def pedidos_view(request):
    context = {
        'titulo': 'Gestão de Pedidos',
        # Outros dados que quiser passar para o template
    }
    return render(request, 'pedidos.html', context)


class PacienteListView(ListView):
    """Lista de pacientes."""

    model = Paciente
    template_name = "pacientes.html"
    context_object_name = "pacientes"


class PacienteCreateView(CreateView):
    """Cadastro de pacientes."""

    model = Paciente
    form_class = PacienteForm
    template_name = "paciente_form.html"
    success_url = reverse_lazy("paciente_list")


class PacienteUpdateView(UpdateView):
    """Edição de pacientes."""

    model = Paciente
    form_class = PacienteForm
    template_name = "paciente_form.html"
    success_url = reverse_lazy("paciente_list")


class PacienteDeleteView(DeleteView):
    """Exclusão de pacientes."""

    model = Paciente
    template_name = "paciente_confirm_delete.html"
    success_url = reverse_lazy("paciente_list")


class MedicoListView(ListView):
    """Lista de médicos."""

    model = Medico
    template_name = "medicos.html"
    context_object_name = "medicos"


class MedicoCreateView(CreateView):
    """Cadastro de médicos."""

    model = Medico
    form_class = MedicoForm
    template_name = "medico_form.html"
    success_url = reverse_lazy("medico_list")


class MedicoUpdateView(UpdateView):
    """Edição de médicos."""

    model = Medico
    form_class = MedicoForm
    template_name = "medico_form.html"
    success_url = reverse_lazy("medico_list")


class MedicoDeleteView(DeleteView):
    """Exclusão de médicos."""

    model = Medico
    template_name = "medico_confirm_delete.html"
    success_url = reverse_lazy("medico_list")


class PedidoListView(ListView):
    """Lista de pedidos."""

    model = Pedido
    template_name = "pedidos.html"
    context_object_name = "pedidos"


class PedidoCreateView(CreateView):
    """Cadastro de pedidos."""

    model = Pedido
    form_class = PedidoForm
    template_name = "pedido_form.html"
    success_url = reverse_lazy("pedido_list")


class PedidoUpdateView(UpdateView):
    """Edição de pedidos."""

    model = Pedido
    form_class = PedidoForm
    template_name = "pedido_form.html"
    success_url = reverse_lazy("pedido_list")


class PedidoDeleteView(DeleteView):
    """Exclusão de pedidos."""

    model = Pedido
    template_name = "pedido_confirm_delete.html"
    success_url = reverse_lazy("pedido_list")
