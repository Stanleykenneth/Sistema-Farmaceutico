from django import forms
from .models import Paciente, Medico, Pedido


class PacienteForm(forms.ModelForm):
    """Formulário para validação de pacientes."""

    class Meta:
        model = Paciente
        fields = [
            "nome",
            "cpf",
            "data_nascimento",
            "endereco",
            "telefone",
            "email",
        ]

    def clean_cpf(self):
        cpf = self.cleaned_data.get("cpf", "")
        digits = [c for c in cpf if c.isdigit()]
        if len(digits) != 11:
            raise forms.ValidationError("CPF deve conter 11 dígitos")
        return cpf


class MedicoForm(forms.ModelForm):
    """Formulário para validação de médicos."""

    class Meta:
        model = Medico
        fields = [
            "primeiro_nome",
            "ultimo_nome",
            "email",
            "telefone",
            "crm",
            "especialidade",
        ]

    def clean_crm(self):
        crm = self.cleaned_data.get("crm", "")
        if len(crm) < 4:
            raise forms.ValidationError("CRM deve possuir ao menos 4 caracteres")
        return crm


class PedidoForm(forms.ModelForm):
    """Formulário para validação de pedidos."""

    class Meta:
        model = Pedido
        fields = ["paciente", "medico", "descricao", "status"]

