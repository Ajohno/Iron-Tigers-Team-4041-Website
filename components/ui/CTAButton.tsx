import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type CTAButtonVariant = "primary" | "secondary";

type CTAButtonProps = {
  children: ReactNode;
  variant?: CTAButtonVariant;
  href?: string;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

const variantClassNames: Record<CTAButtonVariant, string> = {
  primary: "technical-gradient text-on-primary-container px-10 py-4 rounded font-headline font-bold uppercase tracking-widest active:scale-95 transition-all",
  secondary: "border border-outline-variant/40 hover:bg-surface-container-high text-on-surface px-10 py-4 rounded font-headline font-bold uppercase tracking-widest transition-all",
};

export function CTAButton({ children, variant = "primary", href, className = "", type = "button" }: CTAButtonProps) {
  const buttonClassName = `${variantClassNames[variant]} ${className}`.trim();

  if (href) {
    if (href.startsWith("/")) {
      return <Link className={buttonClassName} href={href}>{children}</Link>;
    }

    return <a className={buttonClassName} href={href}>{children}</a>;
  }

  return <button className={buttonClassName} type={type}>{children}</button>;
}
