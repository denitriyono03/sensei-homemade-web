import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-2xl bg-white shadow-card transition hover:shadow-warm">
      <img src={post.image} alt={post.title} className="h-44 w-full object-cover" loading="lazy" />
      <div className="p-4">
        <p className="text-xs font-medium text-terracotta">{post.date} • {post.readingTime} • {post.author}</p>
        <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-cocoa">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-cocoa-soft">{post.excerpt}</p>
        <span className="mt-3 inline-block text-sm font-semibold text-terracotta">Baca selengkapnya →</span>
      </div>
    </Link>
  );
}
