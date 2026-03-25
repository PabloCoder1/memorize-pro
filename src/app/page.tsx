import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing"; // Importe aqui

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col">
      <Hero />
      <HowItWorks />
      <Pricing /> {/* Adicione aqui */}
    </main>
  );
}