"use client";

import { Menu, X } from "lucide-react";
import React from "react";
import Link from "next/link";
import { NavItem } from "@/lib/types";
import { usePathname } from "next/navigation";

// Added optional onItemClick prop to close the mobile drawer
function NavList({ items = [], onItemClick }: { items: NavItem[]; onItemClick?: () => void }) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-2 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      {items.map(({ title, href }) => {
        // Cleaned up the redundant home check condition
        const isActive = pathname === href;
        return (
          <li key={title}>
            <Link
              href={href}
              onClick={onItemClick} // Closes menu when clicked
              className={`font-body text-[16px] tracking-tight transition-all duration-200 hover:text-black ${
                isActive
                  ? "border-b-2 border-black pb-1 font-bold text-black"
                  : "font-medium text-[#191919]/60"
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
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Solutions", href: "/products" },
    { title: "About", href: "/about" },
  ];

  // Helper to close mobile navbar
  const closeNavbar = () => setOpenNav(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-[100] border-b border-[#191919]/10 bg-white/90 px-6 py-6 backdrop-blur-md lg:px-[56px]">
      <div className="mx-auto flex max-w-[1440px] items-center">
        {/* Logo - Left */}
        <div className="flex-1">
          <Link href="/" className="inline-block" onClick={closeNavbar}>
            <span className="font-jaini text-[32px] leading-[24px]">
              Apex49
            </span>
          </Link>
        </div>

        {/* Centered Desktop Nav */}
        <div className="hidden lg:block">
          <NavList items={navItems} />
        </div>

        {/* Right Actions */}
        <div className="flex flex-1 justify-end">
          <div className="hidden lg:block">
            {/* FIXED: Removed internal <button> tag to maintain valid HTML markup */}
            <Link 
              href="/request-quote"
              className="cursor-pointer border border-[#191919]/20 px-6 py-2 rounded-[6px] text-sm font-semibold text-[#191919] transition-all duration-300 hover:bg-[#191919] hover:text-white"
            >
              Request a Quote
            </Link>
          </div>

          <button
            className="text-[#191919] lg:hidden"
            onClick={() => setOpenNav(!openNav)}
            aria-label="Toggle Menu"
          >
            {openNav ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {openNav && (
        <div className="absolute top-full left-0 flex w-full animate-in flex-col gap-8 border-b border-gray-200 bg-white p-8 shadow-2xl slide-in-from-top-2 lg:hidden">
          {/* Passed closeNavbar handler down */}
          <NavList items={navItems} onItemClick={closeNavbar} />
          
          <Link 
            href="/request-quote" 
            onClick={closeNavbar}
            className="w-full text-center cursor-pointer bg-[#191919] hover:opacity-80 px-6 rounded-[6px] py-4 text-sm font-bold tracking-widest text-white uppercase"
          >
            Request a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}