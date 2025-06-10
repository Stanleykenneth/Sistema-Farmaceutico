from django.urls import path
from .views import (
    login_view,
    dashboard_view,
    PacienteListView,
    PacienteCreateView,
    PacienteUpdateView,
    PacienteDeleteView,
    MedicoListView,
    MedicoCreateView,
    MedicoUpdateView,
    MedicoDeleteView,
    PedidoListView,
    PedidoCreateView,
    PedidoUpdateView,
    PedidoDeleteView,
)

urlpatterns = [
    path("login/", login_view, name="login"),
    path("dashboard/", dashboard_view, name="dashboard"),

    # Pacientes
    path("pacientes/", PacienteListView.as_view(), name="paciente_list"),
    path("pacientes/novo/", PacienteCreateView.as_view(), name="paciente_create"),
    path("pacientes/<int:pk>/editar/", PacienteUpdateView.as_view(), name="paciente_update"),
    path(
        "pacientes/<int:pk>/excluir/",
        PacienteDeleteView.as_view(),
        name="paciente_delete",
    ),

    # Médicos
    path("medicos/", MedicoListView.as_view(), name="medico_list"),
    path("medicos/novo/", MedicoCreateView.as_view(), name="medico_create"),
    path("medicos/<int:pk>/editar/", MedicoUpdateView.as_view(), name="medico_update"),
    path(
        "medicos/<int:pk>/excluir/",
        MedicoDeleteView.as_view(),
        name="medico_delete",
    ),

    # Pedidos
    path("pedidos/", PedidoListView.as_view(), name="pedido_list"),
    path("pedidos/novo/", PedidoCreateView.as_view(), name="pedido_create"),
    path("pedidos/<int:pk>/editar/", PedidoUpdateView.as_view(), name="pedido_update"),
    path(
        "pedidos/<int:pk>/excluir/",
        PedidoDeleteView.as_view(),
        name="pedido_delete",
    ),
]
