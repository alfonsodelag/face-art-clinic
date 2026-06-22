import { posts as fallbackPosts, type BlogPost } from "@/content/blog";
import { sanityEnabled, sanitySettings } from "@/config/sanity";

type SanityBodySection = {
  heading?: string;
  paragraphs?: string[];
};

type SanityPost = {
  title?: string;
  excerpt?: string;
  date?: string;
  image?: string;
  imageAlt?: string;
  imageCredit?: string;
  slug?: string;
  author?: string;
  readingTime?: string;
  category?: string;
  tags?: string[];
  body?: SanityBodySection[];
};

const fallbackImage = "/images/blog/blog-1.jpg";

const blogQuery = `*[_type == "post" && defined(slug.current) && (site == "art-clinic-panama" || market == "Panama")] | order(coalesce(date, publishedAt, _createdAt) desc) {
  title,
  excerpt,
  "date": coalesce(date, publishedAt, _createdAt),
  "image": coalesce(mainImage.asset->url, imageUrl),
  "imageAlt": coalesce(mainImage.alt, imageAlt, title),
  "imageCredit": coalesce(mainImage.credit, imageCredit, ""),
  "slug": slug.current,
  author,
  readingTime,
  category,
  tags,
  "body": bodySections[]{heading, paragraphs}
}`;

function toBlogPost(post: SanityPost): BlogPost | null {
  if (!post.title || !post.slug) return null;

  const image = post.image || fallbackImage;
  const date = post.date ? post.date.slice(0, 10) : new Date().toISOString().slice(0, 10);
  const body = (post.body ?? [])
    .map((section) => ({
      heading: section.heading ?? "",
      paragraphs: (section.paragraphs ?? []).filter(Boolean)
    }))
    .filter((section) => section.heading && section.paragraphs.length > 0);

  return {
    title: post.title,
    excerpt: post.excerpt ?? "Articulo educativo de Art Clinic Panama.",
    date,
    image,
    imageAlt: post.imageAlt ?? post.title,
    imageCredit: post.imageCredit ?? "",
    slug: post.slug,
    author: post.author ?? "Art Clinic Panama",
    readingTime: post.readingTime ?? "5 min de lectura",
    category: post.category ?? "Medicina estetica",
    tags: post.tags ?? [],
    sanity: {
      _type: "post",
      language: "es",
      market: "Panama",
      imageAssetUrl: image,
      imageAlt: post.imageAlt ?? post.title
    },
    body: body.length
      ? body
      : [
          {
            heading: "Articulo en preparacion",
            paragraphs: [post.excerpt ?? "Este contenido sera actualizado desde Sanity Studio."]
          }
        ]
  };
}

async function fetchSanityPosts(): Promise<BlogPost[]> {
  if (!sanityEnabled) return [];

  const host = sanitySettings.useCdn ? "apicdn" : "api";
  const url = new URL(
    `https://${sanitySettings.projectId}.${host}.sanity.io/v${sanitySettings.apiVersion}/data/query/${sanitySettings.dataset}`
  );
  url.searchParams.set("query", blogQuery);

  try {
    const response = await fetch(url, {
      headers: sanitySettings.token ? { Authorization: `Bearer ${sanitySettings.token}` } : undefined
    });
    if (!response.ok) return [];

    const payload = (await response.json()) as { result?: SanityPost[] };
    return (payload.result ?? []).map(toBlogPost).filter((post): post is BlogPost => Boolean(post));
  } catch {
    return [];
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const sanityPosts = await fetchSanityPosts();
  return sanityPosts.length ? sanityPosts : fallbackPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
}
