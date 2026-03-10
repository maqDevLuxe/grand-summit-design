import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border/50">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <span className="font-display text-2xl font-bold gold-gradient-text tracking-wider">APEX</span>
          <span className="font-display text-sm tracking-[0.3em] text-muted-foreground ml-2">EVENTS</span>
          <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
            Crafting extraordinary corporate experiences at unprecedented scale since 2008.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest uppercase text-accent mb-4">Navigate</h4>
          <div className="flex flex-col gap-3">
            {["Home", "Services", "Venues", "Contact"].map((l) => (
              <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest uppercase text-accent mb-4">Services</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <span>Summit Production</span>
            <span>VIP Hospitality</span>
            <span>Stage Design</span>
            <span>Global Logistics</span>
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest uppercase text-accent mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Mail size={14} className="text-accent" /> hello@apexevents.com</span>
            <span className="flex items-center gap-2"><Phone size={14} className="text-accent" /> +1 (888) 555-APEX</span>
            <span className="flex items-center gap-2"><MapPin size={14} className="text-accent" /> New York • London • Dubai</span>
          </div>
        </div>
      </div>
      <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">© 2026 Apex Events. All rights reserved.</p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
