
'use client';

import { PackageCheck, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutCreator() {
  const creatorPhoto = PlaceHolderImages.find(img => img.id === 'creator-photo');

  return (
    <section className="py-6 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Título da Seção - Ultra compacto */}
        <div className="text-center mb-4">
          <span className="inline-block bg-primary/10 text-primary text-[8px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 rounded-full border border-primary/20 mb-2">
            ★ CONHEÇA O CRIADOR ★
          </span>
          <h2 className="text-lg md:text-xl font-bold font-headline text-foreground mb-1">
            Quem está por trás do <span className="text-primary italic">Rural Planner</span>
          </h2>
        </div>

        {/* Grid de Cards - Ultra compacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-stretch">
          
          {/* Card 1: Sobre o Criador */}
          <div className="bg-secondary/20 rounded-[10px] p-3 border-t-2 border-t-[#C9A961] border-x border-b border-[#C9A961]/10 shadow-sm transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
            <div className="text-center mb-2">
              <span className="text-[#C9A961] text-[7px] font-bold tracking-[0.15em] uppercase">SOBRE O CRIADOR</span>
              <div className="w-6 h-[1px] bg-[#C9A961] mx-auto mt-0.5"></div>
            </div>

            {/* Foto do Criador - Redimensionada */}
            <div className="relative mb-2">
              <div className="w-20 h-20 rounded-full border-[2px] border-[#C9A961] p-0.5 shadow-md bg-gradient-to-br from-[#1B4D2E] to-[#C9A961] overflow-hidden relative">
                {creatorPhoto ? (
                  <Image
                    src={creatorPhoto.imageUrl}
                    alt={creatorPhoto.description}
                    fill
                    className="object-cover"
                    data-ai-hint={creatorPhoto.imageHint}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary">
                    <span className="text-white text-[6px] font-bold">FOTO</span>
                  </div>
                )}
              </div>
            </div>

            <h3 className="text-base font-headline font-bold text-white mb-0">Alejandro Martínez</h3>
            <p className="text-[#C9A961] italic text-[10px] mb-2">Fundador & Criador</p>

            <p className="text-white/70 text-center text-[10px] leading-relaxed mb-3 max-w-[240px]">
              Engenheiro agrônomo com mais de 15 anos de experiência em planejamento rural em toda América Latina. Já visitou mais de 3.000 fincas em 8 países do México à Argentina, da Colômbia ao Chile. Sua missão é democratizar o conhecimento rural profissional.
            </p>

            {/* Números Destacados - Ultra compactos */}
            <div className="w-full pt-2 border-t border-[#C9A961]/10 flex justify-around gap-1 mt-auto">
              <div className="text-center">
                <div className="text-sm font-headline font-bold text-[#C9A961]">15+</div>
                <div className="text-[6px] uppercase text-white/50 leading-tight">anos exp.</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-headline font-bold text-[#C9A961]">3k+</div>
                <div className="text-[6px] uppercase text-white/50 leading-tight">fincas</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-headline font-bold text-[#C9A961]">12 mil</div>
                <div className="text-[6px] uppercase text-white/50 leading-tight">produtores</div>
              </div>
            </div>
          </div>

          {/* Card 2: Como você recebe */}
          <div className="bg-secondary/20 rounded-[10px] p-3 border-t-2 border-t-[#C9A961] border-x border-b border-[#C9A961]/10 shadow-sm transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
            <div className="text-center mb-2">
              <span className="text-[#C9A961] text-[7px] font-bold tracking-[0.15em] uppercase">COMO VOCÊ RECEBE</span>
              <div className="w-6 h-[1px] bg-[#C9A961] mx-auto mt-0.5"></div>
            </div>

            <h3 className="text-base font-headline font-bold text-white mb-2 text-center">Acesso Rápido</h3>

            <div className="mb-2 p-2 bg-white/5 rounded-lg">
              <PackageCheck size={30} className="text-[#C9A961]" />
            </div>

            {/* Lista de Passos - Ultra compacta */}
            <div className="w-full space-y-1.5 flex-1">
              {[
                { title: "Pagamento", desc: "Acesso imediato após confirmação.", icon: "1" },
                { title: "E-mail", desc: "Receba login e senha automáticos.", icon: "2" },
                { title: "Vitalício", desc: "Baixe PDFs em qualquer país.", icon: "3" },
                { title: "Grátis", desc: "Atualizações inclusas pra sempre.", icon: "4" }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C9A961] flex items-center justify-center text-secondary text-[9px] font-bold shadow-sm">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[10px] leading-tight">{step.title}</h4>
                    <p className="text-white/60 text-[8px] leading-tight">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full mt-3 pt-2 border-t border-[#C9A961]/10 text-center">
              <p className="text-[#C9A961] text-[7px] font-bold uppercase tracking-widest flex items-center justify-center gap-1">
                <ShieldCheck size={8} /> Compra segura · Pago en USD
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
