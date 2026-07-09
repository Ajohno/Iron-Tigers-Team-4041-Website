import Button, { type ButtonProps } from "@mui/material/Button";
import type { SxProps, Theme } from "@mui/material/styles";
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

const baseButtonSx = {
  borderRadius: "0.125rem",
  boxShadow: "none",
  fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
  fontWeight: 700,
  letterSpacing: "0.1em",
  lineHeight: "normal",
  minWidth: "auto",
  padding: "1rem 2.5rem",
  textTransform: "uppercase",
  transition: "all 150ms ease",
  "&:active": {
    transform: "scale(0.95)",
  },
} satisfies SxProps<Theme>;

const variantSx = {
  primary: {
    background: "linear-gradient(135deg, #ff8c00 0%, #ffb77d 100%)",
    color: "#623200",
    "&:hover": {
      background: "linear-gradient(135deg, #ff8c00 0%, #ffb77d 100%)",
      boxShadow: "none",
    },
  },
  secondary: {
    backgroundColor: "transparent",
    border: "1px solid rgba(86, 67, 52, 0.4)",
    color: "#e5e2e1",
    "&:hover": {
      backgroundColor: "#2a2a2a",
      border: "1px solid rgba(86, 67, 52, 0.4)",
      boxShadow: "none",
    },
  },
} satisfies Record<CTAButtonVariant, SxProps<Theme>>;

export function CTAButton({ children, variant = "primary", href, className, type = "button" }: CTAButtonProps) {
  const buttonSx: SxProps<Theme> = { ...baseButtonSx, ...variantSx[variant] };
  const muiVariant: ButtonProps["variant"] = variant === "primary" ? "contained" : "outlined";

  if (href?.startsWith("/")) {
    return (
      <Button className={className} component={Link} disableElevation disableRipple href={href} sx={buttonSx} variant={muiVariant}>
        {children}
      </Button>
    );
  }

  if (href) {
    return (
      <Button className={className} component="a" disableElevation disableRipple href={href} sx={buttonSx} variant={muiVariant}>
        {children}
      </Button>
    );
  }

  return (
    <Button className={className} disableElevation disableRipple sx={buttonSx} type={type} variant={muiVariant}>
      {children}
    </Button>
  );
}
