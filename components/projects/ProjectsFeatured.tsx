import Image from "next/image";

export default function ProjectsFeatured() {
    return (
        <section className="mx-auto mb-24 w-full max-w-[1328px] px-6 lg:px-0">
            <div className="group relative aspect-[16/9] w-full overflow-hidden lg:aspect-[1328/680]">
                <img
                    src="/images/project-bg.png"
                    alt="Featured Project"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                />

                <div className="absolute bottom-10 left-10 flex items-end gap-12 bg-white p-8 shadow-sm">
                    <div>
                        <h3 className="font-satoshi mb-2 text-2xl text-[#111111] uppercase">
                            Sabiebook
                        </h3>
                        <div className="font-abel flex items-center gap-2 text-xs tracking-widest text-[#111111]/60 uppercase">
                            <span>Web Design</span>
                            <span className="h-1 w-1 rounded-full bg-[#111111]/20"></span>
                            <span>Sep 21, 2023</span>
                        </div>
                    </div>
                    <div className="border-l border-[#111111]/10 pl-8">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 9L9 1M9 1H3M9 1V7"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
