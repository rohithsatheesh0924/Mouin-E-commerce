import React from 'react';
import { ChevronRight, Heart, ShoppingBag, Star, TrendingUp, Award, Zap, ArrowRight, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const products = {
    trending: [
      { id: 't1', name: "Oversized Graphic Tee", price: "799", originalPrice: "1,499", rating: "4.8", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500", badge: "Hot" },
      { id: 't2', name: "Luxe Linen Shirt", price: "1,290", originalPrice: "2,199", rating: "4.7", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500", badge: "New" },
      { id: 't3', name: "Cargo Pants", price: "1,899", originalPrice: "2,999", rating: "4.9", img: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?w=500", badge: "Trending" },
      { id: 't4', name: "Relaxed Fit Sweater", price: "1,499", originalPrice: "2,499", rating: "4.6", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500" },
      { id: 't5', name: "Floral Print Dress", price: "1,799", originalPrice: "2,999", rating: "4.8", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500", badge: "Hot" },
      { id: 't6', name: "Classic Denim Jacket", price: "2,199", originalPrice: "3,499", rating: "4.7", img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500", badge: "New" }
    ],
    newArrivals: [
      { id: 'n1', name: "Classic Cotton Polo", price: "999", originalPrice: "1,799", rating: "4.5", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500", badge: "New" },
      { id: 'n2', name: "Premium Denim Jacket", price: "2,499", originalPrice: "3,999", rating: "4.9", img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500", badge: "New" },
      { id: 'n3', name: "Pleated Midi Skirt", price: "1,350", originalPrice: "2,299", rating: "4.6", img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500", badge: "New" },
      { id: 'n4', name: "Tailored Slim Chinos", price: "1,699", originalPrice: "2,799", rating: "4.7", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500", badge: "New" },
      { id: 'n5', name: "Knitted Summer Vest", price: "1,190", originalPrice: "1,999", rating: "4.4", img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500", badge: "New" }
    ],
    bestsellers: [
      { id: 'b1', name: "Oxford Button Down", price: "1,290", originalPrice: "2,199", rating: "4.9", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500", badge: "Bestseller" },
      { id: 'b2', name: "Silk Wrap Evening Gown", price: "4,250", originalPrice: "6,999", rating: "5.0", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500", badge: "Bestseller" },
      { id: 'b3', name: "Luxe Linen Blazer", price: "3,800", originalPrice: "5,999", rating: "4.8", img: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=500", badge: "Bestseller" },
      { id: 'b4', name: "Lightweight Field Bomber", price: "2,890", originalPrice: "4,500", rating: "4.7", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500", badge: "Bestseller" },
      { id: 'b5', name: "Breton Striped Pullover", price: "1,590", originalPrice: "2,499", rating: "4.6", img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500", badge: "Bestseller" }
    ]
  };

  const categories = [
    { label: "T-Shirt", count: "120+ Items", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=300", color: "from-[#F8009D] to-[#D500B8]" },
    { label: "Shirts", count: "85+ Items", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300", color: "from-[#8A1BDF] to-[#D500B8]" },
    { label: "Dresses", count: "95+ Items", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300", color: "from-[#F04A00] to-[#F8009D]" },
    { label: "Bottomwear", count: "140+ Items", img: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?w=300", color: "from-[#00A8E8] to-[#00D6D6]" },
    { label: "Ethnic Wear", count: "110+ Items", img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300", color: "from-[#F8009D] to-[#8A1BDF]" },
    { label: "Jackets", count: "65+ Items", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300", color: "from-[#D500B8] to-[#8A1BDF]" },
    { label: "Activewear", count: "75+ Items", img: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=300", color: "from-[#00D6D6] to-[#00C9A7]" },
    { label: "Footwear", count: "60+ Items", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300", color: "from-[#F04A00] to-[#D500B8]" }
  ];

  const getBadgeColor = (badge) => {
    switch(badge) {
      case 'Hot': return 'from-[#F04A00] to-[#F8009D]';
      case 'New': return 'from-[#00A8E8] to-[#00D6D6]';
      case 'Trending': return 'from-[#F8009D] to-[#D500B8]';
      case 'Bestseller': return 'from-[#8A1BDF] to-[#D500B8]';
      default: return 'from-[#F8009D] to-[#D500B8]';
    }
  };

  const handleEyeClick = (e, productId) => {
    e.stopPropagation();
    navigate(`/product/${productId}`);
  };

  const handleHeartClick = (e) => {
    e.stopPropagation();
    navigate('/wishlist');
  };

  const handleBagClick = (e, productId) => {
    e.stopPropagation();
    console.log('Added to cart:', productId);
  };

  const renderProductCard = (item) => (
    <div 
      key={item.id} 
      onClick={() => navigate(`/product/${item.id}`)} 
      className="group cursor-pointer bg-white rounded-3xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden font-quicksand"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img 
          src={item.img} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          alt={item.name} 
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Badge */}
        {item.badge && (
          <div className={`absolute top-3 left-3 px-3 py-1.5 bg-gradient-to-r ${getBadgeColor(item.badge)} rounded-xl shadow-lg`}>
            <span className="text-[9px] font-bold text-white uppercase tracking-wider">{item.badge}</span>
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 lg:translate-x-2 lg:group-hover:translate-x-0">
          <button 
            onClick={(e) => handleHeartClick(e)}
            className="p-2.5 bg-white/95 backdrop-blur-md text-gray-700 hover:text-[#F8009D] rounded-xl shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Add to wishlist"
          >
            <Heart size={14} />
          </button>
          <button 
            onClick={(e) => handleBagClick(e, item.id)}
            className="p-2.5 bg-white/95 backdrop-blur-md text-gray-700 hover:text-[#00A8E8] rounded-xl shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Add to cart"
          >
            <ShoppingBag size={14} />
          </button>
          <button 
            onClick={(e) => handleEyeClick(e, item.id)}
            className="p-2.5 bg-white/95 backdrop-blur-md text-gray-700 hover:text-[#8A1BDF] rounded-xl shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Quick view"
          >
            <Eye size={14} />
          </button>
        </div>

        {/* Discount Badge */}
        <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-sm rounded-lg">
          <span className="text-[10px] font-bold text-white">
            {Math.round((1 - parseInt(item.price.replace(',', '')) / parseInt(item.originalPrice.replace(',', ''))) * 100)}% OFF
          </span>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-sm font-bold text-gray-800 tracking-wide line-clamp-2 group-hover:text-[#D500B8] transition-colors leading-snug min-h-[40px] mb-3">
          {item.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-3">
          <Star size={12} fill="currentColor" className="text-amber-500" />
          <span className="text-xs font-bold text-amber-600">{item.rating}</span>
          <span className="text-[10px] text-gray-400 font-bold ml-1">(128)</span>
        </div>
        
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-gray-900">₹{item.price}</span>
          <span className="text-xs text-gray-400 line-through font-bold">₹{item.originalPrice}</span>
        </div>

        {/* Quick Add Button */}
        <button 
          onClick={(e) => handleBagClick(e, item.id)}
          className="w-full mt-4 py-2.5 bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] text-white text-xs font-bold uppercase tracking-wider rounded-xl lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 hover:shadow-lg active:scale-95"
        >
          Quick Add
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 antialiased text-gray-900 selection:bg-[#F8009D] selection:text-white font-quicksand font-bold">
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-28 md:pt-32 pb-20">
        
        {/* === HERO SECTION === */}
        <section 
          className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden shadow-sm mb-10 relative min-h-[400px] lg:min-h-[520px]"
          style={{
            background: 'linear-gradient(135deg, #F04A00 0%, #F8009D 16%, #D500B8 32%, #8A1BDF 48%, #00A8E8 64%, #00D6D6 80%, #00C9A7 100%)'
          }}
        >
          {/* Decorative blur orbs for depth */}
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#00C9A7]/20 rounded-full blur-3xl pointer-events-none" />
          
          {/* Left Side: Text Content */}
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center text-white relative z-10">
            <div className="space-y-6">
              {/* High-Density Content Identification Tag */}
              <div className="w-fit bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00D6D6] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">New Collection 2026</span>
              </div>

              {/* Clear Minimalist Heading Lockup */}
              <div className="space-y-3">
                <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.05] italic">
                  Fashion<br />for Every You
                </h1>
                <div className="h-1 w-16 bg-white rounded-full" />
              </div>

              <p className="text-white/90 text-xs sm:text-sm font-bold tracking-wide max-w-sm leading-relaxed">
                Discover precision-tail silhouettes engineered for luxury comfort and elite personal performance. Celebrate your unique perspective.
              </p>

              {/* High-Definition Call-To-Action Pipeline Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button 
                  onClick={() => navigate('/shop/men')} 
                  className="bg-white text-gray-950 text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded-xl hover:bg-black/20 hover:text-white transition-all duration-200 shadow-sm flex items-center gap-1.5 group"
                >
                  <span>Shop Men</span> 
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
                
                <button 
                  onClick={() => navigate('/shop/women')} 
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded-xl hover:bg-white hover:text-gray-950 transition-all duration-200 shadow-sm"
                >
                  Shop Women
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Background-Removed Image */}
          <div className="lg:col-span-7 relative flex items-center justify-center p-8 md:p-12">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600" 
              alt="Fashion Showcase Campaign" 
              className="w-full h-full max-h-[500px] object-contain drop-shadow-2xl" 
            />
          </div>
        </section>

        {/* === CATEGORIES SECTION === */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Shop By Category</h2>
              <div className="h-1.5 w-16 bg-gradient-to-r from-[#F8009D] to-[#8A1BDF] mt-2 rounded-full" />
            </div>
            <button onClick={() => navigate('/shop/all')} className="text-xs font-bold text-[#D500B8] hover:text-[#8A1BDF] transition-colors flex items-center gap-1 uppercase tracking-wider">
              View All <ChevronRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                onClick={() => navigate(`/shop/${cat.label.toLowerCase()}`)}
                className="group cursor-pointer relative overflow-hidden rounded-3xl aspect-square bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <img src={cat.img} alt={cat.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-1">{cat.label}</h3>
                  <p className="text-[10px] font-bold text-white/80/80">{cat.count}</p>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 lg:translate-x-2 lg:group-hover:translate-x-0">
                  <ArrowRight size={14} className="text-gray-900" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === TRENDING NOW === */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={18} className="text-[#F04A00]" />
                <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Trending Now</h2>
              </div>
              <div className="h-1.5 w-16 bg-gradient-to-r from-[#F04A00] to-[#F8009D] rounded-full" />
            </div>
            <button onClick={() => navigate('/shop/trending')} className="text-xs font-bold text-[#D500B8] hover:text-[#8A1BDF] transition-colors flex items-center gap-1 uppercase tracking-wider">
              View All <ChevronRight size={14} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.trending.map((item) => renderProductCard(item))}
          </div>
        </section>

        {/* === SUMMER EDIT BANNER === */}
        <section 
          className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden shadow-sm mb-10 w-full relative min-h-[380px] lg:min-h-[440px]"
          style={{
            background: 'linear-gradient(135deg, #F04A00 0%, #F8009D 16%, #D500B8 32%, #8A1BDF 48%, #00A8E8 64%, #00D6D6 80%, #00C9A7 100%)'
          }}
        >
          {/* Decorative blur orbs for depth */}
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#00C9A7]/20 rounded-full blur-3xl pointer-events-none" />
          
          {/* Left Side: Background-Removed Image */}
          <div className="lg:col-span-7 relative flex items-center justify-center p-8 md:p-12">
            <img 
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1600" 
              alt="Summer Collection Showcase" 
              className="w-full h-full max-h-[400px] object-contain drop-shadow-2xl" 
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center text-white relative z-10">
            <div className="space-y-5">
              {/* High-Density Content Identification Tag */}
              <div className="w-fit bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 flex items-center gap-2">
                <Zap size={11} className="text-yellow-300" fill="currentColor" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">Limited Edition</span>
              </div>

              {/* Heading & Accent Lockup */}
              <div className="space-y-3">
                <h2 className="text-3xl lg:text-4xl font-black italic tracking-tight leading-tight">
                  Summer Edit '26
                </h2>
                <div className="h-1 w-16 bg-white rounded-full" />
              </div>

              <p className="text-white/90 text-xs sm:text-sm font-bold tracking-wide max-w-sm leading-relaxed">
                Lightweight fabrics engineered for flawless style and daily comfort. Premium quality textiles designed to meet active seasonal trends.
              </p>

              {/* Primary Call-to-Action button */}
              <div className="pt-2">
                <button 
                  onClick={() => navigate('/shop/summer-edit')} 
                  className="bg-white text-gray-950 text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded-xl hover:bg-black/20 hover:text-white transition-all duration-200 shadow-sm flex items-center gap-1.5 group"
                >
                  <span>Shop Collection</span> 
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* === NEW ARRIVALS === */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                {/* Professional Technical Status Badge */}
                <div className="w-fit bg-gradient-to-r from-[#00A8E8] to-[#00D6D6] text-white text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-md shadow-sm">
                  New Drop
                </div>
                
                {/* Clean Minimalist Typography Heading */}
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight italic">
                  Fresh Drop: New Arrivals
                </h2>
              </div>
              <div className="h-1.5 w-16 bg-gradient-to-r from-[#00A8E8] via-[#00D6D6] to-[#00C9A7] rounded-full" />
            </div>
            <button onClick={() => navigate('/shop/new-arrivals')} className="text-xs font-bold text-[#00A8E8] hover:text-black transition-colors flex items-center gap-1 uppercase tracking-wider">
              See All <ChevronRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.newArrivals.map((item) => renderProductCard(item))}
          </div>
        </section>

        {/* === BESTSELLERS === */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Award size={18} className="text-[#8A1BDF]" />
                <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Bestsellers</h2>
              </div>
              <div className="h-1.5 w-16 bg-gradient-to-r from-[#8A1BDF] via-[#F8009D] to-[#F04A00] rounded-full" />
            </div>
            <button onClick={() => navigate('/shop/bestsellers')} className="text-xs font-bold text-[#8A1BDF] hover:text-black transition-colors flex items-center gap-1 uppercase tracking-wider">
              View All <ChevronRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.bestsellers.map((item) => renderProductCard(item))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default Home;