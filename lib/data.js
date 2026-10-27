// ============================================================
// LAYER ABSTRAKSI DATA — satu-satunya tempat UI mengambil data.
// ------------------------------------------------------------
// Hari ini: data dibaca dari file JSON lokal di /data.
// Besok: ganti isi fungsi-fungsi di bawah ini dengan fetch/axios
// ke backend asli (misalnya fetch(`${API_URL}/menus`)).
// UI, halaman, dan komponen TIDAK perlu diubah sama sekali,
// karena mereka hanya memanggil fungsi-fungsi ini dan bentuk
// datanya tetap sama.
// ============================================================
import menuData from "../data/menu.json";
import blogData from "../data/blogs.json";
import aboutData from "../data/about.json";

// Simulasi async agar pergantian ke API semudah mengganti body fungsi.
async function fromLocal(data) {
  return data;
}

export async function getMenus() {
  const data = await fromLocal(menuData);
  return data.items;
}

export async function getMenuCategories() {
  const menus = await getMenus();
  return ["Semua", ...Array.from(new Set(menus.map((m) => m.category)))];
}

export async function getFeaturedMenus() {
  const menus = await getMenus();
  return menus.filter((m) => m.isFeatured);
}

export async function getBlogs() {
  const data = await fromLocal(blogData);
  return data.posts;
}

export async function getBlogBySlug(slug) {
  const posts = await getBlogs();
  return posts.find((p) => p.slug === slug) || null;
}

export async function getAbout() {
  return fromLocal(aboutData);
}
