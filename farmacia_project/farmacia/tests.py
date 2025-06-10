from django.urls import reverse
from django.test import TestCase

from .models import Paciente, Medico, Pedido


class PacienteModelTest(TestCase):
    def test_str_representation(self):
        paciente = Paciente.objects.create(nome="Joao", cpf="12345678901")
        self.assertEqual(str(paciente), "Joao")


class MedicoModelTest(TestCase):
    def test_str_representation(self):
        medico = Medico.objects.create(primeiro_nome="Ana", ultimo_nome="Silva", crm="CRM1")
        self.assertEqual(str(medico), "Ana Silva")


class PedidoModelTest(TestCase):
    def test_str_representation(self):
        paciente = Paciente.objects.create(nome="Maria", cpf="00000000000")
        pedido = Pedido.objects.create(paciente=paciente)
        self.assertIn(paciente.nome, str(pedido))


class ViewTests(TestCase):
    def setUp(self):
        self.paciente = Paciente.objects.create(nome="Mario", cpf="11111111111")
        self.medico = Medico.objects.create(primeiro_nome="Luigi", ultimo_nome="Bros", crm="CRM2")
        Pedido.objects.create(paciente=self.paciente, medico=self.medico)

    def test_login_view(self):
        response = self.client.get(reverse("login"))
        self.assertEqual(response.status_code, 200)

    def test_dashboard_view(self):
        response = self.client.get(reverse("dashboard"))
        self.assertEqual(response.status_code, 200)

    def test_paciente_list_view(self):
        response = self.client.get(reverse("paciente_list"))
        self.assertEqual(response.status_code, 200)
        self.assertIn("pacientes", response.context)

    def test_medico_list_view(self):
        response = self.client.get(reverse("medico_list"))
        self.assertEqual(response.status_code, 200)
        self.assertIn("medicos", response.context)

    def test_pedido_list_view(self):
        response = self.client.get(reverse("pedido_list"))
        self.assertEqual(response.status_code, 200)
        self.assertIn("pedidos", response.context)

