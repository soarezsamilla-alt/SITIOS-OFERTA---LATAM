'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function ProductOverview() {
  const mockup = PlaceHolderImages.find(img => img.id === 'problems-mockup');

  return (
    <section className="pt-8 pb-0 bg-background overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
          Conoce el Material <span className="text-primary italic">+100 Proyectos</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-2">
          No es un curso. No es un manual teórico. Es una biblioteca visual completa de proyectos listos para que elijas, imprimas y ejecutes.
        </p>

        {mockup && (
          <div className="relative max-w-3xl mx-auto group">
            <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <Image
              src={mockup.imageUrl}
              alt={mockup.description}
              width={800}
              height={450}
              className="relative drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] mx-auto animate-soft-float"
              data-ai-hint={mockup.imageHint}
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
