import Image from "next/image";
import Link from "next/link";

export default function ProductsCTA() {
    return (
        <section className="mx-auto w-full max-w-[1440px] px-6 py-[72px] lg:px-[80px]">
            {/* CTA Header */}
            <div className="mb-12 flex flex-col items-center gap-6 text-center">
                <h2 className="font-adamina text-[40px] leading-[120%] tracking-[-1%] text-[#000000] lg:text-[48px]">
                    Start building something real
                </h2>
                <p className="font-body max-w-[520px] text-[18px] leading-[150%] text-[#191919] opacity-70">
                    Our products are ready to work for you today. Join teams
                    that have already made the shift.
                </p>

                <Link
                    href="/request-quote"
                    className="flex h-[44px] items-center justify-center border border-[#000000] bg-[#000000] rounded-[6px] px-6 text-white transition-colors hover:opacity-80 hover:bg-black/90"
                >
                    <span className="font-body text-[16px] font-medium leading-[150%] text-white">
                        Start a Project →
                    </span>
                </Link>
            </div>

            {/* Full-width dark image */}
            <div className="group relative h-[400px] w-full overflow-hidden rounded-[6px] lg:h-[520px]">
                <Image
                    src="/images/product_cta.jpg"
                    alt="Team collaborating on a project"
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    fill
                    priority
                    quality={95}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30" />
            </div>
        </section>
    );
}
