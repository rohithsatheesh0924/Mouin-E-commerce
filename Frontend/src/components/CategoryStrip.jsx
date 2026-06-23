import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const CategoryStrip = ({ activeMenu, setActiveMenu }) => {
  const navigate = useNavigate();

  const categories = [
    { 
      name: 'New Launch', 
      slug: 'new-arrivals',
      hasDropdown: true,
      img: 'https://picsum.photos/100?sig=11',
      items: ["Health & Wellness", "Home & Kitchen", "Pooja Essentials", "Books & Stationaries"],
      subs: ["Personal Care", "Fitness Accessories", "Freshners & Essentials oil"]
    },
    { 
      name: 'Lifestyle', 
      slug: 'lifestyle',
      hasDropdown: true,
      img: 'https://picsum.photos/100?sig=12',
      items: ["Pooja Essentials", "Home Decor", "Gardening", "Wall Art"],
      subs: ["Incense Sticks", "Brass Items", "Wall Art"]
    },
    { name: 'Men', slug: 'men', hasDropdown: false, img: 'https://picsum.photos/100?sig=13' },
    { name: 'Women', slug: 'women', hasDropdown: false, img: 'https://picsum.photos/100?sig=14' },
    // Added one more for better scroll demonstration on mobile
    { name: 'Kids', slug: 'kids', hasDropdown: false, img: 'https://picsum.photos/100?sig=15' },
  ];

  const handleSelection = (e, slug) => {
    e.stopPropagation();
    setActiveMenu(null);
    navigate(`/shop/${slug}`);
  };

  return (
    <div className="sticky top-[70px] md:top-[80px] z-[90] bg-white border-b border-gray-100 shadow-sm w-full overflow-hidden">
      {/* Main Container: 
          - Horizontal scroll on mobile (no-scrollbar)
          - Centered on desktop
      */}
      <div className="flex overflow-x-auto no-scrollbar md:justify-center items-center gap-6 md:gap-10 py-3 md:py-4 px-4 md:px-0 max-w-[1440px] mx-auto">
        {categories.map((cat, i) => (
          <div 
            key={i} 
            className="relative flex flex-col items-center min-w-[70px] md:min-w-[100px] cursor-pointer group flex-shrink-0"
            onMouseEnter={() => { if (window.innerWidth > 768) cat.hasDropdown && setActiveMenu(i) }}
            onMouseLeave={() => { if (window.innerWidth > 768) setActiveMenu(null) }}
            // On mobile, a click on a dropdown category toggles the menu
            onClick={() => {
                if (!cat.hasDropdown) {
                    navigate(`/shop/${cat.slug}`);
                } else if (window.innerWidth <= 768) {
                    setActiveMenu(activeMenu === i ? null : i);
                }
            }}
          >
            {/* Circular Icon - Scaled for Mobile */}
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white mb-1.5 md:mb-2 overflow-hidden border border-gray-100 group-hover:border-orange-500 transition-all duration-500 p-0.5 md:p-1 shadow-sm">
              <img 
                src={cat.img} 
                className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all" 
                alt={cat.name} 
              />
            </div>

            {/* Label - Smaller text for mobile */}
            <div className="flex items-center gap-1 text-gray-500 group-hover:text-black transition-colors">
              <span className="text-[7px] md:text-[9px] font-black uppercase tracking-widest whitespace-nowrap">{cat.name}</span>
              {cat.hasDropdown && (
                <ChevronDown size={8} className={`transition-transform duration-300 md:block ${activeMenu === i ? 'rotate-180 text-orange-600' : ''}`} />
              )}
            </div>

            {/* --- DROPDOWN BOX (HIDDEN ON MOBILE, ONLY FOR DESKTOP) --- */}
            {/* Professional standard: Large dropdowns are usually replaced by Mobile Sidebars or specific mobile UI */}
            {activeMenu === i && (
              <div className="hidden md:block">
                <div className="absolute top-full w-full h-[20px] bg-transparent" />
                <div 
                  className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[450px] lg:w-[500px] bg-white shadow-[0_30px_60px_-12px_rgba(0,0,0,0.2)] rounded-2xl flex border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300"
                  onMouseEnter={() => setActiveMenu(i)}
                >
                  <div className="w-1/2 p-5 border-r border-gray-50">
                    <h4 className="text-black text-[9px] font-black uppercase tracking-widest mb-3 px-2">Categories</h4>
                    <ul className="space-y-0.5">
                      {cat.items.map((item, idx) => (
                        <li key={idx} onClick={(e) => handleSelection(e, cat.slug)} className="px-3 py-2 text-[10px] font-bold text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-1/2 p-5 bg-[#FFFBFB]">
                    <h4 className="text-black text-[9px] font-black uppercase tracking-widest mb-3 px-2">Featured</h4>
                    <ul className="space-y-0.5">
                      {cat.subs.map((sub, idx) => (
                        <li key={idx} onClick={(e) => handleSelection(e, cat.slug)} className="px-3 py-2 text-[10px] font-bold text-gray-500 hover:text-orange-600 hover:bg-white hover:shadow-sm rounded-lg transition-all">
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* --- MOBILE DROPDOWN (FULL WIDTH BELOW STRIP) --- */}
      {/* This ensures mobile users can still see dropdown items in a classy way */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 bg-gray-50 ${activeMenu !== null ? 'max-h-[300px] border-t border-gray-100' : 'max-h-0'}`}>
        {categories.map((cat, i) => activeMenu === i && (
            <div key={i} className="p-6 grid grid-cols-2 gap-4">
                <div>
                    <h4 className="text-[8px] font-black uppercase tracking-[0.2em] text-orange-600 mb-3">Shop</h4>
                    <div className="flex flex-col gap-3">
                        {cat.items.slice(0, 3).map((item, idx) => (
                            <span key={idx} onClick={(e) => handleSelection(e, cat.slug)} className="text-[10px] font-bold text-gray-600">{item}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Featured</h4>
                    <div className="flex flex-col gap-3">
                        {cat.subs.slice(0, 3).map((sub, idx) => (
                            <span key={idx} onClick={(e) => handleSelection(e, cat.slug)} className="text-[10px] font-bold text-gray-600">{sub}</span>
                        ))}
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryStrip;