interface Portfolio {
    title: string;
    category: string;
    href?: string;
}

export const ArrowIcon = () => (
    <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_205_174)">
            <g clipPath="url(#clip1_205_174)">
                <g clipPath="url(#clip2_205_174)">
                    <g clipPath="url(#clip3_205_174)">
                        <path
                            d="M1.15381 8.84612L8.84612 1.15381M8.84612 1.15381H1.15381M8.84612 1.15381V8.84612"
                            stroke="black"
                            strokeWidth="1.53846"
                            strokeLinecap="square"
                        />
                    </g>
                </g>
            </g>
        </g>
        <defs>
            <clipPath id="clip0_205_174">
                <rect width="10" height="10" fill="white" />
            </clipPath>
            <clipPath id="clip1_205_174">
                <rect width="10" height="10" fill="white" />
            </clipPath>
            <clipPath id="clip2_205_174">
                <rect width="10" height="10" fill="white" />
            </clipPath>
            <clipPath id="clip3_205_174">
                <rect
                    width="9.69231"
                    height="9.69231"
                    fill="white"
                    transform="translate(0.153809 0.153809)"
                />
            </clipPath>
        </defs>
    </svg>
);

const ServiceItem = ({
    title,
    category,
}: {
    title: string;
    category: string;
}) => (
    <div className="w-full border-t border-[#E4E4E4] pt-[1px]">
        <div className="group flex w-full cursor-pointer flex-col items-center gap-8 py-[48px] transition-colors hover:bg-gray-50/50 lg:flex-row lg:gap-[103px]">
            {/* Title Section: Responsive font sizes and width */}
            <div className="w-full flex-shrink-0 lg:w-1/2">
                <h4 className="font-body truncate text-left text-[24px] leading-[32px] font-medium text-[#191919] uppercase md:text-[30.75px]">
                    {title}
                </h4>
            </div>

            {/* Categories & Arrow Section: Handles mobile spacing and desktop alignment */}
            <div className="flex w-full flex-grow items-center justify-start lg:w-1/2 lg:flex-grow-0 lg:justify-between">
                <div>
                    <div className="flex h-[32.4px] min-w-[125px] items-center justify-center border border-[#E4E4E4] px-[13.8px] py-[4.2px]">
                        <span className="font-body text-[14px] leading-[24px] font-medium whitespace-nowrap text-[#191919] md:text-[16px]">
                            {category}
                        </span>
                    </div>
                </div>

                <div className="ml-auto flex items-center justify-end lg:mr-2 lg:ml-0">
                    <div className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowIcon />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export function SelectedWorks() {
    const serviceList: Portfolio[] = [
        {
            title: 'Sabiebook',
            category: 'Web Design',
            href: '/v/project/sabiebook',
        },
        {
            title: 'VENNDOR',
            category: 'Branding',
            href: '/v/project/venndor',
        },
        {
            title: 'HEYKARA',
            category: 'Mobile Development',
            href: '/v/project/heykara',
        },
        {
            title: 'CAREBRIDGE',
            category: 'Web Development',
            href: '/v/project/carebridge',
        },
    ];

    return (
        <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-24 px-6 pt-[41px] pb-[38px] lg:px-[56px]">
            <div className="flex flex-col gap-[20px]">
                <span className="font-body text-[12.8px] leading-[19.2px] font-medium tracking-wider text-[#191919] uppercase">
                    Recent Work
                </span>

                <div>
                    <h2 className="font-adamina text-[60px] leading-[77px] whitespace-nowrap text-[#191919]">
                        Selected Works
                    </h2>
                </div>

                <div className="mx-auto w-full max-w-[1328px] px-6 lg:px-0">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-[368px]">
                        <div className="w-full pb-[18.34px] lg:w-[640px]">
                            <h2 className="font-body text-[39.84px] leading-[52px] font-normal tracking-tight text-[#191919]">
                                With Apex 49, your goals aren't just realized –
                                they're reimagined with strong designs and
                                visuals.
                            </h2>
                        </div>

                        <div className="flex w-full flex-col gap-[46px] pt-[9px] lg:w-[320px]">
                            <p className="font-body text-[20.8px] leading-[31.2px] font-normal text-[#191919]">
                                Our team takes the time to dive deep into your
                                brand identity, product goals, and values.
                            </p>

                            <button className="group flex h-[56px] cursor-pointer items-center justify-center bg-[#191919] px-[17px] py-[7.4px] text-white transition-all duration-300 hover:bg-black/90">
                                <span className="font-abel text-[18px] leading-[21.08px]">
                                    View all projects
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-full flex-col border-b border-[#E4E4E4]">
                {serviceList.map((service, index) => (
                    <ServiceItem
                        key={index}
                        title={service.title}
                        category={service.category}
                    />
                ))}
            </div>
        </section>
    );
}
