import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { NavLanding } from "@/components/nav-landing";
import { NavFooter } from "@/components/nav-footer";
import { Toaster } from 'sonner';
import { jaini } from "@/lib/fonts";
import { buildMetadata, DEFAULT_SEO } from "@/config/seo.config";

export const metadata: Metadata = {
  ...buildMetadata(),

  // Title template — page titles become "Page Name | Apex 49"
  title: {
      default: DEFAULT_SEO.title,
      template: `%s | ${DEFAULT_SEO.siteName}`,
  },

  // Verification tokens — add yours from Google / Bing Search Console
  verification: {
      // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
      // other: { "msvalidate.01": "YOUR_BING_TOKEN" },
  },

  // Icons
  icons: {
      icon: [
          { url: "/favicon.ico" },
          { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
          { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
      shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: DEFAULT_SEO.themeColor,
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Light.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: '../public/fonts/Satoshi-LightItalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../public/fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../public/fonts/Satoshi-MediumItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../public/fonts/Satoshi-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'black',
    },
    {
      path: '../public/fonts/Satoshi-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../public/fonts/Satoshi-Variable.woff2',
      weight: '300 900',
      style: 'black',
    },
    {
      path: '../public/fonts/Satoshi-VariableItalic.woff2',
      weight: '300 900',
      style: 'italic',
    },
  ],
})

export const revalidate = 3600;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${jaini.variable} h-full antialiased`}
    >
      <body className={`${satoshi.className} relative flex min-h-screen flex-col overflow-x-hidden bg-white selection:bg-black selection:text-white`}>
        <NavLanding />
        <main className="flex-grow pt-24">{children}</main>
        <NavFooter />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
