"use client";

import React, { useState } from "react";
import Navbar from "@/component/layout/Navbar";
import Hero from "@/component/section/Hero";
import WhyUs from "@/component/section/WhyUs";
import OurStory from "@/component/section/OurStory";
import Marquee from "@/component/section/Marquee";
import Facilities from "@/component/section/Facilities";
import Membership from "@/component/section/Membership";
import Trainers from "@/component/section/Trainers";
import HowItWorks from "@/component/section/HowItWorks";
import Faq from "@/component/section/Faq";
import ContactDrawer from "@/component/shared/ContactDrawer";
import SmoothScrollProvider from "@/component/shared/SmoothScrollProvider";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-bg text-white">
        <Navbar onOpenContact={() => setIsContactOpen(true)} />
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <WhyUs />
        <OurStory />
        <Marquee />
        <Facilities />
        <Membership onOpenContact={() => setIsContactOpen(true)} />
        <Trainers />
        <HowItWorks />
        <Faq />
        <ContactDrawer
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    </SmoothScrollProvider>
  );
}
