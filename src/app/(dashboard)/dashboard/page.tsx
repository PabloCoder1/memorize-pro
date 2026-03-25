"use client"; // Também precisa ser Client Component para usar o hook do Clerk

import { useUser } from "@clerk/nextjs";
import { Clock } from "lucide-react";

export default function DashboardPage() {
  const { user } = useUser(); // Aqui pegamos os dados do usuário logado

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold">
            Olá, {user?.firstName || "Bem-vindo"}! 👋
          </h1>
          <p className="text-gray-400">Aqui estão suas memórias em processo de restauração.</p>
        </div>
      </div>

      {/* Card de status (mantemos o que criamos antes) */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
         {/* ... (mantenha o código do card que fizemos anteriormente) ... */}
      </div>
    </div>
  );
}