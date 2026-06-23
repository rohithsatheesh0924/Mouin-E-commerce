import React, { useState } from 'react';

const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      // Demo Credential Check
      if (email === 'admin@gmail.com' && password === 'admin') {
        onLoginSuccess();
        onClose();
      } else {
        setError('Invalid credentials for demo.');
      }
    } else {
      // Mock Registration
      setIsLogin(true);
      alert("Account created! Please sign in with admin credentials.");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md p-10 relative shadow-2xl animate-fade-in">
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-black">✕</button>

        <h2 className="text-3xl font-serif text-center mb-2">{isLogin ? 'Sign In' : 'Join LUXE'}</h2>
        <p className="text-[10px] text-center uppercase tracking-[0.2em] text-gray-400 mb-8 italic">
          Professional Access
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <input type="text" placeholder="Full Name" className="w-full border-b border-gray-200 py-3 text-sm outline-none focus:border-black transition" required />
          )}
          
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-gray-200 py-3 text-sm outline-none focus:border-black transition" 
            required 
          />
          
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-b border-gray-200 py-3 text-sm outline-none focus:border-black transition" 
            required 
          />

          {error && <p className="text-red-500 text-[10px] uppercase tracking-widest text-center">{error}</p>}

          <button type="submit" className="w-full bg-black text-white py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gray-800 transition-all">
            {isLogin ? 'Authenticate' : 'Register'}
          </button>
        </form>

        <button onClick={() => setIsLogin(!isLogin)} className="w-full mt-8 text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition text-center">
          {isLogin ? "New Client? Create Account" : "Back to Sign In"}
        </button>
      </div>
    </div>
  );
};

export default AuthModal;