# Sensei Homemade — Web

Platform penjualan makanan masakan rumah dari Chef Sensei, dibangun dengan
Next.js (App Router) + Tailwind CSS, dengan data dummy JSON lokal dan
static export sehingga bisa di-deploy ke Vercel maupun GitHub Pages.

## Fitur

- **Beranda:** hero, menu unggulan, cara pesan, dan list blog (klik untuk detail).
- **Katalog:** daftar menu lengkap dengan harga, deskripsi, kategori/tag,
  filter kategori, pencarian, dan tombol Pesan per menu.
- **Tentang Kami:** profil Chef Sensei, konsep masakan rumah, nilai unggulan,
  statistik, jam buka, dan pengiriman.
- **WhatsApp Integration:** tombol di header, tiap kartu menu, halaman About,
  dan tombol melayang hijau di kiri bawah. Pesan WhatsApp sudah terisi otomatis
  dengan nama menu yang dipilih.
- **Floating AI Chatbox:** tombol melayang kanan bawah membuka modal chat
  simulasi AI Sensei (rekomendasi menu, harga, cara pesan, pedas, vegetarian,
  jam buka). Logikanya ada di `components/AiChatbox.js` dan mudah diganti
  dengan pemanggilan API AI asli.

## Struktur Project

```
sensei-homemade-web/
├── app/
│   ├── layout.js            # Header, Footer, floating buttons
│   ├── globals.css          # Tailwind + CSS variables tema
│   ├── page.js              # Beranda
│   ├── catalog/page.js      # Katalog (server) + CatalogClient (filter)
│   ├── about/page.js        # Tentang Kami
│   └── blog/[slug]/page.js  # Detail blog (static params)
├── components/              # Header, Footer, MenuCard, BlogCard,
│                            # CatalogClient, AiChatbox, WhatsAppFloat
├── lib/
│   ├── data.js              # LAYER ABSTRAKSI DATA (baca bagian di bawah)
│   └── site.js              # Konfigurasi situs + link WhatsApp + format Rp
├── data/
│   ├── menu.json            # 10 menu dummy
│   ├── blogs.json           # 4 artikel dummy
│   └── about.json           # Profil chef, nilai, statistik
├── tailwind.config.js       # Palet warm amber / terracotta / cream
├── next.config.js           # output: export, basePath GitHub Pages
└── .github/workflows/deploy.yml  # Deploy otomatis ke GitHub Pages
```

## Layer Abstraksi Data (penting)

UI **tidak pernah** membaca file JSON secara langsung. Semua halaman hanya
memanggil fungsi di `lib/data.js`:

```js
getMenus(), getFeaturedMenus(), getMenuCategories(),
getBlogs(), getBlogBySlug(slug), getAbout()
```

Hari ini fungsi-fungsi itu membaca `data/*.json`. Di kemudian hari, ganti
isi fungsi tersebut dengan `fetch`/`axios` ke backend asli dengan bentuk
data yang sama — UI, halaman, dan komponen tidak perlu diubah.

## Tema & Konfigurasi

- Warna terpusat di dua tempat yang saling melengkapi:
  - CSS variables di `app/globals.css` (`--color-cream`, `--color-terracotta`, dll.)
  - Palet Tailwind di `tailwind.config.js` (`cream`, `terracotta`, `amberwarm`, `cocoa`).
- Nomor WhatsApp: ubah `whatsappNumber` dan `whatsappDisplay` di `lib/site.js`.
  Format nomor: internasional tanpa `+`, spasi, atau strip, misalnya `62812xxxxxxx`.

## Menjalankan Lokal

```bash
npm install
npm run dev
# buka http://localhost:3000
```

Build produksi (static export, hasilnya di folder `out/`):

```bash
npm run build
```

## Push ke GitHub (repo: sensei-homemade-web)

> Catatan penting yang sudah terbukti di project sebelumnya: konektor GitHub
> Muse **tidak bisa membuat repository baru** dan **tidak bisa membuat file
> di `.github/workflows/`** (keduanya ditolak 403 karena izin aplikasi yang
> terpasang). Jadi langkah manual di bawah ini bukan opsional untuk dua hal itu.

### 1. Buat repository secara manual

Di github.com, buat repository **kosong** bernama `sensei-homemade-web`
(public atau private, terserah), tanpa README / .gitignore / lisensi awal.

### 2. Push dari komputer kamu (cara tercepat, workflow ikut ter-push)

```bash
cd sensei-homemade-web
git init
git add .
git commit -m "Initial commit: Sensei Homemade web"
git branch -M main
git remote add origin https://github.com/denitriyono03/sensei-homemade-web.git
git push -u origin main
```

Karena push ini dilakukan dengan akun GitHub kamu sendiri (bukan lewat
aplikasi Muse), file `.github/workflows/deploy.yml` ikut ter-push normal.

### 2b. Alternatif: minta Muse push file non-workflow, lalu paste workflow manual

Kalau kamu minta Muse yang push setelah repo kosong dibuat, Muse hanya bisa
push file di luar `.github/workflows/`. Setelah itu, buat file workflow secara
manual di web GitHub pada path `.github/workflows/deploy.yml`, paste isi file
yang sama dari project ini, dan commit ke `main` — persis seperti cara yang
dipakai untuk workflow DocScan sebelumnya.

### 3. Aktifkan GitHub Pages

Di repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
Setiap push ke `main` akan menjalankan workflow `deploy.yml` dan situs akan
tayang di:

```
https://denitriyono03.github.io/sensei-homemade-web/
```

## Deploy ke Vercel (alternatif, lebih mudah)

1. Push project ke GitHub seperti di atas.
2. Di vercel.com, **Add New → Project → Import** repository `sensei-homemade-web`.
3. Framework Preset: Next.js, biarkan pengaturan default, klik **Deploy**.
4. Untuk Vercel, **jangan** set variabel `DEPLOY_TARGET` — `next.config.js`
   hanya memakai `basePath` saat `DEPLOY_TARGET=github` (khusus GitHub Pages).
   Jadi di Vercel situs tayang di root domain tanpa prefix repo.

## Catatan

- Gambar menu/blog memakai foto Unsplash lewat tag `<img>` biasa dengan
  `images.unoptimized: true`, agar static export tidak gagal.
- Chat AI di project ini adalah simulasi berbasis kata kunci di sisi klien,
  bukan AI sungguhan. Ganti `getSenseiReply` di `components/AiChatbox.js`
  dengan pemanggilan API AI saat backend AI sudah siap.
