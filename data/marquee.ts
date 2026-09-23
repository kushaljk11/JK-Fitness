export interface MarqueeItem {
  id: number;
  text: string;
  isPrimary: boolean;
}

export const marqueeItems: MarqueeItem[] = [
  { id: 1, text: "Build Strength", isPrimary: true },
  { id: 2, text: "Train With Purpose", isPrimary: false },
  { id: 3, text: "No Shortcuts", isPrimary: true },
  { id: 4, text: "Stay Disciplined", isPrimary: false },
  { id: 5, text: "Stronger Every Day", isPrimary: true },
  { id: 6, text: "Be Musclestic", isPrimary: false },
  { id: 7, text: "Push Your Limits", isPrimary: true },
  { id: 8, text: "Fuel Your Passion", isPrimary: false },
  { id: 9, text: "Defy The Ordinary", isPrimary: true },
  { id: 10, text: "Consistency Wins", isPrimary: false },
];
