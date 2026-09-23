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
import Gallery from "@/component/section/Gallery";
import Testimonials from "@/component/section/Testimonials";
import Faq from "@/component/section/Faq";
import CtaBanner from "@/component/section/CtaBanner";
import ContactDrawer from "@/component/shared/ContactDrawer";
import SmoothScrollProvider from "@/component/shared/SmoothScrollProvider";
import Footer from "@/component/layout/Footer";

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
        <Gallery />
        <Testimonials />
        <CtaBanner onOpenContact={() => setIsContactOpen(true)} />
        <Faq />
        <ContactDrawer
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
      <Footer />
    </SmoothScrollProvider>
  );
}
