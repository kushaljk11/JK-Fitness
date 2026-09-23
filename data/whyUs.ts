export interface WhyUsFeature {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface WhyUsContent {
  eyebrow: string;
  heading: string;
  heading2: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  features: WhyUsFeature[];
}

export const whyUsContent: WhyUsContent = {
  eyebrow: "Why Choose JK Fitness?",
  heading: "More Than A Gym. Built",
  heading2: "For Progress.",
  description:
    "JK Fitness gives you premium equipment, expert guidance, and a motivating environment to train better and grow stronger every day.",
  image: {
    src: "/assets/whyus.jpg",
    alt: "JK Fitness Training Athlete",
  },
  features: [
    {
      id: "01",
      number: "01",
      title: "Premium equipment",
      description:
        "Modern strength, cardio and functional equipment built for every level.",
    },
    {
      id: "02",
      number: "02",
      title: "Expert coaching",
      description:
        "Certified trainers who help you train safely and progress effectively.",
    },
    {
      id: "03",
      number: "03",
      title: "Train your way",
      description:
        "Strength, cardio, functional fitness or personal coaching built around.",
    },
    {
      id: "04",
      number: "04",
      title: "Strong community",
      description:
        "Train alongside people who motivate you to show up and improve.",
    },
  ],
};
