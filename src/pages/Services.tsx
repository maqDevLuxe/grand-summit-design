import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Mic2, Crown, Award, Globe, Users, Lightbulb, Monitor,
  Utensils, Plane, Building2, ArrowRight, CheckCircle2
} from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import heroImg from "@/assets/hero-summit.jpg";
import stageTech from "@/assets/stage-tech.jpg";
import galaImg from "@/assets/gala-dinner.jpg";

const allServices = [
  {
    icon: Mic2, title: "Summit & Conference Production",
    desc: "Full-scale production for corporate summits, from keynote stages to breakout sessions. We handle AV, lighting, staging, and live broadcasting for audiences of 500 to 50,000+.",
    features: ["Keynote Stage Design", "Breakout Room Setup", "Live Broadcasting", "Hybrid Event Tech"],
  },
  {
    icon: Crown, title: "Executive & VIP Retreats",
    desc: "Intimate, luxury gatherings for C-suite executives and board members. Private villas, Michelin-star dining, and curated team-building experiences.",
    features: ["Private Villa Access", "Michelin Dining", "Curated Activities", "Executive Concierge"],
  },
  {
    icon: Award, title: "Awards Galas & Black-Tie Events",
    desc: "World-class awards ceremonies with red carpet arrivals, live entertainment, and cinematic production values that make headlines.",
    features: ["Red Carpet Production", "Live Entertainment", "Custom Awards", "Press Management"],
  },
  {
    icon: Globe, title: "Global Multi-City Events",
    desc: "Simultaneous events across multiple continents with synchronized programming, satellite broadcasting, and local cultural integration.",
    features: ["Multi-Timezone Sync", "Local Team Coordination", "Cultural Integration", "Satellite Links"],
  },
  {
    icon: Monitor, title: "Technology & AV Production",
    desc: "Cutting-edge stage technology including LED walls, holographic displays, spatial audio, AR overlays, and real-time audience interaction systems.",
    features: ["360° LED Walls", "Holographic Displays", "Spatial Audio", "AR Integration"],
  },
  {
    icon: Utensils, title: "Catering & Hospitality",
    desc: "Bespoke culinary experiences from Michelin-starred chefs, premium bar services, and dietary-inclusive menus for thousands of guests.",
    features: ["Custom Menus", "Premium Bar Service", "Dietary Inclusivity", "Chef Stations"],
  },
  {
    icon: Plane, title: "Travel & Logistics",
    desc: "End-to-end travel management including private transfers, accommodation, visa assistance, and on-ground coordination across all destinations.",
    features: ["Private Transfers", "Hotel Blocks", "Visa Assistance", "Airport Meet & Greet"],
  },
  {
    icon: Lightbulb, title: "Creative & Brand Design",
    desc: "Full creative services including event branding, signage, digital content, video production, and immersive environmental design.",
    features: ["Event Branding", "Environmental Design", "Video Production", "Digital Content"],
  },
];

const Services = () => (
  <main>
    {/* Hero */}
    <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
      <img src={heroImg} alt="Services" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/70" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Our Expertise</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
          Our <span className="gold-gradient-text">Services</span>
        </h1>
        <p className="text-foreground/70 text-lg max-w-xl mx-auto">
          Comprehensive event solutions for the world's most ambitious organizations.
        </p>
      </motion.div>
    </section>

    {/* Services Grid */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto space-y-12">
        {allServices.map((s, i) => (
          <SectionReveal key={s.title} delay={0.1}>
            <div className={`glass-card-gold p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-xl gold-gradient-bg flex items-center justify-center mb-6">
                  <s.icon size={24} className="text-accent-foreground" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={14} className="text-accent flex-shrink-0" />
                      <span className="text-foreground/80">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`relative rounded-xl overflow-hidden aspect-video ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <img
                  src={i % 3 === 0 ? heroImg : i % 3 === 1 ? stageTech : galaImg}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary/30">
      <SectionReveal>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Need a Custom <span className="gold-gradient-text">Solution?</span>
          </h2>
          <p className="text-muted-foreground mb-8">Every event is unique. Let's discuss your vision and craft a tailored package.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 gold-gradient-bg text-accent-foreground px-10 py-4 rounded-full font-semibold tracking-wider uppercase text-sm hover:shadow-[0_0_40px_hsl(43_90%_55%_/_0.4)] transition-all duration-300"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </SectionReveal>
    </section>
  </main>
);

export default Services;
