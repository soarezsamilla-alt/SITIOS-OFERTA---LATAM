import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const problems = [
  {
    title: 'Terra Subutilizada',
    description: 'Você tem espaço, mas áreas inteiras ficam ociosas porque não sabe o que fazer com elas.'
  },
  {
    title: 'Renda Vulnerável',
    description: 'Depender de uma única fonte de produção é arriscado — mas diversificar exige planejamento que você não tem.'
  },
  {
    title: 'Consultoria Cara',
    description: 'Contratar um engenheiro agrônomo para fazer o plano do zero custa milhares de reais. E ainda assim vem genérico.'
  },
  {
    title: 'Informação Dispersa',
    description: 'Você busca referências no YouTube e fóruns — mas o que encontra é superficial, sem medidas e sem clareza.'
  }
];

export default function Problems() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Sua Terra Merece um <span className="text-primary italic">Plano Profissional</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            A maioria dos pequenos produtores rurais na América Latina opera muito abaixo do potencial por falta de um mapa claro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, idx) => (
            <Card key={idx} className="p-8 border-l-4 border-l-primary bg-secondary/20 hover:translate-y-[-5px] transition-transform duration-300">
              <h3 className="text-xl font-bold text-primary mb-4">{problem.title}</h3>
              <p className="text-white/80 leading-relaxed">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
