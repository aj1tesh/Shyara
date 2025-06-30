import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import { User, ArrowLeft, Eye, EyeOff, Loader2, LogIn, PlusCircle } from 'lucide-react';

const BRAND_LOGO = (
  <div className="flex justify-center mb-2">
    <div className="rounded-full bg-gradient-to-tr from-primary to-purple-400 p-1 shadow-lg">
      <div className="bg-background rounded-full p-2 flex items-center justify-center">
        <User className="w-8 h-8 text-primary" />
      </div>
    </div>
  </div>
);

const GoogleButton = () => (
  <button className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-primary/30 bg-white/90 hover:bg-primary/10 text-primary font-semibold shadow transition mb-2">
    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
    Continue with Google
  </button>
);

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/client-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });      
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');
      localStorage.setItem('client_jwt', data.token);
      setLoading(false);
      navigate('/client-dashboard');
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center bg-transparent">
      <div className="flex flex-col items-center w-full">
        <div className="w-full max-w-md flex flex-col items-center" style={{minHeight:'340px'}}>
          <div className={`relative w-full transition-all duration-500 ${showLogin ? 'translate-x-0 opacity-100' : 'translate-x-0 opacity-100'}`}
            style={{zIndex:2}}>
            <div className={`bg-white/10 backdrop-blur-lg border-2 border-transparent bg-clip-padding rounded-2xl shadow-2xl p-8 w-full mx-auto flex flex-col items-center relative overflow-hidden ${showLogin ? 'border-gradient-to-tr from-primary to-purple-400 border-2' : 'border-primary/20'}`}
              style={{boxShadow:'0 8px 32px 0 rgba(80,80,120,0.18)', borderImage: showLogin ? 'linear-gradient(120deg, #a259f7, #c084fc) 1' : undefined}}>
              {BRAND_LOGO}
              {showLogin ? (
                <form className="w-full animate-slide-in-right" onSubmit={handleLogin}>
                  <button
                    type="button"
                    className="flex items-center gap-1 text-primary hover:underline mb-4 text-sm font-medium"
                    onClick={() => { setShowLogin(false); setError(""); }}
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <h2 className="text-xl font-semibold mb-4 text-text-primary flex items-center gap-2"><User className="w-5 h-5 text-primary" /> Client Login</h2>
                  <GoogleButton />
                  <div className="relative mb-3">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 rounded border border-primary/30 bg-background text-text-primary focus:ring-2 focus:ring-primary/40 transition"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      autoComplete="username"
                      required
                    />
                  </div>
                  <div className="relative mb-3">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full px-4 py-2 rounded border border-primary/30 bg-background text-text-primary focus:ring-2 focus:ring-primary/40 transition pr-10"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-primary/60 hover:text-primary"
                      tabIndex={-1}
                      onClick={() => setShowPassword(v => !v)}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={remember}
                      onChange={e => setRemember(e.target.checked)}
                      className="mr-2 accent-primary"
                    />
                    <label htmlFor="remember" className="text-text-secondary text-sm">Remember me</label>
                  </div>
                  {error && <div className="text-red-500 text-sm mb-2 animate-fade-in">{error}</div>}
                  <button
                    className="btn btn-purple-hover w-full text-lg flex items-center justify-center gap-2 disabled:opacity-60"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <LogIn className="w-5 h-5" />} Login
                  </button>
                </form>
              ) : (
                <>
                  <div className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2"><User className="w-6 h-6 text-primary" />Already a client?</div>
                  <button
                    className="btn btn-purple-hover w-full text-lg flex items-center justify-center gap-2 py-3 mt-2 shadow-lg"
                    onClick={() => setShowLogin(true)}
                  >
                    <LogIn className="w-5 h-5" /> Client Login
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="mt-16 w-full max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-text-primary mb-8 text-center">Your Cart</h1>
          {cart.length === 0 ? (
            <p className="text-lg text-text-secondary text-center">Your cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-4 mb-8">
                {cart.map(item => (
                  <li key={item.id} className="flex items-center justify-between bg-surface/80 rounded-xl p-4 shadow">
                    <span className="font-semibold text-text-primary">{item.name}</span>
                    <span className="text-primary font-bold">₹{item.price.toLocaleString()}</span>
                    <button className="btn btn-surface ml-4" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end mb-6">
                <button
                  className="btn btn-surface border border-primary/30 text-primary hover:bg-primary/10 transition flex items-center gap-2 shadow"
                  onClick={() => navigate('/add-items')}
                >
                  <PlusCircle className="w-5 h-5" /> Add More Items
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-end items-center">
                <button
                  className="btn btn-purple-hover text-lg px-8 py-3 font-semibold shadow-lg"
                  onClick={() => window.open('https://calendly.com/your-scheduling-link', '_blank')}
                >
                  Checkout & Schedule Meeting
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage; 