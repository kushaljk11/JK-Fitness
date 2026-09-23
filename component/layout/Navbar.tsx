"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Menu, X } from "lucide-react";
import Button from "@/component/ui/Button";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Facility", href: "#facility" },
  { label: "Membership", href: "#membership" },
  { label: "Trainer", href: "#trainer" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-md border-b border-white/5 font-sans">
      <div className="w-full px-6 md:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center shrink-0">
            <div className="relative h-12 w-36 md:h-14 md:w-44 flex items-center">
              <Image
                src="/assets/logo.png"
                alt="JK FITNESS"
                fill
                priority
                sizes="176px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={`relative py-1 text-base font-normal transition-colors duration-200 ${isActive ? "text-white" : "text-zinc-300 hover:text-white"
                    }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] h-0.5 bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Section: Location Icon + Divider + Join Now Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Location Icon */}
            <Link
              href="#contact"
              className="text-white hover:text-primary transition-colors p-1"
              aria-label="Location"
            >
              <MapPin className="w-5 h-5 stroke-[1.75]" />
            </Link>

            {/* Vertical Divider */}
            <span className="w-px h-6 bg-white/30" aria-hidden="true" />

            {/* Reusable Button */}
            <Button
              href="#membership"
              variant="outline"
              size="md"
              className="px-6 py-2 text-lg font-medium"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Toggle (Below MD) */}
          <div className="flex md:hidden items-center space-x-4">
            <Link
              href="#contact"
              className="text-white hover:text-primary p-1"
              aria-label="Location"
            >
              <MapPin className="w-5 h-5 stroke-[1.75]" />
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-1 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Below MD) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-secondary-bg border-b border-zinc-800 px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveItem(item.label);
                  setIsMobileMenuOpen(false);
                }}
                className={`relative text-base font-normal py-1 inline-block w-fit transition-colors ${activeItem === item.label
                    ? "text-white"
                    : "text-zinc-300 hover:text-white"
                  }`}
              >
                <span>{item.label}</span>
                {activeItem === item.label && (
                  <span className="absolute bottom-0 left-0 w-[75%] h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800">
            <Button
              href="#membership"
              variant="outline"
              size="md"
              fullWidth
              className="font-normal"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
