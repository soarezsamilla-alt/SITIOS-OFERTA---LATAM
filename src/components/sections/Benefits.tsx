'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const benefits = [
  { 
    val: '+100', 
    title: 'PROYECTOS COMPLETOS', 
    desc: 'Planos técnicos dimensionados listos para que los ejecutes',
    imgId: 'benefit-1'
  },
  { 
    val: '0,5-5', 
    title: 'HECTÁREAS CUBIERTAS', 
    desc: 'Hay un proyecto para el tamaño de tu terreno, sin importar cuál sea',
    imgId: 'benefit-2'
  },
  { 
    val: '7', 
    title: 'VOCACIONES PRODUCTIVAS', 
    desc: 'Café, frutas y hortalizas, ganadería, piscicultura, agroforestería y más',
    imgId: 'benefit-3'
  },
  { 
    val: '5', 
    title: 'REGIONES CLIMÁTICAS', 
    desc: 'Adaptados para Tropical Húmedo, Sabana, Semiárido, Templado y Andino',
    imgId: 'benefit-4'
  },
  { 
    val: '$3K', 
    title: 'AHORRADOS', 
    desc: 'Equivalente a lo que cobraría un ingeniero agrónomo particular',
    imgId: 'benefit-5'
  },
  { 
    val: '$2.8K', 
    title: 'INGRESO MENSUAL POSIBLE', 
    desc: 'Proyección realista basada en casos validados de productores reales',
    imgId: 'benefit-6'
  },
  { 
    val: '100%', 
    title: 'MEDIDAS TESTEADAS', 
    desc: 'Validadas en campo por más de 12 mil productores latinoamericanos',
    imgId: 'benefit-7'
  },
  { 
    val: 'PASO', 
    title: 'A PASO CLARO', 
    desc: 'No necesitas ser técnico, solo sigue los planos y aplica',
    imgId: 'benefit-8'
  },
  { 
    val: '∞', 
    title: 'ACCESO DE POR VIDA', 
    desc: 'Inmediato tras la compra + recibe actualizaciones futuras gratuitas',
    imgId: 'benefit-9'
  },
];

export default function Benefits() {
  const infiniteBenefits = [...benefits, ...benefits];

  return (
    <section className="pt-12 pb-12 bg-background overflow-hidden border-t border-border/30">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Proyectos Altamente Dimensionados, <span className="text-primary italic">No Ideas Vagas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto font-body leading-relaxed">
            Cada uno de los +100 proyectos fue diseñado como un plano profesional, con medidas reales en metros, división de zonas productivas, ubicación de casa, galpones, tanques, cultivos y animales.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-5 py-4">
          {infiniteBenefits.map((benefit, idx) => {
            const imageData = PlaceHolderImages.find(img => img.id === benefit.imgId);
            return (
              <div 
                key={idx} 
                className="flex-none w-[320px] md:w-[420px]"
              >
                <div className="bg-[#0F2F1E] border border-primary/40 rounded-[16px] overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(201,169,97,0.2)]">
                  <div className="relative h-[180px] md:h-[220px] w-full bg-secondary/20">
                    {imageData ? (
                      <Image
                        src={imageData.imageUrl}
                        alt={imageData.description}
                        fill
                        className="object-cover"
                        data-ai-hint={imageData.imageHint}
                        sizes="(max-width: 768px) 320px, 420px"
                      />
                    ) : (
                      <div className="w-full h-full gold-gradient flex items-center justify-center">
                        <span className="text-[#0F2F1E] font-bold text-sm uppercase">Imagen no disponible</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col items-center text-center flex-1 whitespace-normal">
                    <div className="font-headline font-bold text-primary text-[36px] md:text-[48px] leading-tight mb-2">
                      {benefit.val}
                    </div>
                    <h3 className="text-white font-bold uppercase tracking-[1px] text-sm md:text-base mb-3 font-body">
                      {benefit.title}
                    </h3>
                    <p className="text-white/75 text-xs md:text-sm leading-relaxed font-body">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
