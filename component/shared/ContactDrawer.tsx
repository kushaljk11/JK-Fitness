"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { contactContent } from "@/data/contact";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const { title, subtitle, whatsappNumber, labels, placeholders, topics } =
    contactContent;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(topics[0]?.id || "membership");
  const [message, setMessage] = useState(topics[0]?.defaultMessage || "");

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(topicId);
    const found = topics.find((t) => t.id === topicId);
    if (found) {
      setMessage(found.defaultMessage);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp message text
    const text = `*New Inquiry - JK Fitness*%0A*Name:* ${encodeURIComponent(
      fullName || "Guest"
    )}%0A*Email:* ${encodeURIComponent(
      email || "N/A"
    )}%0A*Contact:* ${encodeURIComponent(
      contact || "N/A"
    )}%0A*Topic:* ${encodeURIComponent(
      selectedTopic
    )}%0A*Message:* ${encodeURIComponent(message)}`;

    // Open WhatsApp with inquiry
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex justify-end font-sans">
      {/* Dimmed Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Drawer Panel */}
      <div className="relative z-10 w-full md:w-115 h-full bg-bg border-l border-zinc-800 flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300">
        {/* Red Header Bar */}
        <div className="bg-primary text-white p-6 relative flex items-start justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-normal leading-tight">
              {title}
            </h3>
            <p className="text-white/90 text-sm font-normal mt-1 leading-normal">
              {subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-white hover:text-white/80 transition-colors p-1 -mr-1 -mt-1 cursor-pointer"
            aria-label="Close form"
          >
            <X className="w-6 h-6 stroke-2" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto px-6 py-6 space-y-5"
        >
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-sm font-normal text-white">
              {labels.fullName} <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder={placeholders.fullName}
              className="w-full bg-[#121214] border rounded-md px-4 py-3 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-primary transition-colors font-normal"
            />
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="text-sm font-normal text-white">
              {labels.email} <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholders.email}
              className="w-full bg-[#121214] border rounded-md px-4 py-3 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-primary transition-colors font-normal"
            />
          </div>

          {/* Contact Number */}
          <div className="space-y-1.5">
            <label className="text-sm font-normal text-white">
              {labels.contact} <span className="text-primary">*</span>
            </label>
            <input
              type="tel"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder={placeholders.contact}
              className="w-full bg-[#121214] border rounded-md px-4 py-3 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-primary transition-colors font-normal"
            />
          </div>

          {/* Message Section */}
          <div className="space-y-2">
            <label className="text-sm font-normal text-white">
              {labels.message} <span className="text-primary">*</span>
            </label>
            <p className="text-xs text-zinc-400 font-normal">
              {labels.topicPrompt}
            </p>

            {/* Quick Topic Chips */}
            <div className="flex flex-wrap gap-2 pt-1 pb-1">
              {topics.map((t) => {
                const isActive = selectedTopic === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleTopicClick(t.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-normal transition-colors cursor-pointer border ${isActive
                        ? "bg-primary text-white border-primary"
                        : "bg-[#141416] text-zinc-300 border-zinc-800 hover:border-zinc-700"
                      }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            {/* Message Textarea */}
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-[#121214] border border-zinc-800 rounded-md px-4 py-3 text-sm placeholder:text-zinc-500 focus:outline-none transition-colors font-normal resize-none leading-relaxed"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2 pb-4">
            <button
              type="submit"
              className="w-full bg-primary hover:opacity-90 text-white font-normal py-3.5 px-6 rounded-md text-base transition-opacity cursor-pointer text-center"
            >
              {labels.submitButton}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactDrawer;
