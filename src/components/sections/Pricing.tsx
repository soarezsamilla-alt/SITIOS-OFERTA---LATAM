
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
          <div className="bg-secondary/20 p-8 rounded-3xl border-2 border-primary flex flex-col items-center text-center relative shadow-2xl scale-105 max-w-md w-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-gradient text-background px-6 py-1.5 rounded-full text-xs font-bold tracking-widest whitespace-nowrap">
              ★ OFERTA LIMITADA ★
            </div>
            
            <div className="w-full bg-destructive/10 border border-destructive/30 p-3 rounded-xl mb-6">
              <p className="text-destructive font-bold text-[10px] uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                < Zap className="w-3.5 h-3.5" /> Oferta Termina Em:
              </p>
              <div className="flex justify-center gap-2">
                {[
                  { v: timeLeft.h, l: 'Horas' },
                  { v: timeLeft.m, l: 'Min' },
                  { v: timeLeft.s, l: 'Seg' }
                ].map((t, idx) => (
                  <div key={idx} className="bg-secondary p-2 rounded-lg min-w-[50px]">
                    <span className="block text-xl font-bold text-primary font-mono">{t.v.toString().padStart(2, '0')}</span>
                    <span className="block text-[8px] text-white/50 uppercase">{t.l}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6 text-center">
              <span className="text-white/50 line-through block text-sm mb-1 font-medium tracking-tight">De $ 137,00 por</span>
              <div className="flex items-center justify-center gap-1">
                <span className="text-2xl font-bold text-primary self-start mt-2">$</span>
                <span className="text-6xl font-headline font-bold text-primary">9,00</span>
              </div>
              <p className="text-[10px] text-white/50 mt-2 uppercase tracking-tight font-semibold">Pagamento único · Acesso vitalício + Bônus</p>
            </div>

            {proMockup && (
              <div className="mb-6 relative w-full aspect-video max-w-[400px]">
                <Image src={proMockup.imageUrl} alt="Plano Pro" fill className="object-contain" />
              </div>
            )}

            <ul className="w-full text-left space-y-2.5 mb-8">
              <li className="flex items-center gap-2 text-xs text-white/90"><Check className="text-primary w-4 h-4 flex-shrink-0" /> +100 projetos completos</li>
              <li className="flex items-center gap-2 text-xs text-white/90"><Check className="text-primary w-4 h-4 flex-shrink-0" /> <strong>BÔNUS 1:</strong> Construções Rurais</li>
              <li className="flex items-center gap-2 text-xs text-white/90"><Check className="text-primary w-4 h-4 flex-shrink-0" /> <strong>BÔNUS 2:</strong> Calculadora ROI</li>
              <li className="flex items-center gap-2 text-xs text-white/90"><Check className="text-primary w-4 h-4 flex-shrink-0" /> <strong>BÔNUS 3:</strong> Plantas Companheiras</li>
              <li className="flex items-center gap-2 text-xs text-white/90"><Check className="text-primary w-4 h-4 flex-shrink-0" /> <strong>BÔNUS 4:</strong> Energia Solar Rural</li>
              <li className="flex items-center gap-2 text-xs text-white/90"><Check className="text-primary w-4 h-4 flex-shrink-0" /> Acesso prioritário a novos projetos</li>
              <li className="flex items-center gap-2 text-xs text-white/90 font-bold text-primary"><Check className="text-primary w-4 h-4 flex-shrink-0" /> Atualizações gratuitas semanal</li>
              <li className="flex items-center gap-2 text-xs text-white/90"><Check className="text-primary w-4 h-4 flex-shrink-0" /> Garantia de 7 dias</li>
            </ul>

            <Button className="w-full py-6 text-lg font-bold gold-gradient text-background hover:scale-105 transition-all shadow-xl">QUERO O PLANO PRO</Button>
            
            <p className="mt-4 text-destructive font-bold text-[10px] animate-pulse">Você não vai encontrar este preço depois.</p>
            <div className="mt-2 flex items-center gap-2 text-white/50 text-[9px] uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" /> Pagamento 100% seguro · Acesso imediato
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
