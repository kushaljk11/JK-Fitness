"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { facilitiesContent } from "@/data/facilities";

export const Facilities: React.FC = () => {
  const { eyebrow, heading, heading2, description, facilities } =
    facilitiesContent;

  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const [activeFacilityId, setActiveFacilityId] = useState<number | null>(null);

  const handleFacilityClick = (id: number) => {
    setActiveFacilityId((prev) => (prev === id ? null : id));
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

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
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
    <section id="facility" ref={sectionRef} className="relative bg-bg">
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
              Train with modern equipment and dedicated workout spaces designed to help{" "}
              <br className="hidden md:inline" />
              you perform better, train safely, and achieve your fitness goals.
            </p>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch"
        >
          {facilities.map((item) => {
            const isActive = activeFacilityId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => handleFacilityClick(item.id)}
                className="group flex flex-col overflow-hidden cursor-pointer select-none"
              >
                <div className="relative w-full h-56 md:h-64 overflow-hidden bg-secondary-bg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className={`object-cover object-center transition-transform duration-500 ease-out ${
                      isActive ? "scale-105" : "group-hover:scale-105"
                    }`}
                  />
                </div>

                <div
                  className={`relative px-5 py-4.5 flex-1 flex flex-col justify-center transition-all duration-300 ${
                    isActive
                      ? "bg-primary border-l-4 border-l-white border-b border-b-primary"
                      : "bg-secondary-bg border-l-2 border-b border-primary/60 group-hover:bg-primary group-hover:border-l-4 group-hover:border-l-white group-hover:border-b-primary"
                  }`}
                >
                  <h3 className="text-white text-base md:text-lg font-semibold tracking-wide leading-tight">
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs md:text-sm font-normal mt-1 leading-snug transition-colors duration-300 ${
                      isActive
                        ? "text-white/90"
                        : "text-zinc-400 group-hover:text-white/90"
                    }`}
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
