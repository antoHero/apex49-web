import { ArrowIcon } from '@/components/home/selected-works';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
    tag: string;
    title: string;
    description: string;
    href: string;
    image: string;
    imageAlt: string;
}

const products: Product[] = [
    {
        tag: 'SAAS',
        title: 'Retaile',
        description:
            'A powerful inventory system designed for warehouses, retail stores, and businesses to track stock, manage suppliers, monitor purchases, and optimize inventory operations in real time.',
        href: '#',
        image: '/images/retaile.png',
        imageAlt: 'Inventory Management App',
    },
    {
        tag: 'Edutech',
        title: 'School Management System',
        description:
            'A complete school management platform that helps schools manage students, teachers, attendance, classes, examinations, results, and parent communication seamlessly.',
        href: '#',
        image: '/images/landing-school.png',
        imageAlt: 'School Management System',
    },
];

function ProductCard({ product }: { product: Product }) {
    return (
        <div className="flex flex-col border border-[#E4E4E4]">
            {/* Image */}
            <div className="group relative h-[300px] overflow-hidden lg:h-[380px]">
                <Image
                    src={product.image}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    fill
                    priority
                    quality={95}
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 p-6 lg:p-8">
                <span className="font-body text-[12px] font-semibold uppercase tracking-wider text-[#191919] opacity-60">
                    {product.tag}
                </span>

                <h3 className="font-adamina text-[28px] leading-[120%] text-[#111111]">
                    {product.title}
                </h3>

                <p className="font-body text-[16px] leading-[150%] text-[#191919] opacity-70">
                    {product.description}
                </p>

                <div
                    className="group/link mt-2 flex w-fit border-1 border-[#00000026] rounded-[6px] h-[44px] px-6 items-center gap-2 transition-opacity hover:opacity-70"
                >
                    <span className="font-body text-[16px] font-medium text-[#191919]">
                       Coming soon
                    </span>
                    {/* <div className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                        <ArrowIcon />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default function ProductsGrid() {
    return (
        <section
            id="products"
            className="mx-auto w-full max-w-[1440px] px-6 py-[72px] lg:px-[80px]"
        >
            {/* Section Title */}
            <div className="mb-[64px] flex flex-col items-center gap-4 text-center">
                <span className="font-body text-[16px] font-semibold leading-[150%] text-[#000000]">
                    Solutions
                </span>

                <div className="flex flex-col gap-6">
                    <h2 className="font-adamina text-center text-[48px] leading-[120%] tracking-[-1%] text-[#000000] lg:text-[48px]">
                        What we have built
                    </h2>
                    <p className="font-body mx-auto max-w-[480px] text-center text-[18px] leading-[150%] text-[#191919] opacity-70">
                        Explore the products we&apos;ve built to solve real world
                        challenges across businesses, institutions, and growing
                        industries.
                    </p>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {products.map((product, i) => (
                    <ProductCard key={i} product={product} />
                ))}
            </div>
        </section>
    );
}
