import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Heart, ShoppingBag, Star, SlidersHorizontal, LayoutGrid, Grid, ArrowLeft, Sparkles, TrendingUp, Eye, ChevronDown } from 'lucide-react';

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  
  // Track wishlist items locally and synchronize via localStorage
  const [wishlistIds, setWishlistIds] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Initialize current wishlist allocations from data layers
    const storedWishlist = JSON.parse(localStorage.getItem('user_wishlist')) || [];
    setWishlistIds(storedWishlist.map(item => item.id));
  }, [category]);

  const title = category ? category.replace('-', ' ') : 'Premium Collection';

  const getCategoryImage = () => {
    switch (category) {
      case 'men':
        return 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1200';
      case 'women':
        return 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200';
      case 'kids':
        return 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1200';
      default:
        return 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200';
    }
  };

  // Generate 12 dynamic products mapped to strict system routes
  const items = [...Array(12)].map((_, i) => {
    const basePrice = 1490 + i * 200;
    const tags = ['New', 'Trending', 'Bestseller', 'Limited'];
    return {
      id: `${category || 'item'}-${i + 1}`,
      name: `Premium Luxury ${category || 'Collection'} Statement Piece ${i + 1}`,
      price: basePrice.toLocaleString(),
      originalPrice: Math.floor(basePrice * 1.5).toLocaleString(),
      rating: (4.6 + (i % 4) * 0.1).toFixed(1),
      tag: i % 3 === 0 ? tags[i % 4] : null,
      isNew: i % 5 === 0,
      isTrending: i % 4 === 0,
      img: `${getCategoryImage()}&sig=${category || 'item'}-${i + 1}`,
      size: ['S', 'M', 'L', 'XL'][i % 4]
    };
  });

  // Toggle pipeline to add/remove products from the wishlist node safely
  const handleWishlistToggle = (e, item) => {
    e.stopPropagation(); // Stop parent click event tracking routing
    
    let currentWishlist = JSON.parse(localStorage.getItem('user_wishlist')) || [];
    const isAlreadyWishlisted = currentWishlist.some(wItem => wItem.id === item.id);

    if (isAlreadyWishlisted) {
      // Remove item if clicked again
      currentWishlist = currentWishlist.filter(wItem => wItem.id !== item.id);
    } else {
      // Add standard formatted model product data payload to storage array
      currentWishlist.push({
        id: item.id,
        name: item.name,
        price: item.price,
        originalPrice: item.originalPrice,
        rating: item.rating,
        img: item.img,
        size: item.size
      });
    }

    localStorage.setItem('user_wishlist', JSON.stringify(currentWishlist));
    setWishlistIds(currentWishlist.map(wItem => wItem.id));
    
    // Dispatch a custom storage event to instantly update the Navbar badge responsively
    window.dispatchEvent(new Event('storage'));
  };

  const getTagColor = (tag) => {
    switch (tag) {
      case 'New': return 'from-[#00A8E8] to-[#00D6D6]';
      case 'Trending': return 'from-[#F8009D] to-[#D500B8]';
      case 'Bestseller': return 'from-[#F04A00] to-[#F8009D]';
      case 'Limited': return 'from-[#8A1BDF] to-[#D500B8]';
      default: return 'from-[#F8009D] to-[#8A1BDF]';
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] font-quicksand font-bold antialiased text-gray-900 selection:bg-[#F8009D] selection:text-white">
      <Navbar />

      <main className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-12 pt-28 md:pt-36 pb-20">
        
        {/* === PREMIUM HERO BANNER === */}
        <section 
          className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden shadow-sm mb-10 relative min-h-[380px] lg:min-h-[440px] font-quicksand"
          style={{
            background: 'linear-gradient(135deg, #F04A00 0%, #F8009D 16%, #D500B8 32%, #8A1BDF 48%, #00A8E8 64%, #00D6D6 80%, #00C9A7 100%)'
          }}
        >
          {/* Decorative blur orbs for depth */}
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#00C9A7]/20 rounded-full blur-3xl pointer-events-none" />
          
          {/* Left Side: Text Content */}
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between text-white relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-md rounded-lg border border-white/20 mb-6">
                <span className="text-[10px] font-black uppercase tracking-wider">Premium Line</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] uppercase italic capitalize mb-4">
                {title}
              </h1>
              <div className="h-1 w-12 bg-white rounded-full mb-6" />
            </div>
            
            <p className="text-white/90 text-xs sm:text-sm font-bold tracking-wide max-w-sm leading-relaxed">
              Discover precision-tailored silhouettes engineered for luxury comfort and elite performance.
            </p>
          </div>
          
          {/* Right Side: Background-Removed Image (No Box) */}
<div className="lg:col-span-7 relative flex items-center justify-center p-8 md:p-12">
  <div className="w-full h-full max-h-[400px] flex items-center justify-center rounded-3xl overflow-hidden">
    <img 
      src={getCategoryImage()} 
      alt={`${title} Campaign`} 
      className="w-full h-full max-h-[400px] object-cover rounded-3xl drop-shadow-2xl" 
    />
  </div>
</div>
        </section>

        {/* === FILTER & UTILITY BAR === */}
        <section className="bg-white border border-gray-100 rounded-xl p-3 md:p-4 mb-8 shadow-sm sticky top-24 z-40 backdrop-blur-md bg-white/95 font-quicksand">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Left Hand Utilities */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <button onClick={() => navigate('/')} className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-gray-400 hover:text-[#D500B8] transition-colors group">
                <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" /> 
                <span>Back</span>
              </button>
              <div className="hidden md:block h-4 w-px bg-gray-200" />
              <div className="text-xs font-bold text-gray-500">
                <span className="text-[#D500B8] font-black">{items.length}</span> Premium Products Found
              </div>
            </div>

            {/* Right Hand Context Control Handles */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-black uppercase tracking-wider text-gray-700 hover:bg-gray-100 transition-colors">
                <SlidersHorizontal size={13} />
                <span>Filters Matrix</span>
              </button>

              {/* Sort Order Selector Dropdown */}
              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none flex items-center gap-2 px-4 py-2 pr-9 bg-gray-50 border border-gray-100 rounded-xl text-xs font-black uppercase tracking-wider text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer outline-none"
                >
                  <option value="featured">Featured Index</option>
                  <option value="newest">Fresh Drops</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated Vault</option>
                </select>
                <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              {/* View Matrix Toggles */}
              <div className="hidden md:flex items-center gap-1 bg-gray-50 border border-gray-100 p-1 rounded-xl">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-gradient-to-r from-[#F8009D] to-[#D500B8] text-white shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <LayoutGrid size={13} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-all ${viewMode === 'list' ? 'bg-gradient-to-r from-[#F8009D] to-[#D500B8] text-white shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <Grid size={13} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* === HIGH-DENSITY GRID SECTION === */}
        <section className="w-full">
          <div className={`grid gap-4 md:gap-5 ${viewMode === 'grid' ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2'}`}>
            {items.map((item) => {
              const isWishlisted = wishlistIds.includes(item.id);
              return (
                <div 
                  key={item.id}
                  onClick={() => navigate(`/product/${item.id}`)}
                  className={`group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden ${viewMode === 'list' ? 'flex' : 'flex flex-col'} hover:-translate-y-0.5 font-quicksand`}
                >
                  {/* Visual Media Canvas container block */}
                  <div className={`relative overflow-hidden bg-gray-50 ${viewMode === 'list' ? 'w-40 sm:w-48 flex-shrink-0' : 'aspect-[3/4]'}`}>
                    <img 
                      src={item.img} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
                      alt={item.name} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Absolute Matrix Action Drawer Nodes */}
                    <div className={`absolute top-2.5 right-2.5 flex flex-col gap-1.5 ${viewMode === 'grid' ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'} transition-all duration-200 z-20`}>
                      <button 
                        onClick={(e) => handleWishlistToggle(e, item)} 
                        className={`p-2 rounded-xl shadow-md transition-all active:scale-95 border ${
                          isWishlisted 
                            ? 'bg-[#F8009D] border-[#F8009D] text-white' 
                            : 'bg-white text-gray-700 hover:text-[#F8009D] border-gray-100'
                        }`}
                        aria-label="Toggle Wishlist Allocations"
                      >
                        <Heart size={13} fill={isWishlisted ? "currentColor" : "none"} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); }} 
                        className="p-2 bg-white text-gray-700 hover:text-[#00A8E8] border border-gray-100 rounded-xl shadow-md transition-all active:scale-95"
                      >
                        <ShoppingBag size={13} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); navigate(`/product/${item.id}`); }} 
                        className="p-2 bg-white text-gray-700 hover:text-[#8A1BDF] border border-gray-100 rounded-xl shadow-md transition-all active:scale-95"
                      >
                        <Eye size={13} />
                      </button>
                    </div>

                    {/* Acciting System Tag Layers */}
                    <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5">
                      {item.tag && (
                        <div className={`px-2 py-1 bg-gradient-to-r ${getTagColor(item.tag)} rounded-md shadow-sm`}>
                          <span className="text-[8px] font-black text-white uppercase tracking-wider block">{item.tag}</span>
                        </div>
                      )}
                      {item.isNew && (
                        <div className="px-2 py-1 bg-gradient-to-r from-[#00A8E8] to-[#00D6D6] rounded-md shadow-sm">
                          <span className="text-[8px] font-black text-white uppercase tracking-wider block">New</span>
                        </div>
                      )}
                      {item.isTrending && (
                        <div className="flex items-center gap-0.5 px-2 py-1 bg-gradient-to-r from-[#F04A00] to-[#F8009D] rounded-md shadow-sm">
                          <TrendingUp size={9} className="text-white" />
                          <span className="text-[8px] font-black text-white uppercase tracking-wider">Hot</span>
                        </div>
                      )}
                    </div>

                    {/* Micro Proportional Value Reduction Badge */}
                    <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 bg-zinc-950/80 backdrop-blur-sm rounded-md">
                      <span className="text-[9px] font-black text-white">
                        {Math.round((1 - parseInt(item.price.replace(',', '')) / parseInt(item.originalPrice.replace(',', ''))) * 100)}% OFF
                      </span>
                    </div>
                  </div>

                  {/* Info and Navigation Interface Metadata block */}
                  <div className="p-3.5 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <span className="text-[8px] font-black uppercase tracking-wider text-[#D500B8] block mb-1">
                        Chiramel Garments
                      </span>
                      <h2 className="text-xs font-bold text-gray-800 tracking-wide line-clamp-2 group-hover:text-[#D500B8] transition-colors leading-snug min-h-[36px] mb-2 font-quicksand">
                        {item.name}
                      </h2>
                    </div>

                    {/* Data Metrics & Execution Line Frame */}
                    <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs font-black text-gray-950">₹{item.price}</span>
                        <span className="text-[9px] text-gray-400 line-through font-bold">₹{item.originalPrice}</span>
                      </div>
                      <div className="flex items-center gap-0.5 text-amber-500 text-[10px] font-black bg-amber-500/5 px-1.5 py-0.5 rounded-md">
                        <Star size={10} fill="currentColor" />
                        <span className="text-amber-600">{item.rating}</span>
                      </div>
                    </div>

                    {/* Trigger Link Router Execution Handle */}
                    <button 
                      onClick={(e) => { e.stopPropagation(); navigate(`/product/${item.id}`); }}
                      className="mt-3 w-full py-2 bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] text-white text-[10px] font-black uppercase tracking-wider rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* === LOAD MORE FOOTER CONTROL === */}
        <div className="mt-14 text-center">
          <button className="px-8 py-3.5 bg-white border border-gray-200 text-gray-600 text-xs font-black uppercase tracking-wider rounded-xl hover:border-[#D500B8] hover:text-[#D500B8] transition-all shadow-none">
            Load More Products
          </button>
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;