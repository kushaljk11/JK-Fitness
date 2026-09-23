export interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: "x" | "github" | "linkedin" | "youtube" | "instagram";
  href: string;
}

export const BRAND = {
  name: "JK FITNESS",
  logo: "/assets/logo.png",
  href: "/",
  tagline:
    "Unleash your true strength with state-of-the-art equipment, elite personal trainers, and an energetic community dedicated to your fitness goals.",
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "#about" },
      { label: "Our Story", href: "#about" },
      { label: "Membership Plans", href: "#membership", badge: "POPULAR" },
      { label: "Trainers & Coaches", href: "#trainer" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Inside JK Fitness", href: "#gallery" },
    ],
  },
  {
    title: "Gym Facilities",
    links: [
      { label: "Power Racks & Squats", href: "#facility" },
      { label: "Cardio Arena", href: "#facility" },
      { label: "Free Weight Zone", href: "#facility" },
      { label: "Functional Turf", href: "#facility" },
      { label: "Group Studio", href: "#facility" },
      { label: "Recovery & Lounge", href: "#facility" },
    ],
  },
  {
    title: "Get In Touch",
    links: [
      {
        label: "WhatsApp Support",
        href: "https://wa.me/9779804060401?text=Hi%20JK%20Fitness!%20I%20would%20like%20to%20know%20more%20about%20your%20gym.",
        badge: "DIRECT",
      },
      {
        label: "jkfitness@gmail.com",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=jkfitness@gmail.com&su=Inquiry%20from%20JK%20Fitness%20Website",
      },
      { label: "+977 9804060401", href: "tel:+9779804060401" },
      { label: "Book Free Trial", href: "#contact" },
      { label: "Frequently Asked Questions", href: "#faq" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "instagram", href: "https://instagram.com" },
  { name: "youtube", href: "https://youtube.com" },
  { name: "x", href: "https://x.com" },
  { name: "linkedin", href: "https://linkedin.com" },
  { name: "github", href: "https://github.com" },
];