import type { MetadataRoute } from "next";
import { BASE_URL } from "@/config/seo.config";

/**
 * Next.js generates /sitemap.xml automatically from this function.
 * Add every public route your site has.
 * Dynamic routes (e.g. blog posts) should be fetched from your CMS/DB here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Static routes ────────────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/request-quote`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/legal`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // ── Dynamic routes (example: fetch from CMS) ─────────────────────────────
  // const posts = await fetchAllBlogPosts();
  // const dynamicRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
  //   url: `${BASE_URL}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: "monthly",
  //   priority: 0.7,
  // }));

  return [
    ...staticRoutes,
    // ...dynamicRoutes,
  ];
}
