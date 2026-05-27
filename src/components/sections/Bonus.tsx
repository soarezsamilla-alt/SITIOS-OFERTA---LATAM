
'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const bonuses = [
  {
    id: 'bonus-construction',
    badge: 'BONO 01',
    title: 'Pack de Construcciones Rurales',
    desc: '10 planos listos de gallineros, porquerizas, establos y tanques con medidas y materiales.',
    oldPrice: '$17 USD'
  },
  {
    id: 'bonus-roi',
    badge: 'BONO 02',
    title: 'Calculadora de ROI Productivo',
    desc: 'Calculadora editable que muestra el retorno financiero estimado de cada zona de tu finca.',
    oldPrice: '$17 USD'
  },
  {
    id: 'bonus-plants',
    badge: 'BONO 03',
    title: 'Guía de Plantas Companheiras',
    desc: 'Aprende qué plantar junto para aumentar la productivity naturalmente. Pares ideales.',
    oldPrice: '$17 USD'
  },
  {
    id: 'bonus-solar',
    badge: 'BONO 04',
    title: 'Manual de Energía Solar Rural',
    desc: 'Dimensiona sistemas solares para casas rurales, pozos e irrigación. Cálculos paso a paso.',
    oldPrice: '$17 USD'
  },
  {
    id: 'bonus-special',
    badge: 'BONO 05',
    title: 'Plan Maestro de Finca 2026',
    desc: 'Un diseño premium exclusivo para máxima rentabilidad y aprovechamiento de espacios.',
    oldPrice: '$17 USD'
  }
];

export default function Bonus() {
  return (
    <section className="py-12 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tú, Productor, <span className="text-primary italic">Mereces Aún Más</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tu acceso incluye además estos 5 bonos estratégicos que complementan los +100 proyectos, totalmente GRATIS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {bonuses.map((bonus, idx) => {
            const imgData = PlaceHolderImages.find(img => img.id === bonus.id);
            return (
              <div key={idx} className="bg-[#1C1917] rounded-2xl overflow-hidden shadow-2xl hover:translate-y-[-8px] transition-transform duration-300 border border-primary/20 flex flex-col">
                <div className="bg-primary text-secondary px-4 py-1.5 text-[9px] font-bold tracking-[0.2em] text-center uppercase">
                  {bonus.badge}
                </div>
                <div className="relative h-80 bg-white/5 p-4 flex items-center justify-center">
                  {imgData && (
                    <div 
                      className="relative w-full h-full animate-soft-float"
                      style={{ animationDelay: `${idx * 0.3}s` }}
                    >
                      <Image
                        src={imgData.imageUrl}
                        alt={bonus.title}
                        fill
                        unoptimized
                        className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                        data-ai-hint={imgData.imageHint}
                      />
                    </div>
                  )}
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white leading-tight">{bonus.title}</h3>
                    <p className="text-white/60 text-xs mb-4 leading-relaxed line-clamp-3">{bonus.desc}</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-0.5 mt-2">
                    <span className="text-white/30 line-through text-[10px]">{bonus.oldPrice}</span>
                    <span className="text-primary font-bold text-sm tracking-tight">GRATIS</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
