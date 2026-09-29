import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-yema text-tierra-dark hover:bg-yema-dark shadow-sm hover:shadow-md",
  outline:
    "border-2 border-crema text-crema hover:bg-crema hover:text-campo-dark",
  ghost: "text-campo-dark hover:bg-campo/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-semibold tracking-wide transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
