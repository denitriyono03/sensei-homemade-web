import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogs, getBlogBySlug } from "../../../lib/data";
import BlogCard from "../../../components/BlogCard";
import { whatsappLink } from "../../../lib/site";

export async function generateStaticParams() {
  const posts = await getBlogs();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getBlogBySlug(params.slug);
  return { title: post ? `${post.title} — Sensei Homemade` : "Blog — Sensei Homemade" };
}

export default async function BlogDetailPage({ params }) {
  const post = await getBlogBySlug(params.slug);
  if (!post) notFound();
  const all = await getBlogs();
  const related = all.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/" className="font-semibold text-terracotta">← Kembali ke Beranda</Link>
      <p className="mt-6 text-sm font-medium text-terracotta">{post.date} • {post.readingTime} • {post.author}</p>
      <h1 className="mt-2 font-serif text-4xl font-bold leading-tight text-cocoa">{post.title}</h1>
      <img src={post.image} alt={post.title} className="mt-6 h-80 w-full rounded-3xl object-cover shadow-warm" />
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-cocoa">
        {post.content.map((para, i) => <p key={i}>{para}</p>)}
      </div>

      <div className="mt-10 rounded-2xl bg-terracotta/10 p-6 text-center">
        <p className="font-serif text-xl font-bold text-cocoa">Sudah lapar setelah membaca ini?</p>
        <p className="mt-1 text-sm text-cocoa-soft">Lihat katalog dan pesan menu hari ini lewat WhatsApp.</p>
        <div className="mt-4 flex justify-center gap-3">
          <Link href="/catalog" className="rounded-full bg-terracotta px-5 py-2 font-semibold text-white">Lihat Katalog</Link>
          <a href={whatsappLink("Halo Sensei Homemade, saya mau pesan setelah membaca blog.")} target="_blank" rel="noreferrer" className="rounded-full border-2 border-terracotta px-5 py-2 font-semibold text-terracotta">WhatsApp</a>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="font-serif text-2xl font-bold text-cocoa">Cerita Lainnya</h2>
        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => <BlogCard key={p.slug} post={p} />)}
        </div>
      </section>
    </article>
  );
}
