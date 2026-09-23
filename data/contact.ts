export interface ContactTopic {
  id: string;
  label: string;
  defaultMessage: string;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  whatsappNumber: string;
  labels: {
    fullName: string;
    email: string;
    contact: string;
    message: string;
    topicPrompt: string;
    submitButton: string;
  };
  placeholders: {
    fullName: string;
    email: string;
    contact: string;
  };
  topics: ContactTopic[];
}

export const contactContent: ContactContent = {
  title: "Contact Us On WhatsApp",
  subtitle: "Fill the form, and we'll reach out on WhatsApp.",
  whatsappNumber: "9779800000000",
  labels: {
    fullName: "Full name",
    email: "Email Address",
    contact: "Contact",
    message: "Message",
    topicPrompt: "Pick a topic to fill this in, or write your own.",
    submitButton: "Send Message",
  },
  placeholders: {
    fullName: "JK Fitness",
    email: "jkfitness@gmail.com",
    contact: "+977 9800000000",
  },
  topics: [
    {
      id: "membership",
      label: "Membership & Pricing",
      defaultMessage:
        "Hi JK Fitness! I'd like to join. Please share your membership & pricing, and how to get started.",
    },
    {
      id: "trial",
      label: "Free tour & trial",
      defaultMessage:
        "Hi JK Fitness! I would like to book a free tour & trial session at your gym.",
    },
    {
      id: "personal_training",
      label: "Personal Training",
      defaultMessage:
        "Hi JK Fitness! I am interested in personal training with one of your expert coaches.",
    },
    {
      id: "schedule",
      label: "Class & Schedule",
      defaultMessage:
        "Hi JK Fitness! Can you please share the weekly class and workout schedule?",
    },
  ],
};
