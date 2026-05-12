
'use client';

import { useRef, useState, useEffect } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const benefits = [
  { 
    val: '+100', 
    title: 'PROJETOS COMPLETOS', 
    desc: 'Plantas técnicas dimensionadas prontas pra você executar',
    imgName: 'Sítio Brasileiro Completo'
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
    title: 'BIOMAS BRASILEIROS', 
    desc: 'Adaptados pra Cerrado, Mata Atlântica, Caatinga, Amazônia e Pampa',
    imgName: 'Mapa de Biomas'
  },
  { 
    val: 'R$ 15K', 
    title: 'ECONOMIZADOS', 
    desc: 'Equivalente ao que cobraria um agrônomo rural particular',
    imgName: 'Comparativo de Preços'
  },
  { 
    val: 'R$ 14K', 
    title: 'RENDA MENSAL POSSÍVEL', 
    desc: 'Projeção realista baseada em cases validados de produtores reais',
    imgName: 'Gráfico Financeiro'
  },
  { 
    val: '100%', 
    title: 'MEDIDAS TESTADAS', 
    desc: 'Validadas em campo por mais de 12 mil produtores brasileiros',
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
      const cardWidth = 470; // Novo width (450) + gap (20)
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft;
        const cardWidth = 470;
        const index = Math.round(scrollPosition / cardWidth);
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
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Projetos Altamente Dimensionados, <span className="text-primary italic">Não Ideias Vagas</span>
          </h2>
          <p className="text-white/75 text-lg max-w-4xl mx-auto mb-2">
            Cada um dos +100 projetos foi desenhado como uma planta profissional, com medidas reais em metros, divisão das zonas produtivas, posicionamento de casa, galpões, tanques, cultivos e animais.
          </p>
        </div>

        <div className="relative group max-w-7xl mx-auto">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 text-primary hover:text-primary/80 hover:bg-transparent hidden md:flex"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-12 w-12" />
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 text-primary hover:text-primary/80 hover:bg-transparent hidden md:flex"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-12 w-12" />
          </Button>

          <div 
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto carousel-hide-scrollbar snap-x snap-mandatory py-10"
          >
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="flex-none w-[320px] sm:w-[450px] snap-start"
              >
                <div className="bg-[#0F2F1E] border border-primary/40 rounded-[16px] overflow-hidden flex flex-col h-full hover:translate-y-[-8px] hover:shadow-[0_10px_30px_rgba(201,169,97,0.2)] transition-all duration-300">
                  <div className="relative h-[140px] w-full gold-gradient flex items-center justify-center p-6 text-center">
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="relative z-10 text-[#0F2F1E] font-bold text-sm uppercase tracking-tighter">
                      IMAGEM EM BREVE<br/>
                      <span className="text-xs opacity-80">{benefit.imgName}</span>
                    </span>
                  </div>

                  <div className="p-4 flex flex-col items-center text-center">
                    <div className="font-headline font-bold text-primary text-[42px] md:text-[56px] leading-tight mb-2 mt-2">
                      {benefit.val}
                    </div>
                    <h3 className="text-white font-bold uppercase tracking-[1px] text-sm md:text-base mb-2 font-body">
                      {benefit.title}
                    </h3>
                    <p className="text-white/75 text-xs md:text-sm leading-relaxed mb-4 font-body">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
