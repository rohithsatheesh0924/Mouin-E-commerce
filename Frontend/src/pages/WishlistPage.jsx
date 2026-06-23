import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Trash2, ShoppingBag, Star, ArrowLeft, Heart, Sparkles, ArrowRight } from 'lucide-react';

const WishlistPage = () => {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState([]);

  // Load wishlist items from standard local allocation nodes
  const loadWishlist = () => {
    const storedWishlist = JSON.parse(localStorage.getItem('user_wishlist')) || [];
    setWishlistItems(storedWishlist);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    loadWishlist();

    // Event listener hook to handle real-time sync changes across tabs/components
    window.addEventListener('storage', loadWishlist);
    return () => window.removeEventListener('storage', loadWishlist);
  }, []);

  // Remove single allocation coordinate out of storage array
  const handleRemoveItem = (id) => {
    const storedWishlist = JSON.parse(localStorage.getItem('user_wishlist')) || [];
    const updatedWishlist = storedWishlist.filter(item => item.id !== id);
    localStorage.setItem('user_wishlist', JSON.stringify(updatedWishlist));
    setWishlistItems(updatedWishlist);
    
    // Notify header components responsively
    window.dispatchEvent(new Event('storage'));
  };

  // Completely wipe storage array
  const handleClearWishlist = () => {
    localStorage.removeItem('user_wishlist');
    setWishlistItems([]);
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] font-quicksand antialiased text-gray-900 selection:bg-[#F8009D] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-12 pt-28 md:pt-36 pb-20 flex-grow">
          
          {/* === BREADCRUMB & HEADER LOCKUP === */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-100">
            <div className="space-y-1">
              <button 
                onClick={() => navigate(-1)} 
                className="flex items-center gap-1 text-xs font-black uppercase tracking-wider text-gray-400 hover:text-[#D500B8] transition-colors group mb-1"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" /> 
                <span>Back to Hub</span>
              </button>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900 italic">
                  My Curation Vault
                </h1>
                <span className="text-[10px] font-black text-[#F8009D] bg-[#F8009D]/5 border border-[#F8009D]/10 px-2.5 py-0.5 rounded-md font-nunito tracking-wider uppercase">
                  {wishlistItems.length} Items Saved
                </span>
              </div>
            </div>

            {wishlistItems.length > 0 && (
              <button 
                onClick={handleClearWishlist}
                className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-red-500 transition-colors font-nunito border border-gray-200 hover:border-red-100 px-4 py-2 bg-white rounded-xl shadow-sm"
              >
                Clear Entire Vault
              </button>
            )}
          </div>

          {/* === INTERACTIVE ITEMS CONTENT MATRIX === */}
          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              {wishlistItems.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => navigate(`/product/${item.id}`)}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between hover:-translate-y-0.5 relative"
                >
                  {/* Image Holder Canvas Frame */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 flex-shrink-0">
                    <img 
                      src={item.img} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
                      alt={item.name} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Absolute Delete Dispatch Trigger Anchor */}
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleRemoveItem(item.id); }}
                      className="absolute top-2.5 right-2.5 p-2 bg-white/95 backdrop-blur-sm text-gray-400 hover:text-red-500 rounded-xl shadow-md transition-all active:scale-95 z-20"
                      aria-label="Remove Product From Local Storage Node"
                    >
                      <Trash2 size={13} />
                    </button>

                    {/* Meta Aspect Label Tag Badge */}
                    {item.size && (
                      <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 bg-zinc-950/80 backdrop-blur-sm rounded-md font-nunito">
                        <span className="text-[9px] font-black text-white uppercase tracking-wider">
                          Allocated Size: {item.size}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info Meta Detail Block Context */}
                  <div className="p-3.5 flex flex-col flex-grow justify-between">
                    <div className="font-nunito">
                      <span className="text-[8px] font-black uppercase tracking-wider text-[#D500B8] block mb-1">
                        Chiramel Garments
                      </span>
                      <h3 className="text-xs font-bold text-gray-800 tracking-wide line-clamp-2 leading-snug min-h(36px) mb-2 font-quicksand group-hover:text-[#D500B8] transition-colors">
                        {item.name}
                      </h3>
                      
                      <div className="flex items-center gap-0.5 text-amber-500 text-[10px] font-black bg-amber-500/5 px-1.5 py-0.5 rounded-md w-fit mb-3">
                        <Star size={10} fill="currentColor" />
                        <span className="text-amber-600">{item.rating || '4.8'}</span>
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-gray-100 font-nunito">
                      <div className="flex items-baseline gap-1.5 mb-3">
                        <span className="text-sm font-black text-gray-950">₹{item.price}</span>
                        {item.originalPrice && (
                          <span className="text-[10px] text-gray-400 line-through font-semibold">₹{item.originalPrice}</span>
                        )}
                      </div>

                      {/* Direct Buy Pipeline Router Trigger */}
                      <button 
                        onClick={(e) => { e.stopPropagation(); navigate(`/checkout?id=${item.id}`); }}
                        className="w-full py-2.5 bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] text-white text-[10px] font-black uppercase tracking-wider rounded-xl shadow-sm hover:opacity-95 transition-all flex items-center justify-center gap-1"
                      >
                        <span>Buy Now</span>
                        <ArrowRight size={11} />
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            /* === EMPTY STATE LEDGER BANNER === */
            <div className="py-24 text-center max-w-sm mx-auto animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F8009D]/10 to-[#8A1BDF]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#F8009D]/10">
                <Heart size={24} className="text-[#D500B8]" />
              </div>
              <h3 className="text-base font-black text-gray-900 uppercase tracking-wider mb-1">
                Your Vault is Empty
              </h3>
              <p className="text-xs text-gray-400 font-medium leading-relaxed font-nunito max-w-xs mb-6">
                You haven't preserved any luxury statement pieces inside your curation vault yet.
              </p>
              <button 
                onClick={() => navigate('/')} 
                className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-[#F04A00] via-[#F8009D] to-[#8A1BDF] text-white text-[10px] font-black uppercase tracking-[0.15em] rounded-xl hover:opacity-95 transition-opacity shadow-md"
              >
                Explore Curated Lines
              </button>
            </div>
          )}

        </main>
      </div>

      <Footer />
    </div>
  );
};

export default WishlistPage;