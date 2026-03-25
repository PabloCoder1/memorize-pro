import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ImageComparison } from "@/components/ImageComparison";
import { LiveMotion } from "@/components/LiveMotion"; // Importe aqui
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Hero />
      <HowItWorks />
      <ImageComparison />
      <LiveMotion /> {/* A mágica do gradiente entra aqui */}
      <Pricing />
      
      {/* Rodapé simples seguindo seu design */}
      <footer className="py-12 bg-gray-950 text-white text-center">
        <div className="flex items-center justify-center gap-2 font-bold text-xl text-brand-purple mb-4">
          ✨ Memorize Pro
        </div>
        <p className="text-gray-500 text-sm">
          Revivendo memórias através da inteligência artificial
        </p>
        <p className="text-gray-600 text-xs mt-8">
          © 2026 Memorize Pro. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}