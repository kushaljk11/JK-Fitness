export interface JourneyStep {
  step: string;
  title: string;
  description: string;
}

export interface HowItWorksContent {
  eyebrow: string;
  heading: string;
  heading2: string;
  description: string;
  steps: JourneyStep[];
}

export const howItWorksContent: HowItWorksContent = {
  eyebrow: "How it Works",
  heading: "Your Fitness Journey",
  heading2: "Made Simple",
  description:
    "From choosing your plan to starting your workout, we make every step simple, supportive, and focused on your goals.",
  steps: [
    {
      step: "01",
      title: "Choose Your Plan",
      description: "Find the plan that fits.",
    },
    {
      step: "02",
      title: "Meet Your Coach",
      description: "Get guidance from experts.",
    },
    {
      step: "03",
      title: "Start Your Training",
      description: "Train with clear purpose.",
    },
    {
      step: "04",
      title: "Achieve Your Goals",
      description: "Track progress. Grow stronger.",
    },
  ],
};
