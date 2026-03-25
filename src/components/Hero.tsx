import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Badge de Posicionamento Premium */}
        <span className="mb-6 inline-block rounded-full bg-blue-900/50 px-4 py-1.5 text-sm font-semibold text-blue-300 border border-blue-700/50">
          Serviço Premium de Restauração Digital
        </span>

        {/* Headline Principal (A Promessa) */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Transforme uma lembrança esquecida em <span className="text-blue-400">algo eterno.</span>
        </h1>

        {/* Subheadline (Explicação emocional e prática) */}
        <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mb-10">
          Restauramos, colorizamos e damos nova vida às suas fotos antigas. 
          Essa pode ser a sua melhor chance de recuperar aquela memória especial ou surpreender alguém que você ama.
        </p>

        {/* Call to Action (Botão de Conversão) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link 
            href="#planos" 
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-lg transition-all duration-300 shadow-lg shadow-blue-500/30"
          >
            Quero Restaurar Minhas Fotos
          </Link>
          <Link 
            href="#como-funciona" 
            className="w-full sm:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold rounded-lg text-lg transition-all duration-300 border border-gray-700"
          >
            Como Funciona?
          </Link>
        </div>

        {/* Placeholder para a Imagem de Antes/Depois (Faremos depois) */}
        <div className="mt-16 w-full max-w-4xl h-64 md:h-96 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center shadow-2xl overflow-hidden">
          <span className="text-gray-500 font-medium">
            [Aqui vai entrar o Slider interativo de Antes e Depois da Foto]
          </span>
        </div>

      </div>
    </section>
  );
}