'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const categories = [
  {
    number: '50',
    title: 'Por Tamanho de Terreno',
    description: 'Projetos dimensionados para 0,5ha, 1ha, 2ha, 3ha e 5ha — 10 projetos para cada tamanho.',
    imgId: 'benefit-2'
  },
  {
    number: '35',
    title: 'Por Vocação Produtiva',
    description: 'Café, hortifruti, piscicultura, pecuária leiteira, agrofloresta, avicultura, suínos e apicultura.',
    imgId: 'benefit-3'
  },
  {
    number: '20',
    title: 'Por Região Climática',
    description: 'Tropical Úmido, Savana Tropical, Zona Semiárida, Zona Temperada e Zona Andina — adaptados ao seu clima e país.',
    imgId: 'benefit-4'
  },
  {
    number: '10',
    title: 'Projetos Especiais',
    description: 'Orgânico certificado, permacultura, agroturismo, agroindústria caseira, energia renovável e mais.',
    imgId: 'benefit-9'
  }
];

export default function WhatYouGet() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-headline">
            O Que Você Vai <span className="text-primary italic">Receber Hoje</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto font-body leading-relaxed">
            +100 projetos organizados em 4 grandes categorias para você encontrar exatamente o que precisa, seja qual for o seu tamanho, vocação ou região climática.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[30px]">
          {categories.map((item, idx) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.imgId);
            return (
              <div 
                key={idx}
                className="bg-card border-t-4 border-t-[#C9A961] rounded-[12px] p-10 md:p-8 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-[64px] md:text-[80px] font-bold font-headline text-[#C9A961] leading-none mb-4">
                  {item.number}
                </div>
                
                <h3 className="text-[22px] font-bold font-headline text-[#1B4D2E] mb-4 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-[15px] font-body text-[#6B6B6B] leading-[1.6] mb-8">
                  {item.description}
                </p>

                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mt-auto">
                  {imageData && (
                    <Image
                      src={imageData.imageUrl}
                      alt={imageData.description}
                      fill
                      className="object-cover"
                      data-ai-hint={imageData.imageHint}
                      sizes="(max-width: 600px) 100vw, (max-width: 968px) 50vw, 25vw"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
