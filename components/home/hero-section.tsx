import Link from "next/link";
import { VortexGraphic } from "./vortex-graphic";

export function HeroSection() {
  return (
    <div className="mx-auto mt-12 grid min-h-[70vh] w-full max-w-[1440px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
      {/* Graphic Side - Left (Col 7) */}
      <div className="relative order-2 flex items-center justify-center lg:order-1 lg:col-span-6 lg:justify-start">
        <VortexGraphic />
      </div>

      <div className="z-50 order-1 flex flex-col items-start text-left lg:order-2 lg:col-span-6">
        <div className="flex flex-col gap-[29px] px-6 md:px-0">
          <h1 className="flex flex-col items-start tracking-[-0.03em] text-[#191919]">
            <span className="font-adamina flex h-[103px] items-center text-[60px]">
              Full-Service
            </span>

            <div className="mb-2 inline-block origin-left -rotate-[3deg] transform bg-[#191919] px-[11px] py-[10px]">
              <span className="text-satoshi block text-[40px] leading-[77px] text-white md:text-[90px]">
                Digital Agency
              </span>
            </div>

            <div className="flex items-center gap-[3px]">
              <span className="font-adamina flex h-[103px] items-center text-[30px] md:text-[60px]">
                For
              </span>
              <div className="inline-block origin-center rotate-[2deg] transform bg-[#191919] px-[10px] py-[10px]">
                <span className="text-satoshi block text-[40px] leading-[77px] text-white uppercase md:text-[90px]">
                  Modern
                </span>
              </div>
            </div>

            <span className="font-adamina flex h-[103px] items-center text-[40px] md:text-[60px]">
              Digital Solutions
            </span>
          </h1>

          <div className="flex max-w-[595px] flex-col items-start gap-5">
            <p className="font-body text-[18px] leading-[27px] tracking-[-0.02em] text-[#191919] opacity-90">
              At Apex 49 Digital Limited, innovation meets precision. We design and
              build modern digital infrastructure, software systems and powerful
              technology solutions that help organizations operate smarter,
              faster, and more securely.
            </p>

            <Link href="/request-quote" className="flex items-center justify-center font-abel text-[18px] leading-[21.08px] h-[56px] min-w-[185px] rounded-[6px] cursor-pointer bg-[#191919] px-[16px] py-[8px] text-white transition-all duration-300 hover:bg-black/90">
              {/* <span className="">
                Contact Us
              </span> */}
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
