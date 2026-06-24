import { PageLayout } from "@/components/page-layout";
import { BentoCard } from "@/components/home/BentoCard";
import { HeroSection } from "@/components/home/HeroSection";
import { LegacyTimeline } from "@/components/home/LegacyTimeline";
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

      <section className="py-24 px-12 bg-surface-container-low border-y border-outline-variant/10">
        <SectionHeader align="center" className="mb-16" subtitle="Fueling the Forge" subtitleTone="muted" title="Our Sponsors" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center gap-2"><span className="material-symbols-outlined text-4xl">factory</span><span className="font-headline font-bold uppercase tracking-tighter text-on-surface">TechCorp</span></div>
          <div className="flex flex-col items-center gap-2"><span className="material-symbols-outlined text-4xl">flight</span><span className="font-headline font-bold uppercase tracking-tighter text-on-surface">Aerospace Ind.</span></div>
          <div className="flex flex-col items-center gap-2"><span className="material-symbols-outlined text-4xl">precision_manufacturing</span><span className="font-headline font-bold uppercase tracking-tighter text-on-surface">Precision Lab</span></div>
          <div className="flex flex-col items-center gap-2"><span className="material-symbols-outlined text-4xl">build</span><span className="font-headline font-bold uppercase tracking-tighter text-on-surface">Maine Steel</span></div>
          <div className="flex flex-col items-center gap-2"><span className="material-symbols-outlined text-4xl">bolt</span><span className="font-headline font-bold uppercase tracking-tighter text-on-surface">GridEnergy</span></div>
          <div className="flex flex-col items-center gap-2"><span className="material-symbols-outlined text-4xl">science</span><span className="font-headline font-bold uppercase tracking-tighter text-on-surface">BioSystems</span></div>
        </div>
        <div className="mt-16 text-center">
          <a className="text-primary font-headline font-bold uppercase tracking-widest text-sm hover:text-primary-container transition-colors" href="#">Interested in sponsoring? Download our prospectus →</a>
        </div>
      </section>

      <section className="py-24 px-12 bg-background flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-headline font-black text-on-background uppercase tracking-tight mb-8">Join the <span className="text-primary-container">Pride</span></h2>
          <p className="text-xl text-on-surface-variant mb-12 leading-relaxed">{"Whether you're a student looking to learn, a mentor wanting to share expertise, or a community member interested in our mission, we'd love to hear from you."}</p>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-surface-container-high rounded flex items-center justify-center text-primary"><span className="material-symbols-outlined">location_on</span></div>
              <div><div className="text-xs font-label text-on-surface-variant uppercase">Location</div><div className="text-on-surface font-headline font-bold">123 Forge Way, Portland, ME</div></div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-surface-container-high rounded flex items-center justify-center text-primary"><span className="material-symbols-outlined">mail</span></div>
              <div><div className="text-xs font-label text-on-surface-variant uppercase">Email</div><div className="text-on-surface font-headline font-bold">CONTACT@KINETICFRC.COM</div></div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 bg-surface-container-low p-10 rounded-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-label text-primary uppercase tracking-widest">Full Name</label>
                <input className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-on-surface placeholder:text-on-surface-variant/30 py-3" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-label text-primary uppercase tracking-widest">Email Address</label>
                <input className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-on-surface placeholder:text-on-surface-variant/30 py-3" placeholder="john@example.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-label text-primary uppercase tracking-widest">Inquiry Type</label>
              <select className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-on-surface py-3">
                <option>Student Recruitment</option>
                <option>Sponsorship Inquiry</option>
                <option>Mentorship</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-label text-primary uppercase tracking-widest">Message</label>
              <textarea className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-on-surface placeholder:text-on-surface-variant/30 py-3" placeholder="Tell us how you want to be involved..." rows={4}></textarea>
            </div>
            <button className="w-full technical-gradient text-on-primary-container py-4 rounded font-headline font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity" type="submit">Send Transmission</button>
          </form>
        </div>
      </section>
    </main>

    </PageLayout>
  );
}
