export interface FooterLink {
    label: string;
    href: string;
    badge?: string;
}

export interface FooterColumn {
    title: string;
    links: FooterLink[];
}

export interface SocialLink {
    name: "x" | "github" | "linkedin" | "youtube" | "instagram";
    href: string;
}

export const BRAND = {
    name: "JK FITNESS",
    href: "/",
    tagline:
        "JK Fitness helps you train smarter with programs, tracking, and coaching built around real results.",
};

export const FOOTER_COLUMNS: FooterColumn[] = [
    {
        title: "Programs",
        links: [
            { label: "Strength", href: "#" },
            { label: "Cardio", href: "#" },
            { label: "Nutrition Plans", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "JK Fitness", href: "#" },
            { label: "Workout Library", href: "#" },
            { label: "Coaching", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Store", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About", href: "#" },
            { label: "Vision", href: "#" },
            { label: "Careers", href: "#", badge: "HIRING" },
            { label: "Privacy Policy", href: "#" },
            { label: "Contact Us", href: "#" },
        ],
    },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { name: "x", href: "#" },
    { name: "github", href: "#" },
    { name: "linkedin", href: "#" },
    { name: "youtube", href: "#" },
    { name: "instagram", href: "#" },
];