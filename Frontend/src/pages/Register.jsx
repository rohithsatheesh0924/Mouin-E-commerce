import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, User, Mail, Phone, Ticket, Chrome, Shield, Sparkles } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Directly routes to the profile workspace upon registration initialization
    navigate('/profile');
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 antialiased text-gray-900 selection:bg-[#F8009D] selection:text-white relative overflow-hidden font-['Quicksand']"
      style={{
        background: 'linear-gradient(135deg, #F04A00 0%, #F8009D 16%, #D500B8 32%, #8A1BDF 48%, #00A8E8 64%, #00D6D6 80%, #00C9A7 100%)'
      }}
    >
      
      {/* Decorative blur orbs for depth */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#00C9A7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      

      {/* --- STANDALONE FLUID CONTENT INNER MODULE --- */}
      <div className="w-full max-w-md mx-auto space-y-7 py-12 animate-in fade-in duration-300 px-2 sm:px-4 relative z-10">
        
        {/* Editorial Brand Lockup Header */}
        <header className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2.5 group cursor-default">
            <div className="w-11 h-11 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg border border-white/30">
              M
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-xl font-black uppercase tracking-wider italic text-white">Mouin</span>
              <span className="text-[8px] font-black text-white/70 uppercase tracking-[0.35em] mt-0.5 font-['Quicksand']">Garments</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/40" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white flex items-center gap-1 font-['Quicksand']">
               Profile Registration
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/40" />
          </div>

          <p className="text-white/90 text-xs font-bold uppercase tracking-wide leading-relaxed font-['Quicksand'] max-w-sm mx-auto">
            Create your personalized customer record coordinates to initialize access to curated collections and tracking indices.
          </p>
        </header>

        {/* Glassmorphism Register Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20">
          
          {/* Dynamic Form Framework Layout Section */}
          <form onSubmit={handleRegisterSubmit} className="space-y-4 font-['Quicksand']">
            
            {/* Full Name Field */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 pl-1 font-['Quicksand']">
                Full Name
              </label>
              <div className="relative group w-full">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#D500B8] transition-colors duration-200">
                  <User size={15} />
                </div>
                <input 
                  type="text" 
                  required
                  placeholder="ENTER YOUR FULL NAME..."
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200/60 rounded-xl text-xs font-bold uppercase tracking-wider text-gray-800 placeholder-gray-300 outline-none focus:bg-white focus:border-[#D500B8] focus:ring-4 focus:ring-[#D500B8]/5 transition-all duration-200 font-['Quicksand']"
                />
              </div>
            </div>

            {/* Mobile Number Field */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 pl-1 font-['Quicksand']">
                Mobile Line Connection
              </label>
              <div className="relative group w-full">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#D500B8] transition-colors duration-200">
                  <Phone size={15} />
                </div>
                <input 
                  type="tel" 
                  required
                  placeholder="+91 00000 00000"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200/60 rounded-xl text-xs font-bold uppercase tracking-wider text-gray-800 placeholder-gray-300 outline-none focus:bg-white focus:border-[#D500B8] focus:ring-4 focus:ring-[#D500B8]/5 transition-all duration-200 font-['Quicksand']"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 pl-1 font-['Quicksand']">
                Email Coordinate Address
              </label>
              <div className="relative group w-full">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#D500B8] transition-colors duration-200">
                  <Mail size={15} />
                </div>
                <input 
                  type="email" 
                  required
                  placeholder="name@company.com"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200/60 rounded-xl text-xs font-bold uppercase tracking-wider text-gray-800 placeholder-gray-300 outline-none focus:bg-white focus:border-[#D500B8] focus:ring-4 focus:ring-[#D500B8]/5 transition-all duration-200 font-['Quicksand']"
                />
              </div>
            </div>

            {/* Referral Code Field */}
            <div className="space-y-1.5">
              <div className="flex justify-between px-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 font-['Quicksand']">
                  Referral Invitation Code
                </label>
                <span className="text-[9px] font-black uppercase text-gray-300 tracking-wider font-['Quicksand']">Optional</span>
              </div>
              <div className="relative group w-full">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#D500B8] transition-colors duration-200">
                  <Ticket size={15} />
                </div>
                <input 
                  type="text" 
                  placeholder="ENTER CAMPAIGN CODE..."
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200/60 rounded-xl text-xs font-bold uppercase tracking-wider text-gray-800 placeholder-gray-300 outline-none focus:bg-white focus:border-[#D500B8] focus:ring-4 focus:ring-[#D500B8]/5 transition-all duration-200 font-['Quicksand']"
                />
              </div>
            </div>

            {/* Primary Call-to-Action Implementation Link Trigger */}
            <button 
              type="submit"
              className="w-full text-white py-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:opacity-95 shadow-lg transition-all active:scale-[0.99] font-['Quicksand']"
              style={{
                background: 'linear-gradient(90deg, #F04A00 0%, #F8009D 16%, #D500B8 32%, #8A1BDF 48%, #00A8E8 64%, #00D6D6 80%, #00C9A7 100%)'
              }}
            >
              Create System Profile
            </button>
          </form>

          {/* Minimalist Graphic Text Separator Divider */}
          <div className="my-6 relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
            <span className="relative flex justify-center">
              <span className="px-3 bg-white text-[9px] font-black uppercase text-gray-300 tracking-widest font-['Quicksand']">
                Or Sign Up Via
              </span>
            </span>
          </div>

          {/* Social Network Validation Drawer Hub Cores */}
          <div className="grid grid-cols-2 gap-3 font-['Quicksand']">
            <button 
              type="button"
              onClick={handleRegisterSubmit}
              className="flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 rounded-xl text-[10px] font-black uppercase tracking-wider text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-colors shadow-none hover:shadow-sm"
            >
              <Chrome size={14} className="text-gray-500" />
              <span>Google Account</span>
            </button>
            <button 
              type="button"
              onClick={handleRegisterSubmit}
              className="flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 rounded-xl text-[10px] font-black uppercase tracking-wider text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-colors shadow-none hover:shadow-sm"
            >
              <svg className="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook Core</span>
            </button>
          </div>

          {/* Pathway Redirection Link to Login */}
          <footer className="mt-6 pt-5 border-t border-gray-100 text-center font-['Quicksand']">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wide">
              Already have an account? 
              <Link to="/" className="text-[#D500B8] font-black ml-1.5 hover:text-[#8A1BDF] transition-colors underline underline-offset-4 decoration-1">
                Sign In
              </Link>
            </p>
          </footer>
        </div>

        {/* SSL Secured Transaction Verification Node */}
        <div className="mt-6 flex items-center justify-center gap-1.5 text-white/80">
          <Shield size={12} />
          <span className="text-[8px] font-black uppercase tracking-wider font-['Quicksand']">Secured via 256-bit SSL encrypted node</span>
        </div>
      </div>

    </div>
  );
};

export default Register;