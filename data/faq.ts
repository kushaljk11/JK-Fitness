export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqContent {
    eyebrow: string;
    heading: string;
    heading2: string;
    subtext: string;
    items: FaqItem[];
}

export const faqContent: FaqContent = {
    eyebrow: "FAQs",
    heading: "Got Questions? We've",
    heading2: "Got Answers.",
    subtext:
        "Got questions about training or membership? Find the answers you need before getting started.",

    items: [
        {
            question: "Can beginners join JK Fitness?",
            answer:
                "Absolutely. JK Fitness welcomes all fitness levels, whether you're starting your fitness journey or already an experienced athlete.",
        },
        {
            question: "What membership plans do you offer?",
            answer:
                "We offer flexible membership options designed for different fitness goals and training needs. Explore our membership plans to find the right fit for you.",
        },
        {
            question: "Do you offer personal training?",
            answer:
                "Yes. Our trainers can provide personalized guidance to help you improve your technique, stay consistent, and work toward your fitness goals.",
        },
        {
            question: "What facilities are available at JK Fitness?",
            answer:
                "JK Fitness provides dedicated strength, free-weight, cardio, and functional training areas with equipment for a complete workout experience.",
        },
        {
            question: "What should I bring for my first workout?",
            answer:
                "Bring comfortable workout clothes, training shoes, a water bottle, and the motivation to get started. Our team will help you with the rest.",
        },
    ],
};