"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonialsContent } from "@/data/testimonials";

export const Testimonials: React.FC = () => {
  const { eyebrow, heading, heading2, description, testimonials } =
    testimonialsContent;

  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const maxIndex = isDesktop
    ? Math.max(0, testimonials.length - 3)
    : testimonials.length - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
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

      if (sliderRef.current) {
        gsap.fromTo(
          sliderRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sliderRef.current,
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
    <section id="testimonials" ref={sectionRef} className="relative bg-bg">
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
              Hear from members who train harder, feel stronger, and keep pushing forward{" "}
              <br className="hidden md:inline" />
              with JK Fitness.
            </p>
          </div>
        </div>

        <div ref={sliderRef} className="relative">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer select-none"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer select-none"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (isDesktop ? 100 / 3 : 100)
                }%)`,
              }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="w-full md:w-1/3 shrink-0 px-2 md:px-3"
                >
                  <div className="h-full bg-secondary-bg p-6 md:p-8 flex flex-col justify-between border border-white/5 select-none">
                    <p className="text-zinc-300 text-sm md:text-[15px] font-normal leading-relaxed mb-8 flex-1">
                      {item.quote}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/10">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <h4 className="text-white font-semibold text-base tracking-tight">
                          {item.name}
                        </h4>
                        <p className="text-zinc-400 text-xs md:text-sm">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
