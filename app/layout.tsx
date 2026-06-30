import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { NavLanding } from "@/components/nav-landing";
import { NavFooter } from "@/components/nav-footer";
import { Toaster } from 'sonner';
import { jaini } from "@/lib/fonts";

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

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });


export const metadata: Metadata = {
  title: "Apex 49 Digital",
  description: "We design and build modern digital infrastructure, software systems and powerful technology solutions that help organizations operate smarter, faster, and more securely.",
};

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
