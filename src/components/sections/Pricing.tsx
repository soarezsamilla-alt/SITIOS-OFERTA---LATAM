
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Check, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Pricing() {
  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 59, s: 59 });
  const proMockup = PlaceHolderImages.find(img => img.id === 'hero-mockup');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
        return { h: 23, m: 59, s: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="pricing" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Garanta Agora com <span className="text-primary italic">Preço Especial</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Inclui acesso vitalício, todos os bônus e 7 dias de garantia total.
          </p>
        </div>

        <div className="flex justify-center max-w-5xl mx-auto">
          {/* Plano Pro */}
          <div className="bg-secondary/20 p-10 rounded-3xl border-2 border-primary flex flex-col items-center text-center relative shadow-2xl scale-105 max-w-md w-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-gradient text-background px-6 py-1.5 rounded-full text-xs font-bold tracking-widest whitespace-nowrap">
              ★ OFERTA LIMITADA ★
            </div>
            
            <div className="w-full bg-destructive/10 border border-destructive/30 p-4 rounded-xl mb-8">
              <p className="text-destructive font-bold text-xs uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
                < Zap className="w-4 h-4" /> Oferta Termina Em:
              </p>
              <div className="flex justify-center gap-3">
                {[
                  { v: timeLeft.h, l: 'Horas' },
                  { v: timeLeft.m, l: 'Min' },
                  { v: timeLeft.s, l: 'Seg' }
                ].map((t, idx) => (
                  <div key={idx} className="bg-secondary p-3 rounded-lg min-w-[60px]">
                    <span className="block text-2xl font-bold text-primary font-mono">{t.v.toString().padStart(2, '0')}</span>
                    <span className="block text-[10px] text-white/50 uppercase">{t.l}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <span className="text-white/50 line-through block text-sm mb-1">De R$ 397 por</span>
              <div className="flex items-center justify-center gap-1">
                <span className="text-2xl font-bold text-primary self-start mt-1">R$</span>
                <span className="text-6xl font-headline font-bold text-primary">97</span>
              </div>
              <p className="text-[10px] text-white/50 mt-2 uppercase tracking-tighter">Pagamento único · Acesso vitalício + Bônus</p>
            </div>

            {proMockup && (
              <div className="mb-8 relative w-full aspect-square max-w-[650px]">
                <Image src={proMockup.imageUrl} alt="Plano Pro" fill className="object-contain" />
              </div>
            )}

            <ul className="w-full text-left space-y-4 mb-10">
              <li className="flex items-center gap-3 text-sm text-white/90"><Check className="text-primary w-5 h-5 flex-shrink-0" /> +100 projetos completos</li>
              <li className="flex items-center gap-3 text-sm text-white/90"><Check className="text-primary w-5 h-5 flex-shrink-0" /> <strong>BÔNUS 1:</strong> Construções Rurais</li>
              <li className="flex items-center gap-3 text-sm text-white/90"><Check className="text-primary w-5 h-5 flex-shrink-0" /> <strong>BÔNUS 2:</strong> Calculadora ROI</li>
              <li className="flex items-center gap-3 text-sm text-white/90"><Check className="text-primary w-5 h-5 flex-shrink-0" /> <strong>BÔNUS 3:</strong> Plantas Companheiras</li>
              <li className="flex items-center gap-3 text-sm text-white/90"><Check className="text-primary w-5 h-5 flex-shrink-0" /> <strong>BÔNUS 4:</strong> Energia Solar Rural</li>
              <li className="flex items-center gap-3 text-sm text-white/90"><Check className="text-primary w-5 h-5 flex-shrink-0" /> Acesso prioritário a novos projetos</li>
              <li className="flex items-center gap-3 text-sm text-white/90 font-bold text-primary"><Check className="text-primary w-5 h-5 flex-shrink-0" /> Atualizações gratuitas semanal</li>
              <li className="flex items-center gap-3 text-sm text-white/90"><Check className="text-primary w-5 h-5 flex-shrink-0" /> Garantia de 7 dias</li>
            </ul>

            <Button className="w-full py-8 text-xl font-bold gold-gradient text-background hover:scale-105 transition-all shadow-xl">QUERO O PLANO PRO</Button>
            
            <p className="mt-6 text-destructive font-bold text-xs animate-pulse">Você não vai encontrar este preço depois.</p>
            <div className="mt-3 flex items-center gap-2 text-white/50 text-[10px] uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" /> Pagamento 100% seguro · Acesso imediato
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
