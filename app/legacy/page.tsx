import Image from "next/image";
import Link from "next/link";

export default function LegacyPage() {
  return (
    <>

    <nav className="fixed top-0 w-full z-50 bg-[#131313] dark:bg-[#131313] flex justify-between items-center px-12 py-4 w-full">
      <div className="text-xl font-black text-[#FF8C00] tracking-tighter uppercase font-['Space_Grotesk']">KINETIC_FRC</div>
      <div className="hidden md:flex items-center gap-8">
        <Link className="font-['Space_Grotesk'] uppercase tracking-wider text-[#E5E2E1] opacity-70 hover:text-[#FF8C00] transition-colors duration-300" href="/">Home</Link>
        <Link className="font-['Space_Grotesk'] uppercase tracking-wider text-[#FFB77D] border-b-2 border-[#FF8C00] pb-1 hover:text-[#FF8C00] transition-colors duration-300" href="/legacy">Legacy</Link>
        <a className="font-['Space_Grotesk'] uppercase tracking-wider text-[#E5E2E1] opacity-70 hover:text-[#FF8C00] transition-colors duration-300" href="#">Sponsors</a>
        <a className="font-['Space_Grotesk'] uppercase tracking-wider text-[#E5E2E1] opacity-70 hover:text-[#FF8C00] transition-colors duration-300" href="#">Contact</a>
      </div>
      <button className="bg-primary-container text-on-primary-container px-6 py-2 font-headline uppercase text-sm font-bold tracking-widest active:scale-95 transition-transform rounded-lg">Support Us</button>
    </nav>

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
          <div className="md:col-span-8 bg-surface-container rounded-xl overflow-hidden relative group">
            <div className="relative aspect-[16/7] w-full bg-surface-container-highest">
              <Image alt="2024 Crescendo Robot" className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPsYfA_qYUEbl1LlM9TMBSyYC_YRmHsUVT2GUh65IAxzPB-qtBNVd4pSVqIAE3wdasgWsDr0wRFW7YPk2W2uw9zYtswGNuuyB0_yiXmLSY2mcX3odDOWLBv4tjxA9FgzPcrx42_YJvY-1TcmnswkC9H14sB1JfVeNbvIzoiuAyj2IfG-ICVtBt5TgINPoxlyAeIgouevxIpCoIOgdGzztA5v3DSavUPCjT0YrNHlji7NmiNEKKrdquazB_yEi5KnkhNmJ713tFM1q7" fill sizes="(min-width: 768px) 66vw, 100vw" />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="font-headline text-4xl font-bold uppercase tracking-tight">Crescendo (2024)</h2>
                  <p className="font-label text-primary uppercase text-sm tracking-widest mt-1">Robot: Apex Prime</p>
                </div>
                <span className="bg-surface-container-highest px-3 py-1 text-xs font-label uppercase tracking-widest border border-outline-variant/20">Operational</span>
              </div>
              <p className="font-body text-on-surface-variant mb-8 max-w-xl">Designed for rapid-fire deployment and precision high-note delivery. Features an integrated swerve-drive with 1.2ms latency and an AI-assisted vision alignment system.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-outline-variant/20 pt-8">
                <div>
                  <p className="font-label text-[10px] uppercase text-on-surface-variant/60 tracking-widest mb-2">Awards</p>
                  <ul className="font-body text-sm space-y-1"><li>Impact Award</li><li>Quality Award</li></ul>
                </div>
                <div>
                  <p className="font-label text-[10px] uppercase text-on-surface-variant/60 tracking-widest mb-2">Performance</p>
                  <ul className="font-body text-sm space-y-1"><li>Finalist - District</li><li>Top 1% - OPR</li></ul>
                </div>
                <div className="hidden md:block">
                  <p className="font-label text-[10px] uppercase text-on-surface-variant/60 tracking-widest mb-2">Specs</p>
                  <p className="font-body text-sm">4.2 m/s Peak Velocity</p>
                </div>
              </div>
            </div>
          </div>

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

          <div className="md:col-span-6 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-headline text-3xl font-bold uppercase tracking-tight">Charged Up (2023)</h2>
                <span className="font-label text-on-surface-variant/50 text-xs">ARCHIVED</span>
              </div>
              <div className="relative mb-6 h-48 w-full"><Image alt="Charged Up Robot" className="object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjhOzdLePh_7hmP_hdwb09ENkaGdUnaoKh2FjWoESWeEBoaEwgCzVJ9W_DKBIc-rRnMGQUQ-lLEUrObSlM1Tyr_RvESgxHsqR1Gwj_exO_JPH7uwq4e0JawuTBXUwWfG_GohdiPLxriH2zcM_rCMmVUYBkTgCSp0wvcKCqekMNcRSp2piuNb0ttoqgJOvau7Sdjhz9GpMJLTadtAJoIykUTBp46D3HNCZ56yinO7Ua7w39BeZbqoxp1Q3z_er2d3v_xeMG64gwdN3X" fill sizes="(min-width: 768px) 50vw, 100vw" /></div>
              <p className="font-body text-on-surface-variant mb-6">Utilized a dual-stage telescoping elevator system for high-node placement. Breakthrough in PID control loops for zero-oscillation arm movement.</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-surface-container-highest px-4 py-3 rounded flex-1"><p className="font-label text-[10px] uppercase text-primary tracking-widest mb-1">Result</p><p className="font-headline font-bold">Semi-Finalists</p></div>
              <div className="bg-surface-container-highest px-4 py-3 rounded flex-1"><p className="font-label text-[10px] uppercase text-primary tracking-widest mb-1">Award</p><p className="font-headline font-bold">Innovation</p></div>
            </div>
          </div>

          <div className="md:col-span-6 bg-surface-container rounded-xl p-8 flex flex-col justify-between border border-outline-variant/10">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-headline text-3xl font-bold uppercase tracking-tight">Rapid React (2022)</h2>
                <span className="font-label text-on-surface-variant/50 text-xs">ARCHIVED</span>
              </div>
              <div className="relative mb-6 h-48 w-full"><Image alt="Rapid React Robot" className="object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANeUtIZ0_7zoldpL2s0t351uX-4zFnWTsdvaufDYuzePiS62Pum0p7zEB6gCW7K4_zYeYslRqKqGbQ9cC7YB9Ts-4KXf9qfcCO6uz3DcQkUVLcK56t84gWZmglj9pGAuuX1GWJWGup6xoPzQ1Ocp83DxUL2ZgSxtBKiwnHYDwvwjEvslpjuT_iMhqvfx2eNLPj3iU_gmwwaFkOSye2KG7ffTDPYGYiQu_-2Zikj5kkrUzx2ezhmaAgYmu2rMBVzu9ClyuWoKjcc2sc" fill sizes="(min-width: 768px) 50vw, 100vw" /></div>
              <p className="font-body text-on-surface-variant mb-6">Precision ball intake with variable-angle shooter. Achieved 98% accuracy from the tarmac during autonomous periods.</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-surface-container-high px-4 py-3 rounded flex-1"><p className="font-label text-[10px] uppercase text-primary tracking-widest mb-1">Result</p><p className="font-headline font-bold">CHAMPS Qual</p></div>
              <div className="bg-surface-container-high px-4 py-3 rounded flex-1"><p className="font-label text-[10px] uppercase text-primary tracking-widest mb-1">Award</p><p className="font-headline font-bold">Design Award</p></div>
            </div>
          </div>
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

    <footer className="bg-[#131313] dark:bg-[#131313] w-full py-8 border-t border-[#564334]/20 flex flex-col items-center gap-4 px-12 w-full">
      <div className="text-lg font-bold text-[#E5E2E1] font-['Inter'] uppercase tracking-widest">KINETIC PRECISION ROBOTICS</div>
      <div className="flex gap-8">
        <a className="font-['Inter'] text-[10px] tracking-widest uppercase text-[#E5E2E1]/50 hover:text-[#FFB77D] transition-opacity duration-200" href="#">Documentation</a>
        <a className="font-['Inter'] text-[10px] tracking-widest uppercase text-[#E5E2E1]/50 hover:text-[#FFB77D] transition-opacity duration-200" href="#">Privacy Policy</a>
        <a className="font-['Inter'] text-[10px] tracking-widest uppercase text-[#E5E2E1]/50 hover:text-[#FFB77D] transition-opacity duration-200" href="#">Safety Protocols</a>
      </div>
      <div className="font-['Inter'] text-[10px] tracking-widest uppercase text-[#E5E2E1]/50 mt-4">© 2024 KINETIC PRECISION ROBOTICS. ALL SYSTEMS OPERATIONAL.</div>
    </footer>
  
    </>
  );
}
