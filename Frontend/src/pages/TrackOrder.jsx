import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  Package, MapPin, Phone, Calendar, CreditCard, 
  CheckCircle, Truck, ArrowLeft,
  ChevronRight, Shield, Award,
  Printer, Share2, MessageCircle, HelpCircle,
  Download, Copy, Check
} from 'lucide-react';

const OrderTracking = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock order data
  const order = {
    id: orderId || 'CMS-99284-01',
    orderDate: '15 Jun 2026',
    expectedDelivery: '20 Jun 2026',
    status: 'In Transit',
    progress: 75,
    paymentMethod: 'Credit Card',
    paymentStatus: 'Paid',
    subtotal: '₹4,250',
    shipping: 'Free',
    tax: '₹382',
    total: '₹4,632',
    trackingNumber: 'TRK20260615001234',
    courier: 'BlueDart Express',
    lastUpdate: '18 Jun 2026, 10:30 AM',
    items: [
      { id: 1, name: 'Premium Silk Heritage Shirt', size: 'M', quantity: 1, price: '₹2,450', img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300' },
      { id: 2, name: 'Classic Cotton Polo', size: 'L', quantity: 1, price: '₹1,800', img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=300' }
    ],
    deliveryAddress: {
      name: 'Rohith Raghu',
      phone: '+91 98765 43210',
      address: 'Heritage Lane, Tiruppur, Tamil Nadu - 641604, India'
    },
    timeline: [
      { id: 1, status: 'Order Placed', date: '15 Jun 2026, 09:15 AM', description: 'Your order has been confirmed', completed: true, icon: CheckCircle },
      { id: 2, status: 'Processing', date: '15 Jun 2026, 02:30 PM', description: 'Order is being prepared for shipment', completed: true, icon: Package },
      { id: 3, status: 'Shipped', date: '16 Jun 2026, 11:00 AM', description: 'Package handed over to courier', completed: true, icon: Truck },
      { id: 4, status: 'In Transit', date: '18 Jun 2026, 10:30 AM', description: 'Package is on the way to your location', completed: true, icon: Truck, current: true },
      { id: 5, status: 'Out for Delivery', date: 'Expected: 19 Jun 2026', description: 'Package will be delivered today', completed: false, icon: Truck },
      { id: 6, status: 'Delivered', date: 'Expected: 20 Jun 2026', description: 'Package delivered successfully', completed: false, icon: CheckCircle }
    ]
  };

  const handleCopyTracking = () => {
    navigator.clipboard.writeText(order.trackingNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] font-quicksand font-bold antialiased text-gray-900 selection:bg-[#F8009D] selection:text-white">
      <Navbar />

      <main className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-12 pt-28 md:pt-36 pb-20">
        
        {/* === BREADCRUMB === */}
        <nav className="flex items-center gap-2 mb-8 font-quicksand">
          <button 
            onClick={() => navigate('/profile')} 
            className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-gray-400 hover:text-[#D500B8] transition-all duration-300 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Profile</span>
          </button>
          <span className="text-gray-300">/</span>
          <span className="text-xs font-black text-gray-900 uppercase tracking-wider">Order Tracking</span>
        </nav>

        {/* === ORDER HEADER === */}
        <div className="bg-gradient-to-br from-[#8A1BDF] via-[#D500B8] to-[#F8009D] rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden shadow-sm mb-8 font-quicksand">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2 text-white/80">
                  <Package size={18} />
                  <span className="text-xs font-black uppercase tracking-wider">Order Details</span>
                </div>
                <h1 className="text-2xl lg:text-3xl font-black uppercase tracking-tight italic">
                  Order #{order.id}
                </h1>
                <p className="text-xs sm:text-sm text-white/90 mt-2">Placed on {order.orderDate}</p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-wider hover:bg-white/25 transition-all duration-200 rounded-xl shadow-none">
                  <Printer size={14} /> Print Invoice
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white text-[#D500B8] text-xs font-black uppercase tracking-wider hover:opacity-95 transition-all duration-200 rounded-xl shadow-sm">
                  <Download size={14} /> Download PDF
                </button>
              </div>
            </div>

            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl">
                <Truck size={14} />
                <span className="text-xs font-black uppercase tracking-wider">{order.status}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl">
                <Calendar size={14} />
                <span className="text-xs font-bold">Expected: {order.expectedDelivery}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl">
                <CreditCard size={14} />
                <span className="text-xs font-bold">{order.paymentStatus}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start font-quicksand">
          
          {/* === LEFT COLUMN: TRACKING TIMELINE & ITEMS === */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Progress Bar Module */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-sm sm:text-base font-black text-gray-900 uppercase tracking-wider">Order Progress</h2>
                  <div className="h-1 w-12 bg-gradient-to-r from-[#8A1BDF] to-[#D500B8] mt-1 rounded-full" />
                </div>
                <div className="text-right leading-none">
                  <p className="text-xl sm:text-2xl font-black text-[#D500B8]">{order.progress}%</p>
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-wider mt-1">Complete</p>
                </div>
              </div>

              {/* Progress Track */}
              <div className="relative h-2 bg-gray-50 rounded-full overflow-hidden mb-6">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] transition-all duration-1000 rounded-full"
                  style={{ width: `${order.progress}%` }}
                />
              </div>

              {/* Timeline Matrix */}
              <div className="relative pl-0.5">
                {order.timeline.map((step, idx) => (
                  <div key={step.id} className="flex gap-4 mb-5 last:mb-0">
                    <div className="flex flex-col items-center">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-300 ${
                        step.completed 
                          ? step.current 
                            ? 'bg-gradient-to-br from-[#8A1BDF] to-[#D500B8] border-transparent text-white shadow-sm scale-105' 
                            : 'bg-gradient-to-br from-[#00A8E8] to-[#00C9A7] border-transparent text-white'
                          : 'bg-white text-gray-300 border-gray-100'
                      }`}>
                        <step.icon size={16} />
                      </div>
                      {idx < order.timeline.length - 1 && (
                        <div className={`w-0.5 flex-grow mt-2 min-h-[30px] ${step.completed ? 'bg-gradient-to-b from-[#00A8E8] to-[#00C9A7]' : 'bg-gray-100'}`} />
                      )}
                    </div>

                    <div className={`flex-grow pb-4 ${idx < order.timeline.length - 1 ? 'border-b border-gray-50' : ''}`}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className={`text-xs font-black uppercase tracking-wider mb-1 ${
                            step.completed ? 'text-gray-900' : 'text-gray-400'
                          }`}>
                            {step.status}
                          </h3>
                          <p className="text-xs text-gray-500 font-bold mb-1 leading-relaxed">{step.description}</p>
                          <p className="text-[9px] font-black text-gray-400 uppercase tracking-wider">{step.date}</p>
                        </div>
                        {step.current && (
                          <div className="px-2 py-0.5 bg-gradient-to-r from-[#F04A00] to-[#F8009D] text-white rounded-md shadow-sm">
                            <span className="text-[8px] font-black uppercase tracking-wider block">Current</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Items List */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
              <div className="flex justify-between items-end mb-5 pb-3 border-b border-gray-100">
                <div>
                  <h2 className="text-sm sm:text-base font-black text-gray-900 uppercase tracking-wider">Order Items</h2>
                  <div className="h-1 w-12 bg-gradient-to-r from-[#F8009D] to-[#D500B8] mt-1 rounded-full" />
                </div>
                <span className="text-xs font-bold text-gray-400">{order.items.length} Items</span>
              </div>

              <div className="space-y-3.5">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 bg-gray-50/50 hover:bg-white rounded-xl border border-transparent hover:border-gray-100 shadow-none hover:shadow-sm transition-all group">
                    <div className="w-16 h-20 sm:w-20 sm:h-24 overflow-hidden rounded-lg bg-gray-50 border border-gray-200/20 flex-shrink-0">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="text-xs sm:text-sm font-bold text-gray-800 line-clamp-1 group-hover:text-[#D500B8] transition-colors mb-1">{item.name}</h3>
                      <div className="flex flex-wrap gap-2.5 mb-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                        <span>Size: {item.size}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full my-auto"></span>
                        <span>Qty: {item.quantity}</span>
                      </div>
                      <p className="text-sm sm:text-base font-black text-gray-950">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Courier Tracking Metrics */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
              <div className="mb-5 pb-3 border-b border-gray-100">
                <h2 className="text-sm sm:text-base font-black text-gray-900 uppercase tracking-wider">Tracking Information</h2>
                <div className="h-1 w-12 bg-gradient-to-r from-[#00A8E8] to-[#00D6D6] mt-1 rounded-full" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3.5 bg-gray-50/50 border border-gray-100 rounded-xl">
                  <div>
                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-wider">Tracking ID</p>
                    <p className="text-xs sm:text-sm font-black text-gray-950 mt-0.5 tracking-wide">{order.trackingNumber}</p>
                  </div>
                  <button 
                    onClick={handleCopyTracking}
                    className="p-2 bg-white text-gray-500 hover:text-[#D500B8] hover:bg-gray-50 border border-gray-100 rounded-xl transition-all shadow-none"
                    aria-label="Copy Tracking Number Parameters"
                  >
                    {copied ? <Check size={14} className="text-[#00C9A7]" /> : <Copy size={14} />}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-gray-50/50 border border-gray-100 rounded-xl">
                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-wider">Carrier Dispatch Partner</p>
                    <p className="text-xs sm:text-sm font-black text-gray-900 mt-0.5">{order.courier}</p>
                  </div>
                  <div className="p-3 bg-gray-50/50 border border-gray-100 rounded-xl">
                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-wider">Latest Node Assessment</p>
                    <p className="text-xs sm:text-sm font-black text-gray-900 mt-0.5">{order.lastUpdate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* === RIGHT COLUMN: ORDER SUMMARY BLOCK === */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Delivery Address Block Container */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#8A1BDF] to-[#D500B8] text-white rounded-lg flex items-center justify-center">
                  <MapPin size={15} />
                </div>
                <h2 className="text-sm sm:text-base font-black text-gray-900 uppercase tracking-wider">Delivery Address</h2>
              </div>

              <div className="space-y-2.5">
                <div>
                  <p className="text-xs sm:text-sm font-black text-gray-950">{order.deliveryAddress.name}</p>
                  <p className="text-xs text-gray-500 mt-1 font-bold leading-relaxed">{order.deliveryAddress.address}</p>
                </div>
                <div className="flex items-center gap-1.5 pt-2.5 border-t border-gray-50">
                  <Phone size={11} className="text-gray-400" />
                  <span className="text-xs font-bold text-gray-700">{order.deliveryAddress.phone}</span>
                </div>
              </div>
            </div>

            {/* Payment Ledger Summary */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#F04A00] to-[#F8009D] text-white rounded-lg flex items-center justify-center">
                  <CreditCard size={15} />
                </div>
                <h2 className="text-sm sm:text-base font-black text-gray-900 uppercase tracking-wider">Payment Summary</h2>
              </div>

              <div className="space-y-2 text-xs font-bold">
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-gray-400 uppercase tracking-wider text-[10px]">Subtotal Index</span>
                  <span className="text-gray-950 font-black">{order.subtotal}</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-gray-400 uppercase tracking-wider text-[10px]">Shipping Allocated</span>
                  <span className="text-[#00C9A7] font-black">{order.shipping}</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-gray-400 uppercase tracking-wider text-[10px]">Assessed IGST Tax</span>
                  <span className="text-gray-950 font-black">{order.tax}</span>
                </div>
                <div className="flex justify-between items-center pt-2.5 border-t border-gray-100">
                  <span className="text-xs sm:text-sm font-black text-gray-900 uppercase tracking-wider">Total Ledger</span>
                  <span className="text-base sm:text-lg font-black text-[#D500B8]">{order.total}</span>
                </div>
              </div>

              <div className="mt-4 p-2.5 bg-gray-50/50 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 text-gray-600">
                  <CreditCard size={13} />
                  <span className="text-[9px] font-black uppercase tracking-widest">{order.paymentMethod}</span>
                </div>
              </div>
            </div>

            {/* Support Matrix Nodes */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00A8E8] to-[#00D6D6] text-white rounded-lg flex items-center justify-center">
                  <HelpCircle size={15} />
                </div>
                <h2 className="text-sm sm:text-base font-black text-gray-900 uppercase tracking-wider">Need Help?</h2>
              </div>

              <div className="space-y-2">
                <button className="w-full flex items-center justify-between p-3 bg-gray-50/50 hover:bg-white rounded-xl border border-transparent hover:border-gray-100 shadow-none hover:shadow-sm transition-all duration-200 group">
                  <div className="flex items-center gap-2.5">
                    <MessageCircle size={15} className="text-gray-400 group-hover:text-[#D500B8] transition-colors" />
                    <span className="text-[10px] font-black text-gray-700 uppercase tracking-wider">Contact Support</span>
                  </div>
                  <ChevronRight size={13} className="text-gray-300 group-hover:text-[#D500B8] group-hover:translate-x-0.5 transition-all" />
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-gray-50/50 hover:bg-white rounded-xl border border-transparent hover:border-gray-100 shadow-none hover:shadow-sm transition-all duration-200 group">
                  <div className="flex items-center gap-2.5">
                    <Share2 size={15} className="text-gray-400 group-hover:text-[#D500B8] transition-colors" />
                    <span className="text-[10px] font-black text-gray-700 uppercase tracking-wider">Share Order</span>
                  </div>
                  <ChevronRight size={13} className="text-gray-300 group-hover:text-[#D500B8] group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>
            </div>

            {/* Solid Core Trust Footprint */}
            <div className="bg-gradient-to-br from-[#8A1BDF] via-[#D500B8] to-[#F8009D] rounded-2xl p-5 text-white relative overflow-hidden shadow-none border border-transparent">
              <div className="absolute top-0 right-0 w-24 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative space-y-2.5 text-[10px] font-black uppercase tracking-wider">
                <div className="flex items-center gap-3">
                  <Shield size={14} />
                  <span>Secure Payment System</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award size={14} />
                  <span>Quality Assured Fabrics</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck size={14} />
                  <span>Integrated Priority Fleet</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </main>
    </div>
  );
};

export default OrderTracking;