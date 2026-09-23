"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryContent } from "@/data/gallery";

export const Gallery: React.FC = () => {
  const { eyebrow, heading, heading2, description, items } = galleryContent;

  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const [activeCardId, setActiveCardId] = useState<number | null>(1);

  const handleCardClick = (id: number) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

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

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
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
    <section id="gallery" ref={sectionRef} className="relative bg-bg">
      <div className="w-full px-6 md:px-16 py-8 md:py-15">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12 mb-10 md:mb-14">
          <div ref={headerRef} className="shrink-0">
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

          <div ref={descRef} className="max-w-2xl md:text-right">
            <p className="text-zinc-400 text-sm md:text-[15px] font-normal leading-relaxed">
              Explore JK Fitness where powerful workouts, premium equipment, and an energetic{" "}
              <br className="hidden md:inline" />
              atmosphere come together to keep you moving forward.
            </p>
          </div>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5"
        >
          {items.map((item) => {
            const isActive = activeCardId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => handleCardClick(item.id)}
                className="group relative aspect-3/4 md:aspect-square w-full overflow-hidden bg-secondary-bg cursor-pointer select-none"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className={`object-cover object-center transition-transform duration-500 ease-out ${
                    isActive ? "scale-105" : "group-hover:scale-105"
                  }`}
                />

                <div
                  className={`pointer-events-none absolute inset-0 z-20 border-2 transition-colors duration-300 ${
                    isActive
                      ? "border-primary"
                      : "border-transparent group-hover:border-primary"
                  }`}
                />

                <div className="pointer-events-none absolute inset-0 z-15 flex items-center justify-center">
                  <div
                    className={`w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white transition-all duration-300 ${
                      isActive
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
                    }`}
                  >
                    <Plus className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                <div
                  className={`pointer-events-none absolute inset-x-0 bottom-0 z-15 bg-linear-to-t from-black/90 via-black/40 to-transparent p-5 pt-12 transition-opacity duration-300 flex items-end ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <span className="text-white text-base md:text-lg font-medium tracking-wide">
                    {item.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
