import { PageLayout } from "@/components/page-layout";
import { SeasonCard } from "@/components/legacy/SeasonCard";

export default function LegacyPage() {
  return (
    <PageLayout activePage="legacy" variant="legacy">
    <main className="pt-24 pb-12">
      <header className="px-12 py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <p className="font-label uppercase tracking-[0.3em] text-primary text-xs mb-4">FRC TEAM 9999 / IRON TIGERS</p>
          <h1 className="font-headline text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">SEASON<br /><span className="text-primary-container">HISTORY</span></h1>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-[2px] bg-outline-variant/40"></div>
            <p className="font-body text-on-surface-variant max-w-lg leading-relaxed">A retrospective look at the evolution of Kinetic Precision. From raw steel to autonomous mastery, this is our technical lineage.</p>
          </div>
        </div>
      </header>

      <section className="px-12 mt-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <SeasonCard
            awards={["Impact Award", "Quality Award"]}
            className="md:col-span-8 bg-surface-container rounded-xl overflow-hidden relative group"
            description="Designed for rapid-fire deployment and precision high-note delivery. Features an integrated swerve-drive with 1.2ms latency and an AI-assisted vision alignment system."
            gameName="Crescendo"
            image={{
              alt: "2024 Crescendo Robot",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPsYfA_qYUEbl1LlM9TMBSyYC_YRmHsUVT2GUh65IAxzPB-qtBNVd4pSVqIAE3wdasgWsDr0wRFW7YPk2W2uw9zYtswGNuuyB0_yiXmLSY2mcX3odDOWLBv4tjxA9FgzPcrx42_YJvY-1TcmnswkC9H14sB1JfVeNbvIzoiuAyj2IfG-ICVtBt5TgINPoxlyAeIgouevxIpCoIOgdGzztA5v3DSavUPCjT0YrNHlji7NmiNEKKrdquazB_yEi5KnkhNmJ713tFM1q7",
            }}
            performance={["Finalist - District", "Top 1% - OPR"]}
            robotName="Apex Prime"
            specs="4.2 m/s Peak Velocity"
            status="Operational"
            variant="featured"
            year="2024"
          />

          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-primary-container p-8 rounded-xl h-full flex flex-col justify-between text-on-primary-container">
              <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
              <div>
                <h3 className="font-headline text-3xl font-black uppercase leading-none mb-2">Total Metrics</h3>
                <p className="font-body text-sm opacity-80 mb-6">A cumulative look at 12 years of engineering excellence.</p>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-on-primary-container/20 pb-2"><span className="font-label uppercase text-[10px]">Trophies Won</span><span className="font-headline font-bold">34</span></div>
                  <div className="flex justify-between border-b border-on-primary-container/20 pb-2"><span className="font-label uppercase text-[10px]">Matches Logged</span><span className="font-headline font-bold">1,208</span></div>
                  <div className="flex justify-between"><span className="font-label uppercase text-[10px]">Code Lines</span><span className="font-headline font-bold">1.2M</span></div>
                </div>
              </div>
            </div>
          </div>

          <SeasonCard
            className="md:col-span-6 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between"
            description="Utilized a dual-stage telescoping elevator system for high-node placement. Breakthrough in PID control loops for zero-oscillation arm movement."
            gameName="Charged Up"
            image={{
              alt: "Charged Up Robot",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjhOzdLePh_7hmP_hdwb09ENkaGdUnaoKh2FjWoESWeEBoaEwgCzVJ9W_DKBIc-rRnMGQUQ-lLEUrObSlM1Tyr_RvESgxHsqR1Gwj_exO_JPH7uwq4e0JawuTBXUwWfG_GohdiPLxriH2zcM_rCMmVUYBkTgCSp0wvcKCqekMNcRSp2piuNb0ttoqgJOvau7Sdjhz9GpMJLTadtAJoIykUTBp46D3HNCZ56yinO7Ua7w39BeZbqoxp1Q3z_er2d3v_xeMG64gwdN3X",
            }}
            stats={[
              { label: "Result", value: "Semi-Finalists", className: "bg-surface-container-highest px-4 py-3 rounded flex-1" },
              { label: "Award", value: "Innovation", className: "bg-surface-container-highest px-4 py-3 rounded flex-1" },
            ]}
            status="ARCHIVED"
            variant="compact"
            year="2023"
          />

          <SeasonCard
            className="md:col-span-6 bg-surface-container rounded-xl p-8 flex flex-col justify-between border border-outline-variant/10"
            description="Precision ball intake with variable-angle shooter. Achieved 98% accuracy from the tarmac during autonomous periods."
            gameName="Rapid React"
            image={{
              alt: "Rapid React Robot",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuANeUtIZ0_7zoldpL2s0t351uX-4zFnWTsdvaufDYuzePiS62Pum0p7zEB6gCW7K4_zYeYslRqKqGbQ9cC7YB9Ts-4KXf9qfcCO6uz3DcQkUVLcK56t84gWZmglj9pGAuuX1GWJWGup6xoPzQ1Ocp83DxUL2ZgSxtBKiwnHYDwvwjEvslpjuT_iMhqvfx2eNLPj3iU_gmwwaFkOSye2KG7ffTDPYGYiQu_-2Zikj5kkrUzx2ezhmaAgYmu2rMBVzu9ClyuWoKjcc2sc",
            }}
            stats={[
              { label: "Result", value: "CHAMPS Qual", className: "bg-surface-container-high px-4 py-3 rounded flex-1" },
              { label: "Award", value: "Design Award", className: "bg-surface-container-high px-4 py-3 rounded flex-1" },
            ]}
            status="ARCHIVED"
            variant="compact"
            year="2022"
          />
        </div>
      </section>

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
              <div className="bg-surface-container p-6 rounded-lg"><span className="material-symbols-outlined text-primary mb-4">engineering</span><h4 className="font-headline font-bold uppercase text-sm mb-2">Engineering</h4><p className="text-xs text-on-surface-variant font-body">Mechanical design, CAD, and fabrication.</p></div>
              <div className="bg-surface-container p-6 rounded-lg"><span className="material-symbols-outlined text-primary mb-4">terminal</span><h4 className="font-headline font-bold uppercase text-sm mb-2">Programming</h4><p className="text-xs text-on-surface-variant font-body">Java, autonomous systems, and AI.</p></div>
              <div className="bg-surface-container p-6 rounded-lg"><span className="material-symbols-outlined text-primary mb-4">campaign</span><h4 className="font-headline font-bold uppercase text-sm mb-2">Marketing</h4><p className="text-xs text-on-surface-variant font-body">Branding, outreach, and sponsorship.</p></div>
              <div className="bg-surface-container p-6 rounded-lg"><span className="material-symbols-outlined text-primary mb-4">analytics</span><h4 className="font-headline font-bold uppercase text-sm mb-2">Strategy</h4><p className="text-xs text-on-surface-variant font-body">Data analysis and match scouting.</p></div>
            </div>
          </div>
        </div>
      </section>
    </main>

    </PageLayout>
  );
}
