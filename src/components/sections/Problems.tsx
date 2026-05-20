import { Card } from '@/components/ui/card';

const problems = [
  {
    title: 'Tierra Subutilizada',
    description: 'Tienes espacio, pero áreas enteras quedan ociosas porque no sabes qué hacer con ellas.'
  },
  {
    title: 'Ingresos Vulnerables',
    description: 'Depender de una sola fuente de producción es arriesgado, pero diversificar requiere una planificación que no tienes.'
  },
  {
    title: 'Consultoría Cara',
    description: 'Contratar a un ingeniero agrónomo para hacer un plan desde cero cuesta miles de dólares. Y aun así, suele ser genérico.'
  },
  {
    title: 'Información Dispersa',
    description: 'Buscas referencias en YouTube y foros, pero lo que encuentras es superficial, sin medidas y sin claridad técnica.'
  }
];

export default function Problems() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tu Tierra Merece un <span className="text-primary italic">Plan Profesional</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            La mayoría de los pequeños productores rurales en Latinoamérica operan muy por debajo de su potencial por falta de un mapa claro.
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
