type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  showAccentLine?: boolean;
  subtitleTone?: "primary" | "muted";
  className?: string;
};

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  showAccentLine = false,
  subtitleTone = "primary",
  className = "",
}: SectionHeaderProps) {
  const alignmentClass = align === "center" ? "text-center" : "";
  const subtitleClass = subtitleTone === "primary"
    ? "text-primary tracking-[0.3em]"
    : "text-on-surface-variant text-sm tracking-widest";

  return (
    <div className={`${className} ${alignmentClass}`.trim()}>
      <h2 className="text-4xl font-headline font-black text-on-background uppercase tracking-tight">{title}</h2>
      {showAccentLine ? <div className="w-20 h-1 bg-primary-container mt-4"></div> : null}
      {subtitle ? <p className={`${subtitleClass} font-label uppercase mt-2`}>{subtitle}</p> : null}
    </div>
  );
}
