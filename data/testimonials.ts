export interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
}

export interface TestimonialsContent {
  eyebrow: string;
  heading: string;
  heading2: string;
  description: string;
  testimonials: TestimonialItem[];
}

export const testimonialsContent: TestimonialsContent = {
  eyebrow: "Testimonial",
  heading: "Real Peoples with",
  heading2: "Real Progress",
  description:
    "Hear from members who train harder, feel stronger, and keep pushing forward with JK Fitness.",
  testimonials: [
    {
      id: 1,
      quote:
        "“Great equipment, supportive trainers, and an atmosphere that keeps me motivated. I've become stronger and more consistent since joining JK Fitness.”",
      name: "Kushal Jamarkattel",
      role: "Member",
      image: "/assets/testimonials/m1.jpg",
    },
    {
      id: 2,
      quote:
        "“The environment here is unmatched. From high-end power racks to helpful coaching, my fitness journey took a complete turnaround in just three months.”",
      name: "Aman Shrestha",
      role: "Member",
      image: "/assets/testimonials/m2.jpg",
    },
    {
      id: 3,
      quote:
        "“Clean facilities, great community, and personal trainers who genuinely care about proper form and steady progression. Highly recommend to everyone!”",
      name: "Rohan Gurung",
      role: "Member",
      image: "/assets/testimonials/m3.jpg",
    },
    {
      id: 4,
      quote:
        "“JK Fitness has everything I need to crush my goals. The cardio section and free weights are always well maintained, and the energy is contagious.”",
      name: "Sneha Adhikari",
      role: "Member",
      image: "/assets/testimonials/m4.jpg",
    },
    {
      id: 5,
      quote:
        "“Joining JK Fitness is the best health investment I've made. The atmosphere pushes you to achieve your personal best every single session.”",
      name: "Bikash Thapa",
      role: "Member",
      image: "/assets/testimonials/m5.jpg",
    },
  ],
};
