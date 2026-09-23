"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryContent } from "@/data/gallery";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Gallery: React.FC = () => {
  const { eyebrow, heading, heading2, description, items } = galleryContent;

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (!trackRef.current || !triggerRef.current) return;

      const getDistance = () => {
        if (!trackRef.current) return 0;
        const paddingOffset = window.innerWidth < 768 ? 48 : 128;
        return Math.max(
          0,
          trackRef.current.scrollWidth - window.innerWidth + paddingOffset
        );
      };

      gsap.to(trackRef.current, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${Math.max(window.innerHeight * 1.2, getDistance())}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, triggerRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section id="gallery" ref={triggerRef} className="relative bg-bg">
      <div className="w-full min-h-screen flex flex-col justify-center py-10 md:py-14 overflow-hidden">
        {/* Header */}
        <div className="w-full px-6 md:px-16 mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12">
            <div className="shrink-0">
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

            <div className="max-w-2xl md:text-right">
              <p className="text-zinc-400 text-sm md:text-[15px] font-normal leading-relaxed">
                Explore JK Fitness where powerful workouts, premium equipment, and an energetic{" "}
                <br className="hidden md:inline" />
                atmosphere come together to keep you moving forward.
              </p>
            </div>
          </div>
        </div>

        {/* Pinned Horizontal Track */}
        <div className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex flex-row items-center gap-5 md:gap-6 will-change-transform pl-6 md:pl-16 pr-12 md:pr-24"
          >
            {items.map((item) => {
              const isActive = activeCardId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(item.id)}
                  className="group relative w-72 md:w-105 aspect-3/4 md:aspect-4/3 shrink-0 overflow-hidden bg-secondary-bg cursor-pointer select-none border border-white/5"
                >=
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 288px, 420px"
                    className={`object-cover object-center transition-transform duration-500 ease-out ${isActive ? "scale-105" : "group-hover:scale-105"
                      }`}
                  />

                  {/* Red Border on Hover / Active */}
                  <div
                    className={`pointer-events-none absolute inset-0 z-20 border-2 transition-colors duration-300 ${isActive
                      ? "border-primary"
                      : "border-transparent group-hover:border-primary"
                      }`}
                  />

                  {/* Corner Index */}
                  <span className="pointer-events-none absolute top-3.5 right-4 z-15 text-white/50 text-xs font-mono select-none">
                    0{item.id}
                  </span>

                  {/* Center Plus Button */}
                  <div className="pointer-events-none absolute inset-0 z-15 flex items-center justify-center">
                    <div
                      className={`w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white transition-all duration-300 ${isActive
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
                        }`}
                    >
                      <Plus className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Bottom Zone Name Overlay */}
                  <div
                    className={`pointer-events-none absolute inset-x-0 bottom-0 z-15 bg-linear-to-t from-black/90 via-black/40 to-transparent p-5 pt-12 transition-opacity duration-300 flex items-end ${isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
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
      </div>
    </section>
  );
};

export default Gallery;
