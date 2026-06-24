import { SectionHeader } from "@/components/SectionHeader";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  icon: string;
  orientation: "left" | "right";
  yearClassName: string;
  markerClassName: string;
  markerIconClassName: string;
  descriptionClassName: string;
  badge?: {
    text: string;
    className: string;
  };
  faded?: boolean;
};

const timelineItems: TimelineItem[] = [
  {
    year: "2024",
    title: "World Finals Appearance",
    description: "Ranked #2 in the Einstein Division. Highest scoring offensive bot in the New England district.",
    icon: "star",
    orientation: "left",
    yearClassName: "text-primary-container",
    markerClassName: "technical-gradient",
    markerIconClassName: "text-on-primary-container",
    descriptionClassName: "max-w-md ml-auto",
    badge: {
      text: "Milestone Reached",
      className: "text-primary",
    },
  },
  {
    year: "2022",
    title: "New England District Winner",
    description: "Secured the blue banner after a dominant 12-0 run in the playoffs.",
    icon: "trophy",
    orientation: "right",
    yearClassName: "text-on-surface",
    markerClassName: "bg-surface-container-highest",
    markerIconClassName: "text-on-surface",
    descriptionClassName: "max-w-md",
    badge: {
      text: "Regional Champions",
      className: "text-on-surface-variant",
    },
  },
  {
    year: "2019",
    title: "Engineering Inspiration",
    description: "Recognized for outstanding outreach and community STEM development programs.",
    icon: "memory",
    orientation: "left",
    yearClassName: "text-on-surface",
    markerClassName: "bg-surface-container-highest",
    markerIconClassName: "text-on-surface",
    descriptionClassName: "max-w-md ml-auto",
    faded: true,
  },
];

export function LegacyTimeline() {
  return (
    <section className="py-24 px-12 bg-background relative overflow-hidden">
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-outline-variant opacity-20 hidden md:block"></div>
      <SectionHeader align="center" className="mb-20 relative z-10" subtitle="Chronicle of Precision" title="Our Legacy" />

      <div className="space-y-24 relative z-10">
        {timelineItems.map((item) => <TimelineItemView item={item} key={item.year} />)}
      </div>
    </section>
  );
}

function TimelineItemView({ item }: { item: TimelineItem }) {
  const content = (
    <>
      <h4 className={`text-5xl font-headline font-black ${item.yearClassName} mb-2`}>{item.year}</h4>
      <h5 className="text-2xl font-headline font-bold text-on-background uppercase mb-4">{item.title}</h5>
      <p className={`text-on-surface-variant ${item.descriptionClassName}`}>{item.description}</p>
    </>
  );
  const marker = (
    <div className={`w-12 h-12 rounded-full ${item.markerClassName} border-4 border-background flex items-center justify-center z-20 ${item.orientation === "right" ? "order-1 md:order-2" : ""}`.trim()}>
      <span className={`material-symbols-outlined ${item.markerIconClassName} text-sm`}>{item.icon}</span>
    </div>
  );
  const badge = item.badge ? (
    <div className="bg-surface-container-low p-4 rounded-lg inline-block"><span className={`text-xs font-label ${item.badge.className} uppercase`}>{item.badge.text}</span></div>
  ) : null;

  if (item.orientation === "right") {
    return (
      <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${item.faded ? "opacity-60" : ""}`.trim()}>
        <div className="flex-1 md:text-right md:pr-16 order-2 md:order-1">{badge}</div>
        {marker}
        <div className="flex-1 md:pl-16 order-3">{content}</div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${item.faded ? "opacity-60" : ""}`.trim()}>
      <div className="flex-1 md:text-right md:pr-16">{content}</div>
      {marker}
      <div className="flex-1 md:pl-16">{badge}</div>
    </div>
  );
}
