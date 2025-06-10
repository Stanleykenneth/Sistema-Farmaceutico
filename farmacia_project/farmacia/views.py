from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import (
    ListView,
    CreateView,
    UpdateView,
    DeleteView,
)
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage

from .forms import PacienteForm, MedicoForm, PedidoForm

from .models import Paciente, Medico, Pedido


class OrderingPaginationMixin:
    """Mixin para aplicar ordenação e paginação."""

    paginate_by = 10
    ordering = None
    ordering_fields: list[str] = []

    def get_ordering(self):
        order = self.request.GET.get("ordering", self.ordering)
        if order and order.lstrip("-") in self.ordering_fields:
            return order
        return self.ordering

    def get_queryset(self):
        queryset = super().get_queryset()
        ordering = self.get_ordering()
        if ordering:
            queryset = queryset.order_by(ordering)
        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        paginator = Paginator(self.object_list, self.paginate_by)
        page_number = self.request.GET.get("page")
        try:
            page_obj = paginator.page(page_number)
        except PageNotAnInteger:
            page_obj = paginator.page(1)
        except EmptyPage:
            page_obj = paginator.page(paginator.num_pages)

        context["paginator"] = paginator
        context["page_obj"] = page_obj
        context["is_paginated"] = paginator.num_pages > 1
        context[self.context_object_name] = page_obj.object_list
        context["current_ordering"] = self.get_ordering()
        return context

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


class PacienteListView(OrderingPaginationMixin, ListView):
    """Lista de pacientes."""

    model = Paciente
    template_name = "pacientes.html"
    context_object_name = "pacientes"
    ordering_fields = ["nome", "cpf", "created_at"]
    ordering = "nome"


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


class MedicoListView(OrderingPaginationMixin, ListView):
    """Lista de médicos."""

    model = Medico
    template_name = "medicos.html"
    context_object_name = "medicos"
    ordering_fields = ["primeiro_nome", "crm", "especialidade", "created_at"]
    ordering = "primeiro_nome"


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


class PedidoListView(OrderingPaginationMixin, ListView):
    """Lista de pedidos."""

    model = Pedido
    template_name = "pedidos.html"
    context_object_name = "pedidos"
    ordering_fields = ["data_pedido", "status", "paciente__nome"]
    ordering = "-data_pedido"


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
