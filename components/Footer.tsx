const footerLinks = [
  { label: "Contact", href: "#contact" },
  { label: "Sponsors", href: "#sponsors" },
];

const socialLinks = [
  { label: "Instagram", href: "#instagram" },
  { label: "GitHub", href: "#github" },
  { label: "YouTube", href: "#youtube" },
];

export function Footer() {
  return (
    <footer className="bg-[#131313] dark:bg-[#131313] border-t border-[#564334]/20 w-full py-8">
      <div className="flex w-full flex-col items-center gap-4 px-12 text-center">
        <div>
          <div className="text-lg font-bold text-[#E5E2E1] font-headline uppercase tracking-widest">KINETIC PRECISION ROBOTICS</div>
          <p className="mt-1 text-[#FF8C00] font-['Inter'] text-[10px] tracking-widest uppercase">FRC Team 4041</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {footerLinks.map((link) => (
            <a
              className="text-[#E5E2E1]/50 hover:text-[#FFB77D] font-['Inter'] text-[10px] tracking-widest uppercase transition-opacity duration-200"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6" aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              className="text-[#E5E2E1]/50 hover:text-[#FFB77D] font-['Inter'] text-[10px] tracking-widest uppercase transition-opacity duration-200"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-[#FF8C00] font-['Inter'] text-[10px] tracking-widest uppercase mt-4">© 2024 KINETIC PRECISION ROBOTICS. ALL SYSTEMS OPERATIONAL.</p>
      </div>
    </footer>
  );
}
