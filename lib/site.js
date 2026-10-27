// ============================================================
// Konfigurasi situs terpusat. Ubah di sini saja.
// Nomor WhatsApp: format internasional tanpa tanda +, spasi, atau strip.
// Contoh Indonesia: 62812xxxxxxx
// ============================================================
export const SITE = {
  name: "Sensei Homemade",
  tagline: "Masakan rumah, dimasak harian, hangat sampai ke meja.",
  whatsappNumber: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  hours: "Senin - Sabtu, 08.00 - 20.00 WIB",
};

export function whatsappLink(message) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function orderLink(menuName) {
  return whatsappLink(
    `Halo Sensei Homemade, saya mau pesan ${menuName} 1 porsi. Terima kasih!`
  );
}

export function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
