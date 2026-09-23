"use client";

import React from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
  showDivider?: boolean;
}

export default function AccordionItem({
  question,
  answer,
  open,
  onToggle,
  showDivider = true,
}: AccordionItemProps) {
  return (
    <div className={showDivider ? "border-b border-white/10" : ""}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left cursor-pointer select-none group"
      >
        <span className="text-lg font-medium text-white group-hover:text-zinc-200 transition-colors">
          {question}
        </span>
        <span
          className={`flex h-9 w-9 flex-none items-center justify-center rounded-full border transition-all duration-300 ${
            open
              ? "border-primary text-primary rotate-180"
              : "border-white/25 text-white/70 rotate-0 group-hover:border-white/50"
          }`}
        >
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="min-h-0 text-sm leading-relaxed text-white/60">{answer}</p>
      </div>
    </div>
  );
}