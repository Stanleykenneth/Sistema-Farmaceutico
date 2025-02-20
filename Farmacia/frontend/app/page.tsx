import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Bem-vindo ao Sistema da Farmácia</h1>
      <p className="mt-4 text-gray-600">Gerencie pedidos, pacientes e estoque de forma eficiente.</p>
      <br/>
      <Link href="/dashboard">
        <span className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer">
          Acessar Dashboard
        </span>
      </Link>
    </div>
  );
}
