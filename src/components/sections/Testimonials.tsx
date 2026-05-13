
'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const testimonialIds = [
  'testimonial-1',
  'testimonial-2',
  'testimonial-3',
  'testimonial-4',
  'testimonial-5',
  'testimonial-6'
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      if (!isPaused) {
        scrollPos += 0.8; // Velocidade suave da rolagem
        
        // Quando chegar na metade (fim da primeira lista duplicada), reseta suavemente
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0;
        }
        
        scrollContainer.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicamos a lista para criar o efeito de loop infinito perfeito
  const doubledTestimonials = [...testimonialIds, ...testimonialIds, ...testimonialIds];

  return (
    <section className="py-24 bg-background overflow-hidden border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Quem Comprou, <span className="text-primary italic">Recomenda</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que produtores rurais que já estão utilizando dizem sobre o material através de resultados reais e feedback direto.
          </p>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden whitespace-nowrap py-4 cursor-default select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {doubledTestimonials.map((id, idx) => {
          const imageData = PlaceHolderImages.find(img => img.id === id);
          if (!imageData) return null;
          
          return (
            <div key={idx} className="inline-block flex-none w-[260px] md:w-[320px] transition-transform duration-500 hover:scale-105">
              <div className="relative aspect-[9/16] w-full">
                <Image
                  src={imageData.imageUrl}
                  alt={imageData.description}
                  fill
                  className="rounded-2xl object-contain pointer-events-none shadow-lg"
                  data-ai-hint={imageData.imageHint}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
