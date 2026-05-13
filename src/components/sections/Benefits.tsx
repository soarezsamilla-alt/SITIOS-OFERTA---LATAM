
'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Drag-to-scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
    // Disable snapping temporarily for smoother drag
    scrollRef.current.style.scrollSnapType = 'none';
  };

  const handleMouseLeaveOrUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (scrollRef.current) {
      // Re-enable snapping
      scrollRef.current.style.scrollSnapType = 'x mandatory';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.benefit-card')?.clientWidth || 420;
      const gap = 20;
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.querySelector('.benefit-card')?.clientWidth || 420;
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
      if (scrollRef.current && !isDragging) {
        const isAtEnd = scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >= scrollRef.current.scrollWidth - 10;
        if (isAtEnd) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [isDragging]);

  return (
    <section className="pt-4 pb-24 bg-background overflow-hidden border-t border-border/30">
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
            className={cn(
              "flex gap-5 overflow-x-auto carousel-hide-scrollbar snap-x snap-mandatory py-10 select-none",
              isDragging ? "cursor-grabbing" : "cursor-grab"
            )}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
          >
            {benefits.map((benefit, idx) => {
              const imageData = PlaceHolderImages.find(img => img.id === benefit.imgId);
              return (
                <div 
                  key={idx} 
                  className="benefit-card flex-none w-[90%] sm:w-[450px] md:w-[480px] snap-start"
                >
                  <div className="bg-[#0F2F1E] border border-primary/40 rounded-[16px] overflow-hidden flex flex-col h-full hover:translate-y-[-8px] hover:shadow-[0_10px_30px_rgba(201,169,97,0.3)] transition-all duration-300 pointer-events-none">
                    {/* Image Area */}
                    <div className="relative h-[220px] w-full bg-secondary/20">
                      {imageData ? (
                        <Image
                          src={imageData.imageUrl}
                          alt={imageData.description}
                          fill
                          className="object-cover"
                          data-ai-hint={imageData.imageHint}
                        />
                      ) : (
                        <div className="w-full h-full gold-gradient flex items-center justify-center">
                          <span className="text-[#0F2F1E] font-bold text-sm uppercase">Carregando Imagem...</span>
                        </div>
                      )}
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex flex-col items-center text-center flex-1">
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
              );
            })}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {benefits.map((_, idx) => (
              <button 
                key={idx}
                className={cn(
                  "h-1.5 transition-all duration-300 rounded-full",
                  activeIndex === idx ? "w-8 bg-primary" : "w-1.5 bg-primary/30"
                )}
                onClick={() => {
                  if (scrollRef.current) {
                    const cardWidth = scrollRef.current.querySelector('.benefit-card')?.clientWidth || 480;
                    const gap = 20;
                    scrollRef.current.scrollTo({ left: idx * (cardWidth + gap), behavior: 'smooth' });
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
