export interface StatItem {
  number: string;
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  heading: string;
  heading2: string;
  subtext: string;
  primaryCta: {
    label: string;
    href?: string;
  };
  secondaryCta: {
    label: string;
    href?: string;
  };
  image: {
    src: string;
    alt: string;
  };
  stats: StatItem[];
}

export const heroContent: HeroContent = {
  eyebrow: "Stronger Starts Here.",
  heading: "PUSH HARDER.",
  heading2: "GO FURTHER.",
  subtext:
    "Train with purpose, push beyond your limits, and become stronger every day at JK Fitness.",
  primaryCta: {
    label: "Start Your Journey",
    href: "#membership",
  },
  secondaryCta: {
    label: "Learn More",
    href: "#about",
  },
  image: {
    src: "/assets/hero.png",
    alt: "JK Fitness Athlete",
  },
  stats: [
    { number: "500+", label: "Active Member" },
    { number: "15+", label: "Expert Trainers" },
    { number: "8+", label: "Active Member" },
    { number: "50+", label: "Active Member" },
  ],
};
