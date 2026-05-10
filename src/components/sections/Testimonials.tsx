
const testimonials = [
  {
    text: '"¡Increíble! Pude transformar mis 2 hectáreas en una finca productiva en solo 6 meses. Ya recuperé la inversión del pack 100 veces. Las medidas son exactas."',
    name: 'Carlos Mendoza',
    location: 'Veracruz, México',
    flag: '🇲🇽'
  },
  {
    text: '"Soy nueva en el campo y este pack me salvó. Los planos son muy claros, y ahora tengo café, frutas y huerta funcionando juntos. Todo bien organizado."',
    name: 'Sofia Ramírez',
    location: 'Antioquia, Colombia',
    flag: '🇨🇴'
  },
  {
    text: '"Por menos de 15 dólares recibí más valor que con mi último consultor de 2.500 dólares. La calidad del material es excepcional y aplicable al instante."',
    name: 'Diego Fernández',
    location: 'Mendoza, Argentina',
    flag: '🇦🇷'
  },
  {
    text: '"Tengo una pequeña finca de 1 hectárea en los Andes y encontré proyectos adaptados a mi región. Ya estoy generando 1.500 dólares mensuales."',
    name: 'María González',
    location: 'Cusco, Perú',
    flag: '🇵🇪'
  },
  {
    text: '"Era escéptico al principio, pero los proyectos son realmente profesionales. Mi parcela está organizada como una empresa rural ahora."',
    name: 'Juan Castro',
    location: 'Valparaíso, Chile',
    flag: '🇨🇱'
  },
  {
    text: '"Perfecto para principiantes. Las medidas son exactas y todo viene explicado paso a paso. Ya recomendé a 5 amigos y todos están encantados."',
    name: 'Lucia Vargas',
    location: 'Pichincha, Ecuador',
    flag: '🇪🇨'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Quien Compró, <span className="text-primary italic">Recomienda</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mira lo que productores rurales que ya están utilizando dicen sobre el material.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-secondary/20 p-8 rounded-2xl border-l-4 border-l-primary flex flex-col justify-between">
              <p className="text-white/80 italic leading-relaxed mb-8 text-lg">{t.text}</p>
              <div className="flex items-center gap-4 border-t border-primary/20 pt-6">
                <span className="text-4xl">{t.flag}</span>
                <div>
                  <div className="font-bold text-primary">{t.name}</div>
                  <div className="text-xs text-white/50 tracking-widest uppercase">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
