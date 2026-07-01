type Metric = {
  label: string;
  value: string;
  border?: boolean;
};

const metrics: Metric[] = [
  { label: "Trophies Won", value: "34", border: true },
  { label: "Matches Logged", value: "1,208", border: true },
  { label: "Code Lines", value: "1.2M" },
];

export function TotalMetricsCard() {
  return (
    <div className="bg-primary-container p-8 rounded-xl h-full flex flex-col justify-between text-on-primary-container">
      <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
      <div>
        <h3 className="font-headline text-3xl font-black uppercase leading-none mb-2">Total Metrics</h3>
        <p className="font-body text-sm opacity-80 mb-6">A cumulative look at 12 years of engineering excellence.</p>
        <div className="space-y-4">
          {metrics.map((metric) => (
            <div className={metric.border ? "flex justify-between border-b border-on-primary-container/20 pb-2" : "flex justify-between"} key={metric.label}>
              <span className="font-label uppercase text-[10px]">{metric.label}</span>
              <span className="font-headline font-bold">{metric.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
