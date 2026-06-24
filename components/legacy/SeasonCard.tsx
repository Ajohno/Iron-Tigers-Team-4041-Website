import Image from "next/image";

interface SeasonImage {
  alt: string;
  src: string;
}

interface SeasonLink {
  href: string;
  label: string;
}

interface SeasonStat {
  label: string;
  value: string;
  className?: string;
}

interface SeasonCardProps {
  year: string;
  gameName: string;
  image: SeasonImage;
  description: string;
  className: string;
  variant: "featured" | "compact";
  awards?: string[];
  performance?: string[];
  specs?: string;
  robotName?: string;
  status?: string;
  stats?: SeasonStat[];
  links?: SeasonLink[];
}

export function SeasonCard({
  year,
  gameName,
  image,
  description,
  className,
  variant,
  awards = [],
  performance = [],
  specs,
  robotName,
  status,
  stats = [],
  links = [],
}: SeasonCardProps) {
  if (variant === "featured") {
    return (
      <div className={className}>
        <div className="relative aspect-[16/7] w-full bg-surface-container-highest">
          <Image alt={image.alt} className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" src={image.src} fill sizes="(min-width: 768px) 66vw, 100vw" />
        </div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="font-headline text-4xl font-bold uppercase tracking-tight">{gameName} ({year})</h2>
              {robotName ? <p className="font-label text-primary uppercase text-sm tracking-widest mt-1">Robot: {robotName}</p> : null}
            </div>
            {status ? <span className="bg-surface-container-highest px-3 py-1 text-xs font-label uppercase tracking-widest border border-outline-variant/20">{status}</span> : null}
          </div>
          <p className="font-body text-on-surface-variant mb-8 max-w-xl">{description}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-outline-variant/20 pt-8">
            <div>
              <p className="font-label text-[10px] uppercase text-on-surface-variant/60 tracking-widest mb-2">Awards</p>
              <ul className="font-body text-sm space-y-1">{awards.map((award) => <li key={award}>{award}</li>)}</ul>
            </div>
            <div>
              <p className="font-label text-[10px] uppercase text-on-surface-variant/60 tracking-widest mb-2">Performance</p>
              <ul className="font-body text-sm space-y-1">{performance.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            {specs ? (
              <div className="hidden md:block">
                <p className="font-label text-[10px] uppercase text-on-surface-variant/60 tracking-widest mb-2">Specs</p>
                <p className="font-body text-sm">{specs}</p>
              </div>
            ) : null}
          </div>
          {links.length > 0 ? <div className="mt-6 flex gap-4">{links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}</div> : null}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-headline text-3xl font-bold uppercase tracking-tight">{gameName} ({year})</h2>
          {status ? <span className="font-label text-on-surface-variant/50 text-xs">{status}</span> : null}
        </div>
        <div className="relative mb-6 h-48 w-full"><Image alt={image.alt} className="object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500" src={image.src} fill sizes="(min-width: 768px) 50vw, 100vw" /></div>
        <p className="font-body text-on-surface-variant mb-6">{description}</p>
      </div>
      <div className="flex gap-4">
        {stats.map((stat) => (
          <div className={stat.className} key={stat.label}>
            <p className="font-label text-[10px] uppercase text-primary tracking-widest mb-1">{stat.label}</p>
            <p className="font-headline font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
      {links.length > 0 ? <div className="mt-6 flex gap-4">{links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}</div> : null}
    </div>
  );
}
