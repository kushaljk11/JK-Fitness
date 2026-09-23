export type BillingCycle = "Monthly" | "Quaterly" | "Yearly";

export interface PricingPlan {
  id: string;
  name: string;
  isPopular?: boolean;
  prices: {
    Monthly: { amount: string; period: string };
    Quaterly: { amount: string; period: string };
    Yearly: { amount: string; period: string };
  };
  subtitle: string;
  features: {
    text: string;
    included: boolean;
  }[];
  buttonText: string;
}

export interface MembershipContent {
  eyebrow: string;
  heading: string;
  heading2: string;
  description: string;
  plans: PricingPlan[];
}

export const membershipContent: MembershipContent = {
  eyebrow: "Membership",
  heading: "Choose Your Plan, Start",
  heading2: "Your Journey",
  description:
    "Flexible membership plans designed to match your goals, lifestyle, & training needs.",
  plans: [
    {
      id: "started",
      name: "Started Plan",
      isPopular: false,
      prices: {
        Monthly: { amount: "Rs. 499", period: "/mo" },
        Quaterly: { amount: "Rs. 1,349", period: "/3mo" },
        Yearly: { amount: "Rs. 4,799", period: "/yr" },
      },
      subtitle: "Start your transformation",
      features: [
        { text: "Unlimited Gym Access", included: true },
        { text: "Group Classes (8/month)", included: true },
        { text: "Locker Room & Showers", included: true },
        { text: "Fitness Assessment", included: true },
        { text: "App Access & Tracking", included: true },
        { text: "Personal Training", included: false },
        { text: "Nutrition Coaching", included: false },
        { text: "Recovery Suite", included: false },
      ],
      buttonText: "CHOOSE STARTED PLAN",
    },
    {
      id: "pro",
      name: "Pro Plan",
      isPopular: true,
      prices: {
        Monthly: { amount: "Rs. 999", period: "/mo" },
        Quaterly: { amount: "Rs. 2,699", period: "/3mo" },
        Yearly: { amount: "Rs. 9,599", period: "/yr" },
      },
      subtitle: "The complete performance package",
      features: [
        { text: "Unlimited Gym Access", included: true },
        { text: "Unlimited Group Classes", included: true },
        { text: "4 PT Sessions / Month", included: true },
        { text: "Nutrition Coaching", included: true },
        { text: "InBody Scan (Monthly)", included: true },
        { text: "Recovery Suite Access", included: true },
        { text: "Priority Booking", included: true },
        { text: "Guest Passes (2/month)", included: true },
        { text: "VIP Lounge", included: false },
      ],
      buttonText: "GET STARTED - MOST POPULAR",
    },
    {
      id: "elite",
      name: "Elite Plan",
      isPopular: false,
      prices: {
        Monthly: { amount: "Rs. 2499", period: "/mo" },
        Quaterly: { amount: "Rs. 6,699", period: "/3mo" },
        Yearly: { amount: "Rs. 23,999", period: "/yr" },
      },
      subtitle: "Start your transformation",
      features: [
        { text: "Everything in Elite", included: true },
        { text: "Unlimited PT Sessions", included: true },
        { text: "Dedicated Head Coach", included: true },
        { text: "Custom Programming", included: true },
        { text: "VIP Lounge Access", included: true },
        { text: "Priority Booking", included: true },
        { text: "Monthly Body Analysis", included: true },
        { text: "Nutrition Meal Plans", included: true },
        { text: "Unlimited Guest Passes", included: true },
      ],
      buttonText: "CHOOSE ELITE PLAN",
    },
  ],
};
