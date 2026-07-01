import Link from "next/link";

interface Portfolio {
    title: string;
    category: string;
    href: string;
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
    link
}: {
    title: string;
    category: string;
    link: string;
}) => (
    <div className="w-full border-t border-[#E4E4E4] pt-[1px]">
        <Link href={link} target="_blank" className="group flex w-full cursor-pointer flex-col items-center gap-8 py-[48px] transition-colors hover:bg-gray-50/50 lg:flex-row lg:gap-[103px]">
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
        </Link>
    </div>
);

export function SelectedWorks() {
    const serviceList: Portfolio[] = [
        {
            title: 'Sabiebook',
            category: 'Web Design',
            href: 'https://sabiebook.com',
        },
        {
            title: 'VENNDOR',
            category: 'Software Development',
            href: 'https://tickets.thevenndor.com',
        },
        {
            title: 'HEYKARA',
            category: 'Mobile Development',
            href: 'https://heykara.com',
        },
        {
            title: 'CAREBRIDGE',
            category: 'Software Development',
            href: 'https://carebridge.ng',
        },
    ];

    return (
        <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-24 px-6 pt-[41px] pb-[38px] lg:px-[56px]">
            <div className="flex flex-col gap-[20px]">
                <span className="font-body text-[12.8px] leading-[19.2px] font-medium tracking-wider text-[#191919] uppercase">
                    Recent Work
                </span>

                <div>
                    <h2 className="font-adamina text-[40px] md:text-[60px] leading-[77px] whitespace-nowrap text-[#191919]">
                        Selected Works
                    </h2>
                </div>

                <div className="mx-auto w-full max-w-[1328px] lg:px-0">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-[368px]">
                        <div className="w-full pb-[18.34px] lg:w-[640px]">
                            <h2 className="font-body text-[30px] md:text-[39.84px] leading-[45px] md:leading-[52px] font-normal md:tracking-tight text-[#191919]">
                                With Apex 49, your goals aren&apos;t just realized –
                                they&apos;re reimagined with strong designs and
                                visuals.
                            </h2>
                        </div>

                        <div className="flex w-full flex-col gap-[46px] pt-[9px] lg:w-[320px]">
                            <p className="font-body text-[20.8px] leading-[31.2px] font-normal text-[#191919]">
                                Our team takes the time to dive deep into your
                                brand identity, product goals, and values.
                            </p>

                            <Link href="/projects" className="group flex h-[44px] cursor-pointer items-center justify-center rounded-[6px] bg-[#191919] px-6 text-white transition-all duration-300 hover:bg-black hover:opacity-80">
                                <span className="font-abel text-[18px] leading-[21.08px]">
                                    View all projects
                                </span>
                            </Link>
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
                        link={service.href}
                    />
                ))}
            </div>
        </section>
    );
}
