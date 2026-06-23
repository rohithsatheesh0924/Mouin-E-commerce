import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  ShoppingBag, 
  Heart, 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  Share2, 
  ChevronLeft, 
  Star, 
  Sparkles, 
  CheckCircle2,
  Layers,
  FileText,
  Check,
  ZoomIn,
  Minus,
  Plus,
  Award,
  Clock,
  Package
} from 'lucide-react';

const ProductDetail = () => {
  const { id, category = "Collection" } = useParams(); 
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  
  const productImages = [
    "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1200",
    "https://images.unsplash.com/photo-1539109132381-31a1bd2ee528?q=80&w=1200",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200",
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200",
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200"
  ];

  const relatedProducts = [
    { id: 'rel-1', name: "Classic Cotton Polo", price: "999", originalPrice: "1,799", rating: "4.5", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500" },
    { id: 'rel-2', name: "Premium Denim Jacket", price: "2,499", originalPrice: "3,999", rating: "4.9", img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500" },
    { id: 'rel-3', name: "Pleated Midi Skirt", price: "1,350", originalPrice: "2,299", rating: "4.6", img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500" },
    { id: 'rel-4', name: "Tailored Slim Chinos", price: "1,699", originalPrice: "2,799", rating: "4.7", img: "https://images.unsplash.com/photo-1624371414361-e6e0ed26296c?w=500" },
    { id: 'rel-5', name: "Oxford Button Down", price: "1,290", originalPrice: "2,199", rating: "4.9", img: "https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?w=500" }
  ];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] font-quicksand font-bold antialiased text-gray-900 selection:bg-[#F8009D] selection:text-white">
      <Navbar />

      <main className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-12 pt-28 md:pt-36 pb-20">
        
        {/* === BREADCRUMB NAVIGATION === */}
        <nav className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100 font-quicksand">
          <button onClick={() => navigate(-1)} className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-gray-400 hover:text-[#D500B8] transition-all duration-300 group">
            <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" /> 
            <span>Back to Collection</span>
          </button>
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-gray-400">
            <Link to="/home" className="hover:text-[#D500B8] transition-colors">Home</Link>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="text-gray-900 capitalize">{category.replace('-', ' ')}</span>
          </div>
        </nav>

        {/* === MAIN PRODUCT SECTION === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* LEFT: IMAGE GALLERY */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative w-full max-h-[520px] aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 group cursor-zoom-in">
              <img 
                src={productImages[activeImg]} 
                className={`w-full h-full object-cover transition-transform duration-700 ${isZoomed ? 'scale-150' : 'scale-100 group-hover:scale-103'}`}
                alt="Featured Product"
                onClick={() => setIsZoomed(!isZoomed)}
              />
              
              {/* Action Buttons Overlay */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                <button 
                  onClick={handleShare} 
                  className="p-2.5 bg-white/95 backdrop-blur-md rounded-xl text-gray-700 border border-gray-100 shadow-md hover:bg-[#D500B8] hover:text-white hover:border-transparent transition-all duration-300"
                >
                  {isCopied ? <CheckCircle2 size={15} className="text-[#00C9A7]" /> : <Share2 size={15} />}
                </button>
                <button 
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2.5 bg-white/95 backdrop-blur-md rounded-xl text-gray-700 border border-gray-100 shadow-md hover:bg-[#F8009D] hover:text-white hover:border-transparent transition-all duration-300"
                >
                  <ZoomIn size={15} />
                </button>
              </div>

              {/* Discount Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-[#F04A00] to-[#F8009D] rounded-lg shadow-sm">
                <span className="text-[10px] font-black text-white uppercase tracking-wider">34% OFF</span>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {productImages.map((img, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveImg(index)}
                  className={`flex-shrink-0 w-20 h-24 sm:w-22 sm:h-26 overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                    activeImg === index 
                      ? 'border-[#D500B8] shadow-sm scale-102' 
                      : 'border-gray-100 opacity-70 hover:opacity-100 hover:border-gray-200'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: PRODUCT INFORMATION */}
          <div className="lg:col-span-6 flex flex-col font-quicksand">
            <div className="sticky top-28">
              
              {/* Brand Badge */}
              <div className="flex items-center gap-2 mb-4">
                <div className="px-3 py-1 bg-gradient-to-r from-[#8A1BDF]/5 to-[#D500B8]/5 border border-[#D500B8]/10 rounded-md">
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#D500B8]">Chiramel Garments</span>
                </div>
                <div className="flex items-center gap-0.5 px-2 py-0.5 bg-gradient-to-r from-[#F04A00]/5 to-[#F8009D]/5 rounded-md">
                  <Sparkles size={10} className="text-[#F04A00]" />
                  <span className="text-[8px] font-black uppercase tracking-wider text-[#F04A00]">Premium</span>
                </div>
              </div>

              {/* Product Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight uppercase italic mb-3 leading-tight">
                Signature Heritage Luxury Collection
              </h1>
              
              {/* Rating & SKU */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center gap-0.5 px-2.5 py-1 bg-amber-500/5 border border-amber-500/10 rounded-lg">
                  <Star size={12} fill="currentColor" className="text-amber-500" />
                  <span className="text-xs font-black text-amber-600">4.9</span>
                  <span className="text-[11px] text-amber-500 font-bold ml-1">(128 reviews)</span>
                </div>
                <div className="h-4 w-px bg-gray-200" />
                <span className="text-xs text-gray-400 font-bold">SKU: {id || 'CMS-HERITAGE-26'}</span>
              </div>

              {/* Price Section */}
              <div className="flex items-baseline gap-3 mb-6 pb-5 border-b border-gray-100">
                <span className="text-3xl font-black text-gray-950">₹4,250</span>
                <span className="text-base text-gray-400 line-through font-bold">₹6,450</span>
                <span className="px-2.5 py-0.5 bg-gradient-to-r from-[#F04A00] to-[#F8009D] text-white text-[9px] font-black uppercase tracking-wider rounded-md shadow-sm">
                  Save ₹2,200
                </span>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2.5">
                  <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider">Select Size</h3>
                  <button className="text-xs font-bold text-[#D500B8] hover:text-[#8A1BDF] transition-colors underline underline-offset-4">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-11 h-11 flex items-center justify-center text-xs font-black rounded-xl border-2 transition-all duration-200 ${
                        selectedSize === size 
                          ? 'border-[#D500B8] bg-gradient-to-br from-[#8A1BDF] to-[#D500B8] text-white shadow-sm scale-105' 
                          : 'border-gray-100 text-gray-700 bg-white hover:border-[#D500B8] hover:text-[#D500B8]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2.5">Quantity</h3>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-10 flex items-center justify-center bg-gray-50 border border-gray-100 hover:bg-gray-100 rounded-xl transition-colors text-gray-600"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-sm font-black text-gray-950 w-10 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-10 flex items-center justify-center bg-gray-50 border border-gray-100 hover:bg-gray-100 rounded-xl transition-colors text-gray-600"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Product Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2.5">Product Highlights</h4>
                <div className="space-y-2">
                  {[
                    'Premium Combed Mercerized Cotton Blend',
                    'Certified Anti-Fade Reactive Dye Treatment',
                    'Advanced Breathable Structural Knit'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="mt-0.5 w-4 h-4 bg-gradient-to-br from-[#00A8E8] to-[#00C9A7] rounded-md flex items-center justify-center flex-shrink-0">
                        <Check size={10} strokeWidth={4} className="text-white" />
                      </div>
                      <p className="text-xs font-bold text-gray-600 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-6">
                <button 
                  onClick={() => navigate('/cart')} 
                  className="flex-grow flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] text-white py-3.5 text-xs font-black uppercase tracking-wider rounded-xl shadow-sm hover:opacity-95 transition-all"
                >
                  <ShoppingBag size={15} /> Add to Bag
                </button>
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)} 
                  className={`px-4 py-3.5 border rounded-xl transition-all flex items-center justify-center ${
                    isWishlisted 
                      ? 'border-[#F8009D] bg-[#F8009D]/5 text-[#F8009D]' 
                      : 'border-gray-200 text-gray-400 bg-white hover:border-[#F8009D] hover:text-[#F8009D]'
                  }`}
                >
                  <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 pt-5 border-t border-gray-100">
                {[
                  { icon: Truck, label: "Free Delivery", color: "from-[#00A8E8] to-[#00D6D6]" },
                  { icon: RefreshCw, label: "7-Day Returns", color: "from-[#F8009D] to-[#D500B8]" },
                  { icon: ShieldCheck, label: "Secure Payment", color: "from-[#8A1BDF] to-[#D500B8]" }
                ].map(({ icon: Icon, label, color }, idx) => (
                  <div key={idx} className="flex flex-col items-center p-2">
                    <div className={`w-8 h-8 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center mb-1.5 shadow-sm`}>
                      <Icon size={14} className="text-white" />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-wider text-gray-500 text-center">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === PRODUCT DETAILS TABS === */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8 mb-12 font-quicksand">
          <div className="flex gap-5 border-b border-gray-100 mb-6">
            <button 
              onClick={() => setActiveTab('description')}
              className={`pb-3 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 border-b-2 transition-all duration-200 ${
                activeTab === 'description' 
                  ? 'border-[#D500B8] text-[#D500B8]' 
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              <FileText size={14} /> Description
            </button>
            <button 
              onClick={() => setActiveTab('specifications')}
              className={`pb-3 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 border-b-2 transition-all duration-200 ${
                activeTab === 'specifications' 
                  ? 'border-[#D500B8] text-[#D500B8]' 
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              <Layers size={14} /> Specifications
            </button>
          </div>

          <div className="transition-all duration-200">
            {activeTab === 'description' ? (
              <div className="max-w-4xl space-y-3">
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-wide">Artisanal Textile Luxury</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-bold">
                  Sourced sustainably from selected premium facilities, this collection piece represents the peak of modern craftsmanship. Each fiber is carefully selected and treated utilizing eco-friendly, highly technical finishing parameters to achieve ultimate comfort and premium quality.
                </p>
                <p className="text-xs text-gray-500 leading-relaxed font-bold">
                  Designed for active, premium aesthetic presence across varying temperatures, this piece preserves structural elasticity, texture depth, and color vibrance even after multiple wash cycles. Experience luxury that lasts.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1 max-w-5xl">
                {[
                  { name: "Composition", value: "85% Combed Cotton, 15% Sateen Micro-weave" },
                  { name: "Weight", value: "240 GSM Premium Heavyweight Blend" },
                  { name: "Weaving", value: "Ethically Sourced Double-Knitted Jacquard" },
                  { name: "Fit", value: "Modern Tailored Silhouette with Comfort Fit" },
                  { name: "Color Fastness", value: "Certified Level 4 Anti-Fade Reactive Dyes" },
                  { name: "Care", value: "Cold Machine Wash, Tumble Dry Low" }
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-center py-2.5 border-b border-gray-100">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{spec.name}</span>
                    <span className="text-[11px] text-gray-800 font-bold text-right pl-4">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* === RELATED PRODUCTS === */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 font-quicksand">
          <div className="flex justify-between items-end mb-6 pb-3 border-b border-gray-100">
            <div>
              <h2 className="text-sm sm:text-base font-black text-gray-900 uppercase tracking-wider">Complete The Look</h2>
              <div className="h-1 w-12 bg-gradient-to-r from-[#8A1BDF] via-[#D500B8] to-[#F8009D] mt-1 rounded-full" />
            </div>
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Recommended For You</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {relatedProducts.map((item) => (
              <div 
                key={item.id} 
                onClick={() => navigate(`/product/${item.id}`)} 
                className="group cursor-pointer flex flex-col justify-between bg-gradient-to-br from-gray-50/50 to-white p-2.5 rounded-xl border border-gray-100 hover:border-[#D500B8]/20 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-2.5 bg-gray-50">
                    <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" alt={item.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xs font-bold text-gray-800 tracking-wide line-clamp-2 group-hover:text-[#D500B8] transition-colors leading-snug min-h-[36px] px-0.5">
                    {item.name}
                  </h3>
                </div>
                
                <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between px-0.5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-black text-gray-950">₹{item.price}</span>
                    <span className="text-[9px] text-gray-400 line-through font-semibold">₹{item.originalPrice}</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-500 text-[9px] font-black bg-amber-500/5 px-1.5 py-0.5 rounded-md">
                    <Star size={9} fill="currentColor" /> 
                    <span className="text-amber-600">{item.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default ProductDetail;