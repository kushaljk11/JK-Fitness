"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Menu, X } from "lucide-react";
import Button from "@/component/ui/Button";
import { navbarContent } from "@/data/navbar";

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const { logo, navItems, ctaButtonText } = navbarContent;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(navItems[0]?.label || "Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: { label: string; href: string }
  ) => {
    setActiveItem(item.label);
    if (item.href === "#contact") {
      e.preventDefault();
      onOpenContact?.();
    } else if (item.href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? "bg-bg/60 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center shrink-0"
          >
            <div className="relative h-12 w-36 md:h-14 md:w-44 flex items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                priority
                sizes="176px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Center Navigation Links (MD and up) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative py-1 text-base font-normal transition-colors duration-200 ${
                    isActive ? "text-white" : "text-zinc-300 hover:text-white"
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

          {/* Right Section: Location Icon + Divider + Start Your Journey Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              type="button"
              onClick={onOpenContact}
              className="text-white hover:text-primary transition-colors p-1 cursor-pointer"
              aria-label="Location"
            >
              <MapPin className="w-5 h-5 stroke-[1.75]" />
            </button>

            <span className="w-px h-6 bg-white/30" aria-hidden="true" />

            <Button
              onClick={onOpenContact}
              variant="outline"
              size="md"
              className="px-6 py-2 text-base font-medium cursor-pointer"
            >
              {ctaButtonText}
            </Button>
          </div>

          {/* Mobile Right Icons (Below MD) */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              type="button"
              onClick={onOpenContact}
              className="text-white hover:text-primary p-1 cursor-pointer"
              aria-label="Location"
            >
              <MapPin className="w-5 h-5 stroke-[1.75]" />
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white p-1 focus:outline-none cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Right Slide-Over Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dimmed Backdrop */}
        <div
          className="absolute inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Right Drawer Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 max-w-[85vw] h-full bg-secondary-bg border-l border-zinc-800 p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-5 border-b border-zinc-800">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative h-9 w-28 flex items-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="112px"
                  className="object-contain object-left"
                />
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col space-y-4 pt-6">
              {navItems.map((item) => {
                const isActive = activeItem === item.label;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      handleNavClick(e, item);
                    }}
                    className={`relative text-base font-normal py-1.5 transition-colors flex items-center justify-between ${
                      isActive ? "text-primary" : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Drawer Footer CTA */}
          <div className="pt-6 border-t border-zinc-800 space-y-3">
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContact?.();
              }}
              variant="outline"
              size="md"
              fullWidth
              className="font-normal cursor-pointer"
            >
              {ctaButtonText}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
