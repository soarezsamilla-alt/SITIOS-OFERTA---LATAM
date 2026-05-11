
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const mockup = PlaceHolderImages.find(img => img.id === 'hero-mockup');
  const seal = PlaceHolderImages.find(img => img.id === 'guarantee-seal');

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 dark-green-gradient">
      <div className="container mx-auto px-4 text-center">
        <p className="font-headline italic text-primary text-lg md:text-xl tracking-widest mb-6">
          Edição Premium 2026
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight max-w-5xl mx-auto">
          +100 Projetos de Fazendas Produtivas <span className="text-primary italic">que transformam sua terra ociosa em fonte de renda mensal</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          A biblioteca mais completa de projetos rurais da América Latina com +100 plantas profissionais com medidas reais, divisões estratégicas e designs prontos para executar.
        </p>

        {seal && (
          <div className="mb-12 flex justify-center">
            <Image
              src={seal.imageUrl}
              alt="Selo de Garantia"
              width={180}
              height={180}
              className="object-contain"
              data-ai-hint={seal.imageHint}
            />
          </div>
        )}

        {mockup && (
          <div className="relative max-w-3xl mx-auto mb-12 group">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <Image
              src={mockup.imageUrl}
              alt={mockup.description}
              width={800}
              height={500}
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
            className="gold-gradient text-background hover:scale-105 transition-transform duration-300 font-bold py-8 px-12 text-xl md:text-2xl rounded-xl shadow-[0_10px_40px_rgba(201,169,97,0.4)]"
          >
            <a href="#pricing">GARANTIR MEU ACESSO</a>
          </Button>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">
            ★ ACESSO IMEDIATO · 7 DIAS DE GARANTIA ★
          </p>
        </div>
      </div>
    </section>
  );
}
