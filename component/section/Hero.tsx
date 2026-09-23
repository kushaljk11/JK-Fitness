"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/component/ui/Button";
import { heroContent } from "@/data/hero";

interface HeroProps {
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const {
    eyebrow,
    heading,
    heading2,
    subtext,
    primaryCta,
    secondaryCta,
    image,
    stats,
  } = heroContent;

  const sectionRef = useRef<HTMLElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const eyebrowRef = useRef<HTMLParagraphElement | null>(null);
  const headingContainerRef = useRef<HTMLDivElement | null>(null);
  const subtextRef = useRef<HTMLParagraphElement | null>(null);
  const ctaContainerRef = useRef<HTMLDivElement | null>(null);
  const statsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Entrance animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Image subtle scale & fade entrance
      if (imageContainerRef.current) {
        tl.fromTo(
          imageContainerRef.current,
          { opacity: 0, scale: 1.04 },
          { opacity: 1, scale: 1, duration: 1.1 },
          0
        );
      }

      // Eyebrow entrance
      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5 },
          0.15
        );
      }

      // Heading entrance (stagger both heading lines)
      if (headingContainerRef.current) {
        const headings = headingContainerRef.current.children;
        tl.fromTo(
          headings,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.12 },
          0.25
        );
      }

      // Subtext paragraph entrance
      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.55 },
          0.45
        );
      }

      // CTA Buttons entrance
      if (ctaContainerRef.current) {
        const buttons = ctaContainerRef.current.children;
        tl.fromTo(
          buttons,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          0.55
        );
      }

      // Stats bar entrance
      if (statsContainerRef.current) {
        tl.fromTo(
          statsContainerRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.65
        );
      }

      // Desktop: Subtle parallax effect on hero image visual
      mm.add("(min-width: 768px)", () => {
        if (imageContainerRef.current && sectionRef.current) {
          gsap.to(imageContainerRef.current, {
            y: 50,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-dvh flex flex-col justify-between pt-24 md:pt-28 overflow-hidden bg-bg"
    >
      {/* Background Hero Image with parallax container */}
      <div
        ref={imageContainerRef}
        className="absolute inset-0 z-0 pointer-events-none will-change-transform"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_25%] md:object-right opacity-90"
        />

        {/* Gradient Overlays to seamlessly blend image and ensure high text contrast on mobile */}
        <div className="absolute inset-0 bg-bg/50 md:bg-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-bg via-bg/95 md:via-bg/70 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-bg/50" />
        <div className="absolute top-0 left-0 right-0 h-28 bg-linear-to-b from-bg to-transparent" />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 w-full px-6 md:px-16 flex-1 flex flex-col justify-center py-8 md:py-20">
        <div className="max-w-2xl">
          {/* Eyebrow text */}
          <p
            ref={eyebrowRef}
            className="text-zinc-300 text-sm md:text-base font-normal tracking-wide mb-2 md:mb-4 will-change-transform"
          >
            {eyebrow}
          </p>

          {/* Heading with Trainex Font */}
          <div
            ref={headingContainerRef}
            className="font-trainex tracking-wide space-y-1 md:space-y-2 mb-4 md:mb-6"
          >
            <h1 className="text-3xl md:text-6xl text-white font-normal uppercase leading-tight will-change-transform">
              {heading}
            </h1>
            <h2 className="text-3xl md:text-6xl font-normal uppercase outline-text-primary leading-tight will-change-transform">
              {heading2}
            </h2>
          </div>

          {/* Subtitle */}
          <p
            ref={subtextRef}
            className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed max-w-lg mb-6 md:mb-10 will-change-transform"
          >
            {subtext}
          </p>

          {/* Reusable CTA Buttons */}
          <div
            ref={ctaContainerRef}
            className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4"
          >
            <Button
              onClick={onOpenContact}
              variant="primary"
              size="md"
              className="w-full md:w-auto px-7 py-3 text-base font-normal cursor-pointer will-change-transform"
            >
              {primaryCta.label}
            </Button>

            <Button
              href={secondaryCta.href || "#about"}
              variant="outline"
              size="md"
              className="w-full md:w-auto px-7 py-3 text-base font-normal bg-bg/40 backdrop-blur-sm will-change-transform"
            >
              {secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Floating Stats Bar */}
      <div
        ref={statsContainerRef}
        className="relative z-10 w-full px-6 md:px-16 pb-5 md:pb-8 will-change-transform"
      >
        <div className="w-full bg-secondary-bg border border-white/5 py-4 md:py-5 px-4 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-1 md:gap-2.5 ${index !== stats.length - 1
                  ? "md:border-r md:border-zinc-800"
                  : ""
                  }`}
              >
                <span className="text-primary text-xl md:text-2xl font-normal leading-none">
                  {stat.number}
                </span>
                <span className="text-zinc-300 text-xs md:text-sm font-normal">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
