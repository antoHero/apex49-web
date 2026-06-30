import Image from "next/image";

export function VortexGraphic() {
    return (
        <div className="relative ml-12 flex hidden aspect-square h-auto w-full max-w-[595px] items-center justify-center md:block">
            {/* Masked Image Container matching 'Frame 1000004322' logic */}
            <div className="px relative h-[508px] w-auto overflow-hidden rounded-[6px] border border-black/5 shadow-inner">
                <Image
                    src="/images/office-hero.jpg"
                    className="h-[508px] w-auto object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    alt="Team collaboration"
                    fill
                    priority
                    quality={100}
                />
            </div>
        </div>
    );
}
