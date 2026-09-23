"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whyUsContent } from "@/data/whyUs";

export const WhyUs: React.FC = () => {
  const { eyebrow, heading, heading2, description, image, features } =
    whyUsContent;

  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLDivElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const featuresListRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: descRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (imageWrapperRef.current) {
        gsap.fromTo(
          imageWrapperRef.current,
          { opacity: 0, scale: 0.96, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageWrapperRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (featuresListRef.current) {
        const featureItems = featuresListRef.current.children;
        gsap.fromTo(
          featureItems,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuresListRef.current,
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
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-bg overflow-hidden"
    >
      <div className="w-full px-6 md:px-16 py-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="flex flex-col">
            <div ref={headerRef} className="mb-8 md:mb-12">
              <p className="text-primary text-xs md:text-sm font-normal tracking-wide mb-2.5">
                {eyebrow}
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-[1.15]">
                {heading}
              </h2>
              <h2 className="text-3xl md:text-5xl font-semibold outline-text-primary tracking-tight leading-[1.15]">
                {heading2}
              </h2>
            </div>

            <div className="pr-4 pb-4">
              <div
                ref={imageWrapperRef}
                className="relative w-full max-w-135 will-change-transform"
              >
                <div
                  className="absolute inset-0 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 rounded-2xl border border-primary pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative rounded-2xl overflow-hidden border border-primary/80 bg-secondary-bg aspect-[4/4.2] md:aspect-[4/4.4]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 540px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div
              ref={descRef}
              className="flex justify-start md:justify-end mt-8 md:mt-22"
            >
              <p className="text-zinc-400 text-sm md:text-[15px] font-normal leading-relaxed max-w-md md:text-right">
                {description}
              </p>
            </div>

            <div
              ref={featuresListRef}
              className="flex flex-col divide-y divide-white/10 mt-8 md:mt-12"
            >
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="py-6 md:py-8 group cursor-default"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-primary text-base md:text-lg font-medium leading-none">
                        {feature.number}
                      </span>
                      <h3 className="text-white text-lg md:text-2xl font-medium tracking-wide group-hover:text-zinc-200 transition-colors">
                        {feature.title}
                      </h3>
                    </div>

                    <ArrowDownRight className="w-5 h-5 text-zinc-600 stroke-[1.5] group-hover:text-primary group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all" />
                  </div>

                  <p className="text-zinc-400 text-sm md:text-[15px] font-normal mt-2.5 pl-8 md:pl-9 leading-relaxed max-w-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
