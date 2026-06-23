import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Lock, Sparkles, AlertCircle } from 'lucide-react';

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Signature Silk Heritage Shirt",
      price: 6450,
      size: "M",
      qty: 1,
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800"
    },
    {
      id: 2,
      name: "Luxe Linen Classic Blazer",
      price: 8450,
      size: "L",
      qty: 1,
      img: "https://images.unsplash.com/photo-1617137964095-74e4e5e3613f?w=800"
    }
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = subtotal > 10000 ? 0 : 150;
  const total = subtotal + shipping;

  const updateQty = (id, delta) => {
    setCartItems(items => items.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] font-quicksand font-bold antialiased text-gray-900 selection:bg-[#e11d48] selection:text-white">
      <Navbar />

      <main className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-8 pt-[120px] md:pt-[120px] pb-26">
        
        {/* --- LUXURY PAGE HEADER --- */}
        <header className="mb-10 pb-4 border-b border-gray-100 flex items-end justify-between font-quicksand">
          <div>
            <h1 className="text-3xl font-black uppercase italic text-gray-900 tracking-tight">Your Bag</h1>
          </div>
          <span className="text-xs text-gray-400 font-black uppercase tracking-widest">[{cartItems.length} Products Selected]</span>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* --- LEFT SIDE: CART ITEMS MODULE --- */}
          <div className="lg:col-span-8 space-y-4 font-quicksand">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-2xl p-4 flex gap-4 md:gap-6 shadow-sm border border-gray-100 group transition-all duration-300 hover:shadow-md"
                >
                  {/* Aspect Locked Media Preview */}
                  <div 
                    className="w-24 sm:w-28 aspect-[3/4] rounded-xl overflow-hidden bg-gray-50 border border-gray-100/60 cursor-pointer flex-shrink-0"
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    <img 
                      src={item.img} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
                      alt={item.name} 
                    />
                  </div>

                  {/* Informational Structure Details */}
                  <div className="flex-grow flex flex-col justify-between py-0.5">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <span className="text-[9px] font-black uppercase text-gray-400 tracking-wider block mb-0.5">Premium Line</span>
                          <h3 
                            onClick={() => navigate(`/product/${item.id}`)}
                            className="text-sm font-bold text-gray-900 tracking-wide line-clamp-1 hover:text-[#f05a28] cursor-pointer transition-colors"
                          >
                            {item.name}
                          </h3>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)} 
                          className="p-1.5 text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 rounded-xl transition-colors flex-shrink-0 border border-gray-100/30"
                          title="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      <div className="flex gap-4 mt-2">
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          Size: <span className="text-gray-900 font-black">{item.size}</span>
                        </span>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          Unit: <span className="text-gray-900 font-black">₹{item.price.toLocaleString()}</span>
                        </span>
                      </div>
                    </div>

                    {/* Operational Toggles Control Footer */}
                    <div className="flex justify-between items-end mt-4 pt-3 border-t border-gray-50">
                      <div className="flex items-center gap-3.5 bg-gray-50 rounded-xl px-3 py-1.5 border border-gray-100">
                        <button 
                          onClick={() => updateQty(item.id, -1)} 
                          className="text-gray-400 hover:text-black transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={11} strokeWidth={3} />
                        </button>
                        <span className="text-xs font-black min-w-[12px] text-center text-gray-900">{item.qty}</span>
                        <button 
                          onClick={() => updateQty(item.id, 1)} 
                          className="text-gray-400 hover:text-black transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={11} strokeWidth={3} />
                        </button>
                      </div>
                      <p className="text-base font-black text-gray-950 tracking-tight">
                        ₹{(item.price * item.qty).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              /* High-Density Empty State View */
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center text-gray-300 mx-auto mb-4 border border-gray-100">
                  <ShoppingBag size={24} />
                </div>
                <h3 className="text-base font-bold text-gray-800 uppercase tracking-wider mb-2">Your Bag is Empty</h3>
                <p className="text-xs text-gray-400 font-bold mb-6 max-w-xs mx-auto">Looks like you haven't added any premium statements to your order yet.</p>
                <button 
                  onClick={() => navigate('/')} 
                  className="bg-gradient-to-r from-[#8A1BDF] to-[#D500B8] text-white text-[10px] font-black tracking-widest uppercase px-6 py-3.5 rounded-xl hover:opacity-95 transition-all shadow-sm"
                >
                  Explore Collections
                </button>
              </div>
            )}
          </div>

          {/* --- RIGHT SIDE: SUMMARY SHEET INTERFACE --- */}
          <div className="lg:col-span-4 pb-20 md:pb-0 font-quicksand">
            <div className="bg-white rounded-2xl p-5 lg:p-6 border border-gray-100 shadow-sm lg:sticky lg:top-[160px]">
              <div className="flex items-center gap-1.5 mb-6 pb-4 border-b border-gray-100 justify-center">
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Order Summary</h3>
              </div>
              
              <div className="space-y-3.5 mb-6">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-gray-400 uppercase tracking-wider">Subtotal</span>
                  <span className="text-gray-900 font-black">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-gray-400 uppercase tracking-wider">Shipping Fee</span>
                  <span className="text-gray-900">{shipping === 0 ? <span className="text-emerald-600 font-black">FREE</span> : `₹${shipping}`}</span>
                </div>
                
                {shipping > 0 && (
                  <div className="bg-orange-50/50 border border-orange-100/60 rounded-xl p-2.5 flex gap-2 items-start">
                    <AlertCircle size={12} className="text-orange-600 mt-0.5 flex-shrink-0" />
                    <p className="text-[10px] text-orange-700 font-bold leading-tight">Add ₹{(10000 - subtotal).toLocaleString()} more to unlock absolute Free Shipping!</p>
                  </div>
                )}

                <div className="h-[1px] bg-gray-100 w-full my-1" />
                <div className="flex justify-between items-baseline pt-1">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-900">Estimated Total</span>
                  <span className="text-2xl font-black tracking-tight text-gray-950">₹{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Promo input drop section */}
              <div className="mb-6 pt-4 border-t border-gray-50">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="ENTER PROMO CODE" 
                    className="flex-grow bg-gray-50/80 text-xs font-bold uppercase tracking-wider text-gray-800 placeholder-gray-300 rounded-xl px-4 py-3 outline-none border border-transparent focus:border-gray-100 focus:bg-white transition-all" 
                  />
                  <button className="bg-gray-900 text-white px-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-800 transition-colors">Apply</button>
                </div>
              </div>

              {/* Primary Checkout Dispatcher Call Button */}
              <button 
                onClick={() => navigate('/checkout/shipping')}
                disabled={cartItems.length === 0}
                className="w-full bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] text-white py-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:opacity-95 shadow-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed group"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              
              <div className="flex items-center justify-center gap-1.5 text-gray-400 pt-4 text-[9px] font-bold uppercase tracking-wider">
                <Lock size={11} className="text-gray-400" />
                <ShieldCheck size={11} className="text-emerald-500" />
                <span>100% Encrypted SSL Connection</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- MOBILE FIXED FLOATING BOTTOM UTILITY ACTION BAR --- */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-100 p-4 z-[110] md:hidden flex items-center justify-between shadow-[0_-12px_30px_rgba(0,0,0,0.08)] font-quicksand">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase font-black text-gray-400 tracking-wider">Total Bag cost</span>
            <span className="text-lg font-black tracking-tight text-gray-950">₹{total.toLocaleString()}</span>
          </div>
          <button 
            onClick={() => navigate('/checkout/shipping')}
            className="bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] text-white px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest active:scale-98 transition-all shadow-sm"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;