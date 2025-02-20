import Sidebar from "../../src/components/Sidebar";


export default function Dashboard(){
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <p className="mt-2 text-gray-600">Bem vindo ao sistema de gestão da manifarma</p>
            </div>
        </div>
    );
}