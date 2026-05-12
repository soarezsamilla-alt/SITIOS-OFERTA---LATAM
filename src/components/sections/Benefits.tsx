import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const benefits = [
  { val: '+100', title: 'Projetos Completos', desc: 'Plantas técnicas dimensionadas prontas para você executar' },
  { val: '0,5-5', title: 'Hectares Cobertos', desc: 'Você tem projeto para o tamanho do seu terreno, não importa qual seja' },
  { val: '7', title: 'Vocações Produtivas', desc: 'Café, hortifruti, pecuária, piscicultura, agrofloresta e mais' },
  { val: '5', title: 'Regiões Climáticas', desc: 'Adaptados a Tropical Úmido, Savana, Semiárido, Temperado e Andino' },
  { val: 'R$15k', title: 'Economizados', desc: 'Equivalente ao que cobraria um engenheiro agrônomo particular' },
  { val: 'R$14k', title: 'Renda Mensal', desc: 'Projeção realista baseada em casos validados de produtores reais' },
  { val: '100%', title: 'Medidas Testadas', desc: 'Validadas em campo por mais de 12 mil produtores latino-americanos' },
  { val: 'Passo', title: 'a Passo Claro', desc: 'Não precisa ser técnico, basta seguir as plantas e aplicá-las' },
  { val: '∞', title: 'Acesso Vitalício', desc: 'Imediato após a compra + atualizações futuras gratuitas' },
];

export default function Benefits() {
  const problemsMockup = PlaceHolderImages.find(img => img.id === 'problems-mockup');

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Projetos Altamente Dimensionados, <span className="text-primary italic">Não Ideias Vagas</span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto mb-10">
            Cada um dos +100 projetos foi desenhado como uma planta profissional, com medidas reais em metros, divisão de zonas produtivas e designs de infraestruturas.
          </p>

          {problemsMockup && (
            <div className="max-w-xl mx-auto mb-12 animate-soft-float">
              <Image
                src={problemsMockup.imageUrl}
                alt={problemsMockup.description}
                width={800}
                height={450}
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                data-ai-hint={problemsMockup.imageHint}
                priority
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-background/40 border border-primary/30 p-10 rounded-2xl text-center hover:scale-[1.03] transition-all duration-300">
              <div className="text-5xl md:text-6xl font-headline font-bold text-primary mb-4 drop-shadow-sm">{benefit.val}</div>
              <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-3">{benefit.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
