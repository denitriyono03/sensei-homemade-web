"use client";

import { useMemo, useState } from "react";
import MenuCard from "./MenuCard";

export default function CatalogClient({ menus, categories }) {
  const [category, setCategory] = useState("Semua");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return menus.filter((m) => {
      const byCat = category === "Semua" || m.category === category;
      const byQuery = (m.name + " " + m.description + " " + m.tags.join(" ")).toLowerCase().includes(query.toLowerCase());
      return byCat && byQuery;
    });
  }, [menus, category, query]);

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${category === c ? "bg-terracotta text-white" : "bg-white text-cocoa shadow-card"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari menu, misal rendang…"
          className="rounded-full border border-cream-deeper bg-white px-4 py-2 text-sm outline-none focus:border-terracotta md:w-72"
        />
      </div>

      <p className="mt-6 text-sm text-cocoa-soft">Menampilkan {filtered.length} dari {menus.length} menu.</p>
      {filtered.length === 0 ? (
        <p className="mt-6 rounded-2xl bg-white p-6 text-center text-cocoa-soft shadow-card">Menu tidak ditemukan. Coba kata kunci atau kategori lain.</p>
      ) : (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => <MenuCard key={m.id} menu={m} />)}
        </div>
      )}
    </div>
  );
}
