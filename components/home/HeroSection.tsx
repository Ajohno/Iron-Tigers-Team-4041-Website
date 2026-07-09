import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { TelemetryCard } from "./TelemetryCard";

export function HeroSection() {
  return (
    <section className="relative min-h-[921px] flex items-center overflow-hidden px-12">
        <div className="absolute inset-0 z-0">
          <Image
            className="object-cover opacity-40 mix-blend-luminosity"
            alt="Close-up of a sophisticated FRC competition robot with orange metal frame and complex wiring in a high-tech workshop setting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA072d8qcUa5X6dPZ75bM-HZmXr5hQeifAWylR-Xmw82AWRDP5iSolvB7QbDE4NpuV0wKwstud9BnPPGDTTJKm1F8w5t2h2iqyyAVy_O4F1VS1oA9iqf7w9yXl3QYM6CL8X40ts-Pz_7w7qrOJreICUEMIxBYwlpFM5fMJheb7CG-rh4Tjzp0uTXxm266ny4Lw49FRCNOx3lcZUVZSVvMUauZdUG8EB1L7b5FHaAMMLyX_IDkPno40K57IQsVV8edfNpgWd87R1yE4M"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-block py-1 px-3 mb-6 bg-surface-container-highest border-l-4 border-primary-container">
            <span className="text-primary font-label text-sm uppercase tracking-[0.2em]">TEAM 4041 • MAINE, USA</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-black text-on-background tracking-tighter leading-[0.9] mb-8 uppercase">
            Engineering the <br /><span className="text-primary-container">Future of Robotics</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Precision-machined hardware meets high-performance autonomy. The Iron Tigers are redefining the boundaries of competitive engineering.
          </p>
          <div className="flex gap-4">
            <CTAButton>Join the Team</CTAButton>
            <CTAButton variant="secondary">View Specs</CTAButton>
          </div>
        </div>

        {/* Telemetry Sidebar */}
        <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-6 items-end">
          <TelemetryCard
            borderClassName="border-primary-container"
            label="Status"
            statusIndicator={<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>}
            value="Systems Ready"
          />
          <TelemetryCard
            borderClassName="border-outline-variant"
            label="Last Update"
            opacityClassName="opacity-60"
            value="08.24.2024"
          />
        </div>
    </section>
  );
}
