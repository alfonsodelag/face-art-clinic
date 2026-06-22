import fs from "node:fs";
import vm from "node:vm";

const sourcePath = "src/content/blog.ts";
const outputPath = "sanity/seed-art-clinic-posts.ndjson";

let source = fs.readFileSync(sourcePath, "utf8");
source = source.replace(/^\uFEFF/, "");
source = source.replace(/export type BlogPost = \{[\s\S]*?\n\};\n\n/, "");
source = source.replace("export const posts: BlogPost[] =", "const posts =");

const posts = vm.runInNewContext(`${source}\nposts`, {});
const docs = posts.map((post) => ({
  _id: `post.${post.slug}`,
  _type: "post",
  site: "art-clinic-panama",
  language: "es",
  market: "Panama",
  title: post.title,
  slug: {
    _type: "slug",
    current: post.slug
  },
  excerpt: post.excerpt,
  date: post.date,
  author: post.author,
  readingTime: post.readingTime,
  category: post.category,
  tags: post.tags,
  imageUrl: post.image,
  imageAlt: post.imageAlt,
  imageCredit: post.imageCredit,
  bodySections: post.body.map((section) => ({
    _type: "bodySection",
    heading: section.heading,
    paragraphs: section.paragraphs
  }))
}));

fs.writeFileSync(outputPath, `${docs.map((doc) => JSON.stringify(doc)).join("\n")}\n`, "utf8");
console.log(`Wrote ${docs.length} Sanity posts to ${outputPath}`);
