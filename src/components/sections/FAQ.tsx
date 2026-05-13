import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldCheck } from 'lucide-react';

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
        {/* Guarantee Card - Moved inside FAQ section */}
        <div className="max-w-2xl mx-auto bg-card border-2 border-primary/20 rounded-[2rem] p-5 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative overflow-hidden mb-16">
          {/* Decorative background elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 relative z-10">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-secondary border-4 border-primary rounded-2xl flex flex-col items-center justify-center shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
                  <span className="text-4xl md:text-5xl font-headline font-bold text-primary leading-none">7</span>
                  <span className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-[0.3em] mt-1">Dias</span>
                </div>
                <div className="absolute -top-3 -right-3 bg-primary text-secondary p-2 rounded-full shadow-lg scale-110">
                  <ShieldCheck size={20} />
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-left flex-1">
              <h2 className="text-xl md:text-3xl font-headline font-bold text-foreground mb-1 leading-tight">
                Sua Satisfação ou Seu <span className="text-primary italic">Dinheiro de Volta</span>
              </h2>
              <h3 className="text-sm md:text-base font-body font-bold text-primary uppercase tracking-[0.2em] mb-3">
                Garantia Incondicional
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Temos tanta confiança no valor do <strong>Rural Planner</strong> que assumimos todo o risco. Se em até 7 dias você não estiver 100% satisfeito, basta um e-mail para devolvermos cada centavo.
              </p>
              
              <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-4 text-[8px] font-bold uppercase tracking-widest text-primary/70">
                <span className="flex items-center gap-2">★ RISCO ZERO</span>
                <span className="flex items-center gap-2">★ ACESSO IMEDIATO</span>
                <span className="flex items-center gap-2">★ SUPORTE PREMIUM</span>
              </div>
            </div>
          </div>
        </div>

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
