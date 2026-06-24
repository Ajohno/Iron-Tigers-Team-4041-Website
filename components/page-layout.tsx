import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

type PageLayoutProps = {
  activePage: "home" | "legacy";
  children: ReactNode;
  variant?: "home" | "legacy";
};

export function PageLayout({ activePage, children, variant = "home" }: PageLayoutProps) {
  const isHomeVariant = variant === "home";
  return (
    <div className={isHomeVariant ? "font-body" : undefined}>
      <Navbar activePage={activePage} />

      {children}

      <Footer />
    </div>
  );
}
