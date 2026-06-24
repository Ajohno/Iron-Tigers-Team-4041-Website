import type { ReactNode } from "react";

type TelemetryCardProps = {
  label: string;
  value: string;
  statusIndicator?: ReactNode;
  borderClassName: string;
  opacityClassName?: string;
};

export function TelemetryCard({
  label,
  value,
  statusIndicator,
  borderClassName,
  opacityClassName = "",
}: TelemetryCardProps) {
  const hasStatusIndicator = Boolean(statusIndicator);

  return (
    <div className={`glass-panel p-6 rounded-lg border-r-2 ${borderClassName} text-right ${opacityClassName}`.trim()}>
      <div className={`${hasStatusIndicator ? "text-primary" : "text-on-surface-variant"} font-label text-xs uppercase tracking-widest mb-1`}>
        {label}
      </div>
      {hasStatusIndicator ? (
        <div className="flex items-center gap-2 justify-end">
          {statusIndicator}
          <span className="text-2xl font-headline font-bold text-on-background uppercase">{value}</span>
        </div>
      ) : (
        <div className="text-2xl font-headline font-bold text-on-background uppercase">{value}</div>
      )}
    </div>
  );
}
