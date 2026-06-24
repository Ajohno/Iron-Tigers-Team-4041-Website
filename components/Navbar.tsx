import Link from "next/link";

type NavbarProps = {
  activePage: "home" | "legacy";
};

const homeNavLinkClass = "text-[#FFB77D] border-b-2 border-[#FF8C00] pb-1 font-['Space_Grotesk'] uppercase tracking-wider transition-colors duration-300";
const homeInactiveLinkClass = "text-[#E5E2E1] opacity-70 hover:text-[#FF8C00] transition-colors duration-300 font-['Space_Grotesk'] uppercase tracking-wider";
export function Navbar({ activePage }: NavbarProps) {
  const homeLinkClass = activePage === "home" ? homeNavLinkClass : homeInactiveLinkClass;
  const legacyLinkClass = activePage === "legacy" ? homeNavLinkClass : homeInactiveLinkClass;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313] dark:bg-[#131313] flex justify-between items-center px-12 py-4 w-full">
      <div className="text-xl font-black text-[#FF8C00] tracking-tighter font-['Space_Grotesk'] uppercase tracking-wider">KINETIC_FRC</div>
      <div className="hidden md:flex gap-10 items-center">
        <Link className={homeLinkClass} href="/">Home</Link>
        <Link className={legacyLinkClass} href="/legacy">Legacy</Link>
        <a className={homeInactiveLinkClass} href="#">Sponsors</a>
        <a className={homeInactiveLinkClass} href="#">Contact</a>
      </div>
      <button className="bg-[#FF8C00] text-[#623200] px-6 py-2 rounded-lg font-bold font-['Space_Grotesk'] uppercase tracking-wider active:scale-95 transition-transform hover:bg-[#FFB77D] transition-colors duration-300">Support Us</button>
    </nav>
  );
}
