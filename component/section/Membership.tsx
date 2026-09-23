"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, X, CheckCircle2, XCircle } from "lucide-react";
import {
  membershipContent,
  BillingCycle,
  PricingPlan,
} from "@/data/membership";

interface MembershipProps {
  onOpenContact?: () => void;
}

export const Membership: React.FC<MembershipProps> = ({ onOpenContact }) => {
  const { eyebrow, heading, heading2, description, plans } = membershipContent;
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("Monthly");

  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const controlsRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

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

      if (controlsRef.current) {
        gsap.fromTo(
          controlsRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: controlsRef.current,
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

  const cycles: BillingCycle[] = ["Monthly", "Quaterly", "Yearly"];

  return (
    <section id="membership" ref={sectionRef} className="relative bg-bg">
      <div className="w-full px-16 py-15">
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

          <div
            ref={controlsRef}
            className="flex flex-col md:items-end gap-4 max-w-xl"
          >
            <p className="text-zinc-400 text-sm md:text-[15px] font-normal leading-relaxed md:text-right">
              {description}
            </p>

            <div className="inline-flex items-center border border-white/10 bg-secondary-bg p-1 self-start md:self-end">
              {cycles.map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  className={`px-4 py-1.5 text-xs md:text-sm font-medium transition-colors cursor-pointer ${
                    billingCycle === cycle
                      ? "bg-primary text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {cycle}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 items-stretch"
        >
          {plans.map((plan) => {
            const currentPrice = plan.prices[billingCycle];

            if (plan.isPopular) {
              return (
                <div
                  key={plan.id}
                  className="relative flex flex-col justify-between bg-secondary-bg border border-primary/50 p-6 md:p-8 transition-colors"
                >
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-4 py-1 tracking-wider uppercase">
                    Popular
                  </div>

                  <div>
                    <span className="text-zinc-300 text-sm md:text-base font-normal block mb-2">
                      {plan.name}
                    </span>

                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        {currentPrice.amount}
                      </span>
                      <span className="text-zinc-400 text-sm md:text-base font-normal">
                        {currentPrice.period}
                      </span>
                    </div>

                    <p className="text-zinc-400 text-xs md:text-sm font-normal mb-6">
                      {plan.subtitle}
                    </p>

                    <div className="border-b border-white/10 mb-6" />

                    <div className="space-y-3.5">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          {feature.included ? (
                            <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0 stroke-[1.8]" />
                          ) : (
                            <XCircle className="w-4.5 h-4.5 text-primary/60 shrink-0 stroke-[1.8]" />
                          )}
                          <span
                            className={`text-xs md:text-sm ${
                              feature.included
                                ? "text-zinc-200 font-normal"
                                : "text-zinc-500 font-normal"
                            }`}
                          >
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={onOpenContact}
                    className="w-full mt-8 py-3.5 bg-primary hover:bg-primary/90 text-white text-xs md:text-sm font-semibold tracking-wider uppercase transition-colors cursor-pointer text-center"
                  >
                    {plan.buttonText}
                  </button>
                </div>
              );
            }

            return (
              <div
                key={plan.id}
                className="relative flex flex-col justify-between bg-secondary-bg border border-white/5 p-6 md:p-8 hover:border-zinc-700 transition-colors"
              >
                <div>
                  <span className="text-zinc-400 text-sm md:text-base font-normal block mb-2">
                    {plan.name}
                  </span>

                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {currentPrice.amount}
                    </span>
                    <span className="text-zinc-400 text-sm md:text-base font-normal">
                      {currentPrice.period}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-xs md:text-sm font-normal mb-6">
                    {plan.subtitle}
                  </p>

                  <div className="border-b border-white/10 mb-6" />

                  <div className="space-y-3.5">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-zinc-300 shrink-0 stroke-2" />
                        ) : (
                          <X className="w-4 h-4 text-zinc-600 shrink-0 stroke-2" />
                        )}
                        <span
                          className={`text-xs md:text-sm ${
                            feature.included
                              ? "text-zinc-200 font-normal"
                              : "text-zinc-500 font-normal"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenContact}
                  className="w-full mt-8 py-3.5 border border-white/15 hover:bg-white/5 text-zinc-200 hover:text-white text-xs md:text-sm font-medium tracking-wider uppercase transition-colors cursor-pointer text-center"
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Membership;
