export interface Trainer {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface TrainersContent {
  eyebrow: string;
  heading: string;
  heading2: string;
  description: string;
  trainers: Trainer[];
}

export const trainersContent: TrainersContent = {
  eyebrow: "Our Teams",
  heading: "Meet the Peoples Behind",
  heading2: "Your Progress",
  description:
    "Train with passionate coaches who push your limits, perfect your form, and help you grow stronger every day.",
  trainers: [
    {
      id: 1,
      name: "Kushal JK",
      role: "STRENGTH & CONDITIONING",
      quote: "“Push past your limits.”",
      image: "/assets/t1c.png",
    },
    {
      id: 2,
      name: "Priya Thapa",
      role: "FUNCTIONAL FITNESS",
      quote: "“Move better. Feel stronger.”",
      image: "/assets/t2.png",
    },
    {
      id: 3,
      name: "Rohan Karki",
      role: "PERSONAL TRAINER",
      quote: "“Progress starts with consistency.”",
      image: "/assets/t3.png",
    },
  ],
};
