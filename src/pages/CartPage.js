import React, { useContext } from 'react';
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

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center bg-transparent">
      <div className="flex flex-col items-center w-full">
        <div className="w-3/5 flex flex-col items-center mx-auto" style={{minHeight:'340px'}}>
          <div className={`relative w-full transition-all duration-500`}
            style={{zIndex:2}}>
            <div className={`bg-white/10 backdrop-blur-lg border-2 border-transparent bg-clip-padding rounded-2xl shadow-2xl p-8 w-full mx-auto flex flex-col items-center relative overflow-hidden`}
              style={{boxShadow:'0 8px 32px 0 rgba(80,80,120,0.18)', borderImage: undefined}}>
              {BRAND_LOGO}
              <div className="mt-16 w-full">
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
        </div>
      </div>
    </div>
  );
};

export default CartPage; 