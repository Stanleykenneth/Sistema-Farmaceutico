"use client";
import { useState } from "react";
import { Search, PlusCircle } from "lucide-react";

export default function Pacientes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pacientes, setPacientes] = useState([
    { id: 1, nome: "João Silva", telefone: "11999999999", cpf: "123.456.789-00" },
    { id: 2, nome: "Maria Souza", telefone: "11888888888", cpf: "987.654.321-00" },
  ]);

  // Filtrar pacientes
  const pacientesFiltrados = pacientes.filter((paciente) =>
    paciente.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    paciente.telefone.includes(searchTerm) ||
    paciente.cpf.includes(searchTerm)
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestão de Pacientes</h1>

      {/* Barra de Busca */}
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          placeholder="Buscar por nome, telefone ou CPF..."
          className="p-2 border rounded w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="text-gray-600" />
      </div>

      {/* Botão Adicionar Paciente */}
      <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mb-4">
        <PlusCircle className="mr-2" /> Adicionar Paciente
      </button>

      {/* Tabela de Pacientes */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Nome</th>
            <th className="border p-2">Telefone</th>
            <th className="border p-2">CPF</th>
            <th className="border p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {pacientesFiltrados.map((paciente) => (
            <tr key={paciente.id} className="hover:bg-gray-100">
              <td className="border p-2">{paciente.nome}</td>
              <td className="border p-2">{paciente.telefone}</td>
              <td className="border p-2">{paciente.cpf}</td>
              <td className="border p-2">
                <button className="text-blue-600 hover:underline">Detalhes</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
