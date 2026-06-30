export const BASE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://apex49.co";


export const DEFAULT_SEO = {
    siteName: "Apex 49",
    title: "Apex 49 Digital Limited — Creative Digital Agency",
    description:
        "Apex 49 Digital Limited is a creative digital agency. description: We design and build modern digital infrastructure, software systems and powerful technology solutions that help organizations operate smarter, faster, and more securely.",
    /** Absolute URL to a 1200×630 OG image in /public */
    ogImage: `${BASE_URL}/og-image.png`,
    twitterHandle: "@apex49", // update to your real handle
    locale: "en_US",
    themeColor: "#191919",
} as const;

export type PageSEO = {
    title?: string;
    description?: string;
    ogImage?: string;
    /** Set true on pages you don't want indexed (e.g. /thank-you) */
    noIndex?: boolean;
    canonicalPath?: string; // e.g. "/services/web-development"
};

/**
 * Merge page-level overrides on top of the site defaults.
 * Use this in every page.tsx that needs custom meta.
 */
export function buildMetadata(overrides: PageSEO = {}) {
    const title = overrides.title ?? DEFAULT_SEO.title;
    const description = overrides.description ?? DEFAULT_SEO.description;
    const ogImage = overrides.ogImage ?? DEFAULT_SEO.ogImage;
    const canonical = overrides.canonicalPath
        ? `${BASE_URL}${overrides.canonicalPath}`
        : BASE_URL;

    return {
        metadataBase: new URL(BASE_URL),
        title,
        description,
        ...(overrides.noIndex && { robots: { index: false, follow: false } }),
        alternates: { canonical },
        openGraph: {
            type: "website" as const,
            siteName: DEFAULT_SEO.siteName,
            title,
            description,
            url: canonical,
            locale: DEFAULT_SEO.locale,
            images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        },
        twitter: {
            card: "summary_large_image" as const,
            site: DEFAULT_SEO.twitterHandle,
            creator: DEFAULT_SEO.twitterHandle,
            title,
            description,
            images: [ogImage],
        },
    };
}