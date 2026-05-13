
'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const testimonialIds = [
  'testimonial-1',
  'testimonial-2',
  'testimonial-3',
  'testimonial-4',
  'testimonial-5',
  'testimonial-6'
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Quem Comprou, <span className="text-primary italic">Recomenda</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que produtores rurais que já estão utilizando dizem sobre o material através de resultados reais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonialIds.map((id, idx) => {
            const imageData = PlaceHolderImages.find(img => img.id === id);
            if (!imageData) return null;
            
            return (
              <div key={idx} className="relative aspect-[3/4] md:aspect-[2/3] rounded-2xl overflow-hidden shadow-xl border border-border/30 hover:scale-[1.02] transition-transform duration-300 bg-secondary/5">
                <Image
                  src={imageData.imageUrl}
                  alt={imageData.description}
                  fill
                  className="object-contain p-1"
                  data-ai-hint={imageData.imageHint}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
