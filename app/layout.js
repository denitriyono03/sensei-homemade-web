import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AiChatbox from "../components/AiChatbox";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata = {
  title: "Sensei Homemade — Masakan Rumah, Dimasak Harian",
  description: "Platform penjualan makanan masakan rumah dari Chef Sensei. Pesan lewat WhatsApp, diantar hangat setiap hari.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <AiChatbox />
      </body>
    </html>
  );
}
