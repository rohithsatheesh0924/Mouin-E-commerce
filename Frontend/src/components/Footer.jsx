import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Lock,
  Compass,
  Link2,
  CheckCircle
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  // Full 7-color gradient style
  const fullGradientStyle = {
    background: 'linear-gradient(135deg, #F04A00 0%, #F8009D 16%, #D500B8 32%, #8A1BDF 48%, #00A8E8 64%, #00D6D6 80%, #00C9A7 100%)'
  };

  return (
    <footer 
      className="w-full text-white pt-20 pb-10 relative overflow-hidden shadow-inner select-none font-quicksand"
      style={fullGradientStyle}
    >
      {/* Editorial dark mesh backdrop blend overlay layer for ultimate depth */}
      <div className="absolute inset-0 bg-black/15 mix-blend-multiply pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/25" />
      
      {/* Decorative blur orbs for depth */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#00C9A7]/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1340px] relative z-10">
        
        {/* --- MAIN STRUCTURE CORE LAYOUT GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          
          {/* BRAND IDENTITY LOCKUP */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center group cursor-default">
              <div className="w-10 h-10 bg-white text-gray-950 rounded-xl flex items-center justify-center mr-3 font-black text-lg shadow-sm">
                M
              </div>
              <div className="flex flex-col leading-none">
                <h4 className="text-lg font-black uppercase tracking-wider italic">Mouin</h4>
                <span className="text-[8px] font-black text-white/60 uppercase tracking-[0.4em] mt-0.5 font-nunito">Garments</span>
              </div>
            </div>
            <p className="text-white/80 text-xs font-medium tracking-wide leading-relaxed max-w-xs pr-2 font-nunito">
              Engineering elite standard textile architectures and masterfully tailored traditional statements. Defined by luxury structural comfort.
            </p>
            {/* Social Connect Matrix Nodes */}
            <div className="flex space-x-2.5 pt-1">
              {[
                { Icon: Linkedin, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" }
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="w-8 h-8 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all duration-300 shadow-sm"
                  aria-label="Social Channel Dispatch Anchor Link"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* LINK STACK MODULE 1 */}
          <div>
            <h5 className="text-[11px] font-black uppercase tracking-[0.25em] text-white mb-5 flex items-center">
              <Compass size={13} className="mr-2 opacity-80" />
              <span>Curated Showcases</span>
            </h5>
            <div className="flex flex-col space-y-3 font-nunito">
              {["Men Ready-To-Wear", "Women Evening Gowns", "Kids Premium Line", "Signature Accessories"].map((item, idx) => (
                <a 
                  key={idx}
                  href={`/shop/${item.toLowerCase().split(' ')[0]}`}
                  className="group flex items-center text-white/80 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-150 w-fit"
                >
                  <ChevronRight className="w-3 h-3 mr-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:mr-1.5 transition-all duration-200 text-amber-300" />
                  <span className="border-b border-transparent group-hover:border-white/30 pb-0.5">{item}</span>
                </a>
              ))}
            </div>
          </div>

          {/* LINK STACK MODULE 2 */}
          <div>
            <h5 className="text-[11px] font-black uppercase tracking-[0.25em] text-white mb-5 flex items-center">
              <Link2 size={13} className="mr-2 opacity-80" />
              <span>Enterprise Hub</span>
            </h5>
            <div className="flex flex-col space-y-3 font-nunito">
              {["Our Heritage Story", "Artisanal Weaving", "Logistic Tracking", "Client Support Hub"].map((item, idx) => (
                <a 
                  key={idx}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group flex items-center text-white/80 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-150 w-fit"
                >
                  <ChevronRight className="w-3 h-3 mr-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:mr-1.5 transition-all duration-200 text-amber-300" />
                  <span className="border-b border-transparent group-hover:border-white/30 pb-0.5">{item}</span>
                </a>
              ))}
            </div>
          </div>

          {/* HEADQUARTERS COORDINATES FRAME */}
          <div>
            <h5 className="text-[11px] font-black uppercase tracking-[0.25em] text-white mb-5 flex items-center">
              <MapPin size={13} className="mr-2 opacity-80" />
              <span>Headquarters</span>
            </h5>
            <div className="space-y-3.5 text-white/80 text-xs font-bold uppercase tracking-wider font-nunito">
              <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-white transition-colors group w-fit">
                <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-white group-hover:text-gray-955">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+91 98765 43210</span>
              </a>
              
              <a href="mailto:concierge@chiramel.com" className="flex items-center gap-3 hover:text-white transition-colors group w-fit">
                <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-white group-hover:text-gray-955">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="lowercase truncate">concierge@chiramel.com</span>
              </a>
              
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <p className="leading-relaxed font-bold tracking-wide">
                  Heritage Lane, Tiruppur <br/> 
                  Tamil Nadu — 641604
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* --- BOTTOM SECTION: LEGAL & ACCREDITATION BAR --- */}
        <div className="border-t border-white/15 pt-8 mt-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left space-y-1 font-nunito">
              <p className="text-white/90 text-[10px] font-black uppercase tracking-widest flex items-center justify-center lg:justify-start gap-1">
                <Lock size={11} className="text-white/60" /> © {currentYear} Chiramel Garments Private Limited
              </p>
              <p className="text-white/60 text-[9px] font-extrabold uppercase tracking-wider flex items-center justify-center lg:justify-start gap-1">
                Certified Premium Logistics Network Node Active
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 font-nunito">
              <a href="/privacy" className="text-white/70 hover:text-white text-xs font-black uppercase tracking-wider transition-colors border-b border-transparent hover:border-white/30 pb-0.5">Privacy</a>
              <a href="/terms" className="text-white/70 hover:text-white text-xs font-black uppercase tracking-wider transition-colors border-b border-transparent hover:border-white/30 pb-0.5">Terms</a>
              
              <Link 
                to="/contact"
                className="inline-flex items-center px-5 py-3 bg-white text-gray-950 font-black text-[10px] uppercase tracking-[0.15em] rounded-xl hover:text-[#F04A00] transition-colors duration-300 shadow-md group font-quicksand"
              >
                <span>Concierge Desk</span>
                <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;