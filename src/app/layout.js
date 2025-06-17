import Topo from "@/components/Topo";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topo/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}