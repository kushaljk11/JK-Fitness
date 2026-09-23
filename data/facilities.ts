export interface FacilityItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  isFeatured?: boolean;
}

export interface FacilitiesContent {
  eyebrow: string;
  heading: string;
  heading2: string;
  description: string;
  facilities: FacilityItem[];
}

export const facilitiesContent: FacilitiesContent = {
  eyebrow: "Our Facilities",
  heading: "Everything you need",
  heading2: "To Train Better",
  description:
    "Train with modern equipment and dedicated workout spaces designed to help you perform better, train safely, and achieve your fitness goals.",
  facilities: [
    {
      id: 1,
      title: "Strength Training Zone",
      subtitle: "Build power and strength",
      image: "/assets/f1.png",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Free Weight Area",
      subtitle: "Train without limits",
      image: "/assets/f2.png",
      isFeatured: false,
    },
    {
      id: 3,
      title: "Cardio Zone",
      subtitle: "Boost your endurance",
      image: "/assets/f3.png",
      isFeatured: false,
    },
    {
      id: 4,
      title: "Functional Training",
      subtitle: "Move better, perform better",
      image: "/assets/f4.png",
      isFeatured: false,
    },
  ],
};
