"use client"

import { Menu, X } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { NavItem } from '@/lib/types';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

function NavList({ items = [] }: { items: NavItem[] }) {
    // In production: const { url } = usePage();
    // const url = window.location.pathname;
    const pathname = usePathname()

    return (
        <ul className="flex flex-col gap-2 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
            {items.map(({ title, href }) => {
                const isActive = pathname === href || (pathname === '/' && href === '/');
                return (
                    <li key={title}>
                        <Link
                            href={href}
                            className={`font-body text-[16px] tracking-tight transition-all duration-200 hover:text-black ${
                                isActive
                                    ? 'border-b-2 border-black pb-1 font-bold text-black'
                                    : 'font-medium text-[#191919]/60'
                            }`}
                        >
                            {title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export function NavLanding() {
    const [openNav, setOpenNav] = React.useState(false);

    const navItems = [
        { title: 'Home', href: '/' },
        { title: 'Projects', href: '/projects' },
        { title: 'Solutions', href: '/products' },
        { title: 'About', href: '/about' },
    ];

    return (
        <nav className="fixed top-0 right-0 left-0 z-[100] border-b border-[#191919]/10 bg-white/90 px-6 py-6 backdrop-blur-md lg:px-[56px]">
            <div className="mx-auto flex max-w-[1440px] items-center">
                {/* Logo - Left */}
                <div className="flex-1">
                    <Link href="/" className="inline-block">
                        <Image src="/images/logo-black.svg" className='w-[100px] h-[50px]' width={100} height={100} alt="logo" />
                    </Link>
                </div>

                {/* Centered Desktop Nav */}
                <div className="hidden lg:block">
                    <NavList items={navItems} />
                </div>

                {/* Right Actions */}
                <div className="flex flex-1 justify-end">
                    <div className="hidden lg:block">
                        <Link href="/request-quote">
                            <button className="cursor-pointer border border-[#191919]/20 px-6 py-2 text-sm font-semibold text-[#191919] transition-all duration-300 hover:bg-[#191919] hover:text-white">
                                Request a Quote
                            </button>
                        </Link>
                    </div>

                    <button
                        className="text-[#191919] lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            {openNav && (
                <div className="absolute top-full left-0 flex w-full animate-in flex-col gap-8 border-b border-gray-200 bg-white p-8 shadow-2xl slide-in-from-top-2 lg:hidden">
                    <NavList items={navItems} />
                    <button className="w-full cursor-pointer bg-[#191919] py-4 text-sm font-bold tracking-widest text-white uppercase">
                        Request a Quote
                    </button>
                </div>
            )}
        </nav>
    );
}
