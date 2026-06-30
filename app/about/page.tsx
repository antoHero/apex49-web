import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import { PageJsonLd } from '@/components/json-ld';
import { BASE_URL, buildMetadata } from '@/config/seo.config';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata({
    title: "About us",
    description: "We design and build modern digital infrastructure, software systems and powerful technology solutions that help organizations operate smarter, faster, and more securely.",
    canonicalPath: "/about",
});

export default function About() {
    return (
        <div>
            <PageJsonLd
                name="About us"
                description="We design and build modern digital infrastructure, software systems and powerful technology solutions that help organizations operate smarter, faster, and more securely."
                url={`${BASE_URL}/about`}
            />
            <AboutHero />

            <AboutStory />
        </div>
    );
}
