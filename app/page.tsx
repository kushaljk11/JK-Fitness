import React from "react";
import Navbar from "@/component/layout/Navbar";
import Hero from "@/component/section/Hero";
import Faq from "@/component/section/Faq";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Navbar />
      <Hero />
      <Faq />
    </div>
  );
}
