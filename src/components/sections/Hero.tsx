import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const mockup = PlaceHolderImages.find(img => img.id === 'hero-mockup');

  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:pt-12 md:pb-20 dark-green-gradient">
      <div className="container mx-auto px-4 text-center">
        <p className="font-headline italic text-primary text-lg md:text-xl tracking-widest mb-4 animate-soft-float">
          Edição Premium 2026
        </p>
        
        <h1 className="text-[27px] font-bold text-white mb-4 leading-tight tracking-tight max-w-5xl mx-auto">
          <span className="text-primary italic">+100 Projetos de Fazendas Produtivas</span> que transformam sua terra ociosa em fonte de renda mensal
        </h1>
        
        <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto mb-6 leading-relaxed font-light">
          A biblioteca mais completa de projetos rurais da América Latina com +100 plantas profissionais com medidas reais, divisões estratégicas e designs prontos para executar.
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
            className="gold-gradient text-background hover:scale-105 transition-transform duration-300 font-bold py-6 px-12 text-xl md:text-2xl rounded-xl shadow-[0_10px_40px_rgba(201,169,97,0.4)]"
          >
            <a href="#pricing">GARANTIR MEU ACESSO</a>
          </Button>
          <p className="text-primary text-[10px] font-semibold tracking-widest uppercase">
            ★ ACESSO IMEDIATO · 7 DIAS DE GARANTIA ★
          </p>
        </div>
      </div>
    </section>
  );
}
