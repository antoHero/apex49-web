import { PageJsonLd } from '@/components/json-ld';
import ProductsCTA from '@/components/products/ProductsCTA';
import ProductsGrid from '@/components/products/ProductsGrid';
import ProductsHero from '@/components/products/ProductsHero';
import ProductsStats from '@/components/products/ProductsStats';
import { BASE_URL, buildMetadata } from '@/config/seo.config';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata({
    title: "Our Solutions",
    description: "Custom web experiences built for performance and conversion.",
    canonicalPath: "/products",
});

export default function Products() {
    return (
        <div className="pt-24">
            <PageJsonLd
                name="Our Solutions"
                description="Custom web experiences built for performance and conversion."
                url={`${BASE_URL}/products`}
            />
            <ProductsHero />

            <ProductsGrid />

            <ProductsStats />

            <ProductsCTA />
        </div>
    );
}
