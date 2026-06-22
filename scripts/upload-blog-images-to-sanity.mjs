import fs from "node:fs";
import { basename } from "node:path";
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-06-22" });
const seedPath = "sanity/seed-art-clinic-posts.ndjson";
const docs = fs
  .readFileSync(seedPath, "utf8")
  .trim()
  .split("\n")
  .filter(Boolean)
  .map((line) => JSON.parse(line));

async function uploadImage(doc) {
  const existing = await client.fetch(
    '*[_id == $id][0]{_id, title, mainImage, imageUrl, imageAlt}',
    { id: doc._id }
  );

  if (!existing) {
    console.warn(`Skipping ${doc._id}: document not found in Sanity`);
    return;
  }

  if (existing.mainImage?.asset?._ref) {
    console.log(`Already has Sanity image asset: ${doc.slug.current}`);
    return;
  }

  const imageUrl = existing.imageUrl || doc.imageUrl;
  if (!imageUrl) {
    console.warn(`Skipping ${doc._id}: no imageUrl found`);
    return;
  }

  console.log(`Downloading ${doc.slug.current} image...`);
  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw new Error(`Failed to download ${imageUrl}: ${response.status} ${response.statusText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const contentType = response.headers.get("content-type") || "image/jpeg";
  const url = new URL(imageUrl);
  const filename = `${doc.slug.current}-${basename(url.pathname) || "image.jpg"}`.replace(/[^a-z0-9._-]/gi, "-");

  console.log(`Uploading ${filename} to Sanity...`);
  const asset = await client.assets.upload("image", buffer, {
    filename,
    contentType
  });

  await client
    .patch(doc._id)
    .set({
      mainImage: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: asset._id
        },
        alt: existing.imageAlt || doc.imageAlt || doc.title,
        credit: ""
      }
    })
    .commit();

  console.log(`Attached ${asset._id} to ${doc.slug.current}`);
}

for (const doc of docs) {
  await uploadImage(doc);
}

console.log("Blog images are stored in Sanity assets and attached to posts.");
