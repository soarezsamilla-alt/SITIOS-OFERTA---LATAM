
const testimonials = [
  {
    text: '"Incrível! Pude transformar meus 2 hectares em uma fazenda produtiva em apenas 6 meses. Já recuperei o investimento do pack 100 vezes. As medidas são exatas."',
    name: 'Carlos Mendoza',
    location: 'Veracruz, México',
    flag: '🇲🇽'
  },
  {
    text: '"Sou nova no campo e este pack me salvou. As plantas são muito claras, e agora tenho café, frutas e horta funcionando juntos. Tudo bem organizado."',
    name: 'Sofia Ramírez',
    location: 'Antioquia, Colômbia',
    flag: '🇨🇴'
  },
  {
    text: '"Por menos de 100 reais recebi mais valor do que com meu último consultor de 12.000 reais. A qualidade do material é excepcional e aplicável instantaneamente."',
    name: 'Diego Fernández',
    location: 'Mendoza, Argentina',
    flag: '🇦🇷'
  },
  {
    text: '"Tenho uma pequena fazenda de 1 hectare nos Andes e encontrei projetos adaptados à minha região. Já estou gerando R$ 7.500 mensais."',
    name: 'María González',
    location: 'Cusco, Peru',
    flag: '🇵🇪'
  },
  {
    text: '"Era cético no início, mas os projetos são realmente profissionais. Minha parcela está organizada como uma empresa rural agora."',
    name: 'Juan Castro',
    location: 'Valparaíso, Chile',
    flag: '🇨🇱'
  },
  {
    text: '"Perfeito para iniciantes. As medidas são exatas e tudo vem explicado passo a passo. Já recomendei a 5 amigos e todos estão encantados."',
    name: 'Lucia Vargas',
    location: 'Pichincha, Equador',
    flag: '🇪🇨'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Quem Comprou, <span className="text-primary italic">Recomenda</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que produtores rurais que já estão utilizando dizem sobre o material.
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
