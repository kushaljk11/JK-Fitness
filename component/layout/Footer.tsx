import React from "react";
import { BRAND, FOOTER_COLUMNS, SOCIAL_LINKS, FooterColumn as FooterColumnType, SocialLink } from "@/data/footer";
import FooterColumn from "@/component/shared/Footercolumn";
import SocialIcon from "./SocialIcon";

const PRIMARY = "#C72C41";
const PRIMARY_DARK = "#5C0F1A";

export const Footer: React.FC = () => {
    return (
        <div className="bg-black pt-20 px-4">
            <footer className="bg-[#131314] text-white pt-8 md:pt-12 px-6 md:px-16 rounded-tl-xl rounded-tr-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-12">
                    <div className="md:col-span-3 space-y-6">
                        <a href={BRAND.href} className="flex items-center gap-2 w-fit">
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke={PRIMARY}
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M6.5 6.5 17.5 17.5" />
                                <path d="m21 21-1.5-1.5" />
                                <path d="M3 3l1.5 1.5" />
                                <path d="M18 4l2 2-3 3-2-2z" />
                                <path d="M6 16l2 2-3 3-2-2z" />
                            </svg>
                            <span className="text-lg font-extrabold tracking-tight">
                                {BRAND.name}
                            </span>
                        </a>
                        <p className="text-sm/6 text-neutral-300 max-w-96">
                            {BRAND.tagline}
                        </p>
                        <div className="flex gap-5 md:gap-6 order-1 md:order-2">
                            {SOCIAL_LINKS.map((social: SocialLink) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="text-white hover:text-primary transition-colors"
                                >
                                    <SocialIcon name={social.name} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-start">
                        {FOOTER_COLUMNS.map((column: FooterColumnType, i: number) => (
                            <FooterColumn
                                key={column.title}
                                column={column}
                                className={i === FOOTER_COLUMNS.length - 1 ? "col-span-2 md:col-span-1" : ""}
                            />
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-neutral-700 flex justify-between items-center">
                    <p className="text-neutral-400 text-sm">© 2026 {BRAND.name}</p>
                    <p className="text-sm text-neutral-400">All rights reserved.</p>
                </div>

                <div className="relative">
                    <div
                        className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl h-full max-h-64 rounded-full blur-[170px] pointer-events-none"
                        style={{ backgroundColor: PRIMARY }}
                    />
                    <h3
                        className="text-center font-extrabold leading-[0.7] text-transparent text-[clamp(3rem,15vw,15rem)] mt-6"
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