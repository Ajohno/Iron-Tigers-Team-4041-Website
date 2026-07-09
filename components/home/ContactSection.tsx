type ContactDetail = {
  icon: string;
  label: string;
  value: string;
};

const contactDetails: ContactDetail[] = [
  { icon: "location_on", label: "Location", value: "123 Forge Way, Portland, ME" },
  { icon: "mail", label: "Email", value: "CONTACT@KINETICFRC.COM" },
];

const inquiryTypes = ["Student Recruitment", "Sponsorship Inquiry", "Mentorship", "Other"];

export function ContactSection() {
  return (
    <section className="py-24 px-12 bg-background flex flex-col lg:flex-row gap-16">
      <div className="lg:w-1/2">
        <h2 className="text-5xl font-headline font-black text-on-background uppercase tracking-tight mb-8">Join the <span className="text-primary-container">Pride</span></h2>
        <p className="text-xl text-on-surface-variant mb-12 leading-relaxed">{"Whether you're a student looking to learn, a mentor wanting to share expertise, or a community member interested in our mission, we'd love to hear from you."}</p>
        <div className="space-y-6">
          {contactDetails.map((detail) => (
            <div className="flex items-center gap-6" key={detail.label}>
              <div className="w-12 h-12 bg-surface-container-high rounded flex items-center justify-center text-primary"><span className="material-symbols-outlined">{detail.icon}</span></div>
              <div><div className="text-xs font-label text-on-surface-variant uppercase">{detail.label}</div><div className="text-on-surface font-headline font-bold">{detail.value}</div></div>
            </div>
          ))}
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
              {inquiryTypes.map((type) => <option key={type}>{type}</option>)}
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
  );
}
