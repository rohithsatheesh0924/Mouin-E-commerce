// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import AOS from "aos";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import all service pages
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/ProductDetail";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import OrderSuccess from "./pages/OrderSuccess";
import TrackOrder from "./pages/TrackOrder";
import Profile from "./pages/Profile";
import WishlistPage from "./pages/WishlistPage";

import "aos/dist/aos.css";
import "./App.css";

// Layout wrapper to inject Navbar and Footer dynamically only to authorized store views
const StoreLayout = () => {
  return (
    <div className="relative min-h-screen bg-[#FCFCFC] overflow-x-hidden flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="lg:pt-28 pb-12 lg:pb-16">
          <Outlet /> {/* Renders the matching child route component */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Routes>
        {/* === AUTHENTICATION ROUTES (No Navbar, No Footer) === */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* === PROTECTED STOREFRONT ROUTES (Includes Navbar & Footer) === */}
        <Route element={<StoreLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/shop/:category" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout/shipping" element={<Shipping />} />
          <Route path="/checkout/payment" element={<Payment />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/order-success/track-order" element={<TrackOrder />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          
          {/* Optional: catch-all 404 inside store container */}
          <Route path="*" element={<div className="text-gray-900 p-8 text-center font-bold">Page not found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;