"use client";

import React from "react";
import Image from "next/image";
import Button from "@/component/ui/Button";

interface StatItem {
  number: string;
  label: string;
}

const stats: StatItem[] = [
  { number: "500+", label: "Active Member" },
  { number: "15+", label: "Expert Trainers" },
  { number: "8+", label: "Active Member" },
  { number: "50+", label: "Active Member" },
];

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 md:pt-28 overflow-hidden bg-bg">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/hero.png"
          alt="JK Fitness Athlete"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:object-right opacity-90"
        />

        {/* Gradient Overlays to seamlessly blend image into #020302 */}
        <div className="absolute inset-0 bg-linear-to-r from-bg via-bg/90 md:via-bg/70 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-bg/40" />
        <div className="absolute top-0 left-0 right-0 h-28 bg-linear-to-b from-bg to-transparent" />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 w-full px-6 md:px-16 flex-1 flex flex-col justify-center py-12 md:py-20">
        <div className="max-w-2xl">
          {/* Eyebrow text */}
          <p className="text-zinc-300 text-sm md:text-base font-normal tracking-wide mb-3 md:mb-4">
            Stronger Starts Here.
          </p>

          {/* Heading with Trainex Font */}
          <div className="font-trainex tracking-wide space-y-1 md:space-y-2 mb-5 md:mb-6">
            <h1 className="text-4xl md:text-6xl text-white font-normal uppercase leading-tight">
              PUSH HARDER.
            </h1>
            <h2 className="text-4xl md:text-6xl font-normal uppercase outline-text-primary leading-tight">
              GO FURTHER.
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed max-w-lg mb-8 md:mb-10">
            Train with purpose, push beyond your limits, and become stronger every
            day at JK Fitness.
          </p>

          {/* Reusable CTA Buttons */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            <Button
              href="#membership"
              variant="primary"
              size="md"
              className="px-7 py-3 text-base font-normal"
            >
              Start Your Journey
            </Button>

            <Button
              href="#about"
              variant="outline"
              size="md"
              className="px-7 py-3 text-base font-normal"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Floating Stats Bar */}
      <div className="relative z-10 w-full px-6 md:px-16 pb-6 md:pb-8">
        <div className="w-full bg-secondary-bg border border-white/5 py-4 md:py-5 px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex items-center justify-center gap-2.5 ${index !== stats.length - 1
                  ? "md:border-r md:border-zinc-800"
                  : ""
                  }`}
              >
                <span className="text-primary text-xl md:text-2xl font-normal">
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
