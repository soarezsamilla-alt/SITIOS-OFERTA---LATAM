
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cómo recibo los materiales después de la compra?",
    a: "Inmediatamente después de confirmar el pago, recibes un email con link de acceso al área de miembros, login y contraseña generados automáticamente, y todos los PDFs disponibles para descargar. Acceso vitalicio."
  },
  {
    q: "¿Cuál es la diferencia entre el Básico y el Pro?",
    a: "El PLAN BÁSICO incluye los +100 proyectos. El PLAN PRO incluye todo del básico MÁS los 4 BONOS exclusivos (Construcciones Rurales, Calculadora ROI, Plantas Compañeras, Energía Solar Rural) que valen $59.60 USD por separado."
  },
  {
    q: "¿Necesito tener experiencia en agricultura?",
    a: "¡NO! Los proyectos vienen listos para que los sigas como un manual visual con planos técnicos detallados y medidas claras. Incluso quien nunca planificó nada rural logra aplicar."
  },
  {
    q: "¿Los proyectos sirven para cualquier país de Latinoamérica?",
    a: "¡SÍ! Tenemos proyectos adaptados a 5 regiones climáticas: Tropical Húmedo, Sabana Tropical, Zona Semiárida, Zona Templada y Zona Andina. Cubrimos todo el continente."
  },
  {
    q: "¿En qué formato se entrega el material?",
    a: "Recibes TODO en formato digital: PDFs de alta resolución, Excel editable (para la calculadora de ROI) y acceso al área de miembros."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
