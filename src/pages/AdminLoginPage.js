import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const AdminLoginPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/admin-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');
      localStorage.setItem('admin_jwt', data.token);
      window.open('/#/admin-standalone', '_blank');
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-text-primary">
      <div className="bg-surface/90 rounded-2xl shadow-2xl p-8 max-w-md w-full border border-surface">
        <h1 className="text-2xl font-bold mb-6 text-primary text-center">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-text-primary">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-background text-text-primary focus:ring-2 focus:ring-primary/40 transition"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="Enter admin password"
            />
          </div>
          {error && <div className="text-red-500 text-sm animate-fade-in">{error}</div>}
          <button type="submit" className="btn btn-purple-hover w-full flex items-center justify-center gap-2"><LogIn className="w-5 h-5" /> Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage; 