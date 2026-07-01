"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import Image from "next/image";


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
  image?: React.ReactNode;
}

const testimonials: TestimonialData[] = [
  {
    text: "We wanted a website that reflected the creativity and professionalism of our architectural practice, and the result was outstanding. The design showcases our portfolio beautifully while maintaining a clean, modern aesthetic that aligns with our brand. Navigation is intuitive, the site performs flawlessly across devices, and we've received numerous compliments from clients and partners. They truly understood our vision and translated it into an exceptional digital presence.",
    author: "Akinwale Thompson",
    role: "Principal Architect, Poddex Associates",
    image: <Image src="/images/podex.jpeg" alt="Akinwale Thompson" width={100} height={100} className="rounded-full" />,
  },
  {
    text: "The team delivered far more than a website they built an entire digital experience for our business.  Our mechanics can now track jobs, manage customer records, and update repair statuses seamlessly, while customers enjoy a smooth booking experience. The professionalism, attention to detail, and quality of the final product exceeded our expectations.",
    author: "Agoro Teyi",
    role: "Founder, Mechanic On The Go",
    image: <Image src="/images/mech-on-go.jpeg" alt="Agoro Teyi" width={100} height={100} className="rounded-full" />,
  },
  {
    text: "Working with Apex 49 has been an exceptional experience; their insight, professional advice, and outstanding quality of work have been pivotal as they continue to build our events and ticketing platform. Even with the project ongoing, their highly capable and professional team consistently delivers top-tier results, making them an easy partner to recommend.",
    author: "Akintunde Shittu",
    role: "Co-Founder, The Venndor",
    image: <Image src="/images/venndor.png" alt="Akintunde Shittu" width={100} height={100} className="rounded-full" />,
  },
];

const AUTO_PLAY_INTERVAL = 5000; // ms

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.35, ease: [0.55, 0, 1, 0.45] },
  }),
};

const progressVariants: Variants = {
  idle: { scaleX: 0 },
  running: {
    scaleX: 1,
    transition: { duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" },
  },
};


export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0); // bump to restart progress bar
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const goTo = useCallback(
    (index: number, dir?: number) => {
      const resolvedDir = dir ?? (index > current ? 1 : -1);
      setDirection(resolvedDir);
      setCurrent(index);
      setProgressKey((k) => k + 1);
    },
    [current],
  );

  const nextSlide = useCallback(() => {
    goTo((current + 1) % testimonials.length, 1);
  }, [current, goTo]);

  const prevSlide = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length, -1);
  }, [current, goTo]);

  // ── Auto-play ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    timerRef.current = setTimeout(() => {
      nextSlide();
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, isPaused, prefersReducedMotion, nextSlide]);

  const pause = () => {
    setIsPaused(true);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const resume = () => {
    setIsPaused(false);
    setProgressKey((k) => k + 1);
  };

  const effectiveVariants = prefersReducedMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.15 } },
      }
    : slideVariants;

  return (
    <section
      className="mx-auto w-full max-w-[1328px] px-6 py-24 lg:px-0"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
    >
      {/* ── Header row ──────────────────────────────────────────────────── */}
      <div className="mb-24 flex flex-col items-start justify-between gap-12 lg:flex-row">
        <div className="flex flex-col gap-[3px]">
          <span className="font-body text-[12.8px] leading-[19.2px] font-medium text-[#191919] uppercase opacity-60">
            TESTIMONIAL
          </span>
          <div className="flex flex-col">
            <h2 className="font-adamina text-[40px] leading-tight text-[#111111] md:text-[60px] md:leading-[77px]">
              Insights from
            </h2>
            <div className="mt-2 flex items-center gap-[10px]">
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

        {/* Arrows */}
        <div className="flex gap-[10px]">
          <motion.button
            onClick={prevSlide}
            whileTap={{ scale: 0.92 }}
            whileHover={{ opacity: 0.8 }}
            aria-label="Previous testimonial"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-[6px] bg-[#111111]"
          >
            <ArrowLeft />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            whileTap={{ scale: 0.92 }}
            whileHover={{ opacity: 0.8 }}
            aria-label="Next testimonial"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-[6px] bg-[#111111]"
          >
            <ArrowRight />
          </motion.button>
        </div>
      </div>

      {/* ── Card stack ──────────────────────────────────────────────────── */}
      <div className="relative min-h-[420px] md:min-h-[380px]">
        {/* Stacked shadow cards */}
        <div className="absolute inset-0 hidden translate-y-8 rotate-[-4deg] border border-[#E4E4E4] bg-white md:block" />
        <div className="absolute inset-0 hidden translate-y-4 rotate-[-2deg] border border-[#E4E4E4] bg-white md:block" />

        {/* Animated card */}
        <div className="relative z-10 overflow-hidden border border-[#E4E4E4] bg-white">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={effectiveVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex w-full flex-col gap-[64px] p-8 md:p-[64px]"
            >
              <QuoteIcon />

              <p className="font-abel max-w-[1076px] text-[22px] leading-[1.3] tracking-[-0.02em] text-[#191919] md:text-[26px] md:leading-[30px]">
                {testimonials[current].text}
              </p>

              <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-[18px]">
                {/* <UmbrellaLogo /> */}
                {testimonials[current].image}
                <div className="hidden h-[1px] w-[64px] rotate-[-90deg] bg-[#191919] md:block" />
                <div className="flex flex-col gap-1 md:gap-[12px]">
                  <span className="font-body text-[22px] leading-[1] font-black text-[#191919]">
                    {testimonials[current].author}
                  </span>
                  <span className="font-body text-[18px] leading-[1] font-normal text-[#191919] opacity-60">
                    {testimonials[current].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Auto-play progress bar along the bottom of the card */}
          {!prefersReducedMotion && (
            <motion.div
              key={`progress-${progressKey}`}
              className="absolute bottom-0 left-0 h-[2px] w-full bg-[#191919]"
              style={{ transformOrigin: "left" }}
              variants={progressVariants}
              initial="idle"
              animate={isPaused ? "idle" : "running"}
            />
          )}
        </div>
      </div>

      {/* ── Pagination indicators ────────────────────────────────────────── */}
      <div
        className="mt-12 flex justify-center gap-[3px]"
        role="tablist"
        aria-label="Testimonial indicators"
      >
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            role="tab"
            aria-selected={idx === current}
            aria-label={`Go to testimonial ${idx + 1}`}
            onClick={() => goTo(idx)}
            className="cursor-pointer relative h-[12px] overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#191919]"
            style={{ width: idx === current ? 62 : 21 }}
          >
            {/* Track */}
            <motion.div
              className="absolute inset-0"
              animate={{ width: idx === current ? 62 : 21 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                backgroundColor:
                  idx === current
                    ? "#191919"
                    : idx < current
                      ? "rgba(0,0,0,0.2)"
                      : "#C4C4C4",
              }}
            />
            {/* Active fill that mirrors progress bar */}
            {idx === current && !prefersReducedMotion && (
              <motion.div
                key={`dot-progress-${progressKey}`}
                className="absolute inset-0 bg-[#555]"
                style={{ transformOrigin: "left" }}
                variants={progressVariants}
                initial="idle"
                animate={isPaused ? "idle" : "running"}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
