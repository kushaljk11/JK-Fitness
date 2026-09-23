import React from "react";
import Image from "next/image";
import {
    BRAND,
    FOOTER_COLUMNS,
    SOCIAL_LINKS,
    FooterColumn as FooterColumnType,
    SocialLink,
} from "@/data/footer";
import FooterColumn from "@/component/shared/Footercolumn";
import SocialIcon from "./SocialIcon";

const PRIMARY = "#C72C41";
const PRIMARY_DARK = "#5C0F1A";

export const Footer: React.FC = () => {
    return (
        <div className="bg-bg pt-12 md:pt-16 px-4 md:px-6">
            <footer className="bg-secondary-bg text-white pt-8 md:pt-12 px-6 md:px-16 rounded-tl-3xl rounded-tr-3xl overflow-hidden border-t border-x border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-12">
                    {/* Brand */}
                    <div className="md:col-span-3 space-y-6">
                        <a href={BRAND.href} className="inline-block w-fit">
                            <div className="relative h-12 w-36 md:h-14 md:w-44 flex items-center">
                                <Image
                                    src={BRAND.logo}
                                    alt={BRAND.name}
                                    fill
                                    sizes="176px"
                                    className="object-contain object-left"
                                />
                            </div>
                        </a>
                        <p className="text-sm/6 text-zinc-400 max-w-md">
                            {BRAND.tagline}
                        </p>
                        <div className="flex gap-4 md:gap-5">
                            {SOCIAL_LINKS.map((social: SocialLink) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200"
                                    aria-label={social.name}
                                >
                                    <SocialIcon name={social.name} size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 items-start">
                        {FOOTER_COLUMNS.map((column: FooterColumnType, i: number) => (
                            <FooterColumn
                                key={column.title}
                                column={column}
                                className={
                                    i === FOOTER_COLUMNS.length - 1
                                        ? "col-span-2 md:col-span-1"
                                        : ""
                                }
                            />
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2">
                    <p className="text-zinc-400 text-xs md:text-sm">
                        © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
                    </p>
                    <p className="text-zinc-400 text-xs md:text-sm">
                        Designed for Strength & Community
                    </p>
                </div>

                <div className="relative">
                    <div
                        className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl h-full max-h-64 rounded-full blur-[170px] pointer-events-none"
                        style={{ backgroundColor: PRIMARY }}
                    />
                    <h3
                        className="text-center font-extrabold leading-[0.7] text-transparent text-[clamp(2rem,11.5vw,15rem)] mt-6 select-none pointer-events-none whitespace-nowrap tracking-tight"
                        style={{ WebkitTextStroke: `2px ${PRIMARY_DARK}` }}
                    >
                        {BRAND.name}
                    </h3>
                </div>
            </footer>
        </div>
    );
};

export default Footer;