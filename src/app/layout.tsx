
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rural Planner | Pack +100 Projetos de Fazendas Produtivas',
  description: 'A coleção definitiva de projetos de fazendas produtivas da América Latina. +100 plantas dimensionadas com medidas, divisões e designs prontos para executar.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
