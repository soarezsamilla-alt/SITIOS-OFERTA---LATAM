
import Hero from '@/components/sections/Hero';
import Problems from '@/components/sections/Problems';
import SamplesCarousel from '@/components/sections/SamplesCarousel';
import ProductOverview from '@/components/sections/ProductOverview';
import Benefits from '@/components/sections/Benefits';
import Bonus from '@/components/sections/Bonus';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
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
      <Bonus />
      <Testimonials />
      <Pricing />
      
      {/* Guarantee Section - Redesigned as a card */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border-2 border-primary/20 rounded-[2rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 relative z-10">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-28 h-28 md:w-36 md:h-36 bg-secondary border-4 border-primary rounded-2xl flex flex-col items-center justify-center shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
                    <span className="text-5xl md:text-6xl font-headline font-bold text-primary leading-none">7</span>
                    <span className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-[0.3em] mt-1">Dias</span>
                  </div>
                  <div className="absolute -top-3 -right-3 bg-primary text-secondary p-2 rounded-full shadow-lg scale-110">
                    <ShieldCheck size={24} />
                  </div>
                </div>
              </div>
              
              <div className="text-center md:text-left flex-1">
                <h2 className="text-2xl md:text-4xl font-headline font-bold text-foreground mb-2 leading-tight">
                  Sua Satisfação ou Seu <span className="text-primary italic">Dinheiro de Volta</span>
                </h2>
                <h3 className="text-base md:text-lg font-body font-bold text-primary uppercase tracking-[0.2em] mb-4">
                  Garantia Incondicional
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Temos tanta confiança no valor do <strong>Rural Planner</strong> que assumimos todo o risco. Se em até 7 dias você não estiver 100% satisfeito, basta um e-mail para devolvermos cada centavo.
                </p>
                
                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 text-[9px] font-bold uppercase tracking-widest text-primary/70">
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
