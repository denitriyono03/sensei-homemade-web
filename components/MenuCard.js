import { formatRupiah, orderLink } from "../lib/site";

export default function MenuCard({ menu }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-card transition hover:shadow-warm">
      <img src={menu.image} alt={menu.name} className="h-48 w-full object-cover" loading="lazy" />
      <div className="p-4">
        <div className="flex flex-wrap gap-1">
          <span className="rounded-full bg-cream-dark px-2 py-1 text-xs font-semibold text-cocoa">{menu.category}</span>
          {menu.tags.map((t) => (
            <span key={t} className="rounded-full bg-terracotta/10 px-2 py-1 text-xs font-medium text-terracotta-dark">{t}</span>
          ))}
        </div>
        <h3 className="mt-3 font-serif text-lg font-bold text-cocoa">{menu.name}</h3>
        <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-cocoa-soft">{menu.description}</p>
        <p className="mt-2 text-xs text-cocoa-soft">{menu.serves}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-terracotta">{formatRupiah(menu.price)}</span>
          <a
            href={orderLink(menu.name)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-white hover:bg-terracotta-dark"
          >
            Pesan
          </a>
        </div>
      </div>
    </article>
  );
}
