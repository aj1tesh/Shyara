import React, { useState } from 'react';
import { LogOut, User, Briefcase, BarChart2 } from 'lucide-react';

const demoClients = [
  { name: 'Demo Client', cart: [
    { name: 'Social Media Management', price: 10500 },
    { name: 'Website Development', price: 45000 }
  ] }
];

const AdminDashboardStandalone = () => {
  const [clients] = useState(demoClients);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleLogout = () => {
    window.close();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Top Bar */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">SHYARA ADMIN</h1>
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
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Clients List Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-primary">
                <User className="w-6 h-6" />
                Clients
              </h2>
              <ul className="space-y-3 mb-4">
                {clients.map((client, idx) => (
                  <li 
                    key={idx} 
                    className="flex justify-between items-center bg-white/10 rounded-lg p-4 shadow border border-white/20 cursor-pointer hover:bg-white/20 transition-colors"
                    onClick={() => setSelectedClient(client)}
                  >
                    <span className="font-medium text-white">{client.name}</span>
                    <span className="text-primary font-bold">{client.cart.length} services</span>
                  </li>
                ))}
              </ul>
              <div className="text-sm text-gray-300">Click a client to view details.</div>
            </div>
            
            {/* Summary Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-primary">
                <BarChart2 className="w-6 h-6" />
                Account Summary
              </h2>
              <div className="space-y-4">
                <div className="text-lg">Total Clients: <span className="font-bold text-primary">{clients.length}</span></div>
                <div className="text-lg">Total Services: <span className="font-bold text-primary">{clients.reduce((a,c)=>a+c.cart.length,0)}</span></div>
                <div className="text-lg">Total Revenue: <span className="font-bold text-primary">₹{clients.reduce((a,c)=>a+c.cart.reduce((sum,item)=>sum+item.price,0),0).toLocaleString()}</span></div>
              </div>
              <div className="text-sm text-gray-300 mt-4">Overview of all clients and their selected services.</div>
            </div>
          </div>
          
          {/* Selected Client Details */}
          {selectedClient && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-primary">
                <Briefcase className="w-6 h-6" />
                {selectedClient.name}'s Services
              </h2>
              <ul className="space-y-3 mb-6">
                {selectedClient.cart && selectedClient.cart.length > 0 ? selectedClient.cart.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center bg-white/10 rounded-lg p-4 shadow border border-white/20">
                    <span className="font-medium text-white">{item.name}</span>
                    <span className="text-primary font-bold">₹{item.price.toLocaleString()}</span>
                  </li>
                )) : <li className="text-gray-300">No services selected.</li>}
              </ul>
              <div className="text-right">
                <div className="text-lg mb-2">Total: <span className="font-bold text-primary">₹{selectedClient.cart.reduce((sum,item)=>sum+item.price,0).toLocaleString()}</span></div>
                <button 
                  className="px-6 py-2 bg-primary hover:bg-purple-600 text-white rounded-lg transition-colors"
                  onClick={() => setSelectedClient(null)}
                >
                  Back to Clients
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardStandalone; 