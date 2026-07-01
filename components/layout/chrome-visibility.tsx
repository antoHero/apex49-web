"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const KNOWN_ROUTES = [
  "/",
  "/products",
  "/projects",
  "/about",
  "/request-quote",
  "/legal",
];

export function ChromeVisibility({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isKnownRoute = KNOWN_ROUTES.includes(pathname);

  if (!isKnownRoute) {
    return null;
  }

  return <>{children}</>;
}