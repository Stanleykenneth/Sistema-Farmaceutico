import Sidebar from "@/src/components/Sidebar";

export default function Pedidos() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold">Gestão de Pedidos</h1>
        <p className="mt-2 text-gray-600">Visualize e controle pedidos da farmácia.</p>
      </div>
    </div>
  );
}
