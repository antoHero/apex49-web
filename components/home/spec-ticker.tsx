"use client";

import React, { useEffect, useRef } from "react";
import {
    motion,
    useAnimationControls,
    useReducedMotion,
} from "motion/react";

// ─── Star Icon ────────────────────────────────────────────────────────────────

const StarIcon = () => (
    <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-12 shrink-0"
        aria-hidden="true"
    >
        <path
            d="M19.3876 -8.3566e-06L20.5798 8.41992C21.5961 15.5985 28.0443 20.7319 35.2679 20.1133L43.7409 19.3876L35.3209 20.5796C28.1424 21.596 23.0089 28.0443 23.6275 35.2679L24.3532 43.7408L23.1612 35.3208C22.1448 28.1423 15.6966 23.0089 8.47294 23.6275L5.53736e-05 24.3532L8.41998 23.1611C15.5985 22.1447 20.7319 15.6966 20.1133 8.47287L19.3876 -8.3566e-06Z"
            fill="white"
        />
    </svg>
);


const TICKER_ITEMS = [
    "MOBILE APP DEVELOPMENT",
    "WEB DEVELOPMENT",
    "BRAND IDENTITY",
    "3D DESIGN",
    "DIGITAL MARKETING",
] as const;


const SPEED_PX_PER_SEC = 80;

const TickerStrip = React.memo(() => (
    <div className="flex items-center shrink-0" aria-hidden="true">
        {TICKER_ITEMS.map((item, idx) => (
            <React.Fragment key={idx}>
                <span className="font-body flex h-[109px] items-center text-[22px] leading-[77px] font-light tracking-[-0.03em] whitespace-nowrap text-white uppercase select-none">
                    {item}
                </span>
                <StarIcon />
            </React.Fragment>
        ))}
    </div>
));
TickerStrip.displayName = "TickerStrip";

// ─── SpecTicker ───────────────────────────────────────────────────────────────

export function SpecTicker() {
    const trackRef = useRef<HTMLDivElement>(null);
    const controls = useAnimationControls();
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) return;

        const track = trackRef.current;
        if (!track) return;

        const startAnimation = () => {
            const totalWidth = track.scrollWidth;

            const oneSetWidth = totalWidth / 4;
            const duration = oneSetWidth / SPEED_PX_PER_SEC;

            controls.set({ x: 0 });
            controls.start({
                x: -oneSetWidth,
                transition: {
                    duration,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                },
            });
        };

        startAnimation();
    }, [controls, prefersReducedMotion]);

    return (
        <div
            className="relative mt-12 w-full overflow-visible py-10"
            role="marquee"
            aria-label="Services: Mobile App Development, Web Development, Brand Identity, 3D Design, Digital Marketing"
        >
            {/* Rotated container — clips the ticker to the band */}
            <div className="absolute top-1/2 left-1/2 flex h-[109px] w-[180vw] -translate-x-1/2 -translate-y-1/2 -rotate-[6deg] transform items-center overflow-hidden bg-[#191919]">
                {/*
                  motion.div is the scrolling track.
                  We render 4 copies so there is always content visible;
                  the animation shifts by exactly 1 copy width then loops.
                */}
                <motion.div
                    ref={trackRef}
                    className="flex items-center whitespace-nowrap will-change-transform"
                    animate={controls}
                >
                    <TickerStrip />
                    <TickerStrip />
                    <TickerStrip />
                    <TickerStrip />
                </motion.div>
            </div>
        </div>
    );
}