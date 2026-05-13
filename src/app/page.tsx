import Hero from '@/components/sections/Hero';
import Problems from '@/components/sections/Problems';
import SamplesCarousel from '@/components/sections/SamplesCarousel';
import ProductOverview from '@/components/sections/ProductOverview';
import Benefits from '@/components/sections/Benefits';
import WhatYouGet from '@/components/sections/WhatYouGet';
import Bonus from '@/components/sections/Bonus';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import AboutCreator from '@/components/sections/AboutCreator';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/layout/Footer';
import { ShieldCheck } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Top Bar Announcement */}
      <div className="bg-background text-primary py-3 text-center text-xs md:text-sm font-bold tracking-[0.2em] border-b border-primary/30 uppercase">
        ★ OFERTA DE LANÇAMENTO · EDIÇÃO LIMITADA 2026 ★
      </div>

      <Hero />
      <Problems />
      <SamplesCarousel />
      <ProductOverview />
      <Benefits />
      <WhatYouGet />
      <Testimonials />
      <Bonus />
      <Pricing />
      <AboutCreator />
      
      {/* Guarantee Section - Redesigned as a card */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-card border-2 border-primary/20 rounded-[2rem] p-5 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 relative z-10">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-secondary border-4 border-primary rounded-2xl flex flex-col items-center justify-center shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
                    <span className="text-4xl md:text-5xl font-headline font-bold text-primary leading-none">7</span>
                    <span className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-[0.3em] mt-1">Dias</span>
                  </div>
                  <div className="absolute -top-3 -right-3 bg-primary text-secondary p-2 rounded-full shadow-lg scale-110">
                    <ShieldCheck size={20} />
                  </div>
                </div>
              </div>
              
              <div className="text-center md:text-left flex-1">
                <h2 className="text-xl md:text-3xl font-headline font-bold text-foreground mb-1 leading-tight">
                  Sua Satisfação ou Seu <span className="text-primary italic">Dinheiro de Volta</span>
                </h2>
                <h3 className="text-sm md:text-base font-body font-bold text-primary uppercase tracking-[0.2em] mb-3">
                  Garantia Incondicional
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Temos tanta confiança no valor do <strong>Rural Planner</strong> que assumimos todo o risco. Se em até 7 dias você não estiver 100% satisfeito, basta um e-mail para devolvermos cada centavo.
                </p>
                
                <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-4 text-[8px] font-bold uppercase tracking-widest text-primary/70">
                  <span className="flex items-center gap-2">★ RISCO ZERO</span>
                  <span className="flex items-center gap-2">★ ACESSO IMEDIATO</span>
                  <span className="flex items-center gap-2">★ SUPORTE PREMIUM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
