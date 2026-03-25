import { Check } from "lucide-react";

const plans = [
  {
    name: "Álbum Essencial",
    price: "150",
    description: "Ideal para resgatar momentos específicos em família.",
    features: [
      "10 Fotos Restauradas",
      "Qualidade HD",
      "Colorização Profissional",
      "2 Vídeos Animados (Slideshow)",
      "Entrega em até 48h",
    ],
    buttonText: "Começar Álbum Essencial",
    highlight: false,
  },
  {
    name: "Álbum Memorize Pro",
    price: "200",
    description: "O melhor custo-benefício para quem tem muitas memórias.",
    features: [
      "20 Fotos Restauradas",
      "Qualidade Ultra HD",
      "Colorização Profissional",
      "5 Vídeos Animados (Slideshow)",
      "Suporte Prioritário",
      "Entrega em até 24h",
    ],
    buttonText: "Começar Álbum Premium",
    highlight: true,
  },
];

export function Pricing() {
  return (
    <section id="planos" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Escolha o plano ideal para suas memórias
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Invista hoje na preservação da sua história. Preços únicos, sem assinaturas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border ${
                plan.highlight
                  ? "bg-blue-600/10 border-blue-500 shadow-2xl shadow-blue-500/20"
                  : "bg-gray-800/50 border-gray-700"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  Mais Popular
                </span>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-extrabold text-white">R$ {plan.price}</span>
                <span className="text-gray-400 ml-2">/único</span>
              </div>

              <ul className="space-y-4 mb-10 text-gray-300">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                  plan.highlight
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}