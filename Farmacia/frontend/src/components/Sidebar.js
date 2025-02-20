"use client";

import { Home, Users, ClipboardList} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-gray-900 text-black p-5 pt-10 pl-10 flex flex-col">
          <h2 className="text-lg font-bold mb-5">Farmácia</h2>
          <nav className="flex flex-col space-y-3">

            <Link href="/dashboard" className="flex items-center space-x-2 hover:text-gray-400">             
              <Home size={20} /> <span>Dashboard</span>             
            </Link>

            <Link href="/pacientes" className="flex items-center space-x-2 hover:text-gray-400">            
              <Users size={20} /> <span>Pacientes</span>              
            </Link>

            <Link href="/pedidos" className="flex items-center space-x-2 hover:text-gray-400">              
              <ClipboardList size={20} /> <span>Pedidos</span>             
            </Link>

          </nav>
        </div>
      );
};

export default Sidebar;