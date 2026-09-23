import type { FooterColumn as FooterColumnType } from "@/data/footer";

interface FooterColumnProps {
    column: FooterColumnType;
    className?: string;
}

const FooterColumn = ({ column, className = "" }: FooterColumnProps) => {
    return (
        <div className={className}>
            <h3 className="font-medium text-sm mb-4">{column.title}</h3>
            <ul className="space-y-3 text-sm text-neutral-300">
                {column.links.map((link) => (
                    <li key={link.label} className="flex items-center gap-2">
                        <a href={link.href} className="hover:text-neutral-400">
                            {link.label}
                        </a>
                        {link.badge && (
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 border border-primary text-primary">
                                {link.badge}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterColumn;