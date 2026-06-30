import Link from "next/link";

export default function ProjectsCTA() {
    return (
        <section className="flex w-full flex-col items-center px-6 py-16 text-center">
            <h2 className="font-abel mb-12 max-w-2xl text-3xl leading-tight text-[#111111] lg:text-4xl">
                We are an agency that transforms ordinary business concepts into
                extraordinary visual narratives.
            </h2>

            <Link href="/request-quote" className="font-abel flex items-center justify-center bg-[#111111] px-6 h-[44px] text-sm tracking-widest rounded-[6px] text-white uppercase transition-colors hover:opacity-80 hover:bg-black">
                Request For Quote
            </Link>
        </section>
    );
}
