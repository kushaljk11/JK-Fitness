"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { howItWorksContent } from "@/data/howItWorks";

export const HowItWorks: React.FC = () => {
  const { eyebrow, heading, heading2, description, steps } = howItWorksContent;

  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLDivElement | null>(null);
  const stepsRef = useRef<HTMLDivElement | null>(null);

  const [activeStep, setActiveStep] = useState<string | null>(null);

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

      if (stepsRef.current) {
        gsap.fromTo(
          stepsRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stepsRef.current,
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
    <section id="how-it-works" ref={sectionRef} className="relative bg-secondary-bg">
      <div className="w-full px-6 md:px-16 py-8 md:py-15">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12 mb-12 md:mb-16">
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
              From choosing your plan to starting your workout, we make every step simple,{" "}
              <br className="hidden md:inline" />
              supportive, and focused on your goals.
            </p>
          </div>
        </div>

        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 items-start"
        >
          {steps.map((item) => {
            const isStepActive = activeStep === item.step;

            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(item.step)}
                className="group flex flex-col cursor-pointer select-none"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className={`text-5xl md:text-7xl font-semibold leading-none select-none tracking-tight transition-all duration-300 ${
                      isStepActive
                        ? "outline-text-primary"
                        : "outline-number group-hover:outline-text-primary"
                    }`}
                  >
                    {item.step}
                  </span>
                  <div
                    className={`flex-1 h-px transition-colors duration-300 ${
                      isStepActive
                        ? "bg-primary"
                        : "bg-white/10 group-hover:bg-primary/50"
                    }`}
                  />
                </div>

                <h3 className="text-white text-lg md:text-xl font-semibold tracking-wide mb-1.5 transition-colors">
                  {item.title}
                </h3>

                <p className="text-zinc-400 text-xs md:text-sm font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
