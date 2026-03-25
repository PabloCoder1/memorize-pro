import { syncUser } from "@/app/actions/user";
import { Clock } from "lucide-react";

export default async function DashboardPage() {
  // Chamamos o sincronismo. Se for a primeira vez, ele salva no banco.
  // Se não for, ele apenas ignora.
  const dbUser = await syncUser();

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold">
            Olá, {dbUser?.name?.split(' ')[0] || "Bem-vindo"}! 👋
          </h1>
          <p className="text-gray-400">Aqui estão suas memórias em processo de restauração.</p>
        </div>
      </div>

      {/* Card de Status Vazio (Estado Inicial) */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-12 text-center">
        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
           <Clock className="text-gray-500" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Nenhum pedido encontrado</h3>
        <p className="text-gray-500 mb-8">Você ainda não enviou fotos para restauração.</p>
        <button className="bg-brand-gradient px-8 py-3 rounded-xl font-bold hover:opacity-90 transition">
          Fazer meu primeiro pedido
        </button>
      </div>
    </div>
  );
}