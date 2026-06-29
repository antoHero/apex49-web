import ProductsCTA from '@/components/products/ProductsCTA';
import ProductsGrid from '@/components/products/ProductsGrid';
import ProductsHero from '@/components/products/ProductsHero';
import ProductsStats from '@/components/products/ProductsStats';

export default function Products() {
    return (
        <div>

            <ProductsHero />

            <ProductsGrid />

            <ProductsStats />

            <ProductsCTA />
        </div>
    );
}
