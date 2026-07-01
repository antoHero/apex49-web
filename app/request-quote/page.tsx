import ContactPage from '@/components/contact-page';
import { PageJsonLd } from '@/components/json-ld';
import { BASE_URL, buildMetadata } from '@/config/seo.config';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata({
    title: "Request Quote",
    description: "We design and build modern digital infrastructure, software systems and powerful technology solutions that help organizations operate smarter, faster, and more securely.",
    canonicalPath: "/request-quote",
});
export default function Contact() {
    return (
        <div className="pt-24">
            <PageJsonLd
                name="About us"
                description="We design and build modern digital infrastructure, software systems and powerful technology solutions that help organizations operate smarter, faster, and more securely."
                url={`${BASE_URL}/request-quote`}
            />
            <div className="pb-24">
                <ContactPage />
            </div>
        </div>
    );
}
