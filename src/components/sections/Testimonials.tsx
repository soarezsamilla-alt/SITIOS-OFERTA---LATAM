
'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonialIds = [
  'testimonial-1',
  'testimonial-2',
  'testimonial-3',
  'testimonial-4',
  'testimonial-5',
  'testimonial-6'
];

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Pausa de 4 segundos entre as transições

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 bg-background overflow-hidden border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Quem Comprou, <span className="text-primary italic">Recomenda</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que produtores rurais que já estão utilizando dizem sobre o material através de resultados reais e feedback direto.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-8">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonialIds.map((id, idx) => {
                const imageData = PlaceHolderImages.find(img => img.id === id);
                if (!imageData) return null;
                
                return (
                  <CarouselItem key={idx} className="pl-4 basis-full sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="relative aspect-[9/16] w-full transition-all duration-500 hover:scale-[1.05] flex items-center justify-center">
                      <Image
                        src={imageData.imageUrl}
                        alt={imageData.description}
                        fill
                        className="rounded-xl object-contain pointer-events-none"
                        data-ai-hint={imageData.imageHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
