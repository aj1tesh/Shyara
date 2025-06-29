import React, { useState } from 'react';
import { LogOut, User, Briefcase, BarChart2, Mail, X } from 'lucide-react';

const demoServices = [
  { name: 'Social Media Management', price: 10500 },
  { name: 'Website Development', price: 45000 },
];

const ClientDashboardStandalone = () => {
  const [showModal, setShowModal] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [error, setError] = useState('');

  const handleLogout = () => {
    window.close();
  };

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Top Bar */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">SHYARA CLIENT</h1>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Services Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-primary">
                <Briefcase className="w-6 h-6" />
                Selected Services
              </h2>
              <ul className="space-y-3 mb-6">
                {demoServices.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center bg-white/10 rounded-lg p-4 shadow border border-white/20">
                    <span className="font-medium text-white">{item.name}</span>
                    <span className="text-primary font-bold">₹{item.price.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 bg-primary hover:bg-purple-600 text-white rounded-lg transition-colors font-semibold">
                Add More Services
              </button>
            </div>
            
            {/* Summary Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-primary">
                <BarChart2 className="w-6 h-6" />
                Account Summary
              </h2>
              <div className="space-y-4">
                <div className="text-lg">Total Services: <span className="font-bold text-primary">{demoServices.length}</span></div>
                <div className="text-lg">Total Value: <span className="font-bold text-primary">₹{demoServices.reduce((a,b)=>a+b.price,0).toLocaleString()}</span></div>
                <div className="text-lg">Status: <span className="font-bold text-green-400">Active</span></div>
              </div>
              <div className="text-sm text-gray-300 mt-4">Your selected services are shown here. For changes, contact admin or add more services.</div>
            </div>
          </div>
          
          {/* Contact Admin Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-primary">
              <Mail className="w-6 h-6" />
              Contact Admin
            </h2>
            <p className="mb-4 text-gray-300">For help or to request changes, email <a href="mailto:contact@shyara.com" className="text-primary underline">contact@shyara.com</a></p>
            <button 
              className="px-6 py-3 bg-primary hover:bg-purple-600 text-white rounded-lg transition-colors font-semibold"
              onClick={() => setShowModal(true)}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Message Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-md w-full border border-white/20 relative">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300" 
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
              <Mail className="w-6 h-6" />
              Send Message to Admin
            </h2>
            <form onSubmit={handleSend} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Your Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/10 px-4 py-3 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={userEmail} 
                  onChange={e => setUserEmail(e.target.value)} 
                  required 
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Message</label>
                <textarea 
                  className="w-full bg-white/10 px-4 py-3 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={6} 
                  value={userMsg} 
                  onChange={e => setUserMsg(e.target.value)} 
                  required 
                  placeholder="Enter your message"
                />
              </div>
              {error && <div className="text-red-400 text-sm">{error}</div>}
              <button type="submit" className="w-full px-6 py-3 bg-primary hover:bg-purple-600 text-white rounded-lg transition-colors font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientDashboardStandalone; 