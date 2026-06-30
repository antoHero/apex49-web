import { PageJsonLd } from '@/components/json-ld';
import ProjectsCTA from '@/components/projects/ProjectsCTA';
// import ProjectsFeatured from '@/components/projects/ProjectsFeatured';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsListExtended from '@/components/projects/ProjectsListExtended';
import { BASE_URL, buildMetadata } from '@/config/seo.config';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata({
  title: "Our Works",
  description: "Custom web experiences built for performance and conversion.",
  canonicalPath: "/projects",
});

export default function projects() {
    return ( 
        <div className="pb-24">
            <PageJsonLd 
                name="Our Works"
                description="Custom web experiences built for performance and conversion."
                url={`${BASE_URL}/projects`}
            />
            <ProjectsHero />
            {/* <ProjectsFeatured /> */}
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
