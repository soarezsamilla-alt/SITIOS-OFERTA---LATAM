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

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Top Bar Announcement */}
      <div className="bg-background text-primary py-3 text-center text-xs md:text-sm font-bold tracking-[0.2em] border-b border-primary/30 uppercase">
        ★ OFERTA DE LANÇAMENTO · EDIÇÃO LIMITADA 2026 ★
      </div>

      <Hero />
      <div className="space-y-0">
        <Problems />
        <SamplesCarousel />
        <ProductOverview />
        <Benefits />
        <WhatYouGet />
        <Testimonials />
        <Bonus />
        <div className="pt-12">
          <Pricing />
        </div>
        <AboutCreator />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
