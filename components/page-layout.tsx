import type { ReactNode } from "react";
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
      <Navbar activePage={activePage} variant={variant} />

      {children}

      {isHomeVariant ? <HomeFooter /> : <LegacyFooter />}
    </div>
  );
}

function HomeFooter() {
  return (
    <footer className="bg-[#131313] dark:bg-[#131313] border-t border-[#564334]/20 w-full py-8">
      <div className="flex flex-col items-center gap-4 px-12 w-full">
        <div className="text-lg font-bold text-[#E5E2E1] font-headline uppercase">KINETIC PRECISION ROBOTICS</div>
        <div className="flex gap-8">
          <a className="text-[#E5E2E1]/50 hover:text-[#FFB77D] font-['Inter'] text-[10px] tracking-widest uppercase transition-opacity duration-200" href="#">Documentation</a>
          <a className="text-[#E5E2E1]/50 hover:text-[#FFB77D] font-['Inter'] text-[10px] tracking-widest uppercase transition-opacity duration-200" href="#">Privacy Policy</a>
          <a className="text-[#E5E2E1]/50 hover:text-[#FFB77D] font-['Inter'] text-[10px] tracking-widest uppercase transition-opacity duration-200" href="#">Safety Protocols</a>
        </div>
        <p className="text-[#FF8C00] font-['Inter'] text-[10px] tracking-widest uppercase mt-4">© 2024 KINETIC PRECISION ROBOTICS. ALL SYSTEMS OPERATIONAL.</p>
      </div>
    </footer>
  );
}

function LegacyFooter() {
  return (
    <footer className="bg-[#131313] dark:bg-[#131313] w-full py-8 border-t border-[#564334]/20 flex flex-col items-center gap-4 px-12 w-full">
      <div className="text-lg font-bold text-[#E5E2E1] font-['Inter'] uppercase tracking-widest">KINETIC PRECISION ROBOTICS</div>
      <div className="flex gap-8">
        <a className="font-['Inter'] text-[10px] tracking-widest uppercase text-[#E5E2E1]/50 hover:text-[#FFB77D] transition-opacity duration-200" href="#">Documentation</a>
        <a className="font-['Inter'] text-[10px] tracking-widest uppercase text-[#E5E2E1]/50 hover:text-[#FFB77D] transition-opacity duration-200" href="#">Privacy Policy</a>
        <a className="font-['Inter'] text-[10px] tracking-widest uppercase text-[#E5E2E1]/50 hover:text-[#FFB77D] transition-opacity duration-200" href="#">Safety Protocols</a>
      </div>
      <div className="font-['Inter'] text-[10px] tracking-widest uppercase text-[#E5E2E1]/50 mt-4">© 2024 KINETIC PRECISION ROBOTICS. ALL SYSTEMS OPERATIONAL.</div>
    </footer>
  );
}
