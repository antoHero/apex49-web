export default function ProductsStats() {
    return (
        <section className="mx-auto w-full max-w-[1440px] px-6 py-[72px] lg:px-[80px]">
            {/* Content: Heading + Body text, horizontal, gap 80px */}
            <div className="mb-20 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-20">
                {/* Left column heading */}
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <h2 className="font-adamina text-[40px] leading-[120%] tracking-[-0.01em] text-[#000000] lg:text-[48px]">
                        Numbers that prove what we&apos;ve built
                    </h2>
                </div>

                {/* Right column body text */}
                <div className="lg:w-1/2">
                    <p className="font-body text-[18px] leading-[150%] text-[#000000]">
                        Our products serve real businesses solving real problems.
                        The metrics speak for themselves. We measure success by
                        the impact we deliver.
                    </p>
                </div>
            </div>

            {/* Stats: 3 equal columns, horizontal, gap 32px */}
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">
                {/* Column 1: Tall stat card — 50K+, space-between (number top, label bottom) */}
                <div className="flex flex-1 flex-col justify-between border-t border-[#000000]/15 p-8 lg:min-h-[578px]">
                    {/* Stat number */}
                    <span className="font-body text-[80px] font-bold leading-[130%] text-[#000000]">
                        50K+
                    </span>

                    {/* Label at bottom */}
                    <div className="flex flex-col gap-2">
                        <span className="font-adamina text-[20px] leading-[140%] tracking-[-0.01em] text-[#000000]">
                            Active users
                        </span>
                        <span className="font-body text-[16px] leading-[150%] text-[#000000] opacity-60">
                            Teams trust our platforms daily
                        </span>
                    </div>
                </div>

                {/* Column 2: Image top + stat card (99.9%) bottom */}
                <div className="flex flex-1 flex-col gap-8">
                    {/* Image */}
                    <div className="group relative h-[270px] w-full overflow-hidden rounded-[6px]">
                        <img
                            src="/images/stat1.jpg"
                            alt="Team at work"
                            className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                        />
                    </div>

                    {/* Stat card */}
                    <div className="flex flex-col gap-12 border-t border-[#000000]/15 p-8">
                        <span className="font-body text-[80px] font-bold leading-[130%] text-[#000000]">
                            99.9%
                        </span>

                        <div className="flex flex-col gap-2">
                            <span className="font-adamina text-[20px] leading-[140%] tracking-[-0.01em] text-[#000000]">
                                Uptime guaranteed
                            </span>
                            <span className="font-body text-[16px] leading-[150%] text-[#000000] opacity-60">
                                Reliability you can depend on
                            </span>
                        </div>
                    </div>
                </div>

                {/* Column 3: Stat card (2M+) top + image bottom */}
                <div className="flex flex-1 flex-col gap-8">
                    {/* Stat card */}
                    <div className="flex flex-col gap-12 border-t border-[#000000]/15 p-8">
                        <span className="font-body text-[80px] font-bold leading-[130%] text-[#000000]">
                            2M+
                        </span>

                        <div className="flex flex-col gap-2">
                            <span className="font-adamina text-[20px] leading-[140%] tracking-[-0.01em] text-[#000000]">
                                Workflows automated
                            </span>
                            <span className="font-body text-[16px] leading-[150%] text-[#000000] opacity-60">
                                Time saved across all customers
                            </span>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="group relative h-[270px] w-full overflow-hidden rounded-[6px]">
                        <img
                            src="/images/stat2.jpg"
                            alt="Collaboration"
                            className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
