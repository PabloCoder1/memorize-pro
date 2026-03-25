import { Clock, CheckCircle2 } from "lucide-react";

export default function DashboardPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold">Olá, Pablo!</h1>
          <p className="text-gray-400">Bem-vindo à sua área de memórias.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg font-semibold transition-all">
          Novo Pedido
        </button>
      </div>

      {/* Lista de Pedidos (Exemplo de um pedido ativo) */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-500/10 rounded-full">
              <Clock className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <h3 className="font-bold">Álbum Memorize Pro (20 fotos)</h3>
              <p className="text-sm text-gray-400">Pedido #9842 - 25/03/2026</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 text-xs font-bold rounded-full uppercase">
            Em Restauração
          </span>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
            <p className="text-xs text-gray-500 uppercase font-bold mb-1">Fotos enviadas</p>
            <p className="text-xl font-bold text-white">12 / 20</p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
            <p className="text-xs text-gray-500 uppercase font-bold mb-1">Vídeos inclusos</p>
            <p className="text-xl font-bold text-white">5</p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
            <p className="text-xs text-gray-500 uppercase font-bold mb-1">Previsão de Entrega</p>
            <p className="text-xl font-bold text-blue-400">26/03/2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}