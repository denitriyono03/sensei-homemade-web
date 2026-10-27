import Link from "next/link";
import { SITE, whatsappLink } from "../lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-cream-deeper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-xl font-bold text-cream">S</span>
          <span className="leading-tight">
            <span className="block font-serif text-xl font-bold text-cocoa">Sensei Homemade</span>
            <span className="block text-xs text-cocoa-soft">Masakan rumah, hangat setiap hari</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-cocoa md:flex">
          <Link href="/" className="hover:text-terracotta">Beranda</Link>
          <Link href="/catalog" className="hover:text-terracotta">Katalog</Link>
          <Link href="/about" className="hover:text-terracotta">Tentang Kami</Link>
        </nav>
        <a
          href={whatsappLink("Halo Sensei Homemade, saya mau bertanya tentang menu hari ini.")}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-white shadow-warm hover:bg-terracotta-dark"
        >
          Pesan via WhatsApp
        </a>
      </div>
      <nav className="flex justify-center gap-6 border-t border-cream-deeper py-2 text-sm font-medium text-cocoa md:hidden">
        <Link href="/">Beranda</Link>
        <Link href="/catalog">Katalog</Link>
        <Link href="/about">Tentang Kami</Link>
      </nav>
    </header>
  );
}
