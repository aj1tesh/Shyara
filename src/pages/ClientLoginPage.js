import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, ArrowLeft, Eye, EyeOff, Loader2, LogIn } from 'lucide-react';

const BRAND_LOGO = (
  <div className="flex justify-center mb-2">
    <div className="rounded-full bg-gradient-to-tr from-primary to-purple-400 p-1 shadow-lg">
      <div className="bg-background rounded-full p-2 flex items-center justify-center">
        <User className="w-8 h-8 text-primary" />
      </div>
    </div>
  </div>
);

const ClientLoginPage = () => {
  const navigate = useNavigate();
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent py-16 px-4">
      <div className="w-full max-w-md flex flex-col items-center" style={{minHeight:'340px'}}>
        <div className={`bg-white/10 backdrop-blur-lg border-2 border-transparent bg-clip-padding rounded-2xl shadow-2xl p-8 w-full mx-auto flex flex-col items-center relative overflow-hidden border-primary/20`}
          style={{boxShadow:'0 8px 32px 0 rgba(80,80,120,0.18)'}}>
          {BRAND_LOGO}
          <form className="w-full animate-slide-in-right" onSubmit={handleLogin}>
            <h2 className="text-xl font-semibold mb-4 text-text-primary flex items-center gap-2"><User className="w-5 h-5 text-primary" /> Client Login</h2>
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
        </div>
      </div>
    </div>
  );
};

export default ClientLoginPage; 