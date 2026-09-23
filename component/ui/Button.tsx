import React, { ButtonHTMLAttributes } from "react";
import Link from "next/link";

export type ButtonVariant = "outline" | "primary" | "secondary" | "ghost";
export type ButtonSize = "md" | "default";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "outline",
  size = "md",
  href,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-normal transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles: Record<ButtonSize, string> = {
    default: "px-5 py-2 text-sm",
    md: "px-5 py-2 text-sm",
  };

  const variantStyles: Record<ButtonVariant, string> = {
    outline:
      "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
    primary:
      "bg-primary text-white border border-primary hover:opacity-90",
    secondary:
      "bg-secondary text-zinc-100 border border-zinc-800 hover:bg-zinc-800",
    ghost: "text-zinc-300 hover:text-white hover:bg-white/10",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </button>
  );
};

export default Button;
