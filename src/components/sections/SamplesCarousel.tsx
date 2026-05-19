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
      const scrollAmount = 600;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Uma Amostra do Material que Você vai <span className="text-primary italic">Receber</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja abaixo exemplos reais das páginas que você vai receber. Cada projeto entregue com qualidade editorial profissional.
          </p>
        </div>

        <div className="relative group">
          <div 
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto carousel-hide-scrollbar snap-x snap-mandatory py-4"
          >
            {samples.map((sample, idx) => (
              <div key={idx} className="flex-none w-[320px] md:w-[600px] snap-start">
                <div className="relative aspect-[16/11] w-full transition-all duration-500 hover:scale-[1.02]">
                  <Image
                    src={sample.imageUrl}
                    alt={sample.description}
                    fill
                    className="object-contain"
                    data-ai-hint={sample.imageHint}
                  />
                </div>
              </div>
            ))}
          </div>

          <Button 
            variant="outline" 
            size="icon" 
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur shadow-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 border-primary/30"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </Button>

          <Button 
            variant="outline" 
            size="icon" 
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur shadow-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 border-primary/30"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </Button>
        </div>

        <div className="mt-16 bg-card py-6 px-10 rounded-2xl border-l-8 border-l-primary max-w-4xl mx-auto shadow-2xl">
          <h4 className="text-2xl font-bold text-foreground mb-2 font-headline">Observação Importante</h4>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Todos os +100 projetos seguem o mesmo padrão editorial premium que você vê nas amostras acima, com medidas visíveis, zonas identificadas e designs profissionais.
          </p>
        </div>
      </div>
    </section>
  );
}
