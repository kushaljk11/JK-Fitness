"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { trainersContent } from "@/data/trainers";

export const Trainers: React.FC = () => {
  const { eyebrow, heading, heading2, description, trainers } = trainersContent;

  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const [activeTrainerId, setActiveTrainerId] = useState<number | null>(null);

  const handleTrainerClick = (id: number) => {
    setActiveTrainerId((prev) => (prev === id ? null : id));
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
            stagger: 0.12,
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
    <section id="trainer" ref={sectionRef} className="relative bg-bg">
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
              Train with passionate coaches who push your limits, perfect your form, and help{" "}
              <br className="hidden md:inline" />
              you grow stronger every day.
            </p>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch"
        >
          {trainers.map((trainer) => {
            const isActive = activeTrainerId === trainer.id;

            return (
              <div
                key={trainer.id}
                onClick={() => handleTrainerClick(trainer.id)}
                className="group relative flex flex-col overflow-hidden bg-secondary-bg cursor-pointer select-none"
              >
                <div className="relative w-full h-115 md:h-130 overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-cover object-top transition-all duration-700 ease-out ${
                      isActive
                        ? "grayscale-0 contrast-100 brightness-100 scale-105"
                        : "grayscale contrast-[1.05] brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105"
                    }`}
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent pointer-events-none" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 flex flex-col justify-end z-10">
                    <p className="text-primary text-[11px] md:text-xs font-semibold tracking-wider uppercase mb-1">
                      {trainer.role}
                    </p>
                    <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-1">
                      {trainer.name}
                    </h3>
                    <p className="text-zinc-300 text-xs md:text-sm font-normal">
                      {trainer.quote}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
