import RequestQuote from '../RequestQuote';

export default function AboutHero() {
    return (
        <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-[115px] px-4 pt-[72px] md:px-6">
            <div className="group relative mx-auto w-full max-w-[1408px] overflow-hidden rounded-[6.4px] bg-[#F5F5F5]">
                <img
                    src="/images/about-hero.png"
                    alt="Creative workspace mockup"
                    className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[688.5px] lg:h-[783px]"
                />

                <div className="pointer-events-none absolute inset-0 bg-black/5" />
            </div>

            <RequestQuote />
        </section>
    );
}
