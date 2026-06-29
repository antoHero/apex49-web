// import { StarIcon } from "lucide-react";
import React from 'react';

const StarIcon = () => (
    <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M19.3876 -8.3566e-06L20.5798 8.41992C21.5961 15.5985 28.0443 20.7319 35.2679 20.1133L43.7409 19.3876L35.3209 20.5796C28.1424 21.596 23.0089 28.0443 23.6275 35.2679L24.3532 43.7408L23.1612 35.3208C22.1448 28.1423 15.6966 23.0089 8.47294 23.6275L5.53736e-05 24.3532L8.41998 23.1611C15.5985 22.1447 20.7319 15.6966 20.1133 8.47287L19.3876 -8.3566e-06Z"
            fill="white"
        />
    </svg>
);

export function SpecTicker() {
    const items = [
        'MOBILE APP DEVELOPMENT',
        'WEB DEVELOPMENT',
        'BRAND IDENTITY',
        '3D DESIGN',
        'DIGITAL MARKETING',
    ];
    const content = (
        <div className="flex items-center">
            {items.map((item, idx) => (
                <React.Fragment key={idx}>
                    <span className="font-body flex h-[109px] items-center gap-12 text-[22px] leading-[77px] font-light tracking-[-0.03em] whitespace-nowrap text-white uppercase">
                        {item}
                    </span>
                    <StarIcon />
                </React.Fragment>
            ))}
        </div>
    );

    return (
        <div className="relative mt-12 w-full overflow-visible py-10">
            {/* Ticker Bar with 4.48 deg rotation */}
            <div className="absolute top-1/2 left-1/2 flex h-[109px] w-[150vw] -translate-x-1/2 -translate-y-1/2 -rotate-[6deg] transform items-center overflow-hidden bg-[#191919]">
                <div className="animate-scroll flex items-center whitespace-nowrap">
                    {content}
                    {content}
                    {content}
                    {content}
                </div>
            </div>
        </div>
    );
}
