import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  User, Package, Heart, MapPin, Settings, LogOut, 
  ChevronRight, CreditCard, Edit2, Truck, ArrowUpRight, 
  Plus, Trash2, X, Check, Bell, Mail, Smartphone,
  ShoppingBag, Star, Clock, CheckCircle, AlertCircle,
  Calendar, Shield, Award, Crown, Building2, Wallet, Gift // Explicitly added the missing Gift import here
} from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  
  // Settings State
  const [emailNotify, setEmailNotify] = useState(true);
  const [smsNotify, setSmsNotify] = useState(false);
  const [pushNotify, setPushNotify] = useState(true);
  const [marketingNotify, setMarketingNotify] = useState(false);

  // Data State
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Premium Silk Heritage Shirt", price: "₹6,450", originalPrice: "₹8,999", rating: "4.8", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400", size: "M" },
    { id: 2, name: "Luxe Linen Classic Blazer", price: "₹8,450", originalPrice: "₹12,999", rating: "4.9", img: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400", size: "L" },
    { id: 3, name: "Signature Cotton Polo", price: "₹2,999", originalPrice: "₹4,499", rating: "4.7", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400", size: "M" }
  ]);

  const [addresses, setAddresses] = useState([
    { id: 1, type: 'Home', name: 'Rohith Raghu', phone: '+91 98765 43210', detail: 'Heritage Lane, Tiruppur, Tamil Nadu - 641604, India', isDefault: true },
    { id: 2, type: 'Office', name: 'Rohith Raghu', phone: '+91 98765 43210', detail: 'Tech Park, 5th Floor, Coimbatore, Tamil Nadu - 641001, India', isDefault: false }
  ]);

  const [orders] = useState([
    { id: "CMS-99284-01", date: "15 Jun 2026", status: "In Transit", progress: 75, total: "₹4,250", items: 2, lastUpdate: "Left Tiruppur Hub" },
    { id: "CMS-99283-02", date: "10 Jun 2026", status: "Delivered", progress: 100, total: "₹2,999", items: 1, lastUpdate: "Delivered" },
    { id: "CMS-99282-03", date: "05 Jun 2026", status: "Delivered", progress: 100, total: "₹8,450", items: 3, lastUpdate: "Delivered" }
  ]);

  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'Credit Card', name: 'Visa', last4: '4532', expiry: '12/27', isDefault: true },
    { id: 2, type: 'UPI', name: 'Google Pay', upiId: 'rohith@oksbi', isDefault: false }
  ]);

  const [newAddr, setNewAddr] = useState({ type: '', name: '', phone: '', detail: '' });
  const [newPayment, setNewPayment] = useState({
    type: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    upiId: '',
    bankName: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: <User size={16} /> },
    { id: 'orders', label: 'My Orders', icon: <Package size={16} /> },
    { id: 'wishlist', label: 'Wishlist', icon: <Heart size={16} /> },
    { id: 'addresses', label: 'Addresses', icon: <MapPin size={16} /> },
    { id: 'payments', label: 'Payment Methods', icon: <CreditCard size={16} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={16} /> },
  ];

  const removeWishlistItem = (id) => setWishlist(wishlist.filter(item => item.id !== id));
  const removeAddress = (id) => setAddresses(addresses.filter(addr => addr.id !== id));
  const removePaymentMethod = (id) => setPaymentMethods(paymentMethods.filter(pm => pm.id !== id));

  const handleAddAddress = (e) => {
    e.preventDefault();
    if (newAddr.type && newAddr.name && newAddr.phone && newAddr.detail) {
      const newEntry = {
        id: Date.now(),
        ...newAddr,
        isDefault: addresses.length === 0
      };
      setAddresses([...addresses, newEntry]);
      setNewAddr({ type: '', name: '', phone: '', detail: '' });
      setIsAddressModalOpen(false);
    }
  };

  const handleAddPayment = (e) => {
    e.preventDefault();
    
    let newPaymentEntry = {
      id: Date.now(),
      type: paymentMethod,
      isDefault: paymentMethods.length === 0
    };

    if (paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card') {
      if (newPayment.cardNumber && newPayment.cardName && newPayment.expiry && newPayment.cvv) {
        newPaymentEntry = {
          ...newPaymentEntry,
          name: paymentMethod === 'Credit Card' ? 'Visa' : 'Mastercard',
          last4: newPayment.cardNumber.slice(-4),
          expiry: newPayment.expiry
        };
      } else {
        return;
      }
    } else if (paymentMethod === 'UPI') {
      if (newPayment.upiId) {
        newPaymentEntry = {
          ...newPaymentEntry,
          name: 'UPI',
          upiId: newPayment.upiId
        };
      } else {
        return;
      }
    } else if (paymentMethod === 'Net Banking') {
      if (newPayment.bankName) {
        newPaymentEntry = {
          ...newPaymentEntry,
          name: 'Net Banking',
          bankName: newPayment.bankName
        };
      } else {
        return;
      }
    }

    setPaymentMethods([...paymentMethods, newPaymentEntry]);
    setNewPayment({ type: '', cardNumber: '', cardName: '', expiry: '', cvv: '', upiId: '', bankName: '' });
    setPaymentMethod('');
    setIsPaymentModalOpen(false);
  };

  const setDefaultAddress = (id) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  const setDefaultPayment = (id) => {
    setPaymentMethods(paymentMethods.map(pm => ({
      ...pm,
      isDefault: pm.id === id
    })));
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Delivered': return 'from-[#00A8E8] to-[#00C9A7]';
      case 'In Transit': return 'from-[#F8009D] to-[#D500B8]';
      case 'Processing': return 'from-[#F04A00] to-[#F8009D]';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Delivered': return <CheckCircle size={14} />;
      case 'In Transit': return <Truck size={14} />;
      case 'Processing': return <Clock size={14} />;
      default: return <AlertCircle size={14} />;
    }
  };

  const getPaymentIcon = (type) => {
    switch(type) {
      case 'Credit Card':
      case 'Debit Card':
        return <CreditCard size={16} />;
      case 'UPI':
        return <Smartphone size={16} />;
      case 'Net Banking':
        return <Building2 size={16} />;
      default:
        return <Wallet size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] font-quicksand font-bold antialiased text-gray-900 selection:bg-[#F8009D] selection:text-white">
      

      {/* === ADD ADDRESS MODAL === */}
      {isAddressModalOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center px-4 font-quicksand font-bold">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsAddressModalOpen(false)} />
          <div className="relative bg-white w-full max-w-lg rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 animate-in zoom-in-95 duration-200">
            <button onClick={() => setIsAddressModalOpen(false)} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-[#D500B8] hover:bg-gray-50 rounded-xl transition-all">
              <X size={18} />
            </button>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-9 h-9 bg-gradient-to-br from-[#8A1BDF] to-[#D500B8] rounded-xl flex items-center justify-center">
                  <MapPin size={16} className="text-white" />
                </div>
                <h2 className="text-lg font-black uppercase tracking-tight text-gray-900 italic">Add New Address</h2>
              </div>
              <p className="text-xs text-gray-400 font-bold">Fill in your delivery details below</p>
            </div>
            <form onSubmit={handleAddAddress} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1.5">Label</label>
                  <select 
                    value={newAddr.type}
                    onChange={(e) => setNewAddr({...newAddr, type: e.target.value})}
                    className="w-full bg-gray-50 text-xs font-bold text-gray-800 rounded-xl px-3.5 py-3 outline-none border-2 border-gray-100 focus:border-[#D500B8] focus:bg-white transition-all"
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="Home">Home</option>
                    <option value="Office">Office</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1.5">Phone</label>
                  <input 
                    type="tel" 
                    value={newAddr.phone}
                    onChange={(e) => setNewAddr({...newAddr, phone: e.target.value})}
                    placeholder="+91 98765 43210"
                    className="w-full bg-gray-50 text-xs font-bold text-gray-800 placeholder-gray-300 rounded-xl px-3.5 py-3 outline-none border-2 border-gray-100 focus:border-[#D500B8] focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  value={newAddr.name}
                  onChange={(e) => setNewAddr({...newAddr, name: e.target.value})}
                  placeholder="Recipient Name"
                  className="w-full bg-gray-50 text-xs font-bold text-gray-800 placeholder-gray-300 rounded-xl px-3.5 py-3 outline-none border-2 border-gray-100 focus:border-[#D500B8] focus:bg-white transition-all"
                  required
                />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1.5">Full Address</label>
                <textarea 
                  value={newAddr.detail}
                  onChange={(e) => setNewAddr({...newAddr, detail: e.target.value})}
                  placeholder="Flat No, Street, Landmark, City, State, Pincode"
                  className="w-full bg-gray-50 text-xs font-bold text-gray-800 placeholder-gray-300 rounded-xl px-3.5 py-3 outline-none border-2 border-gray-100 focus:border-[#D500B8] focus:bg-white transition-all h-22 resize-none"
                  required
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setIsAddressModalOpen(false)} className="flex-1 py-3 bg-gray-50 text-gray-600 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-gray-100 transition-all">
                  Cancel
                </button>
                <button type="submit" className="flex-1 py-3 bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] text-white rounded-xl text-xs font-black uppercase tracking-wider hover:opacity-95 transition-all shadow-sm">
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* === ADD PAYMENT METHOD MODAL === */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center px-4 font-quicksand font-bold">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => { setIsPaymentModalOpen(false); setPaymentMethod(''); }} />
          <div className="relative bg-white w-full max-w-2xl rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <button onClick={() => { setIsPaymentModalOpen(false); setPaymentMethod(''); }} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-[#D500B8] hover:bg-gray-50 rounded-xl transition-all">
              <X size={18} />
            </button>
            
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-9 h-9 bg-gradient-to-br from-[#8A1BDF] to-[#D500B8] rounded-xl flex items-center justify-center">
                  <CreditCard size={16} className="text-white" />
                </div>
                <h2 className="text-lg font-black uppercase tracking-tight text-gray-900 italic">Add Payment Method</h2>
              </div>
              <p className="text-xs text-gray-400 font-bold">Choose your preferred payment option</p>
            </div>

            {!paymentMethod ? (
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setPaymentMethod('Credit Card')}
                  className="p-4 sm:p-5 bg-gray-50/50 border-2 border-transparent hover:border-[#D500B8] rounded-xl text-left group transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#8A1BDF] to-[#D500B8] rounded-xl flex items-center justify-center mb-3 group-hover:scale-103 transition-transform">
                    <CreditCard size={18} className="text-white" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-gray-900">Credit Card</h4>
                  <p className="text-[9px] text-gray-400 font-bold mt-0.5">Visa, Mastercard, Amex</p>
                </button>

                <button 
                  onClick={() => setPaymentMethod('Debit Card')}
                  className="p-4 sm:p-5 bg-gray-50/50 border-2 border-transparent hover:border-[#D500B8] rounded-xl text-left group transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00A8E8] to-[#00D6D6] rounded-xl flex items-center justify-center mb-3 group-hover:scale-103 transition-transform">
                    <CreditCard size={18} className="text-white" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-gray-900">Debit Card</h4>
                  <p className="text-[9px] text-gray-400 font-bold mt-0.5">All major banks</p>
                </button>

                <button 
                  onClick={() => setPaymentMethod('UPI')}
                  className="p-4 sm:p-5 bg-gray-50/50 border-2 border-transparent hover:border-[#D500B8] rounded-xl text-left group transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#F04A00] to-[#F8009D] rounded-xl flex items-center justify-center mb-3 group-hover:scale-103 transition-transform">
                    <Smartphone size={18} className="text-white" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-gray-900">UPI</h4>
                  <p className="text-[9px] text-gray-400 font-bold mt-0.5">Google Pay, PhonePe, Paytm</p>
                </button>

                <button 
                  onClick={() => setPaymentMethod('Net Banking')}
                  className="p-4 sm:p-5 bg-gray-50/50 border-2 border-transparent hover:border-[#D500B8] rounded-xl text-left group transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#F8009D] to-[#D500B8] rounded-xl flex items-center justify-center mb-3 group-hover:scale-103 transition-transform">
                    <Building2 size={18} className="text-white" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-gray-900">Net Banking</h4>
                  <p className="text-[9px] text-gray-400 font-bold mt-0.5">All Indian banks</p>
                </button>
              </div>
            ) : (
              <form onSubmit={handleAddPayment} className="space-y-4">
                <button 
                  type="button"
                  onClick={() => setPaymentMethod('')}
                  className="flex items-center gap-1 text-xs font-black text-[#D500B8] hover:text-[#8A1BDF] uppercase tracking-wider transition-colors mb-2"
                >
                  <ChevronRight size={14} className="rotate-180" /> Back to options
                </button>

                {(paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card') && (
                  <>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1.5">Card Number</label>
                      <input 
                        type="text" 
                        value={newPayment.cardNumber}
                        onChange={(e) => setNewPayment({...newPayment, cardNumber: e.target.value})}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full bg-gray-50 text-xs font-bold text-gray-800 placeholder-gray-300 rounded-xl px-3.5 py-3 outline-none border-2 border-gray-100 focus:border-[#D500B8] focus:bg-white transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1.5">Cardholder Name</label>
                      <input 
                        type="text" 
                        value={newPayment.cardName}
                        onChange={(e) => setNewPayment({...newPayment, cardName: e.target.value})}
                        placeholder="Name on card"
                        className="w-full bg-gray-50 text-xs font-bold text-gray-800 placeholder-gray-300 rounded-xl px-3.5 py-3 outline-none border-2 border-gray-100 focus:border-[#D500B8] focus:bg-white transition-all"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1.5">Expiry Date</label>
                        <input 
                          type="text" 
                          value={newPayment.expiry}
                          onChange={(e) => setNewPayment({...newPayment, expiry: e.target.value})}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full bg-gray-50 text-xs font-bold text-gray-300 rounded-xl px-3.5 py-3 outline-none border-2 border-gray-100 focus:border-[#D500B8] focus:bg-white transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1.5">CVV</label>
                        <input 
                          type="password" 
                          value={newPayment.cvv}
                          onChange={(e) => setNewPayment({...newPayment, cvv: e.target.value})}
                          placeholder="123"
                          maxLength={4}
                          className="w-full bg-gray-50 text-xs font-bold text-gray-800 placeholder-gray-300 rounded-xl px-3.5 py-3 outline-none border-2 border-gray-100 focus:border-[#D500B8] focus:bg-white transition-all"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {paymentMethod === 'UPI' && (
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1.5">UPI ID</label>
                    <input 
                      type="text" 
                      value={newPayment.upiId}
                      onChange={(e) => setNewPayment({...newPayment, upiId: e.target.value})}
                      placeholder="yourname@oksbi"
                      className="w-full bg-gray-50 text-xs font-bold text-gray-800 placeholder-gray-300 rounded-xl px-3.5 py-3 outline-none border-2 border-gray-100 focus:border-[#D500B8] focus:bg-white transition-all"
                      required
                    />
                    <p className="text-[10px] text-gray-400 font-bold mt-1.5">Supports Google Pay, PhonePe, Paytm, BHIM UPI</p>
                  </div>
                )}

                {paymentMethod === 'Net Banking' && (
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1.5">Select Bank</label>
                    <select 
                      value={newPayment.bankName}
                      onChange={(e) => setNewPayment({...newPayment, bankName: e.target.value})}
                      className="w-full bg-gray-50 text-xs font-bold text-gray-800 rounded-xl px-3.5 py-3 outline-none border-2 border-gray-100 focus:border-[#D500B8] focus:bg-white transition-all"
                      required
                    >
                      <option value="">Choose your bank</option>
                      <option value="SBI">State Bank of India</option>
                      <option value="HDFC">HDFC Bank</option>
                      <option value="ICICI">ICICI Bank</option>
                      <option value="Axis">Axis Bank</option>
                      <option value="Kotak">Kotak Mahindra Bank</option>
                    </select>
                  </div>
                )}

                <div className="flex gap-3 pt-3">
                  <button type="button" onClick={() => { setIsPaymentModalOpen(false); setPaymentMethod(''); }} className="flex-1 py-3 bg-gray-50 text-gray-600 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-gray-100 transition-all">
                    Cancel
                  </button>
                  <button type="submit" className="flex-1 py-3 bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] text-white rounded-xl text-xs font-black uppercase tracking-wider hover:opacity-95 transition-all shadow-sm">
                    Add Method
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <main className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-12 pt-28 md:pt-36 pb-20">
        
        {/* === PROFILE HEADER === */}
        <header className="mb-10 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 lg:p-8 relative overflow-hidden font-quicksand">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#F8009D]/5 to-[#8A1BDF]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="relative group flex-shrink-0">
                <div className="w-18 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-xl bg-gradient-to-br from-[#8A1BDF] to-[#D500B8] p-0.5 shadow-sm">
                  <div className="w-full h-full rounded-lg overflow-hidden bg-white">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" className="w-full h-full object-cover" alt="User Profile Canvas" />
                  </div>
                </div>
                <button className="absolute -bottom-1 -right-1 p-1.5 bg-white text-[#D500B8] rounded-lg border-2 border-white shadow-sm transition-transform active:scale-95">
                  <Edit2 size={11} />
                </button>
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="px-2.5 py-0.5 bg-gradient-to-r from-[#8A1BDF]/5 to-[#D500B8]/5 border border-[#D500B8]/10 rounded-md">
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#D500B8]">Premium Member</span>
                  </div>
                  <div className="flex items-center gap-0.5 px-2 py-0.5 bg-gradient-to-r from-[#F04A00]/5 to-[#F8009D]/5 rounded-md">
                    <Crown size={10} className="text-[#F04A00]" />
                    <span className="text-[8px] font-black uppercase tracking-wider text-[#F04A00]">Gold</span>
                  </div>
                </div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-gray-900 italic">Rohith Raghu</h1>
                <p className="text-[11px] text-gray-400 font-bold mt-0.5">Member since January 2024</p>
              </div>
            </div>

            <button 
              onClick={() => navigate('/login')} 
              className="w-fit flex items-center gap-1.5 px-4 py-2.5 bg-white text-gray-600 border border-gray-100 hover:border-red-100 hover:bg-red-50 hover:text-red-500 rounded-xl transition-all text-xs font-black uppercase tracking-wider shadow-none"
            >
              <span>Logout</span>
              <LogOut size={13} />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start font-quicksand">
          
          {/* === SIDEBAR NAVIGATION === */}
          <aside className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-2.5 sticky top-24 z-30">
            <nav className="flex flex-row lg:flex-col gap-1 overflow-x-auto no-scrollbar whitespace-nowrap">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex-shrink-0 w-auto lg:w-full gap-3 ${
                    activeTab === item.id 
                      ? 'bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] text-white shadow-sm' 
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight size={13} className={`hidden lg:block transition-transform ${activeTab === item.id ? 'translate-x-0.5' : 'opacity-0'}`} />
                </button>
              ))}
            </nav>
          </aside>

          {/* === MAIN CONTENT AREA === */}
          <section className="lg:col-span-9 min-h-[460px]">
            
            {/* OVERVIEW CONTENT */}
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-gradient-to-br from-[#8A1BDF] via-[#D500B8] to-[#F8009D] rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden shadow-none border border-transparent">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  <div className="relative z-10">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight italic mb-1.5">Welcome Back, Rohith</h2>
                    <p className="text-xs sm:text-sm text-white/90 font-bold leading-relaxed">Your premium fashion journey continues. Explore fresh technical drops and custom curation parameters.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: 'Total Orders', value: orders.length, icon: Package, color: 'from-[#8A1BDF] to-[#D500B8]', tab: 'orders' },
                    { label: 'Wishlist Index', value: wishlist.length, icon: Heart, color: 'from-[#F8009D] to-[#D500B8]', tab: 'wishlist' },
                    { label: 'Addresses', value: addresses.length, icon: MapPin, color: 'from-[#00A8E8] to-[#00D6D6]', tab: 'addresses' },
                    { label: 'Reward Points', value: '2,450', icon: Award, color: 'from-[#F04A00] to-[#F8009D]', tab: 'overview' }
                  ].map((stat, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => stat.tab !== 'overview' && setActiveTab(stat.tab)}
                      className={`bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-md transition-all hover:-translate-y-0.5 ${stat.tab !== 'overview' ? 'cursor-pointer' : ''}`}
                    >
                      <div className={`w-9 h-9 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3 shadow-sm`}>
                        <stat.icon size={16} className="text-white" />
                      </div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-wider">{stat.label}</p>
                      <p className="text-xl sm:text-2xl font-black text-gray-950 mt-0.5">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
                    <div>
                      <h3 className="text-sm sm:text-base font-black text-gray-900 uppercase tracking-wider">Recent Activity</h3>
                      <div className="h-1 w-12 bg-gradient-to-r from-[#8A1BDF] to-[#D500B8] mt-1 rounded-full" />
                    </div>
                    <button onClick={() => setActiveTab('orders')} className="text-[10px] font-black text-[#D500B8] hover:text-[#8A1BDF] transition-colors flex items-center gap-0.5 uppercase tracking-wider">
                      <span>View All</span> <ChevronRight size={12} />
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {orders.slice(0, 3).map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50/50 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-50 transition-all">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 bg-gradient-to-br ${getStatusColor(order.status)} rounded-xl flex items-center justify-center text-white shadow-sm`}>
                            {getStatusIcon(order.status)}
                          </div>
                          <div>
                            <p className="text-xs font-black text-gray-950">Order #{order.id}</p>
                            <p className="text-[10px] text-gray-400 font-bold mt-0.5">{order.date} • {order.items} items</p>
                          </div>
                        </div>
                        <div className="text-right leading-tight">
                          <p className="text-xs sm:text-sm font-black text-gray-950">{order.total}</p>
                          <p className={`text-[9px] font-black uppercase tracking-wider mt-0.5 ${
                            order.status === 'Delivered' ? 'text-[#00C9A7]' : 'text-[#D500B8]'
                          }`}>{order.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ORDERS CONTENT */}
            {activeTab === 'orders' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
                    <div>
                      <h3 className="text-sm sm:text-base font-black text-gray-900 uppercase tracking-wider">My Orders</h3>
                      <div className="h-1 w-12 bg-gradient-to-r from-[#8A1BDF] to-[#D500B8] mt-1 rounded-full" />
                    </div>
                    <span className="text-xs font-bold text-gray-400">{orders.length} Total Orders</span>
                  </div>
                  
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="bg-gray-50/50 rounded-xl border border-gray-100 p-4 sm:p-5 hover:shadow-sm hover:bg-white transition-all">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-gray-100">
                          <div>
                            <p className="text-[8px] font-black text-gray-400 uppercase tracking-wider">Tracking Identifier</p>
                            <p className="text-xs sm:text-sm font-black text-gray-950 mt-0.5">{order.id}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-left sm:text-right leading-tight">
                              <p className="text-[8px] font-black text-gray-400 uppercase tracking-wider">Placement Date</p>
                              <p className="text-xs text-gray-700 mt-0.5">{order.date}</p>
                            </div>
                            <div className={`px-2.5 py-1 bg-gradient-to-r ${getStatusColor(order.status)} rounded-md text-white text-[9px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1`}>
                              {getStatusIcon(order.status)}
                              <span>{order.status}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="relative h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getStatusColor(order.status)} rounded-full`}
                              style={{ width: `${order.progress}%` }}
                            />
                          </div>
                          <div className="flex justify-between items-center mt-2.5 text-[10px]">
                            <p className="font-bold text-gray-600 flex items-center gap-1">
                              <Truck size={12} className="text-[#D500B8]" /> <span>{order.lastUpdate}</span>
                            </p>
                            <p className="font-black text-[#D500B8] uppercase tracking-wider">{order.progress}% Complete</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <div className="flex items-center gap-4">
                            <div>
                              <p className="text-[8px] font-black text-gray-400 uppercase tracking-wider">Total</p>
                              <p className="text-xs sm:text-sm font-black text-gray-950">{order.total}</p>
                            </div>
                            <div>
                              <p className="text-[8px] font-black text-gray-400 uppercase tracking-wider">Items</p>
                              <p className="text-xs font-black text-gray-950">{order.items}</p>
                            </div>
                          </div>
                          <button 
                            onClick={() => navigate('/track-order')}
                            className="px-4 py-2 bg-gradient-to-r from-[#8A1BDF] to-[#D500B8] text-white rounded-xl text-[10px] font-black uppercase tracking-wider hover:opacity-95 transition-all flex items-center gap-1"
                          >
                            <span>Track Order</span> 
                            <ArrowUpRight size={11} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* WISHLIST CONTENT */}
            {activeTab === 'wishlist' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
                    <div>
                      <h3 className="text-sm sm:text-base font-black text-gray-900 uppercase tracking-wider">My Wishlist</h3>
                      <div className="h-1 w-12 bg-gradient-to-r from-[#F8009D] to-[#D500B8] mt-1 rounded-full" />
                    </div>
                    <span className="text-xs font-bold text-gray-400">{wishlist.length} Items</span>
                  </div>
                  
                  {wishlist.length > 0 ? (
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                      {wishlist.map((item) => (
                        <div key={item.id} className="group bg-gradient-to-br from-gray-50/50 to-white rounded-xl border border-gray-100 p-2.5 hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between">
                          <div>
                            <button 
                              onClick={() => removeWishlistItem(item.id)}
                              className="absolute top-4 right-4 p-1.5 bg-white/95 backdrop-blur-md text-gray-400 hover:text-red-500 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-all z-10"
                            >
                              <Trash2 size={13} />
                            </button>
                            
                            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-50 mb-3 relative">
                              <img src={item.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" alt={item.name} />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            
                            <div className="px-0.5">
                              <h4 className="text-xs font-bold text-gray-800 line-clamp-2 leading-snug mb-1.5">{item.name}</h4>
                              <div className="flex items-center gap-1 mb-2">
                                <Star size={10} fill="currentColor" className="text-amber-500" />
                                <span className="text-[10px] font-black text-amber-600">{item.rating}</span>
                                <span className="text-[9px] text-gray-400 font-bold ml-1">Size: {item.size}</span>
                              </div>
                            </div>
                          </div>

                          <div className="px-0.5 pt-2 border-t border-gray-100/60">
                            <div className="flex items-baseline gap-1.5 mb-2.5">
                              <span className="text-xs sm:text-sm font-black text-gray-950">{item.price}</span>
                              <span className="text-[9px] text-gray-400 line-through font-semibold">{item.originalPrice}</span>
                            </div>
                            <button 
                              onClick={() => navigate(`/checkout?id=${item.id}`)}
                              className="w-full py-2 bg-gradient-to-r from-[#8A1BDF] to-[#D500B8] text-white rounded-xl text-[9px] font-black uppercase tracking-wider shadow-none group-hover:shadow-sm transition-all"
                            >
                              Buy Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-16 text-center bg-gray-50/50 rounded-xl border border-gray-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F8009D]/10 to-[#D500B8]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Heart size={20} className="text-[#D500B8]" />
                      </div>
                      <p className="text-xs font-black text-gray-800 uppercase tracking-wider">Your wishlist is empty</p>
                      <p className="text-[11px] text-gray-400 font-bold mt-0.5">Start preserving favorite lines</p>
                      <button onClick={() => navigate('/')} className="mt-4 px-5 py-2.5 bg-gradient-to-r from-[#8A1BDF] to-[#D500B8] text-white rounded-xl text-[10px] font-black uppercase tracking-wider shadow-sm">
                        Browse Products
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ADDRESSES CONTENT */}
            {activeTab === 'addresses' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
                    <div>
                      <h3 className="text-sm sm:text-base font-black text-gray-900 uppercase tracking-wider">My Addresses</h3>
                      <div className="h-1 w-12 bg-gradient-to-r from-[#00A8E8] to-[#00D6D6] mt-1 rounded-full" />
                    </div>
                    <button 
                      onClick={() => setIsAddressModalOpen(true)}
                      className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-[#8A1BDF] to-[#D500B8] text-white rounded-xl text-[10px] font-black uppercase tracking-wider hover:opacity-95 transition-all shadow-sm"
                    >
                      <Plus size={12} /> Add New
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {addresses.map(addr => (
                      <div key={addr.id} className="bg-gray-50/50 hover:bg-white rounded-xl border border-gray-100 p-4 sm:p-5 hover:shadow-sm transition-all relative group flex flex-col justify-between">
                        <div>
                          {addr.isDefault && (
                            <div className="flex items-center gap-1 mb-2.5 w-fit px-2 py-0.5 bg-gradient-to-r from-[#00A8E8] to-[#00C9A7] text-white rounded-md shadow-sm">
                              <Check size={9} strokeWidth={4} />
                              <span className="text-[8px] font-black uppercase tracking-wider">Default Allocation</span>
                            </div>
                          )}
                          
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-[#8A1BDF]/5 to-[#D500B8]/5 rounded-lg flex items-center justify-center border border-gray-100">
                                <MapPin size={13} className="text-[#D500B8]" />
                              </div>
                              <div>
                                <p className="text-[10px] font-black text-gray-900 uppercase tracking-wider">{addr.type}</p>
                                <p className="text-[9px] text-gray-400 font-bold mt-0.5">{addr.name}</p>
                              </div>
                            </div>
                            <button 
                              onClick={() => removeAddress(addr.id)} 
                              className="p-1.5 text-gray-400 hover:text-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                          
                          <p className="text-xs text-gray-600 font-bold leading-relaxed mb-1.5">{addr.detail}</p>
                          <p className="text-[10px] text-gray-400 font-bold">Contact: {addr.phone}</p>
                        </div>
                        
                        {!addr.isDefault && (
                          <button 
                            onClick={() => setDefaultAddress(addr.id)}
                            className="mt-3 w-fit text-[9px] font-black text-[#D500B8] hover:text-[#8A1BDF] uppercase tracking-wider transition-colors"
                          >
                            Set as Default
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PAYMENTS CONTENT */}
            {activeTab === 'payments' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
                    <div>
                      <h3 className="text-sm sm:text-base font-black text-gray-900 uppercase tracking-wider">Payment Methods</h3>
                      <div className="h-1 w-12 bg-gradient-to-r from-[#F04A00] to-[#F8009D] mt-1 rounded-full" />
                    </div>
                    <button 
                      onClick={() => setIsPaymentModalOpen(true)}
                      className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-[#8A1BDF] to-[#D500B8] text-white rounded-xl text-[10px] font-black uppercase tracking-wider hover:opacity-95 transition-all shadow-sm"
                    >
                      <Plus size={12} /> Add New
                    </button>
                  </div>
                  
                  {paymentMethods.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {paymentMethods.map(pm => (
                        <div key={pm.id} className="bg-gray-50/50 hover:bg-white rounded-xl border border-gray-100 p-4 sm:p-5 hover:shadow-sm transition-all relative group flex flex-col justify-between">
                          <div>
                            {pm.isDefault && (
                              <div className="flex items-center gap-1 mb-2.5 w-fit px-2 py-0.5 bg-gradient-to-r from-[#00A8E8] to-[#00C9A7] text-white rounded-md shadow-sm">
                                <Check size={9} strokeWidth={4} />
                                <span className="text-[8px] font-black uppercase tracking-wider">Primary Channel</span>
                              </div>
                            )}
                            
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 bg-gradient-to-br from-[#8A1BDF]/5 to-[#D500B8]/5 rounded-lg flex items-center justify-center border border-gray-100">
                                  {getPaymentIcon(pm.type)}
                                </div>
                                <div>
                                  <p className="text-[10px] font-black text-gray-900 uppercase tracking-wider">{pm.type}</p>
                                  <p className="text-[9px] text-gray-400 font-bold mt-0.5">
                                    {pm.type === 'UPI' ? pm.upiId : 
                                     pm.type === 'Net Banking' ? pm.bankName :
                                     `${pm.name} •••• ${pm.last4}`}
                                  </p>
                                </div>
                              </div>
                              <button 
                                onClick={() => removePaymentMethod(pm.id)} 
                                className="p-1.5 text-gray-400 hover:text-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>
                            
                            {pm.expiry && (
                              <p className="text-[9px] text-gray-400 font-bold">Expires: {pm.expiry}</p>
                            )}
                          </div>
                          
                          {!pm.isDefault && (
                            <button 
                              onClick={() => setDefaultPayment(pm.id)}
                              className="mt-3 w-fit text-[9px] font-black text-[#D500B8] hover:text-[#8A1BDF] uppercase tracking-wider transition-colors"
                            >
                              Set as Primary
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-16 text-center bg-gray-50/50 rounded-xl border border-gray-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F04A00]/10 to-[#F8009D]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <CreditCard size={20} className="text-[#F04A00]" />
                      </div>
                      <p className="text-xs font-black text-gray-800 uppercase tracking-wider">No accounts saved yet</p>
                      <p className="text-[11px] text-gray-400 font-bold mt-0.5">Add methods for streamlined transactions</p>
                      <button 
                        onClick={() => setIsPaymentModalOpen(true)}
                        className="mt-4 px-5 py-2.5 bg-gradient-to-r from-[#8A1BDF] to-[#D500B8] text-white rounded-xl text-[10px] font-black uppercase tracking-wider shadow-sm"
                      >
                        Add Payment Method
                      </button>
                    </div>
                  )}

                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-6">
                    {[
                      { icon: Shield, label: "Secure Gateway" },
                      { icon: CheckCircle, label: "Verified Node" },
                      { icon: Award, label: "Trusted Pipeline" }
                    ].map(({ icon: Icon, label }, idx) => (
                      <div key={idx} className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
                        <Icon size={16} className="text-[#00C9A7] mb-2" />
                        <span className="text-[8px] font-black uppercase tracking-wider text-gray-700 text-center">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SETTINGS CONTENT */}
            {activeTab === 'settings' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
                  <div className="mb-5 pb-3 border-b border-gray-100">
                    <h3 className="text-sm sm:text-base font-black text-gray-900 uppercase tracking-wider">Notification Preferences</h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-[#8A1BDF] to-[#D500B8] mt-1 rounded-full" />
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { id: 'email', label: 'Email Channels', desc: 'Receive real-time transactional receipt logs', icon: Mail, state: emailNotify, setter: setEmailNotify, color: 'from-[#8A1BDF] to-[#D500B8]' },
                      { id: 'sms', label: 'SMS Core Dispatch', desc: 'Receive automated carrier delivery alerts', icon: Smartphone, state: smsNotify, setter: setSmsNotify, color: 'from-[#00A8E8] to-[#00D6D6]' },
                      { id: 'push', label: 'Push Infrastructure', desc: 'Instant system updates directly on device', icon: Bell, state: pushNotify, setter: setPushNotify, color: 'from-[#F04A00] to-[#F8009D]' },
                      { id: 'marketing', label: 'Editorial Content', desc: 'Exclusive seasonal drop collection briefs', icon: Gift, state: marketingNotify, setter: setMarketingNotify, color: 'from-[#F8009D] to-[#D500B8]' }
                    ].map((item) => (
                      <div 
                        key={item.id}
                        onClick={() => item.setter(!item.state)}
                        className="flex justify-between items-center p-4 bg-gray-50/40 border border-gray-100 hover:border-gray-200 hover:bg-white hover:shadow-sm rounded-xl cursor-pointer transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-sm`}>
                            <item.icon size={15} className="text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-black text-gray-900 uppercase tracking-wider">{item.label}</p>
                            <p className="text-[10px] text-gray-400 font-bold mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                        <div className={`w-10 h-5.5 rounded-full relative transition-all duration-200 flex items-center ${item.state ? `bg-gradient-to-r ${item.color}` : 'bg-gray-200'}`}>
                          <div className={`absolute w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-200 ${item.state ? 'left-[22px]' : 'left-1'}`}/>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
                  <div className="mb-5 pb-3 border-b border-gray-100">
                    <h3 className="text-sm sm:text-base font-black text-gray-900 uppercase tracking-wider">Account Actions</h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-[#F04A00] to-[#F8009D] mt-1 rounded-full" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button className="w-full py-3.5 bg-white border border-gray-200 text-gray-600 rounded-xl text-xs font-black uppercase tracking-wider hover:border-[#D500B8] hover:text-[#D500B8] transition-all">
                      Change Security Password
                    </button>
                    <button className="w-full py-3.5 bg-white border border-red-100 text-red-400 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-red-500 hover:text-white hover:border-transparent transition-all">
                      Deactivate Account Node
                    </button>
                  </div>
                </div>
              </div>
            )}

          </section>
        </div>
      </main>
    </div>
  );
};

export default Profile;