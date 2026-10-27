import Link from "next/link";
import { getFeaturedMenus, getBlogs } from "../lib/data";
import MenuCard from "../components/MenuCard";
import BlogCard from "../components/BlogCard";
import { whatsappLink } from "../lib/site";

export default async function Home() {
  const featured = await getFeaturedMenus();
  const blogs = await getBlogs();

  return (
    <div>
      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2">
        <div>
          <p className="inline-block rounded-full bg-terracotta/10 px-3 py-1 text-sm font-semibold text-terracotta-dark">Dimasak harian • Bahan pasar pagi</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-cocoa md:text-5xl">
            Masakan rumah yang hangat, sampai ke meja keluarga.
          </h1>
          <p className="mt-4 leading-relaxed text-cocoa-soft">
            Dari dapur Chef Sensei: rendang 6 jam, ayam goreng lengkuas, nasi liwet,
            dan menu rumahan lainnya. Pesan lewat WhatsApp, diantar di hari yang sama.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/catalog" className="rounded-full bg-terracotta px-6 py-3 font-semibold text-white shadow-warm hover:bg-terracotta-dark">Lihat Katalog Menu</Link>
            <a href={whatsappLink("Halo Sensei Homemade, saya mau pesan menu hari ini.")} target="_blank" rel="noreferrer" className="rounded-full border-2 border-terracotta px-6 py-3 font-semibold text-terracotta hover:bg-terracotta hover:text-white">Pesan via WhatsApp</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-2xl bg-white p-3 shadow-card"><p className="font-serif text-2xl font-bold text-terracotta">120+</p><p className="text-xs text-cocoa-soft">Resep keluarga</p></div>
            <div className="rounded-2xl bg-white p-3 shadow-card"><p className="font-serif text-2xl font-bold text-terracotta">25rb+</p><p className="text-xs text-cocoa-soft">Porsi terantar</p></div>
            <div className="rounded-2xl bg-white p-3 shadow-card"><p className="font-serif text-2xl font-bold text-terracotta">4,9/5</p><p className="text-xs text-cocoa-soft">Rating pelanggan</p></div>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop" alt="Hidangan Sensei Homemade" className="h-96 w-full rounded-3xl object-cover shadow-warm" />
      </section>

      {/* HIGHLIGHT PRODUK */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold text-cocoa">Menu Unggulan Hari Ini</h2>
            <p className="mt-1 text-cocoa-soft">Pilihan yang paling sering dipesan pelanggan kami.</p>
          </div>
          <Link href="/catalog" className="hidden font-semibold text-terracotta md:block">Lihat semua →</Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((m) => <MenuCard key={m.id} menu={m} />)}
        </div>
      </section>

      {/* CARA PESAN */}
      <section className="bg-cream-dark/60 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-serif text-3xl font-bold text-cocoa">Cara Pesan, Semudah Masak di Rumah</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 text-center shadow-card"><p className="text-3xl">🍽️</p><h3 className="mt-3 font-bold">1. Pilih Menu</h3><p className="mt-1 text-sm text-cocoa-soft">Jelajahi katalog, pilih menu dan jumlahnya.</p></div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-card"><p className="text-3xl">💬</p><h3 className="mt-3 font-bold">2. Pesan via WhatsApp</h3><p className="mt-1 text-sm text-cocoa-soft">Tombol Pesan langsung membuka WhatsApp dengan pesan yang sudah terisi.</p></div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-card"><p className="text-3xl">🚗</p><h3 className="mt-3 font-bold">3. Diantar Hangat</h3><p className="mt-1 text-sm text-cocoa-soft">Dimasak di hari yang sama dan diantar hangat ke rumahmu.</p></div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-serif text-3xl font-bold text-cocoa">Cerita dari Dapur</h2>
        <p className="mt-1 text-cocoa-soft">Klik salah satu untuk membaca cerita lengkapnya.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, 3).map((p) => <BlogCard key={p.slug} post={p} />)}
        </div>
      </section>
    </div>
  );
}
