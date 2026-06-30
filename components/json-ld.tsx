// Drop <JsonLd /> anywhere in your layout or page (server component — no "use client" needed).

import { BASE_URL, DEFAULT_SEO } from "@/config/seo.config";

// ─── Schema types (keep lightweight, no external lib needed) ──────────────────

type WithContext<T> = T & { "@context": "https://schema.org" };

interface OrganizationSchema {
    "@type": "Organization";
    name: string;
    url: string;
    logo: string;
    description: string;
    sameAs: string[]; // social profile URLs
    contactPoint: {
        "@type": "ContactPoint";
        contactType: string;
        availableLanguage: string;
    };
}

interface WebSiteSchema {
    "@type": "WebSite";
    name: string;
    url: string;
    description: string;
    potentialAction: {
        "@type": "SearchAction";
        target: string;
        "query-input": string;
    };
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const organizationSchema: WithContext<OrganizationSchema> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: DEFAULT_SEO.siteName,
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`, // place a 512×512 PNG in /public
    description: DEFAULT_SEO.description,
    sameAs: [
        // Add your real social URLs:
        // "https://twitter.com/apex49",
        // "https://www.linkedin.com/company/apex49",
        // "https://www.instagram.com/apex49",
        // "https://dribbble.com/apex49",
    ],
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: "English",
    },
};

const webSiteSchema: WithContext<WebSiteSchema> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: DEFAULT_SEO.siteName,
    url: BASE_URL,
    description: DEFAULT_SEO.description,
    potentialAction: {
        "@type": "SearchAction",
        // If you add site search, update this target URL:
        target: `${BASE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
    },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function JsonLd() {
    return (
        <>
            <script
                type="application/ld+json"
                // biome-ignore lint: dangerouslySetInnerHTML required for JSON-LD
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(webSiteSchema),
                }}
            />
        </>
    );
}

// ─── Per-page helper: Service schema ─────────────────────────────────────────
// Use on individual service pages, e.g. /services/web-development

interface ServiceSchemaProps {
    name: string;
    description: string;
    url: string;
}

export function PageJsonLd({ name, description, url }: ServiceSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url,
        provider: {
            "@type": "Organization",
            name: DEFAULT_SEO.siteName,
            url: BASE_URL,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}