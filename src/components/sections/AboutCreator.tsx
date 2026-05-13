'use client';

import { User, PackageCheck, Mail, Infinity, RefreshCw, ShieldCheck } from 'lucide-react';

export default function AboutCreator() {
  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Título da Seção */}
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border border-primary/20 mb-4">
            ★ CONHEÇA O CRIADOR ★
          </span>
          <h2 className="text-2xl md:text-4xl font-bold font-headline text-foreground mb-3">
            Quem está por trás do <span className="text-primary italic">Rural Planner</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto font-body leading-relaxed">
            Conheça a pessoa que desenvolveu o pack que já transformou milhares de fincas em toda a América Latina.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Card 1: Sobre o Criador */}
          <div className="bg-[#F5F0E1] rounded-[16px] p-6 md:p-8 border-t-4 border-t-[#C9A961] border-x border-b border-[#C9A961]/20 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] flex flex-col items-center">
            <div className="text-center mb-4">
              <span className="text-[#C9A961] text-[10px] font-bold tracking-[0.2em] uppercase">SOBRE O CRIADOR</span>
              <div className="w-10 h-[1px] bg-[#C9A961] mx-auto mt-2"></div>
            </div>

            {/* Placeholder da Foto - Reduzido */}
            <div className="relative mb-4">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-[3px] border-[#C9A961] p-1 shadow-[0_10px_30px_rgba(201,169,97,0.3)] bg-gradient-to-br from-[#1B4D2E] to-[#C9A961] flex flex-col items-center justify-center overflow-hidden">
                <User size={50} className="text-white/60 mb-1" />
                <span className="text-white text-[8px] font-bold tracking-[0.1em] uppercase">FOTO DO CRIADOR</span>
              </div>
            </div>

            <h3 className="text-2xl font-headline font-bold text-[#1B4D2E] mb-1">Alejandro Martínez</h3>
            <p className="text-[#C9A961] italic text-sm mb-4">Fundador & Criador do Pack +100 Proyectos</p>

            <p className="text-[#4A4A4A] text-center text-[14px] leading-relaxed mb-6 max-w-sm">
              Engenheiro agrônomo com mais de 15 anos de experiência em planejamento rural em toda América Latina. Já visitou mais de 3.000 fincas em 8 países. Sua missão é democratizar o conhecimento rural profissional em toda Latinoamérica.
            </p>

            {/* Números Destacados */}
            <div className="w-full pt-4 border-t border-[#C9A961]/20 flex justify-between gap-2 mt-auto">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-headline font-bold text-[#C9A961]">15+</div>
                <div className="text-[9px] uppercase text-[#6B6B6B] leading-tight">anos de<br/>experiência</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-headline font-bold text-[#C9A961]">3.000+</div>
                <div className="text-[9px] uppercase text-[#6B6B6B] leading-tight">fincas<br/>visitadas</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-headline font-bold text-[#C9A961]">12 mil</div>
                <div className="text-[9px] uppercase text-[#6B6B6B] leading-tight">produtores<br/>atendidos</div>
              </div>
            </div>
          </div>

          {/* Card 2: Como você recebe */}
          <div className="bg-[#F5F0E1] rounded-[16px] p-6 md:p-8 border-t-4 border-t-[#C9A961] border-x border-b border-[#C9A961]/20 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] flex flex-col items-center">
            <div className="text-center mb-4">
              <span className="text-[#C9A961] text-[10px] font-bold tracking-[0.2em] uppercase">COMO VOCÊ RECEBE</span>
              <div className="w-10 h-[1px] bg-[#C9A961] mx-auto mt-2"></div>
            </div>

            <h3 className="text-2xl font-headline font-bold text-[#1B4D2E] mb-4 text-center">Acesso Rápido</h3>

            <div className="mb-4 p-4 bg-white/50 rounded-2xl">
              <PackageCheck size={60} className="text-[#C9A961] drop-shadow-md" />
            </div>

            {/* Lista de Passos */}
            <div className="w-full space-y-4 flex-1">
              {[
                {
                  title: "Pagamento Confirmado",
                  desc: "Após confirmar em USD, acesso imediato.",
                  icon: "1"
                },
                {
                  title: "E-mail Com Login",
                  desc: "Receba o link da área de membros e senha.",
                  icon: "2"
                },
                {
                  title: "Acesso Vitalício",
                  desc: "Baixe PDFs em alta resolução em qualquer país.",
                  icon: "3"
                },
                {
                  title: "Atualizações Grátis",
                  desc: "Receba novos projetos sem pagar nada a mais.",
                  icon: "4"
                }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A961] flex items-center justify-center text-white text-sm font-bold shadow-sm">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-[#1B4D2E] font-bold text-sm leading-tight mb-0.5">{step.title}</h4>
                    <p className="text-[#6B6B6B] text-[12px] leading-snug">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full mt-6 pt-4 border-t border-[#C9A961]/20 text-center">
              <p className="text-[#C9A961] text-[9px] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                <ShieldCheck size={12} /> Compra segura · Garantia 7 dias · Pago en USD
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
