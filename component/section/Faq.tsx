"use client";

import { useState } from "react";
import AccordionItem from "../shared/Accordionitem";
import { faqContent } from "@/data/faq";

export default function Faq() {
    const { eyebrow, heading, heading2, subtext, items } = faqContent;
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="bg-black">
            <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 px-6 py-10 md:grid-cols-2 md:gap-16 md:px-16 md:py-14">
                {/* Left: heading */}
                <div>
                    <p className="text-sm font-medium text-primary">
                        {eyebrow}
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
                        {heading}
                    </h2>
                    <h2 className="mt-3 text-3xl font-semibold outline-text-primary md:text-5xl">
                        {heading2}
                    </h2>
                    <p className="mt-2 max-w-sm text-sm text-white/60">{subtext}</p>
                </div>

                {/* Right: accordion */}
                <div className="border-t border-white/10">
                    {items.map((item, i) => (
                        <AccordionItem
                            key={item.question}
                            question={item.question}
                            answer={item.answer}
                            open={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                            showDivider={i < items.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}