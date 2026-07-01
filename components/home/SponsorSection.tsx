import { SectionHeader } from "@/components/SectionHeader";

type Sponsor = {
  icon: string;
  name: string;
};

const sponsors: Sponsor[] = [
  { icon: "factory", name: "TechCorp" },
  { icon: "flight", name: "Aerospace Ind." },
  { icon: "precision_manufacturing", name: "Precision Lab" },
  { icon: "build", name: "Maine Steel" },
  { icon: "bolt", name: "GridEnergy" },
  { icon: "science", name: "BioSystems" },
];

export function SponsorSection() {
  return (
    <section className="py-24 px-12 bg-surface-container-low border-y border-outline-variant/10">
      <SectionHeader align="center" className="mb-16" subtitle="Fueling the Forge" subtitleTone="muted" title="Our Sponsors" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        {sponsors.map((sponsor) => (
          <div className="flex flex-col items-center gap-2" key={sponsor.name}>
            <span className="material-symbols-outlined text-4xl">{sponsor.icon}</span>
            <span className="font-headline font-bold uppercase tracking-tighter text-on-surface">{sponsor.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <a className="text-primary font-headline font-bold uppercase tracking-widest text-sm hover:text-primary-container transition-colors" href="#">Interested in sponsoring? Download our prospectus →</a>
      </div>
    </section>
  );
}
