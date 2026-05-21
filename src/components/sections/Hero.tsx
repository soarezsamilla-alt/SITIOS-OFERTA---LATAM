import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const mockup = PlaceHolderImages.find(img => img.id === 'hero-mockup');

  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:pt-12 md:pb-20 dark-green-gradient">
      <div className="container mx-auto px-4 text-center">
        <p className="font-headline italic text-primary text-lg md:text-xl tracking-widest mb-4 animate-soft-float">
          Edición Premium 2026
        </p>
        
        <h1 className="text-[34px] font-bold text-white mb-4 leading-tight tracking-tight max-w-5xl mx-auto">
          <span className="text-primary italic">+100 Proyectos de Fincas Productivas</span> que transforman tu tierra ociosa en una fuente de ingresos mensuales
        </h1>
        
        <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto mb-6 leading-relaxed font-light">
          La biblioteca más completa de proyectos rurales de América Latina con +100 planos profesionales con medidas reales, divisiones estratégicas y diseños listos para ejecutar.
        </p>

        {mockup && (
          <div className="relative max-w-4xl mx-auto mb-6 group">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <Image
              src={mockup.imageUrl}
              alt={mockup.description}
              width={1000}
              height={625}
              className="relative drop-shadow-2xl mx-auto"
              data-ai-hint={mockup.imageHint}
              priority
            />
          </div>
        )}

        <div className="flex flex-col items-center gap-4">
          <Button 
            asChild
            size="lg"
            className="gold-gradient text-background hover:scale-105 transition-transform duration-300 font-bold py-6 px-12 text-xl md:text-2xl rounded-xl shadow-[0_10px_40px_rgba(201,169,97,0.4)] shimmer-btn animate-pulse-gold"
          >
            <a href="#pricing">¡ASEGURAR MI ACCESO YA!</a>
          </Button>
          <p className="text-primary text-[10px] font-semibold tracking-widest uppercase">
            ★ ACCESO INMEDIATO · 7 DÍAS DE GARANTÍA ★
          </p>
        </div>
      </div>
    </section>
  );
}
