'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const benefits = [
  { 
    val: '+100', 
    title: 'PROJETOS COMPLETOS', 
    desc: 'Plantas técnicas dimensionadas prontas pra você executar',
    imgId: 'benefit-1'
  },
  { 
    val: '0,5-5', 
    title: 'HECTARES COBERTOS', 
    desc: 'Tem projeto pro seu tamanho de terreno, não importa qual seja',
    imgId: 'benefit-2'
  },
  { 
    val: '7', 
    title: 'VOCAÇÕES PRODUTIVAS', 
    desc: 'Café, hortifruti, pecuária, piscicultura, agrofloresta e mais',
    imgId: 'benefit-3'
  },
  { 
    val: '5', 
    title: 'REGIÕES CLIMÁTICAS', 
    desc: 'Adaptados pra Tropical Úmido, Savana, Semiárido, Temperado e Andino',
    imgId: 'benefit-4'
  },
  { 
    val: '$3K', 
    title: 'ECONOMIZADOS', 
    desc: 'Equivalente ao que cobraria um engenheiro agrônomo particular',
    imgId: 'benefit-5'
  },
  { 
    val: '$2.8K', 
    title: 'RENDA MENSAL POSSÍVEL', 
    desc: 'Projeção realista baseada em cases validados de produtores reais',
    imgId: 'benefit-6'
  },
  { 
    val: '100%', 
    title: 'MEDIDAS TESTADAS', 
    desc: 'Validadas em campo por mais de 12 mil produtores latinoamericanos',
    imgId: 'benefit-7'
  },
  { 
    val: 'PASSO', 
    title: 'A PASSO CLARO', 
    desc: 'Não precisa ser técnico, é só seguir as plantas e aplicar',
    imgId: 'benefit-8'
  },
  { 
    val: '∞', 
    title: 'ACESSO VITALÍCIO', 
    desc: 'Imediato após compra + receba atualizações futuras gratuitas',
    imgId: 'benefit-9'
  },
];

export default function Benefits() {
  // Dobramos o array para criar o efeito de loop infinito suave
  const infiniteBenefits = [...benefits, ...benefits];

  return (
    <section className="pt-24 pb-24 bg-background overflow-hidden border-t border-border/30">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Projetos Altamente Dimensionados, <span className="text-primary italic">Não Ideias Vagas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto font-body leading-relaxed">
            Cada um dos +100 projetos foi desenhado como uma planta profissional, com medidas reais em metros, divisão das zonas produtivas, posicionamento de casa, galpões, tanques, cultivos e animais.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-5 py-4">
          {infiniteBenefits.map((benefit, idx) => {
            const imageData = PlaceHolderImages.find(img => img.id === benefit.imgId);
            return (
              <div 
                key={idx} 
                className="flex-none w-[320px] md:w-[420px]"
              >
                <div className="bg-[#0F2F1E] border border-primary/40 rounded-[16px] overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(201,169,97,0.2)]">
                  {/* Image Area */}
                  <div className="relative h-[180px] md:h-[220px] w-full bg-secondary/20">
                    {imageData ? (
                      <Image
                        src={imageData.imageUrl}
                        alt={imageData.description}
                        fill
                        className="object-cover"
                        data-ai-hint={imageData.imageHint}
                        sizes="(max-width: 768px) 320px, 420px"
                      />
                    ) : (
                      <div className="w-full h-full gold-gradient flex items-center justify-center">
                        <span className="text-[#0F2F1E] font-bold text-sm uppercase">Imagem indisponível</span>
                      </div>
                    )}
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col items-center text-center flex-1 whitespace-normal">
                    <div className="font-headline font-bold text-primary text-[36px] md:text-[48px] leading-tight mb-2">
                      {benefit.val}
                    </div>
                    <h3 className="text-white font-bold uppercase tracking-[1px] text-sm md:text-base mb-3 font-body">
                      {benefit.title}
                    </h3>
                    <p className="text-white/75 text-xs md:text-sm leading-relaxed font-body">
                      {benefit.desc}
                    </p>
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