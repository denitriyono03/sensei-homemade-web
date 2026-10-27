import { getAbout } from "../../lib/data";
import { whatsappLink } from "../../lib/site";

export const metadata = { title: "Tentang Kami — Sensei Homemade" };

export default async function AboutPage() {
  const about = await getAbout();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <img src={about.chef.image} alt={about.chef.name} className="h-96 w-full rounded-3xl object-cover shadow-warm" />
        <div>
          <p className="font-semibold text-terracotta">Tentang Kami</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-cocoa">{about.chef.name}</h1>
          <p className="mt-1 font-medium text-cocoa-soft">{about.chef.role}</p>
          <p className="mt-4 leading-relaxed text-cocoa-soft">{about.chef.bio}</p>
          <blockquote className="mt-4 border-l-4 border-terracotta bg-white p-4 font-serif italic text-cocoa shadow-card">
            “{about.chef.quote}”
          </blockquote>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="font-serif text-3xl font-bold text-cocoa">Konsep Masakan Rumah Kami</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-cocoa-soft">{about.concept}</p>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        {about.values.map((v) => (
          <div key={v.title} className="rounded-2xl bg-white p-6 shadow-card">
            <h3 className="font-serif text-xl font-bold text-cocoa">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-cocoa-soft">{v.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 grid grid-cols-2 gap-4 text-center md:grid-cols-4">
        {about.stats.map((s) => (
          <div key={s.label} className="rounded-2xl bg-terracotta/10 p-4">
            <p className="font-serif text-2xl font-bold text-terracotta-dark">{s.value}</p>
            <p className="text-xs text-cocoa-soft">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-3xl bg-cocoa p-8 text-cream">
        <h2 className="font-serif text-2xl font-bold">Jam Buka & Pengiriman</h2>
        <p className="mt-2 text-cream/85">{about.hours}</p>
        <p className="mt-1 text-cream/85">{about.delivery}</p>
        <a href={whatsappLink("Halo Sensei Homemade, saya mau bertanya tentang pengiriman.")} target="_blank" rel="noreferrer" className="mt-5 inline-block rounded-full bg-terracotta px-6 py-3 font-semibold text-white hover:bg-terracotta-dark">
          Tanya via WhatsApp
        </a>
      </section>
    </div>
  );
}
