export interface StoryPoint {
  id: string;
  icon: "mountain" | "target" | "users" | "future";
  title: string;
  description: string;
}

export interface OurStoryContent {
  eyebrow: string;
  heading: string;
  heading2: string;
  bgImage: string;
  girlImage: {
    src: string;
    alt: string;
  };
  points: StoryPoint[];
}

export const ourStoryContent: OurStoryContent = {
  eyebrow: "Our Story",
  heading: "From Passion to a",
  heading2: "Stronger Community",
  bgImage: "/assets/ourstorybg.png",
  girlImage: {
    src: "/assets/ourstorygirl.png",
    alt: "JK Fitness Athlete",
  },
  points: [
    {
      id: "start",
      icon: "mountain",
      title: "Where it started",
      description:
        "Built from a passion for fitness and helping people become stronger.",
    },
    {
      id: "purpose",
      icon: "target",
      title: "Our Purpose",
      description:
        "Creating a motivating space where every workout moves you forward.",
    },
    {
      id: "community",
      icon: "users",
      title: "Our Community",
      description:
        "A supportive environment for beginners, & everyone in between.",
    },
    {
      id: "future",
      icon: "future",
      title: "Our Future",
      description:
        "Better training, better facilities, and a stronger fitness community.",
    },
  ],
};
