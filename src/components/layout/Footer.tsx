
export default function Footer() {
  return (
    <footer className="bg-black py-16 text-white/50">
      <div className="container mx-auto px-4 text-center">
        <div className="text-3xl font-headline font-bold text-primary mb-2">Rural Planner</div>
        <p className="italic text-sm mb-10">Edición Premium 2026 · Todos los derechos reservados</p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10 text-sm">
          <a href="mailto:soporte@ruralplanner.com" className="hover:text-primary transition-colors flex items-center gap-2">
            📧 soporte@ruralplanner.com
          </a>
          <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
            💬 WhatsApp Soporte
          </a>
        </div>
        
        <p className="text-[10px] max-w-4xl mx-auto leading-relaxed mb-12 uppercase tracking-tighter">
          Este sitio no está afiliado a Facebook, Instagram, Google ni a ninguna otra plataforma. Los resultados presentados dependen del esfuerzo y aplicación práctica del cliente. La compra incluye únicamente los materiales digitales descritos en esta página.
        </p>
        
        <div className="border-t border-white/10 pt-10 flex flex-wrap justify-center gap-8 text-xs font-semibold tracking-widest uppercase">
          <a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a>
          <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-primary transition-colors">Política de Reembolso</a>
          <a href="#" className="hover:text-primary transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
