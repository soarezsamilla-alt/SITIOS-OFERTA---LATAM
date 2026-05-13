'use client';

import { User, PackageCheck, Mail, Infinity, RefreshCw, ShieldCheck } from 'lucide-react';

export default function AboutCreator() {
  return (
    <section className="py-8 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Título da Seção - Mais compacto */}
        <div className="text-center mb-6">
          <span className="inline-block bg-primary/10 text-primary text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-primary/20 mb-3">
            ★ CONHEÇA O CRIADOR ★
          </span>
          <h2 className="text-xl md:text-2xl font-bold font-headline text-foreground mb-2">
            Quem está por trás do <span className="text-primary italic">Rural Planner</span>
          </h2>
        </div>

        {/* Grid de Cards - Ajustado para ser menor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          
          {/* Card 1: Sobre o Criador */}
          <div className="bg-[#F5F0E1] rounded-[12px] p-4 md:p-6 border-t-4 border-t-[#C9A961] border-x border-b border-[#C9A961]/20 shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
            <div className="text-center mb-3">
              <span className="text-[#C9A961] text-[8px] font-bold tracking-[0.15em] uppercase">SOBRE O CRIADOR</span>
              <div className="w-8 h-[1px] bg-[#C9A961] mx-auto mt-1"></div>
            </div>

            {/* Foto do Criador - Bem reduzida */}
            <div className="relative mb-3">
              <div className="w-24 h-24 rounded-full border-[2px] border-[#C9A961] p-0.5 shadow-lg bg-gradient-to-br from-[#1B4D2E] to-[#C9A961] flex flex-col items-center justify-center overflow-hidden">
                <User size={30} className="text-white/60 mb-0.5" />
                <span className="text-white text-[6px] font-bold tracking-[0.1em] uppercase">FOTO</span>
              </div>
            </div>

            <h3 className="text-lg font-headline font-bold text-[#1B4D2E] mb-0.5">Alejandro Martínez</h3>
            <p className="text-[#C9A961] italic text-[11px] mb-3">Fundador & Criador</p>

            <p className="text-[#4A4A4A] text-center text-[12px] leading-relaxed mb-4 max-w-[280px]">
              Engenheiro agrônomo com 15 anos de experiência em planejamento rural na América Latina. Visitou mais de 3.000 fincas democratizando o conhecimento profissional.
            </p>

            {/* Números Destacados - Compactos */}
            <div className="w-full pt-3 border-t border-[#C9A961]/20 flex justify-around gap-1 mt-auto">
              <div className="text-center">
                <div className="text-base font-headline font-bold text-[#C9A961]">15+</div>
                <div className="text-[7px] uppercase text-[#6B6B6B] leading-tight">anos exp.</div>
              </div>
              <div className="text-center">
                <div className="text-base font-headline font-bold text-[#C9A961]">3k+</div>
                <div className="text-[7px] uppercase text-[#6B6B6B] leading-tight">fincas</div>
              </div>
              <div className="text-center">
                <div className="text-base font-headline font-bold text-[#C9A961]">12 mil</div>
                <div className="text-[7px] uppercase text-[#6B6B6B] leading-tight">produtores</div>
              </div>
            </div>
          </div>

          {/* Card 2: Como você recebe */}
          <div className="bg-[#F5F0E1] rounded-[12px] p-4 md:p-6 border-t-4 border-t-[#C9A961] border-x border-b border-[#C9A961]/20 shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
            <div className="text-center mb-3">
              <span className="text-[#C9A961] text-[8px] font-bold tracking-[0.15em] uppercase">COMO VOCÊ RECEBE</span>
              <div className="w-8 h-[1px] bg-[#C9A961] mx-auto mt-1"></div>
            </div>

            <h3 className="text-lg font-headline font-bold text-[#1B4D2E] mb-3 text-center">Acesso Rápido</h3>

            <div className="mb-3 p-3 bg-white/50 rounded-xl">
              <PackageCheck size={40} className="text-[#C9A961]" />
            </div>

            {/* Lista de Passos - Ultra compacta */}
            <div className="w-full space-y-2 flex-1">
              {[
                { title: "Pagamento", desc: "Acesso imediato após confirmação.", icon: "1" },
                { title: "E-mail", desc: "Receba login e senha automáticos.", icon: "2" },
                { title: "Vitalício", desc: "Baixe PDFs em qualquer país.", icon: "3" },
                { title: "Grátis", desc: "Atualizações inclusas pra sempre.", icon: "4" }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-3 items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C9A961] flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-[#1B4D2E] font-bold text-[11px] leading-tight">{step.title}</h4>
                    <p className="text-[#6B6B6B] text-[9px] leading-tight">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full mt-4 pt-3 border-t border-[#C9A961]/20 text-center">
              <p className="text-[#C9A961] text-[8px] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
                <ShieldCheck size={10} /> Compra segura · Pago en USD
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
