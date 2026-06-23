import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ChevronRight, Truck, ShieldCheck, MapPin, Plus, Minus, CreditCard, Sparkles, User, Home as HomeIcon, Briefcase, CheckCircle2 } from 'lucide-react';

const Shipping = () => {
  const navigate = useNavigate();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [addressType, setAddressType] = useState('Home');
  
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Signature Luxe Silk Shirt", price: 6450, qty: 1, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400" }
  ]);

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', address: '', city: '', pinCode: '', mobile: ''
  });

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  const updateQty = (id, delta) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const calculateTotal = () => cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] font-quicksand font-bold antialiased text-gray-900 selection:bg-[#e11d48] selection:text-white">
      <Navbar />
      
      <main className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-8 pt-[120px] md:pt-[100px] pb-24">
        
        {/* --- STEP FLOW PROGRESS HEADER --- */}
        <header className="mb-10 pb-4 border-b border-gray-100 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 text-[10px] font-black uppercase tracking-wider text-gray-400">
              <span className="text-[#f05a28] font-black">01 Delivery</span>
              <ChevronRight size={12} className="text-gray-300" />
              <span>02 Payment</span>
              <ChevronRight size={12} className="text-gray-300" />
              <span>03 Confirmation</span>
            </div>
            <h1 className="text-3xl font-black uppercase italic text-gray-900 tracking-tight">Shipping Details</h1>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-gray-400">
             Secure Checkout Terminal Active
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* --- LEFT COLUMN: SHIPPING PROGRESS FIELDS --- */}
          <div className="lg:col-span-7 space-y-6">
            {!isConfirmed ? (
              <form className="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
                
                {/* Address Location Segment Type Selection Toggle */}
                <div>
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-wider block mb-3">Address Designation</label>
                  <div className="flex gap-3">
                    {[
                      { type: 'Home', icon: <HomeIcon size={13} /> },
                      { type: 'Office', icon: <Briefcase size={13} /> }
                    ].map((item) => (
                      <button 
                        key={item.type} 
                        type="button" 
                        onClick={() => setAddressType(item.type)}
                        className={`flex-1 py-3.5 px-4 text-xs font-bold uppercase tracking-wider border rounded-xl flex items-center justify-center gap-2 transition-all duration-200 ${
                          addressType === item.type 
                            ? 'bg-gradient-to-br from-[#8A1BDF] to-[#D500B8] text-white border-transparent shadow-sm' 
                            : 'bg-gray-50 border-gray-100 text-gray-500 hover:border-gray-300'
                        }`}
                      >
                        {item.icon}
                        <span>{item.type}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="h-[1px] bg-gray-50 w-full" />

                {/* Input Fields Infrastructure */}
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-wider block mb-1">Recipient Identity & Location</label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                      name="firstName" 
                      type="text" 
                      placeholder="First Name" 
                      value={formData.firstName}
                      onChange={handleChange} 
                      className="w-full bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-800 placeholder-gray-300 rounded-xl px-4 py-3.5 outline-none border border-transparent focus:border-gray-200 focus:bg-white transition-all" 
                    />
                    <input 
                      name="lastName" 
                      type="text" 
                      placeholder="Last Name" 
                      value={formData.lastName}
                      onChange={handleChange} 
                      className="w-full bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-800 placeholder-gray-300 rounded-xl px-4 py-3.5 outline-none border border-transparent focus:border-gray-200 focus:bg-white transition-all" 
                    />
                  </div>
                  
                  <input 
                    name="address" 
                    type="text" 
                    placeholder="Full Street Destination Address" 
                    value={formData.address}
                    onChange={handleChange} 
                    className="w-full bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-800 placeholder-gray-300 rounded-xl px-4 py-3.5 outline-none border border-transparent focus:border-gray-200 focus:bg-white transition-all" 
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      name="city" 
                      type="text" 
                      placeholder="City" 
                      value={formData.city}
                      onChange={handleChange} 
                      className="w-full bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-800 placeholder-gray-300 rounded-xl px-4 py-3.5 outline-none border border-transparent focus:border-gray-200 focus:bg-white transition-all" 
                    />
                    <input 
                      name="pinCode" 
                      type="text" 
                      placeholder="PIN Code" 
                      value={formData.pinCode}
                      onChange={handleChange} 
                      className="w-full bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-800 placeholder-gray-300 rounded-xl px-4 py-3.5 outline-none border border-transparent focus:border-gray-200 focus:bg-white transition-all" 
                    />
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-gray-400 text-xs font-bold tracking-wider">+91</span>
                    <input 
                      name="mobile" 
                      type="tel" 
                      placeholder="Mobile Contact Reference" 
                      value={formData.mobile}
                      onChange={handleChange} 
                      className="w-full bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-800 placeholder-gray-300 rounded-xl py-3.5 pl-12 pr-4 outline-none border border-transparent focus:border-gray-200 focus:bg-white transition-all" 
                    />
                  </div>
                </div>
                
                {/* Form Dispatch Trigger */}
                <button 
                  type="button" 
                  onClick={() => setIsConfirmed(true)} 
                  className="w-full bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] text-white py-4 text-xs font-black uppercase tracking-[0.2em] rounded-xl shadow-sm hover:opacity-95 transition-all"
                >
                  Verify Destination Information
                </button>
              </form>
            ) : (
              /* Verified Delivery Address State Component */
              <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm space-y-6 animate-in fade-in slide-in-from-left-3 duration-300">
                <div className="border border-gray-100 bg-gray-50/40 p-5 rounded-xl space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <p className="text-[10px] uppercase tracking-wider font-black text-gray-400 flex items-center gap-1.5">
                      <User size={12} className="text-[#D500B8]" /> Verified Destination Profile
                    </p>
                    <span className="bg-gradient-to-r from-[#8A1BDF] to-[#D500B8] text-white px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-wider">{addressType}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-base font-black text-gray-900 uppercase italic tracking-tight">{formData.firstName} {formData.lastName}</p>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wide leading-relaxed">{formData.address}, <br/> {formData.city} — {formData.pinCode}</p>
                    <div className="flex items-center gap-1.5 text-gray-400 pt-1">
                      <MapPin size={12} className="text-gray-400" />
                      <p className="text-xs font-bold text-gray-700">+91 {formData.mobile}</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setIsConfirmed(false)} 
                    className="text-[10px] uppercase tracking-wider text-[#D500B8] font-black border-b border-[#D500B8] pb-0.5 hover:opacity-80 transition-opacity"
                  >
                    Edit Delivery Coordinates
                  </button>
                </div>

                <button 
                  type="button" 
                  onClick={() => navigate('/checkout/payment')} 
                  className="w-full bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] text-white py-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] shadow-sm flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
                >
                  <CreditCard size={14} /> Continue to Secure Payment
                </button>
              </div>
            )}
          </div>

          {/* --- RIGHT COLUMN: TOTALS & ITEMS BREAKDOWN --- */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-gray-100 p-5 lg:p-6 rounded-2xl shadow-sm lg:sticky lg:top-[160px]">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 pb-3 border-b border-gray-50 text-center">Review Selection</h3>
              
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-4 items-center bg-gray-50/50 p-2.5 rounded-xl border border-gray-100/50">
                    <div className="w-16 h-20 bg-white overflow-hidden rounded-lg border border-gray-100 flex-shrink-0">
                      <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="text-xs font-bold text-gray-800 tracking-wide line-clamp-1">{item.name}</h4>
                      <p className="text-[11px] font-black text-gray-900 mt-1">₹{item.price.toLocaleString()}</p>
                      
                      {/* Counter Adjustment Tool Lock */}
                      <div className="flex items-center gap-3 bg-white border border-gray-100 w-fit px-2 py-1 rounded-lg mt-2 shadow-none">
                        <button onClick={() => updateQty(item.id, -1)} className="text-gray-400 hover:text-black transition-colors"><Minus size={10} strokeWidth={3} /></button>
                        <span className="text-[10px] font-black w-3 text-center text-gray-800">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="text-gray-400 hover:text-black transition-colors"><Plus size={10} strokeWidth={3} /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Invoiced Accounting Breakdown Sheet */}
              <div className="border-t border-gray-100 pt-5 space-y-3">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-gray-400 uppercase tracking-wider">Subtotal</span>
                  <span className="text-gray-900">₹{calculateTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-gray-400 uppercase tracking-wider">Shipping</span>
                  <span className="text-emerald-600 uppercase font-black">Complimentary</span>
                </div>
                <div className="h-[1px] bg-gray-100 w-full my-1" />
                <div className="flex justify-between items-baseline pt-1">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-900">Total Payable</span>
                  <span className="text-2xl font-black tracking-tight text-gray-950">₹{calculateTotal().toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-1.5 text-gray-400 text-[9px] font-bold uppercase tracking-wider border-t border-gray-50 pt-4">
                <ShieldCheck size={12} className="text-emerald-500" />
                <Truck size={12} className="text-[#D500B8]" />
                <span>100% Verified SSL Checkout Protocol</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* --- PREMIUM BAR SIGN-OFF FOOTER --- */}
      <footer className="py-12 border-t border-gray-100 bg-gray-50/50 text-center px-4">
        <div className="text-base font-black uppercase tracking-[0.25em] bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] bg-clip-text text-transparent mb-2">
          Chiramel Garments
        </div>
        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
          Delivery Configuration Screen • Step 01 of 03
        </p>
      </footer>
    </div>
  );
};

export default Shipping;