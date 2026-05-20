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
      setVisible(false);
      
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 500);

      setTimeout(() => {
        setVisible(false);
      }, 4500);

    }, 6000);

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
      <div className="bg-secondary/95 backdrop-blur-md border border-primary/30 shadow-2xl rounded-xl p-2.5 flex items-center gap-3 max-w-[220px]">
        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 border border-primary/20">
          <ShoppingCart className="w-4 h-4 text-primary" />
        </div>
        <div className="flex flex-col min-w-0">
          <p className="text-[10px] text-white leading-tight truncate">
            <span className="font-bold">{person.name}</span> de {person.city}
          </p>
          <p className="text-[9px] text-white/70 font-medium truncate">
            Acaba de comprar el <span className="text-primary font-bold">Plan Rural</span>
          </p>
          <p className="text-[7px] text-primary/70 mt-0.5 uppercase tracking-tighter font-bold">
            Hace unos segundos
          </p>
        </div>
      </div>
    </div>
  );
}
