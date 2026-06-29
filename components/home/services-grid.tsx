interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
    return (
        <div className="flex h-auto w-full flex-col gap-[64px] border border-[#E4E4E4] bg-white p-[16px] py-[24px] transition-all duration-300 hover:border-[#191919]/20 hover:shadow-lg lg:h-[360px] lg:w-[430px]">
            <div className="flex h-[72px] w-[72px] items-center justify-center">
                {icon}
            </div>

            <div className="flex w-full flex-col gap-[27px]">
                <h3 className="font-body text-[26px] leading-[34px] font-bold tracking-[-0.03em] text-[#191919]">
                    {title}
                </h3>
                <p className="font-body text-[18px] leading-[24px] font-normal tracking-[-0.02em] text-[#191919] opacity-80">
                    {description}
                </p>
            </div>
        </div>
    );
}

export function ServicesGrid() {
    const services = [
        {
            title: 'Your Shortcut to Appealing Product',
            description:
                'Our design expertise spans UX/UI and Engineering best practices, mobile-responsive layouts, and conversion-optimized interfaces, ensuring your digital touchpoints captivate and convert',
            icon: (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="0.5"
                        y="0.5"
                        width="13"
                        height="13"
                        stroke="#191919"
                    />
                    <rect
                        x="26.5"
                        y="0.5"
                        width="13"
                        height="13"
                        stroke="#191919"
                    />
                    <rect
                        x="0.5"
                        y="26.5"
                        width="13"
                        height="13"
                        stroke="#191919"
                    />
                    <rect
                        x="26.5"
                        y="26.5"
                        width="13"
                        height="13"
                        stroke="#191919"
                    />
                </svg>
            ),
        },
        {
            title: 'Your Shortcut to A Unique Identity',
            description:
                'Our branding process encompasses logo creation, visual storytelling, and comprehensive brand guidelines, ensuring a memorable identity that aligns with your vision',
            icon: (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="0.5"
                        y="0.5"
                        width="10"
                        height="10"
                        stroke="#191919"
                    />
                    <rect
                        x="0.5"
                        y="14.5"
                        width="10"
                        height="10"
                        stroke="#191919"
                    />
                    <rect
                        x="14.5"
                        y="14.5"
                        width="10"
                        height="10"
                        stroke="#191919"
                    />
                    <rect
                        x="0.5"
                        y="28.5"
                        width="10"
                        height="10"
                        stroke="#191919"
                    />
                    <rect
                        x="14.5"
                        y="28.5"
                        width="10"
                        height="10"
                        stroke="#191919"
                    />
                    <rect
                        x="28.5"
                        y="28.5"
                        width="10"
                        height="10"
                        stroke="#191919"
                    />
                </svg>
            ),
        },
        {
            title: 'Your Shortcut to Top Visibility',
            description:
                'Our SEO strategies cover meticulous keyword research, on-page optimization, authoritative link building, and technical audits, propelling your site to the forefront of search results',
            icon: (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="14.5"
                        y="0.5"
                        width="11"
                        height="11"
                        stroke="#191919"
                    />
                    <rect
                        x="0.5"
                        y="14.5"
                        width="11"
                        height="11"
                        stroke="#191919"
                    />
                    <rect
                        x="14.5"
                        y="14.5"
                        width="11"
                        height="11"
                        stroke="#191919"
                    />
                    <rect
                        x="28.5"
                        y="14.5"
                        width="11"
                        height="11"
                        stroke="#191919"
                    />
                    <rect
                        x="14.5"
                        y="28.5"
                        width="11"
                        height="11"
                        stroke="#191919"
                    />
                </svg>
            ),
        },
    ];

    return (
        <section className="mx-auto w-full max-w-[1328px] pb-24">
            {/* Container: Frame 1000004329 */}
            <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                    />
                ))}
            </div>
        </section>
    );
}
