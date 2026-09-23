"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Mail, Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ctaContent } from "@/data/cta";

interface CtaBannerProps {
  onOpenContact?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenContact }) => {
  const { heading, description, email, whatsappText } = ctaContent;

  const [inputEmail, setInputEmail] = useState(email);
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });

  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleSendMail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email
    )}&su=${encodeURIComponent("Inquiry from JK Fitness Website")}`;
    const newWindow = window.open(gmailUrl, "_blank");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = `mailto:${email}?subject=Inquiry%20from%20JK%20Fitness%20Website`;
    }
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/9779804060401?text=Hi%20JK%20Fitness!%20I%20have%20questions%20about%20memberships,%20training,%20or%20getting%20started.",
      "_blank"
    );
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="cta" ref={sectionRef} className="relative bg-bg">
      <div className="w-full px-6 md:px-16 py-8 md:py-15">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full overflow-hidden bg-linear-to-br from-[#D9344A] via-[#C72C41] to-[#7A1322] px-6 md:px-14 py-12 md:py-16 text-center flex flex-col items-center justify-center border border-white/10"
        >
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: mousePos.opacity,
              background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.16), transparent 70%)`,
            }}
          />

          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-3 md:mb-4 md:whitespace-nowrap">
              {heading}
            </h2>

            <p className="text-white/85 text-[10px] md:text-sm font-normal leading-relaxed mb-8 md:mb-10">
              Have questions about memberships, training, or getting started? Chat with the{" "}
              <br className="hidden md:inline" />
              JK Fitness team directly.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3.5 w-full max-w-xl">
              <div className="flex items-center bg-white rounded-lg p-1.5 pl-3.5 w-full md:flex-1 border border-white/20 transition-all">
                <input
                  type="text"
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                  className="text-zinc-800 text-xs md:text-sm font-normal bg-transparent outline-none flex-1 min-w-0 pr-2"
                  placeholder="jkfitness@gmail.com"
                />
                <button
                  type="button"
                  onClick={handleSendMail}
                  className="bg-primary hover:bg-[#A81F32] active:scale-95 text-white text-xs md:text-sm font-medium px-4 py-2.5 rounded-md transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Mail</span>
                </button>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white text-xs md:text-sm font-medium px-5 py-3 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer w-full md:w-auto shrink-0 select-none"
              >
                <FaWhatsapp className="w-4.5 h-4.5 text-white" />
                <span>{whatsappText}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
