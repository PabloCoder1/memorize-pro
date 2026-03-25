"use client"; // Adicione isso no topo!

import Link from "next/link";
import { LayoutDashboard, ImagePlus, LogOut } from "lucide-react";
import { UserButton, SignOutButton } from "@clerk/nextjs"; // Importe o Clerk

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-800 p-6 hidden md:flex flex-col">
        <div className="text-xl font-bold mb-10 text-blue-400">Memorize Pro</div>
        
        <nav className="space-y-2 flex-1">
          <Link href="/dashboard" className="flex items-center gap-3 p-3 bg-blue-600/10 text-blue-400 rounded-lg">
            <LayoutDashboard className="w-5 h-5" />
            Meus Pedidos
          </Link>
          <Link href="/dashboard/novo-pedido" className="flex items-center gap-3 p-3 text-gray-400 hover:bg-gray-900 rounded-lg transition-colors">
            <ImagePlus className="w-5 h-5" />
            Enviar Fotos
          </Link>
        </nav>

        {/* Perfil e Sair integrados com o Clerk */}
        <div className="border-t border-gray-800 pt-6 space-y-4">
          <div className="flex items-center gap-3 px-2">
            <UserButton />
            <span className="text-sm font-medium text-gray-300">Minha Conta</span>
          </div>
          
          <SignOutButton>
            <button className="flex items-center gap-3 p-3 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors w-full text-left">
              <LogOut className="w-5 h-5" />
              Sair da conta
            </button>
          </SignOutButton>
        </div>
      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}