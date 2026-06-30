import Link from 'next/link';
import { ArrowIcon } from './home/selected-works';

export default function RequestQuote() {
    return (
        <div className="mx-auto flex w-full md:max-w-[1420px] flex-col items-start md:items-center justify-start md:justify-between gap-6 border-t border-[#E4E4E4] md:pt-[37px] py-4 md:pb-[36px] md:flex-row md:gap-[865px]">
            {/* div.action-text */}
            <div className="flex flex-col">
                <span className="font-abel text-[20.64px] leading-[31.2px] whitespace-nowrap text-[#111111]">
                    Let’s push your business forward
                </span>
            </div>

            {/* div.hero-action-right */}
            <Link
                href="/request-quote"
                className="group flex cursor-pointer items-center gap-[10px]"
            >
                <span className="font-abel text-[20.64px] leading-[31.2px] whitespace-nowrap text-[#111111]">
                    Request a Quote
                </span>
                <div className="flex h-4 w-4 items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowIcon />
                </div>
            </Link>
        </div>
    );
}
