import { Video, Box, Music, Share2 } from "lucide-react";

export function LiveMotion() {
  return (
    <section className="bg-brand-gradient py-24 px-4 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-xl font-bold uppercase tracking-wider">
            <Video /> Live Motion
          </div>
          <h2 className="text-5xl font-extrabold leading-tight">Fotos que Ganham Vida</h2>
          <p className="text-lg opacity-90 max-w-lg">
            Exclusivo do Plano Master Pro: Suas fotos se transformam em vídeos cinematográficos 
            com movimentos suaves, zoom dinâmico e efeitos profissionais.
          </p>
          
          <ul className="space-y-4">
            {[
              "Movimentos cinematográficos naturais",
              "Efeitos de profundidade 3D",
              "Trilha sonora emocional",
              "Perfeito para redes sociais"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/10 rounded-3xl p-4 backdrop-blur-sm border border-white/20 shadow-2xl">
          <img src="/ai-chip-placeholder.jpg" alt="IA Visual" className="rounded-2xl w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}