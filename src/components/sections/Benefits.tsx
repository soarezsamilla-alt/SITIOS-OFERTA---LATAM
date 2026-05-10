
const benefits = [
  { val: '+100', title: 'Proyectos Completos', desc: 'Planos técnicos dimensionados listos para que ejecutes' },
  { val: '0,5-5', title: 'Hectáreas Cubiertas', desc: 'Tienes proyecto para tu tamaño de terreno, sin importar cuál sea' },
  { val: '7', title: 'Vocaciones Productivas', desc: 'Café, hortifruti, ganadería, piscicultura, agroforestería y más' },
  { val: '5', title: 'Regiones Climáticas', desc: 'Adaptados a Tropical Húmedo, Sabana, Semiárido, Templado y Andino' },
  { val: '$3K', title: 'Ahorrados', desc: 'Equivalente a lo que cobraría un ingeniero agrónomo particular' },
  { val: '$2.8K', title: 'Ingresos Mensuales', desc: 'Proyección realista basada en casos validados de productores reales' },
  { val: '100%', title: 'Medidas Probadas', desc: 'Validadas en campo por más de 12 mil productores latinoamericanos' },
  { val: 'Paso', title: 'A Paso Claro', desc: 'No necesitas ser técnico, solo sigue los planos y aplícalos' },
  { val: '∞', title: 'Acceso Vitalicio', desc: 'Inmediato después de la compra + actualizaciones futuras gratuitas' },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Proyectos Altamente Dimensionados, <span className="text-primary italic">No Ideas Vagas</span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Cada uno de los +100 proyectos fue diseñado como un plano profesional, con medidas reales en metros, división de zonas productivas y diseños de infraestructuras.
          </p>
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
