import React, { useState, useEffect } from 'react';
import { Mail, User, Briefcase, BarChart2, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const demoServices = [
  { name: 'Social Media Management', price: 10500 },
  { name: 'Website Development', price: 45000 },
];

const ClientDashboardPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    setError('');
    if (!userEmail || !userMsg) {
      setError('Please enter your email and message.');
      return;
    }
    const subject = encodeURIComponent('Client Dashboard Message');
    const body = encodeURIComponent(`From: ${userEmail}\n\n${userMsg}`);
    window.location.href = `mailto:contact@shyara.com?subject=${subject}&body=${body}`;
    setShowModal(false);
    setUserEmail('');
    setUserMsg('');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col items-center justify-start pt-8 px-4 relative">
      <div className="w-full max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-3 drop-shadow-lg"><User className="w-8 h-8 text-primary" /> Client Dashboard</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Services Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/20 p-8 flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-primary"><Briefcase className="w-6 h-6" /> Selected Services</h2>
            <ul className="space-y-3 mb-4">
              {demoServices.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center bg-white/10 rounded-lg p-3 shadow border border-primary/10">
                  <span className="font-medium text-white">{item.name}</span>
                  <span className="text-primary font-bold">₹{item.price.toLocaleString()}</span>
                </li>
              ))}
            </ul>
            <button className="btn btn-purple-hover mt-auto" onClick={() => navigate('/add-items')}>Add More Services</button>
          </div>
          {/* Summary Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/20 p-8 flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-primary"><BarChart2 className="w-6 h-6" /> Account Summary</h2>
            <div className="mb-4">
              <div className="text-lg">Total Services: <span className="font-bold text-primary">{demoServices.length}</span></div>
              <div className="text-lg">Total Value: <span className="font-bold text-primary">₹{demoServices.reduce((a,b)=>a+b.price,0).toLocaleString()}</span></div>
            </div>
            <div className="text-gray-300 text-sm">Your selected services are shown here. For changes, contact admin or add more services.</div>
          </div>
        </div>
        {/* Contact Admin Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/20 p-8 mt-12 flex flex-col items-start max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-primary"><Mail className="w-6 h-6" /> Contact Admin</h2>
          <p className="mb-2">For help or to request changes, email <a href="mailto:contact@shyara.com" className="text-primary underline">contact@shyara.com</a></p>
          <button className="btn btn-purple-hover mt-2" onClick={() => setShowModal(true)}>Send Message</button>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-md w-full border border-primary/20 relative animate-fade-in">
            <button className="absolute top-3 right-3 text-primary hover:text-purple-400" onClick={() => setShowModal(false)}><X className="w-6 h-6" /></button>
            <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2"><Mail className="w-6 h-6" /> Send Message to Admin</h2>
            <form onSubmit={handleSend} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-white">Your Email</label>
                <input type="email" className="w-full bg-white/10 px-4 py-3 border border-primary/30 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition text-white placeholder-gray-300" value={userEmail} onChange={e => setUserEmail(e.target.value)} required placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-white">Message</label>
                <textarea className="w-full bg-white/10 px-4 py-3 border border-primary/30 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition text-white placeholder-gray-300" rows={7} value={userMsg} onChange={e => setUserMsg(e.target.value)} required placeholder="Enter your message" />
              </div>
              {error && <div className="text-red-400 text-sm animate-fade-in">{error}</div>}
              <button type="submit" className="btn btn-purple-hover w-full">Send</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientDashboardPage;