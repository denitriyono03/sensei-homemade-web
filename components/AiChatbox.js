"use client";

import { useRef, useState } from "react";
import { SITE, whatsappLink } from "../lib/site";

// ============================================================
// SIMULASI AI SENSEI — chatbox lokal, tanpa API eksternal.
// Logika jawaban berbasis kata kunci, mudah diganti dengan
// pemanggilan API AI asli di kemudian hari (ganti fungsi
// getSenseiReply saja, UI tidak perlu diubah).
// ============================================================
function getSenseiReply(text) {
  const q = text.toLowerCase();
  if (q.includes("rendang") || q.includes("best seller") || q.includes("favorit") || q.includes("rekomendasi")) {
    return "Kalau baru pertama kali, saya rekomendasikan Rendang Sapi Slow-Cook (Rp85.000) dan Ayam Goreng Lengkuas (Rp48.000). Keduanya best seller dan dimasak harian. Mau saya bantu pesankan lewat WhatsApp?";
  }
  if (q.includes("harga") || q.includes("murah") || q.includes("menu")) {
    return "Harga menu kami mulai Rp25.000 untuk Es Cendol, Rp35.000-55.000 untuk menu harian, dan Rp78.000-85.000 untuk menu signature seperti Ikan Bakar Jimbaran dan Rendang. Katalog lengkapnya ada di halaman Katalog, ya.";
  }
  if (q.includes("pesan") || q.includes("order") || q.includes("beli")) {
    return "Pemesanan paling cepat lewat WhatsApp. Sebutkan menu dan jumlahnya, lalu kami konfirmasi stok dan ongkirnya. Pesan sebelum pukul 15.00 untuk pengiriman di hari yang sama.";
  }
  if (q.includes("antar") || q.includes("delivery") || q.includes("kirim") || q.includes("ongkir")) {
    return "Kami antar di area kota dan sekitarnya. Ongkir dihitung dari jarak dan dikonfirmasi lewat WhatsApp sebelum pesanan diproses, jadi tidak ada biaya kejutan.";
  }
  if (q.includes("pedas") || q.includes("spicy")) {
    return "Yang pedas: Rendang Sapi (pedas sedang), Ikan Bakar + Sambal Matah, dan Telur Balado. Kalau tidak suka pedas, pilih Sayur Lodeh + Tempe Bacem atau Ayam Goreng Lengkuas tanpa sambal.";
  }
  if (q.includes("vegetarian") || q.includes("sayur") || q.includes("tidak daging")) {
    return "Menu sayur kami ada Sayur Lodeh + Tempe Bacem (Rp38.000) dan Tumis Buncis + Telur Balado (Rp35.000). Untuk vegetarian murni, beri tahu kami lewat WhatsApp agar telurnya bisa diganti lauk nabati lain.";
  }
  if (q.includes("buka") || q.includes("jam") || q.includes("hari")) {
    return "Kami buka Senin-Sabtu pukul 08.00-20.00 WIB. Hari Minggu khusus pre-order. Dapur memasak setiap hari, jadi menu selalu baru.";
  }
  if (q.includes("halo") || q.includes("hai") || q.includes("selamat")) {
    return "Halo! Saya AI Sensei, asisten dapur Sensei Homemade. Saya bisa bantu rekomendasi menu, info harga, dan cara pesan. Mau makan apa hari ini?";
  }
  return "Pertanyaan yang bagus! Untuk jawaban paling akurat soal stok hari ini dan ongkir, tim kami di WhatsApp bisa membantu langsung. Sementara itu, rekomendasi saya hari ini: Rendang Sapi Slow-Cook atau Nasi Liwet Solo. Mau saya arahkan ke WhatsApp?";
}

const SUGGESTIONS = [
  "Rekomendasi menu best seller?",
  "Berapa harga menunya?",
  "Bagaimana cara pesan?",
  "Ada menu pedas apa?",
];

export default function AiChatbox() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Halo! Saya AI Sensei. Mau rekomendasi menu, cek harga, atau cara pesan? Silakan tanya, saya bantu." },
  ]);
  const bottomRef = useRef(null);

  function send(text) {
    const value = (text ?? input).trim();
    if (!value) return;
    setMessages((m) => [...m, { role: "user", text: value }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "ai", text: getSenseiReply(value) }]);
      setTyping(false);
    }, 700);
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Buka chat AI Sensei"
        title="Chat dengan AI Sensei"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-2xl text-white shadow-warm hover:bg-terracotta-dark"
      >
        {open ? "×" : "💬"}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[480px] w-[calc(100vw-40px)] max-w-sm flex-col overflow-hidden rounded-2xl bg-white shadow-warm">
          <div className="bg-cocoa px-4 py-3 text-white">
            <p className="font-serif text-lg font-bold">AI Sensei</p>
            <p className="text-xs text-cream/80">Asisten dapur Sensei Homemade • Simulasi chat</p>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-cream p-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${msg.role === "user" ? "bg-terracotta text-white" : "bg-white shadow-card text-cocoa"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && <p className="text-xs italic text-cocoa-soft">AI Sensei sedang mengetik…</p>}
            <div ref={bottomRef} />
          </div>

          <div className="flex flex-wrap gap-1 border-t border-cream-deeper bg-white px-3 pt-2">
            {SUGGESTIONS.map((s) => (
              <button key={s} onClick={() => send(s)} className="rounded-full bg-cream-dark px-2 py-1 text-xs font-medium text-cocoa hover:bg-cream-deeper">
                {s}
              </button>
            ))}
          </div>

          <form
            className="flex gap-2 border-t border-cream-deeper p-3"
            onSubmit={(e) => { e.preventDefault(); send(); }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanya AI Sensei…"
              className="flex-1 rounded-full border border-cream-deeper px-3 py-2 text-sm outline-none focus:border-terracotta"
            />
            <button type="submit" className="rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-white hover:bg-terracotta-dark">
              Kirim
            </button>
          </form>
          <a href={whatsappLink("Halo Sensei Homemade, saya mau pesan.")} target="_blank" rel="noreferrer" className="border-t border-cream-deeper bg-cream py-2 text-center text-xs font-semibold text-terracotta">
            Lanjut pesan lewat WhatsApp →
          </a>
        </div>
      )}
    </>
  );
}
