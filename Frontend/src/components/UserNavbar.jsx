import React, { useState, useRef, useEffect } from 'react';

const UserNavbar = ({ isScrolled, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const closeMenu = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', closeMenu);
    return () => document.removeEventListener('mousedown', closeMenu);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 h-20 flex items-center justify-between px-10 ${
      isScrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-transparent'
    }`}>
      
      <div className="w-1/3">
        <h1 className={`text-2xl font-serif tracking-[0.4em] font-bold transition-colors duration-500 ${
          isScrolled ? 'text-black' : 'text-white'
        }`}>LUXE</h1>
      </div>

      <div className="w-1/3 flex justify-center">
  <ul className={`flex space-x-10 text-[10px] uppercase tracking-[0.3em] font-medium transition-colors duration-500 ${
    isScrolled ? 'text-gray-600' : 'text-white'
  }`}>
    <li>
      <Link to="/shop/men" className="hover:text-amber-700 cursor-pointer transition">
        Men
      </Link>
    </li>
    <li>
      <Link to="/shop/women" className="hover:text-amber-700 cursor-pointer transition">
        Women
      </Link>
    </li>
    <li>
      <Link to="/shop/kids" className="hover:text-amber-700 cursor-pointer transition">
        Kids
      </Link>
    </li>
  </ul>
</div>

      {/* RIGHT: User Actions (No Sign In Button here) */}
      <div className="w-1/3 flex justify-end items-center gap-10">
        <div className={`flex items-center text-[10px] uppercase tracking-widest transition-colors duration-500 ${
          isScrolled ? 'text-black' : 'text-white'
        }`}>
          <span className="opacity-80">Cart (0)</span>
          <span className="ml-2 w-1.5 h-1.5 bg-amber-700 rounded-full"></span>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center transition-all hover:border-black focus:outline-none"
          >
            <div className={`w-full h-full rounded-full flex items-center justify-center text-[11px] font-bold ${
              isScrolled ? 'bg-black text-white' : 'bg-white text-black'
            }`}>AD</div>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-4 w-52 bg-white shadow-2xl border border-gray-100 py-3 text-black animate-fade-in">
              <div className="px-5 py-2 border-b border-gray-50 mb-2">
                <p className="text-[8px] text-gray-400 tracking-widest uppercase mb-1">Authenticated</p>
                <p className="text-[11px] font-serif truncate">admin@gmail.com</p>
              </div>
              <button className="w-full text-left px-5 py-2 text-[10px] uppercase tracking-widest hover:bg-gray-50 transition">Profile</button>
              <button className="w-full text-left px-5 py-2 text-[10px] uppercase tracking-widest hover:bg-gray-50 transition">Orders</button>
              <div className="border-t border-gray-50 mt-2 pt-2">
                <button onClick={onLogout} className="w-full text-left px-5 py-2 text-[10px] uppercase tracking-[0.2em] text-red-700 font-bold hover:bg-red-50 transition">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;