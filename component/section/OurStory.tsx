"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Mountain, Target, Users, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ourStoryContent } from "@/data/ourStory";

export const OurStory: React.FC = () => {
  const { eyebrow, heading, heading2, bgImage, girlImage, points } =
    ourStoryContent;

  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const pointsRef = useRef<HTMLDivElement | null>(null);
  const athleteRef = useRef<HTMLDivElement | null>(null);

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

      if (pointsRef.current) {
        gsap.fromTo(
          pointsRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: pointsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (athleteRef.current) {
        gsap.fromTo(
          athleteRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: athleteRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getPointIcon = (iconName: string) => {
    switch (iconName) {
      case "mountain":
        return <Mountain className="w-8 h-8 text-white shrink-0 stroke-[1.8]" />;
      case "target":
        return <Target className="w-8 h-8 text-white shrink-0 stroke-[1.8]" />;
      case "users":
        return <Users className="w-8 h-8 text-white shrink-0 stroke-[1.8]" />;
      case "future":
        return <TrendingUp className="w-8 h-8 text-white shrink-0 stroke-[1.8]" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="relative bg-bg pb-0 overflow-hidden"
    >
      <div className="absolute inset-x-0 bottom-0 top-27.5 md:top-40 z-0 pointer-events-none">
        <Image
          src={bgImage}
          alt="Our Story Atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_top]"
        />
        <div className="absolute top-0 left-0 right-0 h-10 bg-linear-to-b from-bg to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-16 pt-0 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-end">
          <div className="flex flex-col pb-16 md:pb-24 -translate-y-4 md:-translate-y-8">
            <div ref={headerRef} className="mb-6 md:mb-8">
              <p className="text-primary text-xs md:text-sm font-normal tracking-wide mb-2">
                {eyebrow}
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-[1.12]">
                {heading}
              </h2>
              <h2 className="text-3xl md:text-5xl font-semibold outline-text-primary tracking-tight leading-[1.12]">
                {heading2}
              </h2>
            </div>

            <div
              ref={pointsRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-12 gap-y-8 md:gap-y-10"
            >
              {points.map((point) => (
                <div key={point.id} className="flex items-start gap-4">
                  <div className="flex flex-col items-center shrink-0 pt-0.5">
                    {getPointIcon(point.icon)}
                    <span className="w-8 h-0.5 bg-primary rounded-full mt-2" />
                  </div>

                  <div>
                    <h4 className="text-white text-base md:text-lg font-medium leading-tight mb-2 tracking-wide">
                      {point.title}
                    </h4>
                    <p className="text-zinc-400 text-xs md:text-sm font-normal leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={athleteRef}
            className="relative flex justify-center md:justify-end items-end h-full will-change-transform self-end"
          >
            <div className="relative w-full max-w-97.5 md:max-w-115 h-125 md:h-160 flex items-end mask-[linear-gradient(to_bottom,black_60%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_98%)]">
              <Image
                src={girlImage.src}
                alt={girlImage.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 460px"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 md:h-36 bg-linear-to-t from-bg via-bg/60 to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default OurStory;
