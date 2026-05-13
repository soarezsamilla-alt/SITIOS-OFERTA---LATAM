
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const bonuses = [
  {
    id: 'bonus-construction',
    badge: 'BÔNUS 01',
    title: 'Pack de Construções Rurais',
    desc: '10 plantas prontas de galinheiros, pocilgas, estábulos e tanques com medidas e materiais.',
    oldPrice: 'R$ 49,90'
  },
  {
    id: 'bonus-roi',
    badge: 'BÔNUS 02',
    title: 'Calculadora de ROI Produtivo',
    desc: 'Calculadora editável que mostra o retorno financeiro estimado de cada zona da sua fazenda.',
    oldPrice: 'R$ 49,90'
  },
  {
    id: 'bonus-plants',
    badge: 'BÔNUS 03',
    title: 'Guia de Plantas Companheiras',
    desc: 'Aprenda o que plantar junto para aumentar a produtividade naturalmente. Pares ideais.',
    oldPrice: 'R$ 49,90'
  },
  {
    id: 'bonus-solar',
    badge: 'BÔNUS 04',
    title: 'Manual de Energia Solar Rural',
    desc: 'Dimensione sistemas solares para casas rurais, poços e irrigação. Cálculos passo a passo.',
    oldPrice: 'R$ 49,90'
  }
];

export default function Bonus() {
  return (
    <section className="py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Você Produtor <span className="text-primary italic">Merece Ainda Mais</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quem garantir o Plano Pro leva também estes 4 bônus estratégicos que complementam os +100 projetos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bonuses.map((bonus, idx) => {
            const imgData = PlaceHolderImages.find(img => img.id === bonus.id);
            return (
              <div key={idx} className="bg-[#1C1917] rounded-2xl overflow-hidden shadow-2xl hover:translate-y-[-8px] transition-transform duration-300 border border-primary/20">
                <div className="bg-primary text-secondary px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-center">
                  {bonus.badge}
                </div>
                <div className="relative h-80 bg-white/5">
                  {imgData && (
                    <Image
                      src={imgData.imageUrl}
                      alt={bonus.title}
                      fill
                      className="object-contain p-4"
                      data-ai-hint={imgData.imageHint}
                    />
                  )}
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-3 text-white">{bonus.title}</h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">{bonus.desc}</p>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className="text-white/30 line-through text-xs">{bonus.oldPrice}</span>
                    <span className="text-primary font-bold text-2xl tracking-tight">GRÁTIS</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
