"use client";

import { useState } from "react";

export function ImageComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <section id="exemplos" className="py-24 bg-white px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Veja a Transformação</h2>
        <p className="text-gray-500 mb-12">Arraste o controle para comparar antes e depois</p>

        <div 
          className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none border border-gray-100"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* Foto "Depois" (Fica no fundo) */}
          <img 
            src="/depois.jpg" 
            alt="Depois da restauração"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Foto "Antes" (Fica por cima com recorte dinâmico) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src="/antes.jpg" 
              alt="Antes da restauração"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Linha Divisória e Bolinha do Slider */}
          <div 
            className="absolute inset-y-0 w-1 bg-white shadow-lg pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-gray-100">
               <span className="text-gray-400 text-xs font-bold">↔</span>
            </div>
          </div>

          {/* Badges de Identificação */}
          <span className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-bold uppercase">Antes</span>
          <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold uppercase">Depois</span>
        </div>
      </div>
    </section>
  );
}