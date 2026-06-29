import ProjectsCTA from '@/components/projects/ProjectsCTA';
import ProjectsFeatured from '@/components/projects/ProjectsFeatured';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsListExtended from '@/components/projects/ProjectsListExtended';
import Link from 'next/link';


export default function projects() {
    return ( 
        <div className="pb-24">
            <ProjectsHero />
            <ProjectsFeatured />
            <ProjectsListExtended />
            <ProjectsCTA />
            {/* <div className="py-20 text-center">
                <Link
                    href="#"
                    className="font-body text-sm underline opacity-40 transition-opacity hover:opacity-100"
                >
                    Back to Home
                </Link>
            </div> */}
        </div>
    );
}
