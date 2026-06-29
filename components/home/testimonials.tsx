"use client"
import { useState } from 'react';

const ArrowLeft = () => (
    <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M10 6H2M2 6L6 2M2 6L6 10"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ArrowRight = () => (
    <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M2 6H10M10 6L6 2M10 6L6 10"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const QuoteIcon = () => (
    <svg
        width="47"
        height="37"
        viewBox="0 0 47 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M16.45 0C14.0067 0 11.5633 1.11 9.12 3.33C6.72333 5.55 4.32667 8.51 1.93 12.21C1.28333 13.135 0.775 14.1525 0.405 15.2625C0.1275 16.3262 0 17.5287 0 18.87V37H18.8V18.13H9.4V14.06C9.4 12.1175 10.14 10.3137 11.62 8.64875C13.1467 6.93625 14.7183 5.82625 16.335 5.31875L16.45 0ZM46.53 0C44.0867 0 41.6433 1.11 39.2 3.33C36.8033 5.55 34.4067 8.51 32.01 12.21C31.3633 13.135 30.855 14.1525 30.485 15.2625C30.2075 16.3262 30.08 17.5287 30.08 18.87V37H48.88V18.13H39.48V14.06C39.48 12.1175 40.22 10.3137 41.7 8.64875C43.2267 6.93625 44.7983 5.82625 46.415 5.31875L46.53 0Z"
            fill="#191919"
        />
    </svg>
);

const UmbrellaLogo = () => (
    <div className="flex items-center gap-2">
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16 4C10.48 4 6 8.48 6 14V18H26V14C26 8.48 21.52 4 16 4ZM16 2C22.6274 2 28 7.37258 28 14V20H4V14C4 7.37258 9.37258 2 16 2ZM14 22H18V26C18 27.1046 17.1046 28 16 28C14.8954 28 14 27.1046 14 26V22Z"
                fill="#191919"
            />
        </svg>
        <span className="font-body text-2xl font-black tracking-tighter text-[#191919]">
            Umbrella
        </span>
    </div>
);

interface TestimonialData {
    text: string;
    author: string;
    role: string;
}

const testimonials: TestimonialData[] = [
    {
        text: 'Our design expertise spans UX/UI best practices, mobile-responsive layouts, and conversion-optimized interfaces, ensuring your digital touchpoints captivate and convert',
        author: 'Phill Butler',
        role: 'Director, Umbrella Group',
    },
    {
        text: 'The team at Apex 49 completely transformed our digital presence. Their attention to detail and commitment to engineering excellence is unmatched in the industry today.',
        author: 'Sarah Chen',
        role: 'CTO, Vortex Systems',
    },
    {
        text: 'We needed a partner who could understand complex technology and translate it into a simple user interface. Apex 49 delivered exactly that and more.',
        author: 'Marcus Thorne',
        role: 'Founder, Echo Software',
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrent(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length,
        );
    };

    return (
        <section className="mx-auto w-full max-w-[1328px] px-6 py-24 lg:px-0">
            <div className="mb-24 flex flex-col items-start justify-between gap-12 lg:flex-row">
                {/* Header Section: Frame 1000004320 */}
                <div className="flex flex-col gap-[3px]">
                    {/* Tiny Text: Satoshi Medium 12.8px */}
                    <span className="font-body text-[12.8px] leading-[19.2px] font-medium text-[#191919] uppercase opacity-60">
                        TESTIMONIAL
                    </span>

                    <div className="flex flex-col">
                        {/* Insights from: Adamina 60px */}
                        <h2 className="font-adamina text-[40px] leading-tight text-[#111111] md:text-[60px] md:leading-[77px]">
                            Insights from
                        </h2>

                        {/* Our Customers: Rotated layout */}
                        <div className="mt-2 flex items-center gap-[10px] md:mt-2">
                            <span className="font-adamina text-[40px] leading-tight text-[#111111] md:text-[60px] md:leading-[77px]">
                                Our
                            </span>
                            <div className="origin-center rotate-[1.36deg] transform bg-[#191919] px-4 py-2">
                                <span className="font-adamina text-[40px] leading-tight text-white md:text-[60px] md:leading-[77px]">
                                    Customers
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel Controls: Frame 1000004344 */}
                <div className="flex gap-[10px]">
                    <button
                        onClick={prevSlide}
                        className="flex h-[50px] w-[50px] items-center justify-center bg-[#111111] transition-opacity hover:opacity-80"
                    >
                        <ArrowLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="flex h-[50px] w-[50px] items-center justify-center bg-[#111111] transition-opacity hover:opacity-80"
                    >
                        <ArrowRight />
                    </button>
                </div>
            </div>

            {/* Testimonial Cards Stacking Container */}
            <div className="relative min-h-[500px] md:min-h-[450px]">
                {/* Background Stacked Cards (Static rotations to mimic Figma) */}
                <div className="absolute inset-0 hidden translate-y-4 rotate-[-4deg] transform border border-[#E4E4E4] bg-white md:block md:translate-y-8"></div>
                <div className="absolute inset-0 hidden translate-y-2 rotate-[-2deg] transform border border-[#E4E4E4] bg-white md:block md:translate-y-4"></div>

                {/* Main Active Card: Component 2 */}
                <div className="relative z-10 flex w-full flex-col gap-[64px] border border-[#E4E4E4] bg-white p-8 md:p-[64px]">
                    {/* Quote Icon */}
                    <div>
                        <QuoteIcon />
                    </div>

                    {/* Testimonial Text: Abel Regular 26px */}
                    <p className="font-abel max-w-[1076px] text-[22px] leading-[1.3] tracking-[-0.02em] text-[#191919] md:text-[26px] md:leading-[30px]">
                        {testimonials[current].text}
                    </p>

                    {/* Author & Logo: Frame 1000004340 */}
                    <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-[18px]">
                        {/* Umbrella Logo */}
                        <UmbrellaLogo />

                        {/* Separator Line: Line 3 */}
                        <div className="hidden h-[1px] w-[64px] rotate-[-90deg] bg-[#191919] md:block"></div>

                        {/* Author Details: Frame 1000004328 */}
                        <div className="flex flex-col gap-1 md:gap-[12px]">
                            <span className="font-body text-[22px] leading-[1] font-black text-[#191919]">
                                {testimonials[current].author}
                            </span>
                            <span className="font-body text-[18px] leading-[1] font-normal text-[#191919] opacity-60">
                                {testimonials[current].role}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination: Frame 1000004343 */}
            <div className="mt-12 flex justify-center gap-[3px]">
                {testimonials.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-[12px] transition-all duration-300 ${
                            idx === current
                                ? 'w-[62px] bg-[#191919]'
                                : idx < current
                                  ? 'w-[21px] bg-black/20'
                                  : 'w-[21px] bg-[#C4C4C4]'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
