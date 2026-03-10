import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Crown, Mic2, Utensils, Plane, Monitor, Lightbulb, Users, Globe,
  Star, ArrowRight, Sparkles, Building2, Award, TrendingUp
} from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import CounterAnimation from "@/components/CounterAnimation";
import heroImg from "@/assets/hero-summit.jpg";
import galaImg from "@/assets/gala-dinner.jpg";
import venue1 from "@/assets/venue-1.jpg";
import venue2 from "@/assets/venue-2.jpg";
import venue3 from "@/assets/venue-3.jpg";
import stageTech from "@/assets/stage-tech.jpg";

/* ─── 1. HERO ─── */
const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden flex items-center justify-center">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img src={heroImg} alt="Corporate summit stage" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      </motion.div>
      <motion.div style={{ opacity }} className="relative z-10 text-center max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-8"
        >
          <Sparkles size={14} className="text-accent" />
          <span className="text-xs tracking-[0.3em] uppercase text-accent">Premier Event Production</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
        >
          <span className="gold-gradient-text">Extraordinary</span>
          <br />
          <span className="text-foreground">Corporate Summits</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 font-body"
        >
          World-class event production, VIP hospitality, and cutting-edge stage design — delivered at massive scale for the world's most ambitious brands.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="gold-gradient-bg text-accent-foreground px-10 py-4 rounded-full font-semibold tracking-wider uppercase text-sm transition-all duration-300 hover:shadow-[0_0_40px_hsl(43_90%_55%_/_0.4)] hover:scale-105"
          >
            Plan Your Summit
          </Link>
          <Link
            to="/services"
            className="border border-foreground/20 text-foreground px-10 py-4 rounded-full font-semibold tracking-wider uppercase text-sm hover:border-accent/50 hover:text-accent transition-all duration-300"
          >
            Explore Services
          </Link>
        </motion.div>
      </motion.div>
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border border-accent/40 flex items-start justify-center pt-2"
      >
        <div className="w-1 h-2 bg-accent rounded-full" />
      </motion.div>
    </section>
  );
};

/* ─── 2. TRUSTED BRANDS ─── */
const TrustedBrands = () => {
  const brands = ["Microsoft", "Tesla", "Amazon", "Goldman Sachs", "Deloitte", "McKinsey", "JP Morgan", "Meta"];
  return (
    <section className="section-padding border-b border-border/30">
      <SectionReveal>
        <p className="text-center text-xs tracking-[0.4em] uppercase text-muted-foreground mb-10">
          Trusted by Global Brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((b, i) => (
            <motion.span
              key={b}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-lg md:text-xl font-display tracking-wider text-muted-foreground/50 hover:text-accent transition-colors duration-300"
            >
              {b}
            </motion.span>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
};

/* ─── 3. EVENT PRODUCTION SERVICES ─── */
const services = [
  { icon: Mic2, title: "Summit Production", desc: "End-to-end management of large-scale corporate summits with 10,000+ attendees." },
  { icon: Crown, title: "Executive Retreats", desc: "Curated luxury experiences for C-suite leadership and board-level gatherings." },
  { icon: Award, title: "Awards Galas", desc: "Black-tie ceremonies with world-class entertainment and impeccable production." },
  { icon: Globe, title: "Global Conferences", desc: "Multi-city simultaneous events with satellite broadcasting and hybrid formats." },
];

const EventProductionServices = () => (
  <section className="section-padding">
    <SectionReveal>
      <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4 text-center">What We Do</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
        Event Production <span className="gold-gradient-text">Services</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        From intimate executive retreats to massive 50,000-person summits, we deliver flawless production at any scale.
      </p>
    </SectionReveal>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {services.map((s, i) => (
        <SectionReveal key={s.title} delay={i * 0.1}>
          <div className="glass-card-gold p-8 h-full group hover:scale-[1.02] transition-transform duration-500">
            <div className="w-14 h-14 rounded-xl gold-gradient-bg flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_hsl(43_90%_55%_/_0.3)] transition-shadow duration-500">
              <s.icon size={24} className="text-accent-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        </SectionReveal>
      ))}
    </div>
  </section>
);

/* ─── 4. VIP HOSPITALITY ─── */
const vipFeatures = [
  { icon: Utensils, title: "Michelin Dining", desc: "Bespoke menus crafted by award-winning chefs for every palate." },
  { icon: Plane, title: "Private Transfers", desc: "Luxury ground and air transportation for VIP delegates." },
  { icon: Crown, title: "Concierge Service", desc: "24/7 dedicated concierge for every attendee's needs." },
  { icon: Building2, title: "Premium Accommodation", desc: "Reserved suites at the world's finest five-star hotels." },
];

const VIPHospitality = () => (
  <section className="section-padding bg-secondary/50">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <SectionReveal direction="left">
        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">White Glove Experience</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          VIP Hospitality <span className="gold-gradient-text">& Logistics</span>
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Every touchpoint is meticulously curated — from the moment your guests arrive to their final farewell.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {vipFeatures.map((f) => (
            <div key={f.title} className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <f.icon size={18} className="text-accent" />
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold mb-1">{f.title}</h4>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
      <SectionReveal direction="right">
        <div className="relative">
          <img src={galaImg} alt="VIP gala dinner" className="rounded-2xl w-full object-cover aspect-[4/3]" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/60 to-transparent" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl gold-gradient-bg opacity-20 blur-2xl" />
        </div>
      </SectionReveal>
    </div>
  </section>
);

/* ─── 5. TECH & STAGE DESIGN ─── */
const TechStageDesign = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={stageTech} alt="Stage technology" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </motion.div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <SectionReveal>
          <div className="relative">
            <img src={stageTech} alt="Stage design" className="rounded-2xl w-full object-cover aspect-video glow-purple" />
          </div>
        </SectionReveal>
        <SectionReveal direction="right">
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Cutting Edge</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Tech & Stage <span className="purple-gradient-text">Design</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Immersive LED walls, holographic presentations, spatial audio, and AR integrations that transform your event into an unforgettable spectacle.
          </p>
          <div className="space-y-4">
            {[
              { icon: Monitor, label: "360° LED Stage Design" },
              { icon: Lightbulb, label: "Intelligent Lighting Systems" },
              { icon: Sparkles, label: "Holographic & AR Experiences" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4 glass-card">
                <item.icon size={20} className="text-accent flex-shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

/* ─── 6. SCALE & CAPACITY ─── */
const ScaleMetrics = () => (
  <section className="section-padding bg-secondary/30 border-y border-border/30">
    <SectionReveal>
      <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4 text-center">Our Reach</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
        Built for <span className="gold-gradient-text">Massive Scale</span>
      </h2>
    </SectionReveal>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      <CounterAnimation end={50000} suffix="+" label="Max Capacity" />
      <CounterAnimation end={200} suffix="+" label="Events / Year" />
      <CounterAnimation end={35} suffix="" label="Countries" />
      <CounterAnimation end={98} suffix="%" label="Satisfaction" />
    </div>
  </section>
);

/* ─── 7. VENUE ACCESS ─── */
const venues = [
  { img: venue1, name: "The Glass Pavilion", location: "New York", capacity: "5,000" },
  { img: venue2, name: "Grand Imperial Hall", location: "London", capacity: "8,000" },
  { img: venue3, name: "Sky Terrace", location: "Dubai", capacity: "3,000" },
];

const VenueAccess = () => (
  <section className="section-padding">
    <SectionReveal>
      <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4 text-center">Premium Locations</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
        Exclusive Venue <span className="gold-gradient-text">Access</span>
      </h2>
    </SectionReveal>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {venues.map((v, i) => (
        <SectionReveal key={v.name} delay={i * 0.15}>
          <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] glass-card-gold">
            <img src={v.img} alt={v.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl font-bold mb-1">{v.name}</h3>
              <p className="text-accent text-sm">{v.location}</p>
              <p className="text-muted-foreground text-xs mt-1">Capacity: {v.capacity}</p>
            </div>
            {/* Glassmorphism overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="bg-background/20 backdrop-blur-md rounded-xl px-6 py-3 border border-foreground/10">
                <span className="text-sm font-display tracking-wider">View Details</span>
              </div>
            </div>
          </div>
        </SectionReveal>
      ))}
    </div>
    <SectionReveal>
      <div className="text-center mt-12">
        <Link to="/venues" className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all duration-300 text-sm tracking-wider uppercase font-semibold">
          View All Venues <ArrowRight size={16} />
        </Link>
      </div>
    </SectionReveal>
  </section>
);

/* ─── 8. FULL-WIDTH GALA IMAGE ─── */
const GalaImage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img src={galaImg} alt="Luxury gala dinner" className="w-full h-full object-cover scale-110" />
      </motion.div>
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <SectionReveal>
          <div className="text-center px-6">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Where <span className="gold-gradient-text">Elegance</span> Meets Scale
            </h2>
            <p className="text-foreground/70 text-lg max-w-xl mx-auto">
              From intimate 50-person dinners to 10,000-seat galas — every detail perfected.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

/* ─── 9. EVENTS HOSTED COUNTERS ─── */
const EventCounters = () => (
  <section className="section-padding">
    <SectionReveal>
      <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4 text-center">Track Record</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
        Events <span className="gold-gradient-text">Hosted</span>
      </h2>
    </SectionReveal>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      <CounterAnimation end={2400} suffix="+" label="Total Events" />
      <CounterAnimation end={15} suffix="M+" label="Guests Served" />
      <CounterAnimation end={850} suffix="" label="Corporate Clients" />
      <CounterAnimation end={17} suffix="" label="Years Experience" />
    </div>
  </section>
);

/* ─── 10. EVENT DESIGN TRENDS ─── */
const trends = [
  { icon: Sparkles, title: "Immersive XR Experiences", desc: "Extended reality transforming attendee engagement with interactive 3D environments." },
  { icon: TrendingUp, title: "Sustainable Events", desc: "Carbon-neutral productions with zero-waste catering and eco-conscious design." },
  { icon: Users, title: "Hybrid Global Formats", desc: "Seamless blending of in-person and virtual attendance across multiple time zones." },
];

const EventTrends = () => (
  <section className="section-padding bg-secondary/30">
    <SectionReveal>
      <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4 text-center">Stay Ahead</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
        Event Design <span className="gold-gradient-text">Trends</span>
      </h2>
    </SectionReveal>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {trends.map((t, i) => (
        <SectionReveal key={t.title} delay={i * 0.15}>
          <div className="glass-card p-8 text-center group hover:glow-gold transition-shadow duration-500">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
              <t.icon size={28} className="text-accent" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3">{t.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
          </div>
        </SectionReveal>
      ))}
    </div>
  </section>
);

/* ─── 11. GLOBAL REACH ─── */
const GlobalReach = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <SectionReveal direction="left">
        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Worldwide</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Global <span className="gold-gradient-text">Reach</span>
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          With offices in New York, London, Dubai, Singapore, and São Paulo, we produce events across 35 countries on 6 continents.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {["New York", "London", "Dubai", "Singapore", "São Paulo", "Tokyo"].map((city) => (
            <div key={city} className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-foreground/80">{city}</span>
            </div>
          ))}
        </div>
      </SectionReveal>
      <SectionReveal direction="right">
        <div className="glass-card-gold p-12 text-center">
          <Globe size={80} className="text-accent/30 mx-auto mb-6" />
          <div className="font-display text-6xl font-bold gold-gradient-text mb-2">6</div>
          <p className="text-muted-foreground tracking-widest uppercase text-sm">Continents Covered</p>
        </div>
      </SectionReveal>
    </div>
  </section>
);

/* ─── 12. SPONSOR REVIEWS ─── */
const reviews = [
  { quote: "Apex Events transformed our annual summit into a global phenomenon. The production quality was beyond anything we'd imagined.", author: "Sarah Chen", role: "VP of Events, Microsoft" },
  { quote: "Impeccable attention to detail. Our 5,000-person gala ran flawlessly from start to finish.", author: "James Whitfield", role: "CMO, Goldman Sachs" },
  { quote: "The stage design alone generated more press coverage than our entire marketing campaign.", author: "Maria Santos", role: "Head of Brand, Tesla" },
];

const SponsorReviews = () => (
  <section className="section-padding bg-secondary/30">
    <SectionReveal>
      <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4 text-center">Testimonials</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
        Corporate Sponsor <span className="gold-gradient-text">Reviews</span>
      </h2>
    </SectionReveal>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {reviews.map((r, i) => (
        <SectionReveal key={r.author} delay={i * 0.15}>
          <div className="glass-card-gold p-8 h-full flex flex-col">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="text-accent fill-accent" />
              ))}
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed mb-6 flex-1 italic">"{r.quote}"</p>
            <div>
              <p className="font-display text-sm font-semibold">{r.author}</p>
              <p className="text-xs text-muted-foreground">{r.role}</p>
            </div>
          </div>
        </SectionReveal>
      ))}
    </div>
  </section>
);

/* ─── 13. CTA ─── */
const CTASection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/5" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
    <SectionReveal>
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Ready?</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Plan Your Next <span className="gold-gradient-text">Summit</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Let's create something extraordinary together. Reach out to our team and start planning the event of a lifetime.
        </p>
        <Link
          to="/contact"
          className="inline-block gold-gradient-bg text-accent-foreground px-12 py-5 rounded-full font-semibold tracking-wider uppercase text-sm transition-all duration-300 hover:shadow-[0_0_60px_hsl(43_90%_55%_/_0.4)] hover:scale-105"
        >
          Get Started Today
        </Link>
      </div>
    </SectionReveal>
  </section>
);

/* ─── INDEX PAGE ─── */
const Index = () => (
  <main>
    <HeroSection />
    <TrustedBrands />
    <EventProductionServices />
    <VIPHospitality />
    <TechStageDesign />
    <ScaleMetrics />
    <VenueAccess />
    <GalaImage />
    <EventCounters />
    <EventTrends />
    <GlobalReach />
    <SponsorReviews />
    <CTASection />
  </main>
);

export default Index;
