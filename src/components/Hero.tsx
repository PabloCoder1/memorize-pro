import { auth } from "@clerk/nextjs/server"; // Importação mais estável para servidor
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export async function Hero() {
  // Verificamos se existe um usuário logado direto no servidor
  const { userId } = await auth();

  return (
    <section className="bg-white text-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Navbar */}
        <nav className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-2 font-bold text-2xl text-brand-purple">
            <span className="text-3xl">✨</span> Memorize Pro
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#como-funciona" className="hover:text-brand-purple transition">Como Funciona</a>
            <a href="#exemplos" className="hover:text-brand-purple transition">Exemplos</a>
            <a href="#planos" className="hover:text-brand-purple transition">Planos</a>
            
            {/* Lógica de Login: Se não houver userId, mostra 'Entrar' */}
            {!userId ? (
              <Link href="/dashboard" className="border border-gray-200 px-6 py-2 rounded-lg hover:bg-gray-50 transition">
                Entrar
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/dashboard" className="text-brand-purple font-semibold">Painel</Link>
                <UserButton />
              </div>
            )}
          </div>
        </nav>

        {/* Conteúdo Hero (Mantendo seu design do Figma) */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Traga o Passado para o Presente
            </span>
          </h1>
          
          <p className="text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
            Transforme fotos antigas, desgastadas e sem cor em memórias vivas 
            com nitidez 4K e movimentos cinematográficos usando IA generativa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="#planos" className="bg-brand-gradient text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition">
              Ver Planos
            </Link>
            <button className="border border-gray-200 text-gray-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition">
              Ver Exemplos
            </button>
          </div>

          <div className="w-full max-w-5xl aspect-video bg-gray-100 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative">
             <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                <p className="text-gray-400 font-medium">Sua Imagem de Restauração Aqui</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}