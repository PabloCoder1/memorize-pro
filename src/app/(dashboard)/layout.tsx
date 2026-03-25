import Link from "next/link";
import { LayoutDashboard, ImagePlus, Settings, LogOut } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      {/* Sidebar (Desktop) */}
      <aside className="w-64 border-r border-gray-800 p-6 hidden md:block">
        <div className="text-xl font-bold mb-10 text-blue-400">Memorize Pro</div>
        
        <nav className="space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 p-3 bg-blue-600/10 text-blue-400 rounded-lg">
            <LayoutDashboard className="w-5 h-5" />
            Meus Pedidos
          </Link>
          <Link href="/dashboard/novo-pedido" className="flex items-center gap-3 p-3 text-gray-400 hover:bg-gray-900 rounded-lg transition-colors">
            <ImagePlus className="w-5 h-5" />
            Enviar Fotos
          </Link>
        </nav>

        <div className="absolute bottom-10">
          <button className="flex items-center gap-3 p-3 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors w-full">
            <LogOut className="w-5 h-5" />
            Sair
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}