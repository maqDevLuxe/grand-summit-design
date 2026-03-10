import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Users, ArrowRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import venue1 from "@/assets/venue-1.jpg";
import venue2 from "@/assets/venue-2.jpg";
import venue3 from "@/assets/venue-3.jpg";
import heroImg from "@/assets/hero-summit.jpg";
import galaImg from "@/assets/gala-dinner.jpg";
import stageTech from "@/assets/stage-tech.jpg";

const allVenues = [
  { img: venue1, name: "The Glass Pavilion", location: "New York, USA", capacity: "5,000", type: "Convention Center", desc: "A stunning glass-enclosed venue in the heart of Manhattan with panoramic skyline views." },
  { img: venue2, name: "Grand Imperial Hall", location: "London, UK", capacity: "8,000", type: "Historic Ballroom", desc: "A magnificent 19th-century ballroom with ornate details and modern AV infrastructure." },
  { img: venue3, name: "Sky Terrace", location: "Dubai, UAE", capacity: "3,000", type: "Rooftop Venue", desc: "An exclusive open-air rooftop with breathtaking views of the Dubai skyline." },
  { img: heroImg, name: "Summit Arena", location: "Singapore", capacity: "15,000", type: "Arena", desc: "Southeast Asia's premier event arena with cutting-edge production capabilities." },
  { img: galaImg, name: "Palazzo Reale", location: "Milan, Italy", capacity: "2,000", type: "Palace", desc: "A Renaissance palace transformed into an exclusive event venue with Italian grandeur." },
  { img: stageTech, name: "The Sphere Hall", location: "Tokyo, Japan", capacity: "10,000", type: "Tech Venue", desc: "A futuristic sphere-shaped venue with 360° LED interiors and immersive experiences." },
];

const Venues = () => (
  <main>
    {/* Hero */}
    <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
      <img src={venue1} alt="Venues" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/70" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Exclusive Access</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
          Our <span className="gold-gradient-text">Venues</span>
        </h1>
        <p className="text-foreground/70 text-lg max-w-xl mx-auto">
          Handpicked premium venues across the globe for events of any scale.
        </p>
      </motion.div>
    </section>

    {/* Venue Grid */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allVenues.map((v, i) => (
          <SectionReveal key={v.name} delay={i * 0.1}>
            <div className="glass-card-gold rounded-2xl overflow-hidden group h-full flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={v.img} alt={v.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 right-4 bg-background/20 backdrop-blur-md rounded-full px-3 py-1 border border-foreground/10">
                  <span className="text-xs text-foreground/80">{v.type}</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-bold mb-2">{v.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{v.desc}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-accent"><MapPin size={14} /> {v.location}</span>
                  <span className="flex items-center gap-1 text-muted-foreground"><Users size={14} /> {v.capacity}</span>
                </div>
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
            Can't Find the <span className="gold-gradient-text">Perfect Venue?</span>
          </h2>
          <p className="text-muted-foreground mb-8">We have access to hundreds more exclusive locations worldwide. Tell us your vision.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 gold-gradient-bg text-accent-foreground px-10 py-4 rounded-full font-semibold tracking-wider uppercase text-sm hover:shadow-[0_0_40px_hsl(43_90%_55%_/_0.4)] transition-all duration-300"
          >
            Inquire Now <ArrowRight size={16} />
          </Link>
        </div>
      </SectionReveal>
    </section>
  </main>
);

export default Venues;
