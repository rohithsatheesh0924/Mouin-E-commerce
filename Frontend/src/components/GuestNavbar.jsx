import React from 'react';
import { Link } from 'react-router-dom'; // This line fixes the error

const GuestNavbar = ({ isScrolled, onSignInClick }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 h-20 flex items-center justify-between px-10 ${
      isScrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-transparent'
    }`}>
      
      {/* LEFT: Logo */}
      <div className="w-1/3">
        <h1 className={`text-2xl font-serif tracking-[0.4em] font-bold transition-colors duration-500 ${
          isScrolled ? 'text-black' : 'text-white'
        }`}>LUXE</h1>
      </div>

      {/* CENTER: Navigation */}
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

      {/* RIGHT: Actions */}
      <div className="w-1/3 flex justify-end items-center gap-10">
        <div className={`text-[10px] uppercase tracking-widest transition-colors duration-500 opacity-80 ${
          isScrolled ? 'text-black' : 'text-white'
        }`}>
          Cart (0)
        </div>
        <button 
          onClick={onSignInClick}
          className={`text-[10px] font-bold uppercase tracking-[0.2em] border-b pb-1 transition-all duration-500 whitespace-nowrap ${
            isScrolled ? 'text-black border-black' : 'text-white border-white'
          }`}
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default GuestNavbar;