
export default function Footer() {
  return (
    <footer className="bg-black py-16 text-white/50">
      <div className="container mx-auto px-4 text-center">
        <div className="text-3xl font-headline font-bold text-primary mb-2">Rural Planner</div>
        <p className="italic text-sm mb-10">Edição Premium 2026 · Todos os direitos reservados</p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10 text-sm">
          <a href="mailto:suporte@ruralplanner.com" className="hover:text-primary transition-colors flex items-center gap-2">
            📧 suporte@ruralplanner.com
          </a>
          <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
            💬 WhatsApp Suporte
          </a>
        </div>
        
        <p className="text-[10px] max-w-4xl mx-auto leading-relaxed mb-12 uppercase tracking-tighter">
          Este site não é afiliado ao Facebook, Instagram, Google ou qualquer outra plataforma. Os resultados apresentados dependem do esforço e aplicação prática do cliente. A compra inclui apenas os materiais digitais descritos nesta página.
        </p>
        
        <div className="border-t border-white/10 pt-10 flex flex-wrap justify-center gap-8 text-xs font-semibold tracking-widest uppercase">
          <a href="#" className="hover:text-primary transition-colors">Termos e Condições</a>
          <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-primary transition-colors">Política de Reembolso</a>
          <a href="#" className="hover:text-primary transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
}
