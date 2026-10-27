import Link from "next/link";
import { SITE } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-cocoa text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-bold">Sensei Homemade</p>
          <p className="mt-2 text-sm leading-relaxed text-cream/80">{SITE.tagline}</p>
          <p className="mt-3 text-sm text-cream/80">WhatsApp: {SITE.whatsappDisplay}</p>
          <p className="text-sm text-cream/80">{SITE.hours}</p>
        </div>
        <div>
          <p className="font-semibold">Jelajahi</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li><Link href="/" className="hover:text-amberwarm-light">Beranda</Link></li>
            <li><Link href="/catalog" className="hover:text-amberwarm-light">Katalog Menu</Link></li>
            <li><Link href="/about" className="hover:text-amberwarm-light">Tentang Kami</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Catatan</p>
          <p className="mt-3 text-sm leading-relaxed text-cream/80">
            Semua menu dimasak harian dalam porsi rumahan. Pesan sebelum pukul 15.00
            untuk pengiriman di hari yang sama. Harga dapat berubah sewaktu-waktu,
            harga yang berlaku adalah yang dikonfirmasi lewat WhatsApp.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-cream/70">
        © {new Date().getFullYear()} Sensei Homemade. Dibuat dengan resep keluarga.
      </div>
    </footer>
  );
}
