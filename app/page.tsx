import Image from "next/image";

export default function Home() {
  return (
    <>

    {/* Top Navigation Bar */}
    <nav className="fixed top-0 w-full z-50 bg-[#131313] dark:bg-[#131313] flex justify-between items-center px-12 py-4 w-full">
      <div className="text-xl font-black text-[#FF8C00] tracking-tighter font-['Space_Grotesk'] uppercase tracking-wider">KINETIC_FRC</div>
      <div className="hidden md:flex gap-10 items-center">
        <a className="text-[#FFB77D] border-b-2 border-[#FF8C00] pb-1 font-['Space_Grotesk'] uppercase tracking-wider transition-colors duration-300" href="#">Home</a>
        <a className="text-[#E5E2E1] opacity-70 hover:text-[#FF8C00] transition-colors duration-300 font-['Space_Grotesk'] uppercase tracking-wider" href="/legacy-page.html">Legacy</a>
        <a className="text-[#E5E2E1] opacity-70 hover:text-[#FF8C00] transition-colors duration-300 font-['Space_Grotesk'] uppercase tracking-wider" href="#">Sponsors</a>
        <a className="text-[#E5E2E1] opacity-70 hover:text-[#FF8C00] transition-colors duration-300 font-['Space_Grotesk'] uppercase tracking-wider" href="#">Contact</a>
      </div>
      <button className="bg-[#FF8C00] text-[#623200] px-6 py-2 rounded-lg font-bold font-['Space_Grotesk'] uppercase tracking-wider active:scale-95 transition-transform hover:bg-[#FFB77D] transition-colors duration-300">Support Us</button>
    </nav>

    <main className="pt-20">
      {/* Hero Section */}
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
            <span className="text-primary font-label text-sm uppercase tracking-[0.2em]">TEAM 9999 • MAINE, USA</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-black text-on-background tracking-tighter leading-[0.9] mb-8 uppercase">
            Engineering the <br /><span className="text-primary-container">Future of Robotics</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Precision-machined hardware meets high-performance autonomy. The Iron Tigers are redefining the boundaries of competitive engineering.
          </p>
          <div className="flex gap-4">
            <button className="technical-gradient text-on-primary-container px-10 py-4 rounded font-headline font-bold uppercase tracking-widest active:scale-95 transition-all">Join the Team</button>
            <button className="border border-outline-variant/40 hover:bg-surface-container-high text-on-surface px-10 py-4 rounded font-headline font-bold uppercase tracking-widest transition-all">View Specs</button>
          </div>
        </div>

        {/* Telemetry Sidebar */}
        <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-6 items-end">
          <div className="glass-panel p-6 rounded-lg border-r-2 border-primary-container text-right">
            <div className="text-primary font-label text-xs uppercase tracking-widest mb-1">Status</div>
            <div className="flex items-center gap-2 justify-end">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-2xl font-headline font-bold text-on-background uppercase">Systems Ready</span>
            </div>
          </div>
          <div className="glass-panel p-6 rounded-lg border-r-2 border-outline-variant text-right opacity-60">
            <div className="text-on-surface-variant font-label text-xs uppercase tracking-widest mb-1">Last Update</div>
            <div className="text-2xl font-headline font-bold text-on-background uppercase">08.24.2024</div>
          </div>
        </div>
      </section>

      {/* Who We Are (Bento Grid Style) */}
      <section className="py-24 px-12 bg-surface-container-low">
        <div className="mb-16">
          <h2 className="text-4xl font-headline font-black text-on-background uppercase tracking-tight">Who We Are</h2>
          <div className="w-20 h-1 bg-primary-container mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-surface-container-high p-10 rounded-lg group hover:bg-surface-container-highest transition-colors">
            <div className="mb-8"><span className="material-symbols-outlined text-5xl text-primary">lightbulb</span></div>
            <h3 className="text-3xl font-headline font-bold text-on-background mb-4 uppercase">Innovation</h3>
            <p className="text-on-surface-variant leading-relaxed">Pushing the limits of FRC design with custom-machined drivetrains and sensor-fused navigation systems developed in our Maine forge.</p>
          </div>

          <div className="bg-surface-container p-10 rounded-lg group border-t-2 border-primary/20">
            <div className="mb-8"><span className="material-symbols-outlined text-4xl text-primary">groups</span></div>
            <h3 className="text-xl font-headline font-bold text-on-background mb-4 uppercase tracking-widest">Leadership</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">Empowering the next generation of engineers through collaborative problem solving and student-led project management.</p>
          </div>

          <div className="bg-surface-container p-10 rounded-lg group border-b-2 border-primary/20">
            <div className="mb-8"><span className="material-symbols-outlined text-4xl text-primary">verified</span></div>
            <h3 className="text-xl font-headline font-bold text-on-background mb-4 uppercase tracking-widest">Excellence</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">A rigorous standard for code quality and mechanical reliability. Every bolt torqued, every line of code tested.</p>
          </div>

          <div className="md:col-span-4 bg-surface-container-highest p-10 rounded-lg flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="mb-6"><span className="material-symbols-outlined text-6xl text-primary-container">rocket_launch</span></div>
              <h3 className="text-4xl font-headline font-bold text-on-background mb-6 uppercase">Community Impact</h3>
              <p className="text-xl text-on-surface-variant leading-relaxed">Beyond the competition, we are building a STEM ecosystem in our local community, mentoring FLL teams and hosting public robotics workshops across Maine.</p>
            </div>
            <div className="relative w-full md:w-1/3 aspect-video bg-background rounded-lg overflow-hidden grayscale contrast-125">
              <Image
                className="object-cover"
                alt="B&W high contrast photo of students teaching younger children how to assemble a simple gear mechanism"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB5B2Snk9YDPvEp7NLseFzniHRv4ulUUpQCa72wArP4WtwXSnCAjbkqSMLAqmTsQBX2oPQb8aUAS8_YwwCFmxnTmKsPatl_06MYNS41lR4mptxX2P2QV7asAZnCJmqjV-0fKZ0crJy7FS7TYwDFLIAmI0cJrNFVbCMTeYav4VkgQ-o1CX667CzGGtv7LGMnBrBMj0yGdGz7F_JhTlPOSsSH51ZLF2SkWluEuUsEinJEibvrWeKRh-OO42AeZPXKCrdtpe-Xe1G0NtF"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Legacy Timeline */}
      <section className="py-24 px-12 bg-background relative overflow-hidden">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-outline-variant opacity-20 hidden md:block"></div>
        <div className="mb-20 text-center relative z-10">
          <h2 className="text-4xl font-headline font-black text-on-background uppercase tracking-tight">Our Legacy</h2>
          <p className="text-primary font-label uppercase tracking-[0.3em] mt-2">Chronicle of Precision</p>
        </div>

        <div className="space-y-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
            <div className="flex-1 md:text-right md:pr-16">
              <h4 className="text-5xl font-headline font-black text-primary-container mb-2">2024</h4>
              <h5 className="text-2xl font-headline font-bold text-on-background uppercase mb-4">World Finals Appearance</h5>
              <p className="text-on-surface-variant max-w-md ml-auto">Ranked #2 in the Einstein Division. Highest scoring offensive bot in the New England district.</p>
            </div>
            <div className="w-12 h-12 rounded-full technical-gradient border-4 border-background flex items-center justify-center z-20"><span className="material-symbols-outlined text-on-primary-container text-sm">star</span></div>
            <div className="flex-1 md:pl-16">
              <div className="bg-surface-container-low p-4 rounded-lg inline-block"><span className="text-xs font-label text-primary uppercase">Milestone Reached</span></div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
            <div className="flex-1 md:text-right md:pr-16 order-2 md:order-1">
              <div className="bg-surface-container-low p-4 rounded-lg inline-block"><span className="text-xs font-label text-on-surface-variant uppercase">Regional Champions</span></div>
            </div>
            <div className="w-12 h-12 rounded-full bg-surface-container-highest border-4 border-background flex items-center justify-center z-20 order-1 md:order-2"><span className="material-symbols-outlined text-on-surface text-sm">trophy</span></div>
            <div className="flex-1 md:pl-16 order-3">
              <h4 className="text-5xl font-headline font-black text-on-surface mb-2">2022</h4>
              <h5 className="text-2xl font-headline font-bold text-on-background uppercase mb-4">New England District Winner</h5>
              <p className="text-on-surface-variant max-w-md">Secured the blue banner after a dominant 12-0 run in the playoffs.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0 opacity-60">
            <div className="flex-1 md:text-right md:pr-16">
              <h4 className="text-5xl font-headline font-black text-on-surface mb-2">2019</h4>
              <h5 className="text-2xl font-headline font-bold text-on-background uppercase mb-4">Engineering Inspiration</h5>
              <p className="text-on-surface-variant max-w-md ml-auto">Recognized for outstanding outreach and community STEM development programs.</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-surface-container-highest border-4 border-background flex items-center justify-center z-20"><span className="material-symbols-outlined text-on-surface text-sm">memory</span></div>
            <div className="flex-1 md:pl-16"></div>
          </div>
        </div>
      </section>

      <section className="py-24 px-12 bg-surface-container-low border-y border-outline-variant/10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-headline font-black text-on-background uppercase tracking-tight">Our Sponsors</h2>
          <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest mt-2">Fueling the Forge</p>
        </div>
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

    <footer className="bg-[#131313] dark:bg-[#131313] border-t border-[#564334]/20 w-full py-8">
      <div className="flex flex-col items-center gap-4 px-12 w-full">
        <div className="text-lg font-bold text-[#E5E2E1] font-headline uppercase">KINETIC PRECISION ROBOTICS</div>
        <div className="flex gap-8">
          <a className="text-[#E5E2E1]/50 hover:text-[#FFB77D] font-['Inter'] text-[10px] tracking-widest uppercase transition-opacity duration-200" href="#">Documentation</a>
          <a className="text-[#E5E2E1]/50 hover:text-[#FFB77D] font-['Inter'] text-[10px] tracking-widest uppercase transition-opacity duration-200" href="#">Privacy Policy</a>
          <a className="text-[#E5E2E1]/50 hover:text-[#FFB77D] font-['Inter'] text-[10px] tracking-widest uppercase transition-opacity duration-200" href="#">Safety Protocols</a>
        </div>
        <p className="text-[#FF8C00] font-['Inter'] text-[10px] tracking-widest uppercase mt-4">© 2024 KINETIC PRECISION ROBOTICS. ALL SYSTEMS OPERATIONAL.</p>
      </div>
    </footer>
  
    </>
  );
}
