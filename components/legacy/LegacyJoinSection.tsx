type Role = {
  icon: string;
  title: string;
  description: string;
};

const roles: Role[] = [
  { icon: "engineering", title: "Engineering", description: "Mechanical design, CAD, and fabrication." },
  { icon: "terminal", title: "Programming", description: "Java, autonomous systems, and AI." },
  { icon: "campaign", title: "Marketing", description: "Branding, outreach, and sponsorship." },
  { icon: "analytics", title: "Strategy", description: "Data analysis and match scouting." },
];

export function LegacyJoinSection() {
  return (
    <section className="mt-32 mb-20 px-12">
      <div className="max-w-7xl mx-auto bg-surface-container-highest rounded-xl p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-container/10 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-12 -right-12 text-[200px] font-black text-on-surface opacity-[0.03] select-none pointer-events-none leading-none uppercase font-headline">PRIDE</div>
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6">JOIN THE <span className="text-primary-container">PRIDE</span></h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">{"Become part of the next generation of engineers, coders, and innovators. We're looking for focused individuals ready to build the future of Kinetic Precision. No experience required—just a drive for excellence."}</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-headline font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">Apply Now</button>
              <button className="border border-outline-variant/30 text-on-surface px-8 py-4 rounded-lg font-headline font-bold uppercase tracking-widest hover:bg-surface-container transition-all">Our Shop</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {roles.map((role) => (
              <div className="bg-surface-container p-6 rounded-lg" key={role.title}>
                <span className="material-symbols-outlined text-primary mb-4">{role.icon}</span>
                <h4 className="font-headline font-bold uppercase text-sm mb-2">{role.title}</h4>
                <p className="text-xs text-on-surface-variant font-body">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
