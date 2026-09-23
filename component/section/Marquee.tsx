"use client";

import React from "react";
import { marqueeItems } from "@/data/marquee";

export const Marquee: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-bg border-y border-white/10 py-5 select-none mt-15">
      <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex items-center">
          <div className="flex items-center shrink-0">
            {marqueeItems.map((item) => (
              <div
                key={`m1-${item.id}`}
                className="flex items-center gap-3.5 mx-5 md:mx-7 shrink-0"
              >
                <span
                  aria-hidden="true"
                  className="w-2.5 h-2.5 bg-primary rotate-45 shrink-0"
                />
                <span
                  className={`text-base md:text-lg font-medium tracking-wide whitespace-nowrap ${item.isPrimary ? "text-primary" : "text-white"
                    }`}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center shrink-0" aria-hidden="true">
            {marqueeItems.map((item) => (
              <div
                key={`m2-${item.id}`}
                className="flex items-center gap-3.5 mx-5 md:mx-7 shrink-0"
              >
                <span
                  aria-hidden="true"
                  className="w-2.5 h-2.5 bg-primary rotate-45 shrink-0"
                />
                <span
                  className={`text-base md:text-lg font-medium tracking-wide whitespace-nowrap ${item.isPrimary ? "text-primary" : "text-white"
                    }`}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
