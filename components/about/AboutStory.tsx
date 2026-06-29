import React from 'react';

const LabelArrow = () => (
    <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1 7H13M13 7L7 1M13 7L7 13"
            stroke="#111111"
            strokeWidth="1.31"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

interface StorySectionProps {
    number: string;
    label: string;
    heading: string;
    subtext?: string | React.ReactNode;
    footerText?: string;
    children?: React.ReactNode;
    image?: string;
    gallery?: React.ReactNode;
}

const StorySection: React.FC<StorySectionProps> = ({
    number,
    label,
    heading,
    subtext,
    footerText,
    children,
    image,
    gallery,
}) => (
    <div className="flex w-full flex-col gap-10 lg:flex-row lg:gap-[115px]">
        {/* Left Column: About-label (Fixed 443px on desktop) */}
        <div className="w-full flex-shrink-0 lg:w-[443px]">
            <div className="flex items-center gap-4 py-2">
                <span className="font-abel text-[20.8px] leading-[31.2px] text-[#111111]">
                    {number}
                </span>
                <div className="flex h-[14px] w-[14px] items-center justify-center">
                    <LabelArrow />
                </div>
                <span className="font-abel text-[20.64px] leading-[31.2px] tracking-wider text-[#111111] uppercase">
                    {label}
                </span>
            </div>
        </div>

        {/* Right Column: Content (Fixed 885px on desktop) */}
        <div className="flex w-full flex-col gap-[29px] lg:w-[885px]">
            <div className="flex flex-col gap-[39px]">
                {/* Large Heading: Satoshi (Inter 900) */}
                <h3 className="font-satoshi max-w-[880px] text-[30px] leading-tight font-black text-[#111111] md:text-[39.84px] md:leading-[52px]">
                    {heading}
                </h3>

                {/* Main Content Area */}
                <div className="flex flex-col gap-6">
                    {subtext && (
                        <div className="font-abel max-w-[553px] text-[18px] leading-[1.5] text-[#111111] opacity-90 md:text-[20.8px] md:leading-[31.2px]">
                            {subtext}
                        </div>
                    )}
                    {children}
                </div>
            </div>

            {/* Gallery or Single Image */}
            {gallery ? (
                <div className="mt-4 w-full">{gallery}</div>
            ) : image ? (
                <div className="mt-4 h-auto w-full overflow-hidden rounded-[6.4px]">
                    <img
                        src={image}
                        alt={label}
                        className="aspect-[885/590] h-full w-full object-cover object-center"
                    />
                </div>
            ) : null}

            {/* Footer Text: Small Abel */}
            {footerText && (
                <p className="font-abel mt-2 max-w-[320px] text-[14px] leading-[22px] text-[#111111] opacity-60">
                    {footerText}
                </p>
            )}
        </div>
    </div>
);

const ServiceList = ({ items }: { items: string[] }) => (
    <ul className="mt-4 flex flex-col gap-2">
        {items.map((item, i) => (
            <li
                key={i}
                className="font-abel flex items-start gap-3 text-[22px] leading-tight text-[#111111] md:text-[26px]"
            >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#111111]" />
                {item}
            </li>
        ))}
    </ul>
);

const PrincipleBlock = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => (
    <div className="flex flex-col gap-2">
        <p className="font-abel text-[22px] leading-tight text-[#111111] md:text-[26px]">
            <strong className="font-satoshi font-black">{title}</strong> —{' '}
            {description}
        </p>
    </div>
);

export default function AboutStory() {
    return (
        <section className="mx-auto flex w-full max-w-[1328px] flex-col gap-[160px] px-6 py-24 lg:px-0">
            {/* 01 OUR STORY */}
            <StorySection
                number="01"
                label="Our story"
                heading="Apex 49 Technologies grew from a 25-year friendship between Victor Akoke Anto, a Full-Stack Developer, and Hope Vinam Jonah, a Product Designer with an architecture background. Combining Victor’s technical expertise and Hope’s human-centered design approach, they created Apex 49 to deliver digital solutions that are both functional and impactful. Supported by an experienced Advisory Board, the company emphasizes partnership, long-term thinking, and helping organizations operate at their best."
                subtext="At Apex 49 Technologies, we believe that design goes beyond just creating a visually appealing product. It is about understanding the essence of your brand and crafting a story that captures it in a unique and"
                image="/images/hope-victor.png"
            />

            {/* 02 WHY APEX 49 */}
            <StorySection
                number="02"
                label="Why 'Apex 49'"
                heading="Every great company starts with a story. Apex represents the highest point the peak. It reflects our commitment to excellence, precision and delivering work that performs at the highest level."
                subtext="Apex 49 stands for calculated ambition: the belief that great outcomes come from intentional thinking, strong collaboration and disciplined execution."
            />

            {/* 03 WHAT WE DO */}
            <StorySection
                number="03"
                label="What we Do"
                heading="We design and build digital systems that help organizations operate better, communicate clearly and scale efficiently."
                subtext="Our services include:"
                footerText="We focus on solutions that are practical, maintainable and built for long-term impact."
                gallery={
                    <div className="grid grid-cols-1 gap-[10px] md:grid-cols-12">
                        <div className="aspect-[2/1.5] overflow-hidden rounded-[6.4px] bg-black md:col-span-8">
                            <img
                                src="/images/web.png"
                                className="h-full w-full object-cover grayscale"
                                alt="Dashboard"
                            />
                        </div>
                        <div className="flex flex-col gap-[10px] md:col-span-4">
                            <div className="aspect-square flex-1 overflow-hidden rounded-[6.4px] md:aspect-auto">
                                <img
                                    src="/images/mobile.png"
                                    className="h-full w-full object-cover grayscale"
                                    alt="Mobile App"
                                />
                            </div>
                            <div className="aspect-square flex-1 overflow-hidden rounded-[6.4px] md:aspect-auto">
                                <img
                                    src="/images/branding.png"
                                    className="h-full w-full object-cover grayscale"
                                    alt="Identity"
                                />
                            </div>
                        </div>
                    </div>
                }
            >
                <ServiceList
                    items={[
                        'Digital product design and development',
                        'Government and enterprise digital solutions',
                        'Websites, web and mobile applications',
                        'Branding and digital transformation',
                        'Technical consulting and strategy',
                    ]}
                />
            </StorySection>

            {/* 04 WHO WE SERVE */}
            <StorySection
                number="04"
                label="Who We Serve"
                heading="Apex 49 Technologies works with:"
                footerText="We understand the importance of accountability, structure and long-term partnerships."
            >
                <ServiceList
                    items={[
                        'Small and medium businesses',
                        'Startups and growing companies',
                        'Government and public sector organizations',
                        'Institutions seeking digital transformation',
                    ]}
                />
            </StorySection>

            {/* 05 OUR APPROACH */}
            <StorySection
                number="05"
                label="Our Approach"
                heading="We believe technology should feel clear, useful and dependable. That’s why our work is guided by three principles:"
                footerText="Our goal is not just to deliver projects, but to create digital infrastructure that continues to deliver value over time"
                image="/images/cube.png"
            >
                <div className="mt-6 flex flex-col gap-8">
                    <PrincipleBlock
                        title="Clarity"
                        description="We simplify complex problems and design solutions that people can actually use."
                    />
                    <PrincipleBlock
                        title="Reliability"
                        description="We build systems that organizations can trust and depend on."
                    />
                    <PrincipleBlock
                        title="Longevity"
                        description="We prioritize sustainable solutions over short-term fixes."
                    />
                </div>
            </StorySection>

            {/* 06 MISSION AND VISION */}
            <StorySection number="06" label="Our Mission and Vision" heading="">
                <div className="flex flex-col gap-10">
                    <PrincipleBlock
                        title="Our Vision"
                        description="To become a trusted technology partner for institutions that shape communities, economies and the future."
                    />
                    <PrincipleBlock
                        title="Our Mission"
                        description="To help organizations operate at their peak through thoughtful design, modern technology and strategic collaboration."
                    />
                </div>
            </StorySection>
        </section>
    );
}
