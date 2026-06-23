import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  Smartphone, 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  Lock, 
  ChevronRight,
  CircleDot,
  Circle,
  Sparkles,
  CheckCircle2,
  LockKeyhole,
  ArrowLeft,
  HelpCircle
} from 'lucide-react';

const Payment = () => {
  const [method, setMethod] = useState('upi');
  const navigate = useNavigate();

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  const handlePlaceOrder = () => {
    navigate('/order-success');
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] font-quicksand font-bold antialiased text-gray-900 selection:bg-[#e11d48] selection:text-white">
      <Navbar />
      
      <main className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-8 pt-[120px] md:pt-[200px] pb-24">
        
        {/* --- STEP FLOW PROGRESS HEADER --- */}
        <header className="mb-10 pb-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-end justify-between gap-4 font-quicksand">
          <div>
            <div className="flex items-center gap-2 mb-1.5 text-[10px] font-black uppercase tracking-wider text-gray-400">
              <span className="font-bold cursor-pointer hover:text-black" onClick={() => navigate('/checkout/shipping')}>01 Delivery</span>
              <ChevronRight size={12} className="text-gray-300" />
              <span className="text-[#D500B8] font-black">02 Payment</span>
              <ChevronRight size={12} className="text-gray-300" />
              <span>03 Confirmation</span>
            </div>
            <h1 className="text-3xl font-black uppercase italic text-gray-900 tracking-tight">Secure Payment</h1>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-gray-400">
            <Sparkles size={11} className="text-amber-500" /> Bank-Grade Terminal Active
          </div>
        </header>

        {/* --- PROFESSIONAL TWO-COLUMN DESKTOP SPLIT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-quicksand">
          
          {/* LEFT SIDE: PAYMENT SELECTION SUITE (7 Columns) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-2">
              <h2 className="text-xs font-black uppercase text-gray-400 tracking-wider">Select Payment Method</h2>
              <p className="text-[11px] text-gray-400 font-bold mt-0.5">All transactions are encrypted and secure.</p>
            </div>

            {/* OPTION 1: INSTANT UPI INTERFACE */}
            <div 
              onClick={() => setMethod('upi')}
              className={`cursor-pointer border rounded-2xl transition-all duration-300 overflow-hidden ${
                method === 'upi' 
                  ? 'border-purple-200 bg-white shadow-md ring-4 ring-[#8A1BDF]/5' 
                  : 'border-gray-100 bg-gray-50/40 hover:border-gray-200'
              }`}
            >
              <div className="p-5 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  {method === 'upi' ? (
                    <CircleDot size={18} className="text-[#8A1BDF]" />
                  ) : (
                    <Circle size={18} className="text-gray-300" />
                  )}
                  <span className="text-xs font-black uppercase tracking-wider text-gray-800">Instant UPI Terminal</span>
                </div>
                <Smartphone size={16} className={method === 'upi' ? 'text-[#8A1BDF]' : 'text-gray-400'} />
              </div>
              
              {method === 'upi' && (
                <div className="px-5 pb-5 pt-1 border-t border-gray-50 bg-gray-50/30 animate-in fade-in slide-in-from-top-2 duration-200">
                  <input 
                    type="text" 
                    placeholder="ENTER VPA / UPI ID (e.g., handles@upi)" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-800 placeholder-gray-300 outline-none focus:border-[#8A1BDF] transition-all shadow-sm" 
                  />
                  <p className="text-[10px] text-gray-400 mt-3 font-bold tracking-wide leading-relaxed pl-1">
                    Authorize the pushed payment collection request inside your smartphone banking application to settle.
                  </p>
                </div>
              )}
            </div>

            {/* OPTION 2: CREDIT / DEBIT CARD DEPLOYMENT */}
            <div 
              onClick={() => setMethod('card')}
              className={`cursor-pointer border rounded-2xl transition-all duration-300 overflow-hidden ${
                method === 'card' 
                  ? 'border-pink-200 bg-white shadow-md ring-4 ring-[#F8009D]/5' 
                  : 'border-gray-100 bg-gray-50/40 hover:border-gray-200'
              }`}
            >
              <div className="p-5 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  {method === 'card' ? (
                    <CircleDot size={18} className="text-[#F8009D]" />
                  ) : (
                    <Circle size={18} className="text-gray-300" />
                  )}
                  <span className="text-xs font-black uppercase tracking-wider text-gray-800">Credit / Debit Card Exchange</span>
                </div>
                <CreditCard size={16} className={method === 'card' ? 'text-[#F8009D]' : 'text-gray-400'} />
              </div>
              
              {method === 'card' && (
                <div className="px-5 pb-5 pt-3 border-t border-gray-50 bg-gray-50/30 space-y-3.5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <input 
                    type="text" 
                    placeholder="CARD NUMBER" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-800 placeholder-gray-300 outline-none focus:border-[#F8009D] transition-all shadow-sm" 
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="EXPIRY (MM / YY)" 
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-800 placeholder-gray-300 outline-none focus:border-black transition-all shadow-sm" 
                    />
                    <input 
                      type="password" 
                      maxLength="3"
                      placeholder="CVV NUMBER" 
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-800 placeholder-gray-300 outline-none focus:border-black transition-all shadow-sm" 
                    />
                  </div>
                </div>
              )}
            </div>

            {/* OPTION 3: CASH ON DELIVERY UTILITY */}
            <div 
              onClick={() => setMethod('cod')}
              className={`cursor-pointer border rounded-2xl transition-all duration-300 overflow-hidden ${
                method === 'cod' 
                  ? 'border-orange-200 bg-white shadow-md ring-4 ring-[#F04A00]/5' 
                  : 'border-gray-100 bg-gray-50/40 hover:border-gray-200'
              }`}
            >
              <div className="p-5 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  {method === 'cod' ? (
                    <CircleDot size={18} className="text-[#F04A00]" />
                  ) : (
                    <Circle size={18} className="text-gray-300" />
                  )}
                  <span className="text-xs font-black uppercase tracking-wider text-gray-800">Cash on Delivery</span>
                </div>
                <Truck size={16} className={method === 'cod' ? 'text-[#F04A00]' : 'text-gray-400'} />
              </div>
              
              {method === 'cod' && (
                <div className="px-5 pb-5 pt-3 border-t border-gray-50 bg-gray-50/30 animate-in fade-in slide-in-from-top-2 duration-200">
                  <p className="text-[11px] text-gray-500 font-bold tracking-wide leading-relaxed pl-1">
                    Please hand over the exact cash equivalent to our logistics courier associate when your package arrives at your verified address.
                  </p>
                </div>
              )}
            </div>

            <button 
              onClick={() => navigate('/checkout/shipping')}
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-black pt-4 transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" /> Modify Shipping Address
            </button>
          </div>

          {/* RIGHT SIDE: HIGH-DENSITY INVOICE PANEL SUMMARY (5 Columns) */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-gray-100 p-5 lg:p-6 rounded-2xl shadow-sm lg:sticky lg:top-[160px] space-y-6">
              
              {/* Gross Amount Box Header */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-0.5">Total Payable Gross</span>
                  <span className="text-3xl font-black tracking-tight text-gray-950">₹6,450</span>
                </div>
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 border border-emerald-100/30">
                  <LockKeyhole size={16} />
                </div>
              </div>

              {/* Accounting Breakdown Sheet Row metrics */}
              <div className="space-y-3 text-xs font-bold text-gray-600">
                <div className="flex justify-between">
                  <span className="text-gray-400 uppercase tracking-wider">Bag Subtotal</span>
                  <span className="text-gray-900">₹6,450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 uppercase tracking-wider">Logistics Delivery</span>
                  <span className="text-emerald-600 uppercase font-black">Complimentary</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 uppercase tracking-wider">Secure Escrow Protection</span>
                  <span className="text-emerald-600 uppercase font-black">Free</span>
                </div>
              </div>

              {/* Security Compliance Strip indicators */}
              <div className="bg-gray-50/60 rounded-xl p-3.5 border border-gray-100/70 space-y-2.5">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-gray-400">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span>PCI-DSS Secured Terminal Node</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-gray-400">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Chiramel Quality Verified Guarantee</span>
                </div>
              </div>

              {/* Final Dispatch Submit Action */}
              <button 
                onClick={handlePlaceOrder}
                className="w-full bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] text-white py-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] shadow-sm flex items-center justify-center gap-2 group hover:opacity-95 transition-all"
              >
                <span>Authorize Order Placement</span>
              </button>

              <div className="text-center">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-1">
                  <HelpCircle size={11} /> Need Assistance? Contact Helpdesk
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* --- RECONCILED COMPANY FOOTER --- */}
      <footer className="py-12 border-t border-gray-100 bg-gray-50/50 text-center px-4 font-quicksand">
        <div className="text-base font-black uppercase tracking-[0.25em] bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] bg-clip-text text-transparent mb-2">
          Chiramel Garments
        </div>
        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
          Payment Processing Screen • Step 02 of 03
        </p>
      </footer>
    </div>
  );
};

export default Payment;