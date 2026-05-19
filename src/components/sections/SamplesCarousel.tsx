
'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SamplesCarousel() {
  const samples = PlaceHolderImages.filter(img => img.id.startsWith('sample-'));
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 bg-accent/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground font-headline">
            Uma Amostra do Material que Você vai <span className="text-primary italic">Receber</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Veja abaixo exemplos reais das páginas que você vai receber. Cada projeto entregue com padrão editorial profissional.
          </p>
        </div>

        <div className="relative max-w-[1200px] mx-auto">
          <div 
            ref={carouselRef}
            className="flex gap-4 md:gap-6 overflow-x-auto carousel-hide-scrollbar snap-x snap-mandatory py-4"
          >
            {samples.map((sample, idx) => (
              <div key={idx} className="flex-none w-[90vw] md:w-[850px] snap-center">
                <div className="relative aspect-[16/12] w-full transition-all duration-500 hover:scale-[1.01] shadow-2xl rounded-sm overflow-hidden bg-black/20">
                  <Image
                    src={sample.imageUrl}
                    alt={sample.description}
                    fill
                    className="object-contain"
                    data-ai-hint={sample.imageHint}
                    sizes="(max-width: 768px) 90vw, 850px"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Better positioned and more visible */}
          <div className="absolute top-1/2 -left-2 md:-left-12 -translate-y-1/2 z-20">
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-background/90 backdrop-blur shadow-2xl rounded-full border-primary/40 h-10 w-10 md:h-14 md:w-14 hover:bg-primary/10 transition-colors"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            </Button>
          </div>

          <div className="absolute top-1/2 -right-2 md:-right-12 -translate-y-1/2 z-20">
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-background/90 backdrop-blur shadow-2xl rounded-full border-primary/40 h-10 w-10 md:h-14 md:w-14 hover:bg-primary/10 transition-colors"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            </Button>
          </div>
        </div>

        <div className="mt-16 bg-secondary/20 py-8 px-8 md:px-12 rounded-2xl border-l-[6px] border-l-primary max-w-4xl mx-auto shadow-xl">
          <div className="flex items-start gap-4">
            <div className="mt-1 text-primary">
              <ChevronRight className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-headline uppercase tracking-tight">Observação Importante</h4>
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-body">
                Todos os <strong>+100 projetos</strong> seguem o mesmo padrão editorial premium que você vê nas amostras acima — com medidas visíveis, zonas identificadas e layouts profissionais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
