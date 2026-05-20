'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function SamplesCarousel() {
  const samples = PlaceHolderImages.filter(img => img.id.startsWith('sample-'));
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 bg-accent/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground font-headline">
            Una Muestra del Material que Vas a <span className="text-primary italic">Recibir</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Mira a continuación ejemplos reales de las páginas que recibirás. Cada proyecto entregado con un estándar editorial profesional.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative px-8">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {samples.map((sample, idx) => (
                <CarouselItem key={idx} className="pl-4 basis-full sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <div className="relative aspect-[9/16] w-full transition-all duration-500 hover:scale-[1.05] flex items-center justify-center">
                    <Image
                      src={sample.imageUrl}
                      alt={sample.description}
                      fill
                      className="rounded-xl object-contain pointer-events-none"
                      data-ai-hint={sample.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10">
              <CarouselPrevious className="static translate-y-0 text-primary border-primary/30 hover:bg-primary/10 h-10 w-10 md:h-12 md:w-12" />
            </div>
            <div className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10">
              <CarouselNext className="static translate-y-0 text-primary border-primary/30 hover:bg-primary/10 h-10 w-10 md:h-12 md:w-12" />
            </div>
          </Carousel>
        </div>

        <div className="mt-16 bg-secondary/20 py-8 px-8 md:px-12 rounded-2xl border-l-[6px] border-l-primary max-w-4xl mx-auto shadow-xl">
          <div className="flex items-start gap-4">
            <div className="mt-1 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="m9 18 6-6-6-6"/></svg>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-headline uppercase tracking-tight">Nota Importante</h4>
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-body">
                Todos los <strong>+100 proyectos</strong> siguen el mismo estándar editorial premium que ves en las muestras de arriba — con medidas visibles, zonas identificadas y diseños profesionales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
