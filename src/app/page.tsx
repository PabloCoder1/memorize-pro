import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks"; // Importe aqui

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col">
      <Hero />
      <HowItWorks /> {/* Adicione aqui */}
    </main>
  );
}