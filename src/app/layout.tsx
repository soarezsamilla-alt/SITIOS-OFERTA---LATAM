
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rural Planner | Pack +100 Proyectos de Fincas Productivas',
  description: 'La colección definitiva de proyectos de fincas productivas de Latinoamérica. +100 planos dimensionados con medidas, divisiones y diseños listos para ejecutar.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
