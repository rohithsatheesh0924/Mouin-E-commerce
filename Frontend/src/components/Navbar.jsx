import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Search, 
  User, 
  ShoppingBag, 
  Heart, 
  Menu, 
  MapPin, 
  X,
  ChevronRight,
  ChevronDown,
  Phone,
  Mail,
  Truck,
  HelpCircle,
  Flame,
  LogOut
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const userMenuRef = useRef(null);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus instantly upon switching application routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCartOpen(false);
    setIsUserMenuOpen(false);
    setIsMegaMenuOpen(null);
    setShowSearchOverlay(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    { 
      name: 'Men', 
      path: '/shop/men',
      categories: ['T-Shirts', 'Shirts', 'Jeans', 'Trousers', 'Jackets', 'Suits', 'Activewear', 'Ethnic Wear'],
      featured: { title: 'New Arrivals', img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400', link: '/shop/men/new' }
    },
    { 
      name: 'Women', 
      path: '/shop/women',
      categories: ['Dresses', 'Tops', 'Jeans', 'Skirts', 'Sarees', 'Kurtas', 'Gowns', 'Activewear'],
      featured: { title: 'Trending Now', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400', link: '/shop/women/trending' }
    },
    { 
      name: 'Kids', 
      path: '/shop/kids',
      categories: ['Boys', 'Girls', 'Infants', 'Toys', 'School Uniforms', 'Party Wear', 'Casual Wear'],
      featured: { title: 'Kids Special', img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400', link: '/shop/kids/special' }
    },
    { 
      name: 'Collections', 
      path: '/shop/collections',
      categories: ['Summer Edit', 'Winter Warmth', 'Festive Collection', 'Bridal Wear', 'Office Wear', 'Party Collection'],
      featured: { title: 'Exclusive', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400', link: '/shop/collections/exclusive' }
    },
  ];

  const trendingSearches = ['Summer Dresses', 'Linen Shirts', 'Cargo Pants', 'Silk Sarees', 'Denim Jackets'];

  const cartItems = [
    { id: 1, name: 'Oversized Graphic Tee', price: '799', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=200', qty: 1 },
    { id: 2, name: 'Classic Cotton Polo', price: '999', img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=200', qty: 2 }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSearchOverlay(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md border-b border-gray-100' : 'bg-white'}`}>
        
        {/* === 01. CLEAN ANNOUNCEMENT TOP BAR === */}
       <div 
  className="hidden sm:block text-white py-2 px-4 md:px-8 text-[10px] md:text-[11px] font-black uppercase tracking-wider"
  style={{
    background: 'linear-gradient(90deg, #F04A00 0%, #F8009D 16%, #D500B8 32%, #8A1BDF 48%, #00A8E8 64%, #00D6D6 80%, #00C9A7 100%)'
  }}
>
  <div className="max-w-[1340px] mx-auto flex justify-between items-center">
    <div className="flex items-center gap-4 text-white/90">
      <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer font-nunito">
        <Phone size={11} /> +91 98765 43210
      </a>
      <a href="mailto:support@chiramel.com" className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer font-nunito">
        <Mail size={11} /> support@chiramel.com
      </a>
    </div>
    
    <div className="flex items-center gap-4 text-white/90 font-nunito">
      <button onClick={() => navigate('/track-order')} className="flex items-center gap-1.5 hover:text-white transition-colors">
        <Truck size={11} /> Track Order
      </button>
      <button onClick={() => navigate('/contact')} className="flex items-center gap-1.5 hover:text-white transition-colors">
        <HelpCircle size={11} /> Help
      </button>
    </div>
  </div>
</div>

        {/* === 02. MAIN NAV CONTAINER BRAND HEADER === */}
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-12 py-2.5 sm:py-3 md:py-4">
          <div className="flex items-center justify-between gap-4">
            
            {/* Mobile View Toggle Button Container */}
            <button 
              className="lg:hidden p-2 -ml-2 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors min-w-[40px] min-h-[44px] flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Mobile Navigation Menu"
            >
              <Menu size={24} />
            </button>

            {/* Corporate Logo Identity */}
<Link to="/" className="flex-shrink-0 group">
  <div className="flex flex-col">
    <span 
      className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight bg-clip-text text-transparent font-quicksand leading-none"
      style={{
        backgroundImage: 'linear-gradient(90deg, #F04A00 0%, #F8009D 16%, #D500B8 32%, #8A1BDF 48%, #00A8E8 64%, #00D6D6 80%, #00C9A7 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
    >
      Mouin
    </span>
    <span className="text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-[0.35em] mt-1 group-hover:text-[#F8009D] transition-colors font-nunito">
      Garments
    </span>
  </div>
</Link>

            {/* Desktop Unified Center Search Bar */}
            <div className="hidden lg:flex flex-grow max-w-xl mx-4">
              <form onSubmit={handleSearch} className="relative w-full group">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for premium products, collections..." 
                  className="w-full bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-800 placeholder-gray-300 border-2 border-gray-100 py-3 pl-5 pr-12 rounded-xl outline-none focus:ring-4 focus:ring-[#F8009D]/5 focus:border-[#F8009D] focus:bg-white transition-all duration-300 font-nunito"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-[#F8009D] to-[#D500B8] text-white rounded-lg shadow-sm">
                  <Search size={14} />
                </button>
              </form>
            </div>

            {/* System Right Action Handles */}
            <div className="flex items-center gap-1 sm:gap-2">
              
              {/* Mobile Device Search Toggle */}
              <button 
                className="lg:hidden p-2 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors min-w-[40px] min-h-[44px] flex items-center justify-center"
                onClick={() => setShowSearchOverlay(true)}
                aria-label="Search"
              >
                <Search size={22} />
              </button>

              {/* Geographic Routing Node */}
              <button 
                onClick={() => navigate('/profile')}
                className="hidden md:flex items-center gap-2 px-2.5 py-1.5 text-gray-700 hover:bg-gray-50 rounded-xl transition-all group border border-transparent"
              >
                <MapPin size={16} className="text-gray-400 group-hover:text-[#F8009D] transition-colors" />
                <div className="text-left font-nunito leading-tight">
                  <div className="text-[7px] text-gray-400 font-black uppercase tracking-wider">Deliver to</div>
                  <div className="text-xs font-black text-gray-800 mt-0.5">641604</div>
                </div>
              </button>

              {/* User Dropdown */}
              <div className="relative" ref={userMenuRef}>
                <button 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="p-2 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors relative min-w-[40px] min-h-[44px] flex items-center justify-center"
                  aria-label="User Account Panel"
                >
                  <User size={22} />
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#00C9A7] rounded-full ring-2 ring-white"></span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 sm:w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200 font-nunito z-50">
                    <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-[#F8009D]/5 to-[#8A1BDF]/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F8009D] to-[#8A1BDF] flex items-center justify-center text-white font-black text-sm">
                          R
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-black text-gray-900 truncate">Rohith Raghu</div>
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">Premium Account</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="py-1 text-xs font-black uppercase tracking-wider">
                      <button onClick={() => navigate('/profile')} className="w-full px-4 py-2.5 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors">
                        <User size={14} className="text-gray-400" /> My Profile
                      </button>
                    </div>

                    <div className="border-t border-gray-100 py-1 text-xs font-black uppercase tracking-wider">
                      <button onClick={() => navigate('/login')} className="w-full px-4 py-2.5 text-left text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors">
                        <LogOut size={14} /> Disconnect
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Wishlist Icon link - Correctly points to '/wishlist' across all viewport configurations */}
              <button 
                onClick={() => navigate('/wishlist')}
                className="p-2 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors relative min-w-[40px] min-h-[44px] flex items-center justify-center"
                aria-label="Wishlist Showcase"
              >
                <Heart size={22} />
                <span className="absolute top-1.5 right-1 bg-[#F8009D] text-white text-[8px] font-black rounded-full w-4 h-4 flex items-center justify-center ring-2 ring-white font-nunito">
                  5
                </span>
              </button>

              {/* Cart Drawer Anchor Button */}
<div className="relative font-quicksand" ref={cartRef}>
  <button 
    onClick={() => setIsCartOpen(!isCartOpen)}
    className="p-2 sm:p-2.5 bg-gradient-to-r from-[#8A1BDF] to-[#D500B8] text-white rounded-xl hover:opacity-95 shadow-sm relative transition-all min-w-[42px] min-h-[42px] flex items-center justify-center group"
    aria-label="Shopping Cart Storage"
  >
    <ShoppingBag size={18} className="group-hover:scale-102 transition-transform" />
    
    {/* High-Visibility Professional Badge Control */}
    <span className="absolute -top-1.5 -right-1.5 bg-[#F04A00] text-white text-[9px] font-black rounded-lg w-5 h-5 flex items-center justify-center border-2 border-white shadow-sm">
      {cartItems.length}
    </span>
  </button>

  {/* Dropdown Matrix Overlay */}
  {isCartOpen && (
    <div className="absolute right-0 mt-3 w-76 sm:w-80 bg-white rounded-xl shadow-xl border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200 z-50 overflow-hidden">
      
      {/* Header Panel Curation */}
      <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-[#F8009D]/5 to-[#8A1BDF]/5">
        <div className="flex items-center justify-between">
          <h3 className="text-[10px] font-black uppercase tracking-wider text-gray-900">
            Shopping Bag ({cartItems.length})
          </h3>
          <button 
            onClick={() => setIsCartOpen(false)} 
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-gray-900"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* High-Density Item Scroll Grid List */}
      <div className="max-h-60 overflow-y-auto pr-0.5 no-scrollbar bg-white">
        {cartItems.map((item) => (
          <div key={item.id} className="p-3 border-b border-gray-50 hover:bg-gray-50/40 transition-colors group">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-14 overflow-hidden rounded-lg bg-gray-50 border border-gray-100 flex-shrink-0">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-gray-800 truncate">{item.name}</h4>
                <div className="flex items-center gap-2 mt-1 text-[10px]">
                  <span className="font-black text-gray-950">₹{item.price}</span>
                  <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                  <span className="text-gray-400 font-bold">Qty: {item.qty}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ledger Actions Call Footer panel */}
      <div className="p-4 border-t border-gray-100 bg-gray-50/50 space-y-3.5">
        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider">
          <span className="text-gray-400">Bag Subtotal</span>
          <span className="text-xs text-gray-950">₹2,797</span>
        </div>
        <button 
          onClick={() => { setIsCartOpen(false); navigate('/cart'); }}
          className="w-full py-3 bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] text-white text-[9px] font-black uppercase tracking-[0.15em] rounded-xl hover:opacity-95 transition-all shadow-sm flex items-center justify-center gap-1 group"
        >
          <span>Proceed To Bag Checkout</span>
          <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
      
    </div>
  )}
</div>
            </div>

          </div>
        </div>

        {/* === 03. CATEGORY NAVIGATION DESKTOP BAR === */}
        <div className="hidden lg:block border-t border-gray-100 bg-white">
          <div className="max-w-[1340px] mx-auto px-12">
            <ul className="flex items-center justify-center gap-6 py-1.5">
              {navLinks.map((link) => (
                <li 
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setIsMegaMenuOpen(link.name)}
                  onMouseLeave={() => setIsMegaMenuOpen(null)}
                >
                  <Link 
                    to={link.path}
                    className="flex items-center gap-1 px-4 py-2.5 text-[11px] font-black uppercase tracking-wider text-gray-700 hover:text-[#D500B8] transition-colors rounded-lg font-quicksand"
                  >
                    <span>{link.name}</span>
                    {link.categories && (
                      <ChevronDown size={11} className={`transition-transform duration-300 text-gray-400 group-hover:text-[#D500B8] ${isMegaMenuOpen === link.name ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Mega Menu Overlay Layout */}
                  {isMegaMenuOpen === link.name && link.categories && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[760px] bg-white rounded-b-2xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="grid grid-cols-4 gap-6 p-6">
                        <div className="col-span-3">
                          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 pb-2 border-b border-gray-50 font-nunito">
                            Shop Categories
                          </h3>
                          <div className="grid grid-cols-3 gap-x-2 gap-y-1 text-xs font-bold uppercase tracking-wider font-quicksand">
                            {link.categories.map((cat) => (
                              <Link
                                key={cat}
                                to={`${link.path}?type=${cat.toLowerCase().replace(' ', '-')}`}
                                className="px-3 py-2 text-gray-700 hover:text-[#D500B8] hover:bg-[#F8009D]/5 rounded-xl transition-all"
                              >
                                {cat}
                              </Link>
                            ))}
                          </div>
                        </div>
                        {link.featured && (
                          <div className="col-span-1 bg-gradient-to-br from-[#F8009D]/5 to-[#8A1BDF]/5 rounded-xl p-3.5 flex flex-col justify-between font-nunito">
                            <div className="aspect-[3/4] rounded-lg overflow-hidden border border-gray-200/20">
                              <img src={link.featured.img} alt={link.featured.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="pt-2">
                              <h4 className="text-[10px] font-black uppercase tracking-wider text-gray-900 mb-1">{link.featured.title}</h4>
                              <Link to={link.featured.link} className="text-[9px] font-black text-[#D500B8] flex items-center gap-0.5 uppercase tracking-widest">
                                <span>Explore</span> <ChevronRight size={10} />
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              ))}
              
              <li onClick={() => navigate('/shop/hot-deals')} className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-[#F04A00]/10 to-[#F8009D]/10 text-[#F04A00] rounded-xl cursor-pointer hover:opacity-90 transition-all font-quicksand">
                <Flame size={12} className="animate-pulse" />
                <span className="text-[11px] font-black uppercase tracking-wider">Hot Deals</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* === MOBILE FULL SCREEN SEARCH SCREEN MODULE === */}
      {showSearchOverlay && (
        <div className="fixed inset-0 z-[300] bg-white lg:hidden font-nunito animate-in fade-in duration-200">
          <div className="p-4 border-b border-gray-100 flex items-center gap-2">
            <form onSubmit={handleSearch} className="relative flex-grow">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..." 
                className="w-full bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-800 placeholder-gray-300 border-2 border-gray-100 py-3 pl-4 pr-12 rounded-xl outline-none focus:border-[#F8009D]"
                autoFocus
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400">
                <Search size={15} />
              </button>
            </form>
            <button onClick={() => setShowSearchOverlay(false)} className="p-2.5 text-gray-400 bg-gray-50 rounded-xl border border-gray-100 min-w-[40px] min-h-[40px] flex items-center justify-center">
              <X size={16} />
            </button>
          </div>

          <div className="p-5 font-quicksand text-xs font-black uppercase tracking-wider max-w-sm mx-auto">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest font-nunito mb-3">Trending Searches</h3>
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map((term) => (
                <button 
                  key={term}
                  onClick={() => { setSearchQuery(term); navigate(`/search?q=${encodeURIComponent(term)}`); setShowSearchOverlay(false); }}
                  className="px-3.5 py-2 bg-gray-50 border border-gray-100 rounded-xl text-gray-700 hover:text-[#D500B8]"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* === MOBILE FIXED SYSTEM DRAWER MODULE === */}
      <div className={`fixed inset-0 z-[200] lg:hidden ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-0 left-0 w-[80%] max-w-xs h-full bg-white shadow-xl transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col font-quicksand`}>
          <div className="p-4 border-b border-gray-50 bg-gradient-to-r from-[#F8009D]/5 to-[#8A1BDF]/5 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-xl font-black uppercase tracking-tight bg-gradient-to-r from-[#F04A00] to-[#F8009D] bg-clip-text text-transparent font-quicksand">Chiramel</span>
              <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest mt-0.5 font-nunito">Garments</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-1.5 bg-white text-gray-400 border border-gray-100 rounded-lg min-w-[36px] min-h-[36px] flex items-center justify-center">
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-5 text-xs font-black uppercase tracking-wider">
            <div>
              <h3 className="text-[9px] font-black text-gray-400 uppercase tracking-wider font-nunito mb-2">Showcase Modules</h3>
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="flex justify-between items-center p-3 bg-gray-50/50 hover:bg-gray-50 rounded-xl text-gray-800 hover:text-[#D500B8] transition-colors"
                    >
                      <span>{link.name}</span>
                      {link.categories && <ChevronRight size={12} className="text-gray-300" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Profile Session Integration placed cleanly within the scroll structure directly below navigation links */}
            <div className="pt-2 font-nunito">
              <button 
                onClick={() => navigate('/login')}
                className="w-full py-3.5 bg-gradient-to-r from-[#F04A00] via-[#F8009D] to-[#8A1BDF] text-white text-[10px] font-black tracking-widest uppercase rounded-xl shadow-sm active:scale-[0.99] transition-transform"
              >
                Initialize Profile Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;