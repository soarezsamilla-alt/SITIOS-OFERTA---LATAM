import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldCheck } from 'lucide-react';

const faqs = [
  {
    q: "¿Cómo recibo los materiales después de la compra?",
    a: "Inmediatamente después de la confirmación del pago, recibirás un correo electrónico con el enlace de acceso al área de miembros, nombre de usuario y contraseña generados automáticamente, y todos los PDFs disponibles para descargar. El acceso es de por vida."
  },
  {
    q: "¿Necesito tener experiencia en agricultura?",
    a: "¡NO! Los proyectos vienen listos para que los sigas como un manual visual con planos técnicos detallados y medidas claras. Incluso alguien que nunca ha planificado nada rural puede aplicarlos."
  },
  {
    q: "¿Los proyectos sirven para cualquier región?",
    a: "¡SÍ! Tenemos proyectos adaptados a 5 regiones climáticas: Tropical Húmedo, Sabana Tropical, Semiárido, Templado y Andino. Cubrimos todo el continente."
  },
  {
    q: "¿En qué formato se entrega el material?",
    a: "Recibes TODO en formato digital: PDFs de alta resolución, Excel editable (para la calculadora de ROI) y acceso al área de miembros."
  }
];

export default function FAQ() {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-card border-2 border-primary/20 rounded-[2rem] p-5 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative overflow-hidden mb-16">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 relative z-10">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-secondary border-4 border-primary rounded-2xl flex flex-col items-center justify-center shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
                  <span className="text-4xl md:text-5xl font-headline font-bold text-primary leading-none">7</span>
                  <span className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-[0.3em] mt-1">Días</span>
                </div>
                <div className="absolute -top-3 -right-3 bg-primary text-secondary p-2 rounded-full shadow-lg scale-110">
                  <ShieldCheck size={20} />
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-left flex-1">
              <h2 className="text-xl md:text-3xl font-headline font-bold text-foreground mb-1 leading-tight">
                Tu Satisfacción o Tu <span className="text-primary italic">Dinero de Vuelta</span>
              </h2>
              <h3 className="text-sm md:text-base font-body font-bold text-primary uppercase tracking-[0.2em] mb-3">
                Garantía Incondicional
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Tenemos tanta confianza en el valor del <strong>Plan Rural</strong> que asumimos todo el riesgo. Si en 7 días no estás 100% satisfecho, basta un correo electrónico para devolverte cada centavo.
              </p>
              
              <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-4 text-[8px] font-bold uppercase tracking-widest text-primary/70">
                <span className="flex items-center gap-2">★ RIESGO CERO</span>
                <span className="flex items-center gap-2">★ ACCESO INMEDIATO</span>
                <span className="flex items-center gap-2">★ SOPORTE PREMIUM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Preguntas <span className="text-primary italic">Frecuentes</span>
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
