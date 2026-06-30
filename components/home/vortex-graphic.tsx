import Image from "next/image";

export function VortexGraphic() {
    return (
        <div className="relative ml-12 flex hidden aspect-square h-auto w-full max-w-[595px] items-center justify-center md:block">
            {/* Masked Image Container matching 'Frame 1000004322' logic */}
            <div className="px relative h-[508px] w-auto overflow-hidden rounded-none rounded-[6px] border border-black/5 bg-gray-50 shadow-inner">
                <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200&grayscale=false"
                    className="h-[508px] w-auto object-cover opacity-90 grayscale transition-transform duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    alt="Team collaboration"
                    width={508}
                    height={508}
                />
            </div>
        </div>
    );
}
