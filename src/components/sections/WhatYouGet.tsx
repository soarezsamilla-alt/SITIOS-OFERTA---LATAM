
'use client';

const categories = [
  {
    number: '50',
    title: 'Por Tamanho de Terreno',
    description: 'Projetos dimensionados para 0,5ha, 1ha, 2ha, 3ha e 5ha — 10 projetos para cada tamanho.',
  },
  {
    number: '35',
    title: 'Por Vocação Produtiva',
    description: 'Café, hortifruti, piscicultura, pecuária leiteira, agrofloresta, avicultura, suínos e apicultura.',
  },
  {
    number: '20',
    title: 'Por Região Climática',
    description: 'Tropical Úmido, Savana Tropical, Zona Semiárida, Zona Temperada e Zona Andina — adaptados ao seu clima e país.',
  },
  {
    number: '10',
    title: 'Projetos Especiais',
    description: 'Orgânico certificado, permacultura, agroturismo, agroindústria caseira, energia renovável e mais.',
  }
];

export default function WhatYouGet() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-headline">
            O Que Você Vai <span className="text-primary italic">Receber Hoje</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto font-body leading-relaxed">
            +100 projetos organizados em 4 grandes categorias para você encontrar exatamente o que precisa, seja qual for o seu tamanho, vocação ou região climática.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[30px]">
          {categories.map((item, idx) => {
            return (
              <div 
                key={idx}
                className="bg-card border-t-4 border-t-[#C9A961] rounded-[12px] p-6 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-300 min-h-[220px] justify-center"
              >
                <div className="text-[64px] md:text-[72px] font-bold font-headline text-[#C9A961] leading-none mb-2">
                  {item.number}
                </div>
                
                <h3 className="text-[20px] font-bold font-headline text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-[14px] font-body text-white/60 leading-[1.5]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
