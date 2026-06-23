import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { CheckCircle2, Package, Truck, Calendar, ArrowRight, Share2, ChevronRight, Sparkles, ShoppingBag } from 'lucide-react';

const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const orderDetails = {
    id: "CMS-99284-01",
    date: "June 01, 2026",
    total: "₹6,450",
    deliveryDate: "June 04 - 06"
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] font-quicksand font-bold antialiased text-gray-900 selection:bg-[#e11d48] selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8 pt-[120px] md:pt-[200px] pb-24">
        
        {/* --- STEP FLOW PROGRESS HEADER --- */}
        <nav className="flex items-center justify-center gap-2 mb-8 text-[10px] font-black uppercase tracking-wider text-gray-400 font-quicksand">
          <span>01 Delivery</span>
          <ChevronRight size={12} className="text-gray-300" />
          <span>02 Payment</span>
          <ChevronRight size={12} className="text-gray-300" />
          <span className="text-[#D500B8] font-black">03 Confirmation</span>
        </nav>

        {/* --- SUCCESS HEADER CARD --- */}
        <div className="bg-white rounded-2xl p-8 md:p-16 shadow-sm text-center relative overflow-hidden border border-gray-100 font-quicksand">
          {/* Signature Top Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D]" />
          
          {/* Animated Success Badge Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-emerald-50 rounded-xl mb-6 border border-emerald-100/50 shadow-none">
            <CheckCircle2 size={32} className="text-emerald-600" strokeWidth={1.5} />
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-emerald-600 mb-3">
             Settle Authorization Complete
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight uppercase italic mb-6 leading-tight">
            Thank you <br className="hidden md:block"/> for your order
          </h1>
          
          <p className="text-gray-400 text-xs md:text-sm font-bold leading-relaxed max-w-md mx-auto mb-10">
            Your premium heritage statement is being tailored and prepared. A copy of the electronic digital receipt invoice statement has been dispatched to your email address.
          </p>

          {/* QUICK ORDER INFO GRID - 4x1 Configuration */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-2 max-w-3xl mx-auto border-t border-b border-gray-100 py-8 text-left md:text-center">
            <div className="flex flex-col items-center justify-center px-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-1.5">Order ID</span>
              <span className="text-xs font-black text-gray-900 tracking-wide bg-gray-50 px-3 py-1 rounded-md border border-gray-100">{orderDetails.id}</span>
            </div>
            <div className="flex flex-col items-center justify-center px-4 border-l border-gray-100">
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-1.5">Order Date</span>
              <span className="text-xs font-bold text-gray-800">{orderDetails.date}</span>
            </div>
            <div className="flex flex-col items-center justify-center px-4 border-l border-gray-100">
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-1.5">Total Paid</span>
              <span className="text-xs font-black text-gray-950">{orderDetails.total}</span>
            </div>
            <div className="flex flex-col items-center justify-center px-4 border-l border-gray-100">
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-1.5">Est. Delivery</span>
              <span className="text-xs font-black bg-gradient-to-r from-[#8A1BDF] to-[#D500B8] bg-clip-text text-transparent italic">{orderDetails.deliveryDate}</span>
            </div>
          </div>

          {/* ACTIONS HUB PANEL */}
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <button 
              onClick={() => navigate('/home')}
              className="w-full bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] text-white py-3.5 text-xs font-black uppercase tracking-[0.2em] rounded-xl hover:opacity-95 shadow-sm flex items-center justify-center gap-1.5 group transition-all"
            >
              <span>Continue Shopping</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            
            <button 
              onClick={() => navigate('/track-order')}
              className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-black uppercase tracking-[0.2em] rounded-xl hover:border-gray-900 hover:text-gray-900 transition-colors flex items-center justify-center gap-1.5 shadow-none"
            >
              <span>Track Status</span>
              <Truck size={14} />
            </button>
          </div>
        </div>

        {/* === DUAL INTERMEDIARY DISPATCH CORES === */}
        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 font-quicksand">
          <div className="bg-white rounded-xl p-5 border border-gray-100 flex items-center gap-5 group cursor-pointer hover:border-gray-200 transition-all shadow-sm">
            <div className="w-11 h-11 bg-gradient-to-br from-[#8A1BDF]/5 to-[#D500B8]/5 rounded-xl flex-shrink-0 flex items-center justify-center text-[#D500B8] border border-gray-100">
              <Share2 size={15} />
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-wider mb-0.5 text-gray-800">Invite Colleagues</h4>
              <p className="text-xs text-gray-400 font-bold">Share Chiramel Garments and receive ₹500 store credits.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-5 border border-gray-100 flex items-center gap-5 group cursor-pointer hover:border-gray-200 transition-all shadow-sm">
            <div className="w-11 h-11 bg-gradient-to-br from-[#D500B8]/5 to-[#F8009D]/5 rounded-xl flex-shrink-0 flex items-center justify-center text-[#F8009D] border border-gray-100">
              <Calendar size={15} />
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-wider mb-0.5 text-gray-800">Private Consultation</h4>
              <p className="text-xs text-gray-400 font-bold">Schedule a dedicated digital fashion styling appointment.</p>
            </div>
          </div>
        </section>

      </main>

      {/* --- COMPANY FOOTER SIGN-OFF --- */}
      <footer className="py-12 border-t border-gray-100 bg-gray-50/50 text-center px-4 font-quicksand">
        <div className="text-base font-black uppercase tracking-[0.25em] bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] bg-clip-text text-transparent mb-2">
          Chiramel Garments
        </div>
        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
          Premium Textile Logistics Node Verified • 2026
        </p>
      </footer>
    </div>
  );
};

export default OrderSuccess;