import { PageLayout } from "@/components/page-layout";
import { BentoCard } from "@/components/home/BentoCard";
import { ContactSection } from "@/components/home/ContactSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LegacyTimeline } from "@/components/home/LegacyTimeline";
import { SponsorSection } from "@/components/home/SponsorSection";
import { SectionHeader } from "@/components/SectionHeader";

export default function Home() {
  return (
    <PageLayout activePage="home" variant="home">
    <main className="pt-20">
      <HeroSection />

      {/* Who We Are (Bento Grid Style) */}
      <section className="py-24 px-12 bg-surface-container-low">
        <SectionHeader className="mb-16" showAccentLine title="Who We Are" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <BentoCard
            className="md:col-span-2 bg-surface-container-high p-10 rounded-lg group hover:bg-surface-container-highest transition-colors"
            description="Pushing the limits of FRC design with custom-machined drivetrains and sensor-fused navigation systems developed in our Maine forge."
            descriptionClassName="text-on-surface-variant leading-relaxed"
            icon="lightbulb"
            iconClassName="text-5xl text-primary"
            title="Innovation"
            titleClassName="text-3xl font-headline font-bold text-on-background mb-4 uppercase"
          />

          <BentoCard
            className="bg-surface-container p-10 rounded-lg group border-t-2 border-primary/20"
            description="Empowering the next generation of engineers through collaborative problem solving and student-led project management."
            descriptionClassName="text-sm text-on-surface-variant leading-relaxed"
            icon="groups"
            iconClassName="text-4xl text-primary"
            title="Leadership"
            titleClassName="text-xl font-headline font-bold text-on-background mb-4 uppercase tracking-widest"
          />

          <BentoCard
            className="bg-surface-container p-10 rounded-lg group border-b-2 border-primary/20"
            description="A rigorous standard for code quality and mechanical reliability. Every bolt torqued, every line of code tested."
            descriptionClassName="text-sm text-on-surface-variant leading-relaxed"
            icon="verified"
            iconClassName="text-4xl text-primary"
            title="Excellence"
            titleClassName="text-xl font-headline font-bold text-on-background mb-4 uppercase tracking-widest"
          />

          <BentoCard
            className="md:col-span-4 bg-surface-container-highest p-10 rounded-lg flex flex-col md:flex-row items-center gap-12"
            description="Beyond the competition, we are building a STEM ecosystem in our local community, mentoring FLL teams and hosting public robotics workshops across Maine."
            descriptionClassName="text-xl text-on-surface-variant leading-relaxed"
            icon="rocket_launch"
            iconClassName="text-6xl text-primary-container"
            iconWrapperClassName="mb-6"
            image={{
              alt: "B&W high contrast photo of students teaching younger children how to assemble a simple gear mechanism",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB5B2Snk9YDPvEp7NLseFzniHRv4ulUUpQCa72wArP4WtwXSnCAjbkqSMLAqmTsQBX2oPQb8aUAS8_YwwCFmxnTmKsPatl_06MYNS41lR4mptxX2P2QV7asAZnCJmqjV-0fKZ0crJy7FS7TYwDFLIAmI0cJrNFVbCMTeYav4VkgQ-o1CX667CzGGtv7LGMnBrBMj0yGdGz7F_JhTlPOSsSH51ZLF2SkWluEuUsEinJEibvrWeKRh-OO42AeZPXKCrdtpe-Xe1G0NtF",
            }}
            title="Community Impact"
            titleClassName="text-4xl font-headline font-bold text-on-background mb-6 uppercase"
          />
        </div>
      </section>

      <LegacyTimeline />

      <SponsorSection />

      <ContactSection />
    </main>

    </PageLayout>
  );
}
