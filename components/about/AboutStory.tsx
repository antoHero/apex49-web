import Image from "next/image";
import Link from "next/link";
import React from "react";

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
            className="aspect-[885/590] h-full w-full object-cover object-center grayscale hover:grayscale-0"
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
      <strong className="font-satoshi font-black">{title}</strong> —{" "}
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
        heading="Apex 49 Digital Limited grew from a 25-year friendship between Akoke Victor Anto, a Full-Stack Developer, and Hope Vinam Jonah, a Product Designer with an architecture background. Combining Victor’s technical expertise and Hope’s human-centered design approach, they created Apex 49 to deliver digital solutions that are both functional and impactful. Supported by an experienced Advisory Board, the company emphasizes partnership, long-term thinking, and helping organizations operate at their best."
        subtext="At Apex 49 Digital Limited, we believe that design goes beyond just creating a visually appealing product. It is about understanding the essence of your brand and crafting a story that captures it in a unique and"
        gallery={
          <div className="font-satoshi grid grid-cols-1 gap-[10px] md:grid-cols-2">
            <div className="flex flex-col gap-10px rounded-[6.4px] border-1 border-[#D9D9D9]">
              <div className="relative w-auto h-[365px] overflow-hidden">
                <div className="relative h-[362px] w-full overflow-hidden bg-[#D9D9D9]">
                  <Image
                    src="/images/akoke.png"
                    alt="Akoke Victor Anto"
                    fill
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="
                                            object-cover
                                            object-[center_8%]
                                            scale-[1.0]
                                            origin-top
                                            transition-all
                                            duration-500
                                            hover:grayscale
                                        "
                  />
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h1 className="font-adamina text-black text-[28px] font-regular">
                  Anto Akoke Victor
                </h1>

                <span className="text-[#191919] text-[22px] font-regular">
                  Co-Founder & Chief Technology Officer
                </span>

                <div className="flex gap-2 mt-2">
                  {/* X (formerly Twitter) Link */}
                  <a
                    href="https://x.com/Iam_Veecktor"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center border border-black h-[40px] w-[40px] rounded-sm text-black hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_832_24"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="14"
                        height="14"
                      >
                        <path d="M0 0H14V14H0V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_832_24)">
                        <path
                          d="M11.025 0.656006H13.172L8.482 6.03001L14 13.344H9.68L6.294 8.90901L2.424 13.344H0.275L5.291 7.59401L0 0.657006H4.43L7.486 4.71001L11.025 0.656006ZM10.27 12.056H11.46L3.78 1.87701H2.504L10.27 12.056Z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </a>

                  {/* LinkedIn Link */}
                  <a
                    href="https://www.linkedin.com/in/akoke-anto"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center border border-black h-[40px] w-[40px] rounded-sm text-[#191919] hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10px rounded-[6.4px] border-1 border-[#D9D9D9]">
              <div className="relative h-[362px] w-full overflow-hidden bg-[#D9D9D9]">
                <Image
                  src="/images/hope-jonah.png"
                  alt="Hope Vinam Jonah"
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="
                        object-cover
                        object-[center_8%]
                        scale-[1.18]
                        origin-top
                        transition-all
                        duration-500
                        hover:grayscale
                    "
                />
              </div>

              <div className="p-6 space-y-2">
                <h1 className="font-adamina text-black text-[28px] font-regular">
                  Hope Vinam Jonah
                </h1>

                <span className="text-[#191919] text-[22px] font-regular">
                  Co-Founder & Head of Design and Research
                </span>

                <div className="flex gap-2 mt-2">
                  <a
                    href="https://x.com/vinamtech"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center border border-black h-[40px] w-[40px] rounded-sm text-black hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_832_24"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="14"
                        height="14"
                      >
                        <path d="M0 0H14V14H0V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_832_24)">
                        <path
                          d="M11.025 0.656006H13.172L8.482 6.03001L14 13.344H9.68L6.294 8.90901L2.424 13.344H0.275L5.291 7.59401L0 0.657006H4.43L7.486 4.71001L11.025 0.656006ZM10.27 12.056H11.46L3.78 1.87701H2.504L10.27 12.056Z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </a>

                  {/* LinkedIn Link */}
                  <a
                    href="https://www.linkedin.com/in/vinamtech"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center border border-black h-[40px] w-[40px] rounded-sm text-[#191919] hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        }
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
                src="/images/web.jpg"
                className="h-full w-full object-cover grayscale hover:grayscale-0"
                alt="Web Design"
              />
            </div>
            <div className="flex flex-col gap-[10px] md:col-span-4">
              <div className="aspect-square flex-1 overflow-hidden rounded-[6.4px] md:aspect-auto">
                <img
                  src="/images/mobile-development.jpg"
                  className="h-full w-full object-cover grayscale hover:grayscale-0"
                  alt="Mobile App"
                />
              </div>
              {/* <div className="aspect-square flex-1 overflow-hidden rounded-[6.4px] md:aspect-auto">
                                <img
                                    src="/images/branding.jpg"
                                    className="h-full w-full object-cover grayscale hover:grayscale-0"
                                    alt="Identity"
                                />
                            </div> */}
            </div>
          </div>
        }
      >
        <ServiceList
          items={[
            "Digital product design and development",
            "Government and enterprise digital solutions",
            "Websites, web and mobile applications",
            "Branding and digital transformation",
            "Technical consulting and strategy",
          ]}
        />
      </StorySection>

      {/* 04 WHO WE SERVE */}
      <StorySection
        number="04"
        label="Who We Serve"
        heading="Apex 49 Digital Limited works with:"
        footerText="We understand the importance of accountability, structure and long-term partnerships."
      >
        <ServiceList
          items={[
            "Small and medium businesses",
            "Startups and growing companies",
            "Government and public sector organizations",
            "Institutions seeking digital transformation",
          ]}
        />
      </StorySection>

      {/* 05 OUR APPROACH */}
      <StorySection
        number="05"
        label="Our Approach"
        heading="We believe technology should feel clear, useful and dependable. That’s why our work is guided by three principles:"
        footerText="Our goal is not just to deliver projects, but to create digital infrastructure that continues to deliver value over time"
        image="/images/branding.jpg"
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
