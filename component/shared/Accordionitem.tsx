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
                className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
                <span className="text-lg font-medium text-white">{question}</span>
                <span
                    className={`flex h-9 w-9 flex-none items-center justify-center rounded-full border transition-colors ${open ? "border-primary text-primary" : "border-white/25 text-white/70"
                        }`}
                >
                    {open ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>

            <div
                className={`grid overflow-hidden transition-all duration-300 ${open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <p className="min-h-0 text-sm leading-relaxed text-white/60">{answer}</p>
            </div>
        </div>
    );
}