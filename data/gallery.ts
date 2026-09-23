export interface GalleryItem {
  id: number;
  title: string;
  image: string;
}

export interface GalleryContent {
  eyebrow: string;
  heading: string;
  heading2: string;
  description: string;
  items: GalleryItem[];
}

export const galleryContent: GalleryContent = {
  eyebrow: "Inside JK Fitness",
  heading: "Step inside & Feel",
  heading2: "The Energy..",
  description:
    "Explore JK Fitness where powerful workouts, premium equipment, and an energetic atmosphere come together to keep you moving forward.",
  items: [
    {
      id: 1,
      title: "Reception",
      image: "/assets/gallery/g1.jpg",
    },
    {
      id: 2,
      title: "Power Rack & Lifting Area",
      image: "/assets/gallery/g2.jpg",
    },
    {
      id: 3,
      title: "Cardio Arena",
      image: "/assets/gallery/g3.jpg",
    },
    {
      id: 4,
      title: "Functional Turf & Rig",
      image: "/assets/gallery/g4.jpg",
    },
    {
      id: 5,
      title: "Free Weights & Benches",
      image: "/assets/gallery/g5.jpg",
    },
    {
      id: 6,
      title: "Aerobics & Group Studio",
      image: "/assets/gallery/g6.jpg",
    },
    {
      id: 7,
      title: "Locker Rooms & Vanity",
      image: "/assets/gallery/g7.jpg",
    },
    {
      id: 8,
      title: "Recovery & Lounge Area",
      image: "/assets/gallery/g8.jpg",
    },
  ],
};
