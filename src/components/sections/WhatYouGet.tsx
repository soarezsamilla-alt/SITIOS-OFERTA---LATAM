'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const categories = [
  {
    number: '50',
    title: 'Por Tamaño de Terreno',
    description: 'Proyectos dimensionados para 0,5ha, 1ha, 2ha, 3ha y 5ha, con 10 proyectos por cada tamaño.',
  },
  {
    number: '35',
    title: 'Por Vocación Productiva',
    description: 'Café, frutas y hortalizas, piscicultura, ganadería lechera, agroforestería, avicultura, cerdos y apicultura.',
  },
  {
    number: '20',
    title: 'Por Región Climática',
    description: 'Proyectos dimensionados para: Tropical Húmedo, Sabana Tropical, Zona Semiárida, Zona Templada y Zona Andina, adaptados a tu clima y país.',
  },
  {
    number: '10',
    title: 'Proyectos Especiales',
    description: 'Orgánico certificado, permacultura, agroturismo, agroindustria casera, energía renovable y más.',
  },
  {
    number: '04',
    title: 'Bonos Exclusivos',
    description: 'Recibirás además: Pack de Construcciones, Calculadora de ROI, Guía de Plantas y Manual de Energía Solar.',
  }
];

export default function WhatYouGet() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-headline">
            Lo Que Recibirás <span className="text-primary italic">Hoy</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto font-body leading-relaxed">
            +100 proyectos organizados en 5 categorías estratégicas para que encuentres exactamente lo que necesitas, sea cual sea tu tamaño, vocación o región climática.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
          {categories.map((item, idx) => {
            return (
              <div 
                key={idx}
                className="bg-card border-t-4 border-t-[#C9A961] rounded-[12px] p-6 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-300 min-h-[220px] justify-center"
              >
                <div className="text-[64px] md:text-[72px] font-bold font-headline text-[#C9A961] leading-none mb-2">
                  {item.number}
                </div>
                
                <h3 className="text-[18px] font-bold font-headline text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-[13px] font-body text-white/60 leading-[1.5]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
