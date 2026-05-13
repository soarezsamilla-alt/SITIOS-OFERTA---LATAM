import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como recebo os materiais após a compra?",
    a: "Imediatamente após a confirmação do pagamento, você recebe um e-mail com o link de acesso à área de membros, login e senha gerados automaticamente, e todos os PDFs disponíveis para download. Acesso vitalício."
  },
  {
    q: "Preciso ter experiência em agricultura?",
    a: "NÃO! Os projetos vêm prontos para você seguir como um manual visual com plantas técnicas detalhadas e medidas claras. Mesmo quem nunca planejou nada rural consegue aplicar."
  },
  {
    q: "Os projetos servem para qualquer região?",
    a: "SIM! Temos projetos adaptados a 5 regiões climáticas: Tropical Úmido, Sabana Tropical, Semiárido, Temperado e Andino. Cobrimos todo o continente."
  },
  {
    q: "Em qual formato o material é entregue?",
    a: "Você recebe TUDO em formato digital: PDFs de alta resolução, Excel editável (para a calculadora de ROI) e acesso à área de membros."
  }
];

export default function FAQ() {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Perguntas <span className="text-primary italic">Frequentes</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-background/20 border border-primary/20 rounded-xl px-6">
                <AccordionTrigger className="text-white text-lg font-headline hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
