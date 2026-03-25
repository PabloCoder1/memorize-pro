import { Wand2, Clock, Heart } from "lucide-react";

const steps = [
  {
    title: "1. Escolha seu Plano",
    desc: "Selecione entre Essencial (fotos 4K) ou Master Pro (fotos + vídeos em movimento)",
    icon: Wand2,
    color: "bg-blue-400"
  },
  {
    title: "2. Envie suas Fotos",
    desc: "Faça upload das suas memórias no seu painel exclusivo. Aceitamos qualquer qualidade.",
    icon: Clock,
    color: "bg-brand-purple"
  },
  {
    title: "3. Receba a Mágica",
    desc: "Em até 7 dias, suas fotos voltam restauradas em 4K, coloridas e prontas para download.",
    icon: Heart,
    color: "bg-brand-pink"
  }
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
        <p className="text-gray-500 mb-16">Processo simples e profissional em 3 passos</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white mb-6 shadow-lg ${step.color}`}>
                <step.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}