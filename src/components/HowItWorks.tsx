import { Upload, Sparkles, ImageDown } from "lucide-react";

const steps = [
  {
    title: "Faça o Upload",
    description: "Envie sua foto antiga (mesmo que esteja rasgada ou sem cor) através do nosso painel seguro.",
    icon: Upload,
  },
  {
    title: "Nossa Mágica",
    description: "Nossos especialistas e IAs avançadas trabalham para recuperar cada detalhe da sua memória.",
    icon: Sparkles,
  },
  {
    title: "Receba em HD",
    description: "Em até 48h, você recebe sua foto restaurada em alta definição, pronta para imprimir ou guardar.",
    icon: ImageDown,
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sua memória nova em 3 passos simples
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Processo artesanal e tecnológico para garantir que nenhum detalhe da sua história se perca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
                <step.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}