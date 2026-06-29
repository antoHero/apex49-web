import React from 'react';

const PlusIcon = () => (
    <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M7 0V14M0 7H14" stroke="#191919" strokeWidth="1.5" />
    </svg>
);

const ServiceItem = ({ title }: { title: string }) => (
    <div className="group w-full cursor-pointer border-t border-[#E4E4E4] pt-[41px] pb-[40px] transition-colors duration-300 hover:bg-gray-50/50">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <h3 className="font-adamina text-[32px] leading-[50.6px] tracking-tight text-[#191919] uppercase">
                {title}
            </h3>

            <div className="flex h-[50px] w-[14px] items-center justify-center">
                <PlusIcon />
            </div>
        </div>
    </div>
);

export function WhatWeDo() {
    const serviceList = [
        'WEB & MOBILE DEVELOPMENT',
        'PRODUCT DESIGN',
        'BRAND IDENTITY',
        '3D DESIGN',
        'DIGITAL MARKETING',
    ];

    return (
        <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-24 px-6 pt-[41px] pb-[38px] lg:px-[56px]">
            <div className="flex flex-col gap-[20px]">
                <span className="font-body text-[12.8px] leading-[19.2px] font-medium tracking-wider text-[#191919] uppercase">
                    SERVICES
                </span>

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-[296px]">
                    <h2 className="font-adamina text-[60px] leading-[77px] whitespace-nowrap text-[#191919]">
                        What We Do
                    </h2>

                    <div className="mt-8 max-w-[321px] lg:mt-0">
                        <p className="font-body text-[18px] leading-[31.2px] font-normal text-[#191919]">
                            Our goal is to provide a bold design strategy that
                            covers all aspects of your business, ensuring a
                            consistent image.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex w-full flex-col border-b border-[#E4E4E4]">
                {serviceList.map((service, index) => (
                    <ServiceItem key={index} title={service} />
                ))}
            </div>
        </section>
    );
}
