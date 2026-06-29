import RequestQuote from "../RequestQuote";

export default function ProjectsHero() {
    return (
        <section className="mx-auto w-full max-w-[1328px] px-6 mt-12 lg:px-0">
            <div className="flex flex-col items-start justify-between pt-[34px] pb-[130px] lg:flex-row lg:items-end lg:pr-[588.75px]">
                <div className="flex h-[194px] w-[659px] flex-col justify-center">
                    <h1 className="leading-[90px] uppercase">
                        <span className="font-adamina block text-[60px] text-[#111111]">
                            Explore
                        </span>
                        <span className="block font-sans text-[60px] font-normal text-[#111111]">
                            Projects
                        </span>
                    </h1>
                </div>
            </div>

            <RequestQuote />
        </section>
    );
}
