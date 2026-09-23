"use client";

import React, { useState } from "react";
import Navbar from "@/component/layout/Navbar";
import Hero from "@/component/section/Hero";
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
        <Faq />
        <ContactDrawer
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    </SmoothScrollProvider>
  );
}
