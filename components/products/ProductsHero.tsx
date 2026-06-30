import Image from "next/image";
import Link from "next/link";

export default function ProductsHero() {
    return (
        <section className="mx-auto w-full max-w-[1440px] px-6 lg:px-[80px]">
            <div className="flex flex-col items-center gap-20 pt-[72px] pb-0 lg:flex-row lg:items-center">
                {/* Left: Text Column */}
                <div className="flex flex-col gap-8 lg:w-[600px] lg:flex-shrink-0">
                    {/* Content: heading + body */}
                    <div className="flex flex-col gap-[45px]">
                        <h1 className="font-adamina text-[60px] leading-[120%] tracking-[-1%] text-[#000000]">
                            Digital Products We Build. Problems We
                            <span className="inline-block bg-[#000000] px-2 text-white">
                                 Solve.
                            </span>
                        </h1>

                        <p className="font-body text-[18px] leading-[150%] text-[#000000]">
                            At Apex 49 Digital Limited, we build and own digital
                            products designed to solve real operational and
                            business challenges. Our solutions are scalable,
                            secure, and crafted to help organizations work
                            smarter, grow faster, and operate more efficiently.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="#products"
                            className="flex h-[44px] items-center justify-center border border-[#000000] bg-[#000000] px-6 text-white transition-colors hover:bg-black/90"
                        >
                            <span className="font-body text-[16px] font-medium leading-[150%] text-white">
                                Explore our Products
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="w-full lg:h-[600px] lg:w-[600px] lg:flex-shrink-0">
                    <div className="group relative h-[400px] w-full overflow-hidden rounded-[6px] lg:h-full">
                        <Image
                            src="/images/products-hero.jpg"
                            alt="Team collaborating"
                            className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
