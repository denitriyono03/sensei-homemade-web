import { getMenus, getMenuCategories } from "../../lib/data";
import CatalogClient from "../../components/CatalogClient";

export const metadata = { title: "Katalog Menu — Sensei Homemade" };

export default async function CatalogPage() {
  const menus = await getMenus();
  const categories = await getMenuCategories();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-4xl font-bold text-cocoa">Katalog Menu</h1>
      <p className="mt-2 max-w-2xl leading-relaxed text-cocoa-soft">
        Semua menu dimasak harian. Gunakan filter kategori atau pencarian, lalu ketuk
        Pesan untuk melanjutkan ke WhatsApp dengan pesanan yang sudah terisi.
      </p>
      <div className="mt-8">
        <CatalogClient menus={menus} categories={categories} />
      </div>
    </div>
  );
}
