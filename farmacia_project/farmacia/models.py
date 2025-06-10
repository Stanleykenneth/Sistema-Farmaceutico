from django.db import models


class Paciente(models.Model):
    nome = models.CharField(max_length=255)
    cpf = models.CharField(max_length=14, unique=True)
    data_nascimento = models.DateField(null=True, blank=True)
    endereco = models.CharField(max_length=255, blank=True)
    telefone = models.CharField(max_length=20, blank=True)
    email = models.EmailField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.nome


class Medico(models.Model):
    primeiro_nome = models.CharField(max_length=100)
    ultimo_nome = models.CharField(max_length=100)
    email = models.EmailField(blank=True)
    telefone = models.CharField(max_length=20, blank=True)
    crm = models.CharField(max_length=30, unique=True)
    especialidade = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"{self.primeiro_nome} {self.ultimo_nome}"


class Pedido(models.Model):
    STATUS_CHOICES = [
        ("pendente", "Pendente"),
        ("em_processo", "Em processo"),
        ("concluido", "Concluído"),
    ]

    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE, related_name="pedidos")
    medico = models.ForeignKey(Medico, on_delete=models.SET_NULL, null=True, blank=True, related_name="pedidos")
    descricao = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="pendente")
    data_pedido = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"Pedido #{self.id} - {self.paciente.nome}"
