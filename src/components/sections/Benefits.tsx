
'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const benefits = [
  { 
    val: '+100', 
    title: 'PROJETOS COMPLETOS', 
    desc: 'Plantas técnicas dimensionadas prontas pra você executar',
    imgName: 'Fazenda Latinoamericana Completa'
  },
  { 
    val: '0,5-5', 
    title: 'HECTARES COBERTOS', 
    desc: 'Tem projeto pro seu tamanho de terreno, não importa qual seja',
    imgName: 'Mosaico de Tamanhos'
  },
  { 
    val: '7', 
    title: 'VOCAÇÕES PRODUTIVAS', 
    desc: 'Café, hortifruti, pecuária, piscicultura, agrofloresta e mais',
    imgName: 'Mosaico de Atividades'
  },
  { 
    val: '5', 
    title: 'REGIÕES CLIMÁTICAS', 
    desc: 'Adaptados pra Tropical Úmido, Savana, Semiárido, Temperado e Andino',
    imgName: 'Mapa Climático LATAM'
  },
  { 
    val: '$3K', 
    title: 'ECONOMIZADOS', 
    desc: 'Equivalente ao que cobraria um engenheiro agrônomo particular',
    imgName: 'Comparativo Agrônomo'
  },
  { 
    val: '$2.8K', 
    title: 'RENDA MENSAL POSSÍVEL', 
    desc: 'Projeção realista baseada em cases validados de produtores reais',
    imgName: 'Gráfico de Renda'
  },
  { 
    val: '100%', 
    title: 'MEDIDAS TESTADAS', 
    desc: 'Validadas em campo por mais de 12 mil produtores latinoamericanos',
    imgName: 'Selo de Qualidade'
  },
  { 
    val: 'PASSO', 
    title: 'A PASSO CLARO', 
    desc: 'Não precisa ser técnico, é só seguir as plantas e aplicar',
    imgName: 'Etapas de Execução'
  },
  { 
    val: '∞', 
    title: 'ACESSO VITALÍCIO', 
    desc: 'Imediato após compra + receba atualizações futuras gratuitas',
    imgName: 'Biblioteca Digital'
  },
];

export default function Benefits() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.benefit-card')?.clientWidth || 320;
      const gap = 20;
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.querySelector('.benefit-card')?.clientWidth || 320;
        const gap = 20;
        const index = Math.round(scrollPosition / (cardWidth + gap));
        setActiveIndex(index);
      }
    };

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }
    return () => currentRef?.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const isAtEnd = scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >= scrollRef.current.scrollWidth - 10;
        if (isAtEnd) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-background overflow-hidden border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Projetos Altamente Dimensionados, <span className="text-primary italic">Não Ideias Vagas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto mb-2 font-body leading-relaxed">
            Cada um dos +100 projetos foi desenhado como uma planta profissional, com medidas reais em metros, divisão das zonas produtivas, posicionamento de casa, galpões, tanques, cultivos e animais.
          </p>
        </div>

        <div className="relative group max-w-7xl mx-auto">
          {/* Controls */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute -left-4 md:-left-12 top-[40%] -translate-y-1/2 z-20 text-primary hover:text-primary/80 hover:bg-transparent hidden md:flex"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-12 w-12" />
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute -right-4 md:-right-12 top-[40%] -translate-y-1/2 z-20 text-primary hover:text-primary/80 hover:bg-transparent hidden md:flex"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-12 w-12" />
          </Button>

          {/* Carousel */}
          <div 
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto carousel-hide-scrollbar snap-x snap-mandatory py-10"
          >
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="benefit-card flex-none w-[90%] sm:w-[360px] md:w-[320px] snap-start"
              >
                <div className="bg-[#0F2F1E] border border-primary/40 rounded-[16px] overflow-hidden flex flex-col h-full hover:translate-y-[-8px] hover:shadow-[0_10px_30px_rgba(201,169,97,0.3)] transition-all duration-300">
                  {/* Image Placeholder - 60% approx height */}
                  <div className="relative h-[200px] w-full gold-gradient flex items-center justify-center p-6 text-center rounded-t-[16px]">
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="relative z-10 text-[#0F2F1E] font-bold text-sm uppercase tracking-tighter">
                      IMAGEM EM BREVE<br/>
                      <span className="text-xs opacity-80">{benefit.imgName}</span>
                    </span>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col items-center text-center">
                    {/* Number */}
                    <div className="font-headline font-bold text-primary text-[42px] md:text-[56px] leading-tight mb-4 mt-2">
                      {benefit.val}
                    </div>
                    {/* Title */}
                    <h3 className="text-white font-bold uppercase tracking-[1px] text-base mb-3 font-body">
                      {benefit.title}
                    </h3>
                    {/* Description */}
                    <p className="text-white/75 text-sm leading-relaxed mb-4 font-body">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {benefits.map((_, idx) => (
              <div 
                key={idx}
                className={cn(
                  "h-1.5 transition-all duration-300 rounded-full",
                  activeIndex === idx ? "w-8 bg-primary" : "w-1.5 bg-primary/30"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
