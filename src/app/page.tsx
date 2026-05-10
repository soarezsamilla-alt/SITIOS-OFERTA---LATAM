
import Hero from '@/components/sections/Hero';
import Problems from '@/components/sections/Problems';
import SamplesCarousel from '@/components/sections/SamplesCarousel';
import Benefits from '@/components/sections/Benefits';
import Bonus from '@/components/sections/Bonus';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import AIAssistant from '@/components/sections/AIAssistant';
import Footer from '@/components/layout/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Top Bar Announcement */}
      <div className="bg-background text-primary py-3 text-center text-xs md:text-sm font-bold tracking-[0.2em] border-b border-primary/30 uppercase">
        ★ OFERTA DE LANZAMIENTO · EDICIÓN LIMITADA 2026 ★
      </div>

      <Hero />
      <Problems />
      <SamplesCarousel />
      <AIAssistant />
      <Benefits />
      <Bonus />
      <Testimonials />
      <Pricing />
      
      {/* Guarantee Section */}
      <section className="py-24 bg-accent/10 text-center">
        <div className="container mx-auto px-4">
          <div className="inline-block bg-background border-4 border-primary p-12 rounded-full mb-10 shadow-2xl">
            <div className="text-7xl font-headline font-bold text-secondary leading-none">7</div>
            <div className="text-primary font-bold uppercase tracking-widest text-sm mt-2">Días</div>
          </div>
          <h2 className="text-4xl font-headline font-bold mb-6 text-foreground">Garantía Incondicional</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Si dentro de 7 días consideras que no vale la inversión, te devolvemos <strong>100% de tu dinero</strong>. Sin preguntas. Sin burocracia. El riesgo es todo nuestro.
          </p>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
