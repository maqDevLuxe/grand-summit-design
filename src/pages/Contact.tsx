import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", eventType: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", company: "", eventType: "", message: "" });
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden flex items-center justify-center bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Get In Touch</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
            Plan Your <span className="gold-gradient-text">Summit</span>
          </h1>
          <p className="text-foreground/70 text-lg max-w-xl mx-auto">
            Tell us about your vision. Our team will craft a bespoke proposal within 48 hours.
          </p>
        </motion.div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <SectionReveal className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card-gold p-8 md:p-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Event Type</label>
                  <select
                    value={form.eventType}
                    onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
                  >
                    <option value="">Select type</option>
                    <option value="summit">Corporate Summit</option>
                    <option value="gala">Awards Gala</option>
                    <option value="retreat">Executive Retreat</option>
                    <option value="conference">Global Conference</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your event vision, expected scale, and timeline..."
                />
              </div>
              <button
                type="submit"
                className="w-full gold-gradient-bg text-accent-foreground py-4 rounded-full font-semibold tracking-wider uppercase text-sm hover:shadow-[0_0_40px_hsl(43_90%_55%_/_0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={16} /> Send Inquiry
              </button>
            </form>
          </SectionReveal>

          {/* Info */}
          <SectionReveal direction="right" className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold mb-6">
                Let's Create Something <span className="gold-gradient-text">Extraordinary</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Our dedicated event strategists are ready to bring your vision to life. Whether you're planning an intimate board retreat or a 50,000-person summit, we have the expertise and resources to deliver.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@apexevents.com" },
                { icon: Phone, label: "Phone", value: "+1 (888) 555-APEX" },
                { icon: MapPin, label: "Headquarters", value: "One World Trade Center, New York, NY 10007" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-sm text-foreground/80">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-6">
              <p className="text-sm text-foreground/80 mb-2 font-display font-semibold">Office Hours</p>
              <p className="text-xs text-muted-foreground">Monday – Friday: 8:00 AM – 8:00 PM EST</p>
              <p className="text-xs text-muted-foreground">Weekend: By appointment</p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
