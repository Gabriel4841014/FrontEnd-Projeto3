"use client"
import Topo from "@/components/Topo";
import "./globals.css";
import Footer from "@/components/Footer";
import { usePathname } from 'next/navigation';
import { useEffect } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const getPageTitle = () => {
    switch (pathname) {
      case '/':
        return 'Vivant - Home';
      case '/carrinho':
        return 'Vivant - Carrinho';
      case '/vitrine':
        return 'Vivant - Produtos';
      case '/perfil':
        return 'Vivant - Perfil';
      case '/login':
        return 'Vivant - Login';
      case '/pagamento':
        return 'Vivant - Pagamento';
      default:
        if (pathname.startsWith('/produto/')) {
          return 'Vivant - Detalhes do Produto';
        }
        return 'Vivant';
    }
  };

  useEffect(() => {
    document.title = getPageTitle();
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Vivanti.png" type="image/png" sizes="32x32" />
      </head>
      <body>
        <Topo />
        {children}
        <Footer />
      </body>
    </html>
  );
}