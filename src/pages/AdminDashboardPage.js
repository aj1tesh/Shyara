import React, { useState } from 'react';
import { Sun, Moon, LogOut, User, Briefcase, BarChart2 } from 'lucide-react';

const demoClients = [
  { name: 'Demo Client', cart: [
    { name: 'Social Media Management', price: 10500 },
    { name: 'Website Development', price: 45000 }
  ] }
];

const AdminDashboardPage = () => {
  const [theme, setTheme] = useState('dark');
  const [clients] = useState(demoClients);
  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <div className={`min-h-screen w-full ${theme === 'dark' ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900'} flex flex-col items-center justify-start py-16 px-4`}>
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold flex items-center gap-3"><User className="w-8 h-8 text-primary" /> Admin Dashboard</h1>
          <div className="flex gap-2">
            <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')} className="btn btn-surface flex items-center gap-2">
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />} {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
            <button onClick={() => window.location.href = '/'} className="btn btn-surface flex items-center gap-2"><LogOut className="w-5 h-5" /> Logout</button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Clients List Card */}
          <div className={`${theme === 'dark' ? 'bg-white/10 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'} rounded-2xl shadow-xl border border-primary/20 p-8 flex flex-col`}>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-primary"><User className="w-6 h-6" /> Clients</h2>
            <ul className="space-y-3 mb-4">
              {clients.map((client, idx) => (
                <li key={idx} className={`flex justify-between items-center ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-100/80'} rounded-lg p-3 shadow border border-primary/10 cursor-pointer hover:bg-primary/10`} onClick={() => setSelectedClient(client)}>
                  <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{client.name}</span>
                  <span className="text-primary font-bold">{client.cart.length} services</span>
                </li>
              ))}
            </ul>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Click a client to view details.</div>
          </div>
          {/* Summary Card */}
          <div className={`${theme === 'dark' ? 'bg-white/10 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'} rounded-2xl shadow-xl border border-primary/20 p-8 flex flex-col`}>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-primary"><BarChart2 className="w-6 h-6" /> Account Summary</h2>
            <div className="mb-4">
              <div className="text-lg">Total Clients: <span className="font-bold text-primary">{clients.length}</span></div>
              <div className="text-lg">Total Services: <span className="font-bold text-primary">{clients.reduce((a,c)=>a+c.cart.length,0)}</span></div>
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Overview of all clients and their selected services.</div>
          </div>
        </div>
        {/* Selected Client Details */}
        {selectedClient && (
          <div className={`${theme === 'dark' ? 'bg-white/10 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'} rounded-2xl shadow-xl border border-primary/20 p-8 mt-12 max-w-3xl mx-auto`}>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-primary"><Briefcase className="w-6 h-6" /> {selectedClient.name}'s Services</h2>
            <ul className="space-y-3 mb-4">
              {selectedClient.cart && selectedClient.cart.length > 0 ? selectedClient.cart.map((item, idx) => (
                <li key={idx} className={`flex justify-between items-center ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-100/80'} rounded-lg p-3 shadow border border-primary/10`}>
                  <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{item.name}</span>
                  <span className="text-primary font-bold">₹{item.price.toLocaleString()}</span>
                </li>
              )) : <li className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>No services selected.</li>}
            </ul>
            <button className="btn btn-purple-hover mt-2" onClick={() => setSelectedClient(null)}>Back to Clients</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage; 