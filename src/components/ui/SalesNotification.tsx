'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

const notifications = [
  { name: 'Juan P.', city: 'Bogotá', country: 'CO' },
  { name: 'María G.', city: 'Ciudad de México', country: 'MX' },
  { name: 'Carlos R.', city: 'Buenos Aires', country: 'AR' },
  { name: 'Elena S.', city: 'Santiago', country: 'CL' },
  { name: 'Ricardo M.', city: 'Lima', country: 'PE' },
  { name: 'Sofía V.', city: 'Quito', country: 'EC' },
  { name: 'Diego L.', city: 'Montevideo', country: 'UY' },
  { name: 'Lucía F.', city: 'Asunción', country: 'PY' },
  { name: 'Fernando T.', city: 'San José', country: 'CR' },
  { name: 'Gabriela H.', city: 'Guatemala', country: 'GT' },
];

export default function SalesNotification() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Começa escondendo para trocar o dado
      setVisible(false);
      
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 500); // Pequeno delay antes de mostrar o próximo

      // Esconde após 4 segundos
      setTimeout(() => {
        setVisible(false);
      }, 4500);

    }, 6000); // Ciclo total de 6 segundos

    // Primeira exibição após 2 segundos
    const firstTimeout = setTimeout(() => setVisible(true), 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(firstTimeout);
    };
  }, []);

  const person = notifications[current];

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 z-[100] transition-all duration-500 transform",
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      )}
    >
      <div className="bg-white/95 backdrop-blur-sm border border-primary/20 shadow-2xl rounded-2xl p-4 flex items-center gap-4 max-w-[280px]">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
          <ShoppingCart className="w-5 h-5 text-primary" />
        </div>
        <div className="flex flex-col">
          <p className="text-[12px] text-zinc-900 leading-tight">
            <span className="font-bold">{person.name}</span> de {person.city}, {person.country}
          </p>
          <p className="text-[10px] text-zinc-500 font-medium">
            Acaba de comprar el <span className="text-primary font-bold">Rural Planner</span>
          </p>
          <p className="text-[8px] text-primary/70 mt-1 uppercase tracking-tighter font-bold">
            Hace unos segundos
          </p>
        </div>
      </div>
    </div>
  );
}
