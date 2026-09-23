"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AccordionItem from "../shared/Accordionitem";
import { faqContent } from "@/data/faq";

export default function Faq() {
  const { eyebrow, heading, heading2, subtext, items } = faqContent;
  const [openIndex, setOpenIndex] = useState(0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const accordionContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate Left Heading Column
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animate Right Accordion Items with Stagger
      if (accordionContainerRef.current) {
        const accordionItems = accordionContainerRef.current.children;
        gsap.fromTo(
          accordionItems,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: accordionContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-bg">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 px-6 py-10 md:grid-cols-2 md:gap-16 md:px-16 md:py-14">
        {/* Left: heading */}
        <div ref={headingRef}>
          <p className="text-sm font-medium text-primary">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
            {heading}
          </h2>
          <h2 className="mt-3 text-3xl font-semibold outline-text-primary md:text-5xl">
            {heading2}
          </h2>
          <p className="mt-2 max-w-sm text-sm text-white/60">{subtext}</p>
        </div>

        {/* Right: accordion */}
        <div ref={accordionContainerRef} className="border-t border-white/10">
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