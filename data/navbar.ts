export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarContent {
  logo: {
    src: string;
    alt: string;
  };
  navItems: NavItem[];
  ctaButtonText: string;
  locationHref: string;
}

export const navbarContent: NavbarContent = {
  logo: {
    src: "/assets/logo.png",
    alt: "JK FITNESS",
  },
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Facility", href: "#facility" },
    { label: "Membership", href: "#membership" },
    { label: "Trainer", href: "#trainer" },
    { label: "Contact", href: "#contact" },
  ],
  ctaButtonText: "Start Your Journey",
  locationHref: "#contact",
};
