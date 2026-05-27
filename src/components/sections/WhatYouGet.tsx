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
  }
];

export default function WhatYouGet() {
  const bonusImage = PlaceHolderImages.find(img => img.id === 'product-mockup-detailed');

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-headline">
            Lo Que Recibirás <span className="text-primary italic">Hoy</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto font-body leading-relaxed">
            +100 proyectos organizados en 4 grandes categorías para que encuentres exactamente lo que necesitas, sea cual sea tu tamaño, vocación o región climática.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[30px] mb-12">
          {categories.map((item, idx) => {
            return (
              <div 
                key={idx}
                className="bg-card border-t-4 border-t-[#C9A961] rounded-[12px] p-6 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-300 min-h-[220px] justify-center"
              >
                <div className="text-[64px] md:text-[72px] font-bold font-headline text-[#C9A961] leading-none mb-2">
                  {item.number}
                </div>
                
                <h3 className="text-[20px] font-bold font-headline text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-[14px] font-body text-white/60 leading-[1.5]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Card de Bônus Exclusivos */}
        <div className="max-w-5xl mx-auto bg-secondary/30 border-2 border-primary/30 rounded-[24px] overflow-hidden flex flex-col md:flex-row items-center gap-6 p-8 shadow-2xl transition-all duration-300 hover:border-primary/60">
           <div className="flex-1 text-center md:text-left">
             <div className="inline-block bg-primary text-secondary text-[10px] font-bold tracking-[0.2em] px-3 py-1 rounded-full mb-4 uppercase">
               Regalo de Lanzamiento
             </div>
             <h3 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4 leading-tight">
               También recibirás <span className="text-primary italic">4 Bônus Exclusivos</span>
             </h3>
             <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
               Como complemento perfecto a tus proyectos, incluimos hoy mismo: Pack de Construcciones, Calculadora de ROI, Guía de Plantas y Manual Solar. Todo GRATIS.
             </p>
           </div>
           {bonusImage && (
             <div className="w-full md:w-1/3 relative aspect-video md:aspect-square">
               <Image 
                 src={bonusImage.imageUrl}
                 alt={bonusImage.description}
                 fill
                 className="object-contain animate-soft-float"
                 data-ai-hint={bonusImage.imageHint}
               />
             </div>
           )}
        </div>
      </div>
    </section>
  );
}
