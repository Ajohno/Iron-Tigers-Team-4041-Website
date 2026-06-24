import Link from "next/link";

type NavbarProps = {
  activePage: "home" | "legacy";
  variant?: "home" | "legacy";
};

const homeNavLinkClass = "text-[#FFB77D] border-b-2 border-[#FF8C00] pb-1 font-['Space_Grotesk'] uppercase tracking-wider transition-colors duration-300";
const homeInactiveLinkClass = "text-[#E5E2E1] opacity-70 hover:text-[#FF8C00] transition-colors duration-300 font-['Space_Grotesk'] uppercase tracking-wider";
const legacyNavLinkClass = "font-['Space_Grotesk'] uppercase tracking-wider text-[#FFB77D] border-b-2 border-[#FF8C00] pb-1 hover:text-[#FF8C00] transition-colors duration-300";
const legacyInactiveLinkClass = "font-['Space_Grotesk'] uppercase tracking-wider text-[#E5E2E1] opacity-70 hover:text-[#FF8C00] transition-colors duration-300";

export function Navbar({ activePage, variant = "home" }: NavbarProps) {
  const isHomeVariant = variant === "home";
  const homeLinkClass = isHomeVariant
    ? activePage === "home" ? homeNavLinkClass : homeInactiveLinkClass
    : activePage === "home" ? legacyNavLinkClass : legacyInactiveLinkClass;
  const legacyLinkClass = isHomeVariant
    ? activePage === "legacy" ? homeNavLinkClass : homeInactiveLinkClass
    : activePage === "legacy" ? legacyNavLinkClass : legacyInactiveLinkClass;
  const inactiveLinkClass = isHomeVariant ? homeInactiveLinkClass : legacyInactiveLinkClass;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313] dark:bg-[#131313] flex justify-between items-center px-12 py-4 w-full">
      <div className={isHomeVariant ? "text-xl font-black text-[#FF8C00] tracking-tighter font-['Space_Grotesk'] uppercase tracking-wider" : "text-xl font-black text-[#FF8C00] tracking-tighter uppercase font-['Space_Grotesk']"}>KINETIC_FRC</div>
      <div className={isHomeVariant ? "hidden md:flex gap-10 items-center" : "hidden md:flex items-center gap-8"}>
        <Link className={homeLinkClass} href="/">Home</Link>
        <Link className={legacyLinkClass} href="/legacy">Legacy</Link>
        <a className={inactiveLinkClass} href="#">Sponsors</a>
        <a className={inactiveLinkClass} href="#">Contact</a>
      </div>
      <button className={isHomeVariant ? "bg-[#FF8C00] text-[#623200] px-6 py-2 rounded-lg font-bold font-['Space_Grotesk'] uppercase tracking-wider active:scale-95 transition-transform hover:bg-[#FFB77D] transition-colors duration-300" : "bg-primary-container text-on-primary-container px-6 py-2 font-headline uppercase text-sm font-bold tracking-widest active:scale-95 transition-transform rounded-lg"}>Support Us</button>
    </nav>
  );
}
