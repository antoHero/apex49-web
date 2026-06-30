import type { MetadataRoute } from "next";
import { BASE_URL } from "@/config/seo.config";

/**
 * Next.js generates /robots.txt automatically from this function.
 * Allows all crawlers to index the full site, and points to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                // Block any paths you don't want indexed, e.g.:
                disallow: ["/api/", "/admin/", "/_next/"],
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    };
}