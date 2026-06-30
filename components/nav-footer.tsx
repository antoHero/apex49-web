// import Image from 'next/image';
import { ArrowIcon } from './home/selected-works';
import Link from 'next/link';

export function NavFooter() {
    return (
        <footer className="w-full bg-[#191919] text-white">
            {/* Section-padding: 80px Top/Bottom, 56px Left/Right */}
            <div className="mx-auto flex max-w-[1460px] flex-col gap-[13px] px-6 py-12 lg:px-[56px]">
                {/* Footer-call-out: Bottom border 10% opacity */}
                <div className="mb-[40px] flex flex-col gap-12 border-b border-[#E4E4E4]/10 pb-4 md:pb-[65px] lg:flex-row lg:items-end lg:justify-between lg:gap-[365px]">
                    {/* Heading-1: Let's get Started */}
                    <div className="flex max-w-[656px] flex-col">
                        <h2 className="font-body text-[60px] leading-none font-medium uppercase lg:leading-[116px]">
                            Let&lsquo;s get
                        </h2>
                        <h2 className="font-body text-[60px] leading-none font-normal tracking-wide uppercase lg:leading-[116px]">
                            Started
                        </h2>
                    </div>

                    {/* Link: Request a Quote */}
                    <Link
                        href="/request-quote"
                        className="group flex items-center gap-[7.92px] pb-4 transition-all duration-300 hover:opacity-80"
                    >
                        <span className="font-body text-[28px] leading-[32px] font-medium uppercase">
                            Request a Quote
                        </span>
                        <div className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                            <ArrowIcon />
                        </div>
                    </Link>
                </div>

                {/* Footer-grid */}
                <div className="grid grid-cols-1 gap-12 pb-4 md:pb-[160px] md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
                    {/* Widget-1: Logo & Text */}
                    <div className="flex max-w-[664px] flex-col gap-[14px] lg:col-span-6">
                        <Link href="/" className="py-[10.48px] pb-[6.88px]">
                            <span className="font-jaini text-[32px] leading-[24px]">
                                Apex49
                            </span>
                            {/* <Image src="/images/logo-white.svg" className='w-auto h-[150px]' width={100} height={100} alt="logo" /> */}
                        </Link>
                        <p className="font-body max-w-[288px] text-[16px] leading-[24px] font-medium opacity-80">
                            At Apex 49 Digital Limited, we believe that design goes
                            beyond just creating a visually appealing product
                            for customers.
                        </p>
                    </div>

                    {/* Widget-2: Navigation */}
                    <div className="flex flex-col gap-[10.38px] lg:col-span-3">
                        <span className="font-body text-[18px] leading-[19.2px] font-medium uppercase opacity-60">
                            Navigation
                        </span>
                        <ul className="flex flex-col gap-1">
                            {[
                                {label: 'Home', href: '/'},
                                {label: 'Projects', href: '/projects'}, 
                                {label: 'Solutions', href: '/products'},
                                {label: 'About', href: '/about'},
                            ].map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="font-body text-[20.64px] leading-[31.2px] font-normal transition-all hover:underline"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Widget-3: Social Media */}
                    <div className="flex flex-col gap-[10.38px] lg:col-span-3">
                        <span className="font-body text-[18px] leading-[19.2px] font-medium uppercase opacity-60">
                            Social Media
                        </span>
                        <ul className="flex flex-col gap-1">
                            {[
                                {label: 'Instagram', href: 'https://www.instagram.com/apex49digital'}, 
                                // 'Facebook', 
                                {label: 'X (Twitter)', href: 'https://x.com/apex49digital'}
                            ].map(
                                (item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            target='_blank'
                                            className="font-body text-[20.64px] leading-[31.2px] font-normal transition-all hover:underline"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                </div>

                {/* Footer-credits: Top border 10% opacity */}
                <div className="flex flex-col items-center justify-between gap-6 border-t border-[#FFFFFF]/10 pt-[31px] pb-[30px] md:flex-row">
                    <span className="font-body text-[12.8px] leading-[19.2px] font-medium uppercase opacity-60">
                        © 2026 APEX 49 DIGITAL LIMITED. ALL RIGHT RESERVED
                    </span>

                    <div className="flex items-center gap-[24px]">
                        {[
                            {
                                label: 'Privacy Policy',
                                href: '/legal#privacy-policy'
                            },
                            {
                                label: 'Terms of Service',
                                href: '/legal#terms-of-service',
                            },
                            {
                                label: 'Refund Policy',
                                href: '/legal#refund-policy'
                            }
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="font-body text-[12.8px] leading-[19.2px] font-medium text-[#F7F7F7] uppercase transition-colors hover:text-white"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
