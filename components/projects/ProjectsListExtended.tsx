// import Link from "next/link";

interface ProjectItemProps {
    title: string;
    category: string;
    date: string;
    link?: string;
}

const ProjectItem = ({ title, category, date, link }: ProjectItemProps) => {
    return (
        <a
            href={link ? link : "#"}
            target="_blank"
            className="group -mx-4 flex w-full cursor-pointer items-center justify-between border-b border-[#E4E4E4] px-4 py-12 transition-colors hover:bg-gray-50/50"
        >
            <h3 className="font-adamina text-3xl text-[#111111] uppercase transition-transform duration-300 group-hover:translate-x-2 lg:text-4xl">
                {title}
            </h3>

            <div className="flex items-center gap-8 lg:gap-24">
                <div className="hidden border border-[#111111]/10 px-4 py-1 md:block">
                    <span className="font-abel text-xs tracking-widest text-[#111111]/60 uppercase">
                        {category}
                    </span>
                </div>

                <div className="hidden lg:block">
                    <span className="font-abel text-sm text-[#111111]/40">
                        {date}
                    </span>
                </div>

                <div className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
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
        </a>
    );
};

export default function ProjectsListExtended() {
    const projects = [
        {
            title: 'Venndor',
            category: 'Software Development',
            date: 'Jul 14, 2023',
            link: 'https://tickets.thevenndor.com',
        },
        {
            title: 'Sabiebook',
            category: 'Product Design',
            date: 'Jul 14, 2023',
            link: 'https://sabiebook.com',
        },
        {
            title: 'Heykara',
            category: 'Mobile Development',
            date: 'Apr 22, 2022',
            link: 'https://heykara.com',
        },
        {
            title: 'Carebridge',
            category: 'Software Development',
            date: 'May 24, 2023',
            link: 'https://carebridge.ng',
        },
        {
            title: 'Zaur Autos',
            category: 'Web Design',
            date: 'Dec 30, 2021',
            link: 'https://zaurautos.com',
        },
        {
            title: 'Puggle It',
            category: 'Branding',
            date: 'Sep 19, 2022',
            link: 'https://puggleit.com',
        },
        {
            title: 'Mechanicon The Go',
            category: 'Web design',
            date: 'Dec 30, 2021',
            link: 'https://www.mechaniconthego.com.ng',
        },
        {
            title: 'Podex Associates',
            category: 'Web design',
            date: 'June 2024',
            link: 'https://www.podexassociates.com'
        }
    ];

    return (
        <section className="mx-auto mb-32 w-full max-w-[1328px] px-6 lg:px-0">
            <div className="mb-8">
                <span className="font-satoshi text-[10px] tracking-[0.2em] text-[#111111]/40 uppercase">
                    All Projects
                </span>
            </div>

            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <ProjectItem key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
