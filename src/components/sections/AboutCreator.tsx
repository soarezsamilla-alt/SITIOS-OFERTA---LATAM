'use client';

import { User, PackageCheck, Mail, Infinity, RefreshCw, ShieldCheck } from 'lucide-react';

export default function AboutCreator() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border border-primary/20 mb-6">
            ★ CONHEÇA O CRIADOR ★
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-headline text-foreground mb-4">
            Quem está por trás do <span className="text-primary italic">Rural Planner</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-body leading-relaxed">
            Conheça a pessoa que desenvolveu o pack que já transformou milhares de fincas em toda a América Latina.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Sobre o Criador */}
          <div className="bg-[#F5F0E1] rounded-[16px] p-8 md:p-10 border-t-4 border-t-[#C9A961] border-x border-b border-[#C9A961]/20 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] flex flex-col items-center">
            <div className="text-center mb-8">
              <span className="text-[#C9A961] text-[10px] font-bold tracking-[0.2em] uppercase">SOBRE O CRIADOR</span>
              <div className="w-12 h-[1px] bg-[#C9A961] mx-auto mt-2"></div>
            </div>

            {/* Placeholder da Foto */}
            <div className="relative mb-6">
              <div className="w-48 h-48 md:w-52 md:h-52 rounded-full border-[3px] border-[#C9A961] p-1 shadow-[0_10px_30px_rgba(201,169,97,0.3)] bg-gradient-to-br from-[#1B4D2E] to-[#C9A961] flex flex-col items-center justify-center overflow-hidden">
                <User size={80} className="text-white/60 mb-2" />
                <span className="text-white text-[10px] font-bold tracking-[0.1em] uppercase">FOTO DO CRIADOR</span>
              </div>
            </div>

            <h3 className="text-3xl font-headline font-bold text-[#1B4D2E] mb-1">Alejandro Martínez</h3>
            <p className="text-[#C9A961] italic text-base mb-8">Fundador & Criador do Pack +100 Proyectos</p>

            <p className="text-[#4A4A4A] text-center text-[15px] leading-relaxed mb-10 max-w-sm">
              Engenheiro agrônomo com mais de 15 anos de experiência em planejamento rural em toda América Latina. Já visitou mais de 3.000 fincas em 8 países — do México à Argentina, da Colômbia ao Chile. Sua missão é democratizar o conhecimento rural profissional, tornando acessível o que antes custava fortunas com consultores especializados em Latinoamérica.
            </p>

            {/* Números Destacados */}
            <div className="w-full pt-6 border-t border-[#C9A961]/20 flex justify-between gap-4">
              <div className="text-center">
                <div className="text-3xl font-headline font-bold text-[#C9A961]">15+</div>
                <div className="text-[10px] uppercase text-[#6B6B6B] leading-tight">anos de<br/>experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-headline font-bold text-[#C9A961]">3.000+</div>
                <div className="text-[10px] uppercase text-[#6B6B6B] leading-tight">fincas<br/>visitadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-headline font-bold text-[#C9A961]">12 mil</div>
                <div className="text-[10px] uppercase text-[#6B6B6B] leading-tight">produtores<br/>atendidos</div>
              </div>
            </div>
          </div>

          {/* Card 2: Como você recebe */}
          <div className="bg-[#F5F0E1] rounded-[16px] p-8 md:p-10 border-t-4 border-t-[#C9A961] border-x border-b border-[#C9A961]/20 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] flex flex-col items-center">
            <div className="text-center mb-8">
              <span className="text-[#C9A961] text-[10px] font-bold tracking-[0.2em] uppercase">COMO VOCÊ RECEBE</span>
              <div className="w-12 h-[1px] bg-[#C9A961] mx-auto mt-2"></div>
            </div>

            <h3 className="text-3xl font-headline font-bold text-[#1B4D2E] mb-6 text-center">Acesso Rápido e Garantido</h3>

            <div className="mb-8 p-6 bg-white/50 rounded-2xl">
              <PackageCheck size={100} className="text-[#C9A961] drop-shadow-lg" />
            </div>

            {/* Lista de Passos */}
            <div className="w-full space-y-6 flex-1">
              {[
                {
                  title: "Pagamento Confirmado Em Segundos",
                  desc: "Após confirmar a compra em USD, você recebe acesso imediato.",
                  icon: "1"
                },
                {
                  title: "E-mail Com Login E Acesso",
                  desc: "Receba no seu e-mail o link da área de membros, login e senha gerados automaticamente.",
                  icon: "2"
                },
                {
                  title: "Acesso Vitalício Aos Materiais",
                  desc: "Baixe todos os PDFs em alta resolução. Acesse pelo celular, tablet ou computador desde qualquer país.",
                  icon: "3"
                },
                {
                  title: "Atualizações Gratuitas Pra Sempre",
                  desc: "Receba todos os novos projetos e atualizações sem pagar nada a mais.",
                  icon: "4"
                }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C9A961] flex items-center justify-center text-white font-bold shadow-md">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-[#1B4D2E] font-bold text-base leading-tight mb-1">{step.title}</h4>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full mt-10 pt-6 border-t border-[#C9A961]/20 text-center">
              <p className="text-[#C9A961] text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                <ShieldCheck size={14} /> Compra 100% segura · Garantia de 7 dias · Pago en USD
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
