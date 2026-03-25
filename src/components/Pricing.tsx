import { Check } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    price: "150",
    description: "Perfeito para quem quer reviver memórias especiais",
    colorClass: "bg-brand-blue",
    buttonClass: "bg-brand-blue hover:opacity-90",
    features: [
      "Até 10 fotos em 4K",
      "Restauração com IA",
      "Colorização automática",
      "Remoção de manchas e riscos",
      "2 Vídeos Live Motion",
      "Entrega em até 48h",
      "Suporte por e-mail",
    ],
    highlight: false,
  },
  {
    name: "Master Pro",
    price: "200",
    description: "A experiência completa com fotos que ganham vida",
    colorClass: "bg-brand-gradient",
    buttonClass: "bg-brand-gradient hover:opacity-90",
    features: [
      "Até 20 fotos em 4K",
      "Restauração premium com IA",
      "Colorização avançada",
      "5 Vídeos Live Motion",
      "Efeitos cinematográficos",
      "Trilha sonora personalizada",
      "Entrega em até 24h",
      "Suporte prioritário",
    ],
    highlight: true,
  },
];

export function Pricing() {
  return (
    <section id="planos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Escolha seu Plano</h2>
          <p className="text-gray-500 text-lg font-medium">
            Investimento único por projeto. Sem mensalidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col"
            >
              {/* Header do Card */}
              <div className={`p-8 text-white ${plan.colorClass}`}>
                {plan.highlight && (
                  <span className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-[10px] font-bold uppercase py-1 px-3 rounded-full shadow-sm">
                    🔥 Mais Popular
                  </span>
                )}
                <div className="flex items-center gap-2 mb-2">
                   <span className="text-2xl">✨</span>
                   <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>
                <p className="text-white/80 text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">R$ {plan.price}</span>
                  <span className="text-sm opacity-80">por projeto</span>
                </div>
              </div>

              {/* Corpo do Card */}
              <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-gray-600 text-sm">
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-all shadow-lg ${plan.buttonClass}`}
                >
                  Começar Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}