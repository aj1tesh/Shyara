import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

const SERVICES = [
  {
    title: 'Social Media Management',
    desc: 'Consistent, creative, and keyword-rich content for all major platforms. Posts, reels, and engagement.',
    plans: [
      { id: 'smm-monthly', name: 'Monthly Plan', price: 10500, label: '₹10,500/month (30% off)' },
      { id: 'smm-yearly', name: 'Yearly Plan', price: 180000, label: '₹1,80,000/year (35% off)' },
    ],
  },
  {
    title: 'Festive Post Designs',
    desc: 'Branded festival creatives to boost reach on special occasions. Includes your logo and contact info.',
    plans: [
      { id: 'festive-monthly', name: 'Monthly Plan', price: 1000, label: '₹1,000/month' },
      { id: 'festive-yearly', name: 'Yearly Plan', price: 12000, label: '₹12,000/year' },
    ],
  },
  {
    title: 'Ads Campaign Management',
    desc: 'High-ROI ads across Meta, Google, and more. Free ad creatives, budget management, and reporting.',
    plans: [
      { id: 'ads-mgmt', name: 'Ad Management Service', price: 0, label: '15% of Ad Spend' },
      { id: 'ads-video', name: 'Ad Video Editing', price: 2000, label: '₹2,000 per video' },
    ],
  },
  {
    title: 'Web Development',
    desc: 'Fast, responsive, and SEO-friendly websites for portfolios, businesses, and e-commerce.',
    plans: [
      { id: 'web-basic', name: 'Basic Portfolio/Business Site', price: 15000, label: 'Starting at ₹15,000' },
      { id: 'web-ecom', name: 'E-commerce/Booking Platform', price: 45000, label: 'Starting at ₹45,000' },
    ],
  },
  {
    title: 'App Development',
    desc: 'Mobile apps for Android & iOS. UI/UX design, development, and deployment.',
    plans: [
      { id: 'app-basic', name: 'Basic App', price: 30000, label: 'Starting at ₹30,000' },
      { id: 'app-enterprise', name: 'Enterprise/Advanced App', price: 0, label: 'Custom pricing' },
    ],
  },
  {
    title: 'Video & Reels Editing',
    desc: 'High-performing reels and video content. You provide the raw footage, we handle the rest.',
    plans: [
      { id: 'video-monthly', name: 'Monthly Plan', price: 25000, label: '₹25,000/month' },
      { id: 'video-yearly', name: 'Yearly Plan', price: 285000, label: '₹2,85,000/year' },
    ],
  },
  {
    title: 'Personalized Services',
    desc: 'Custom solutions, consulting, and unique projects tailored to your needs.',
    plans: [
      { id: 'personalized-consult', name: 'Consulting Session', price: 2000, label: '₹2,000/hour' },
      { id: 'personalized-custom', name: 'Custom Project', price: 0, label: 'Custom pricing' },
    ],
  },
];

const AddItemsPage = () => {
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-transparent py-12 px-2">
      {/* Floating circular go back button at top left, aligned with content */}
      <button
        className="fixed top-20 z-50 bg-white/30 backdrop-blur-md hover:bg-white/50 text-primary rounded-full p-3 shadow-lg border border-primary/20 transition-all duration-200 flex items-center justify-center hover:scale-110"
        onClick={() => navigate(-1)}
        aria-label="Go Back"
        style={{
          boxShadow: '0 4px 16px 0 rgba(80,80,120,0.18)',
          left: 'max(0.5rem, calc(50vw - 31rem))'
        }}
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-text-primary mb-8 text-center">Add More Services</h1>
        <div className="space-y-10">
          {SERVICES.map(service => (
            <div key={service.title} className="bg-surface/80 backdrop-blur-md rounded-2xl shadow-xl border border-primary/20 p-8 animate-fade-in">
              <h2 className="text-2xl font-bold text-primary mb-2">{service.title}</h2>
              <p className="text-text-secondary mb-4 text-lg">{service.desc}</p>
              <div className="flex flex-col sm:flex-row gap-6">
                {service.plans.map(plan => {
                  const inCart = cart.some(item => item.id === plan.id);
                  return (
                    <div key={plan.id} className="flex-1 bg-surface/90 rounded-xl shadow p-6 border border-primary/10 flex flex-col items-center">
                      <div className="text-lg font-semibold text-primary mb-2">{plan.name}</div>
                      <div className="text-base text-text-secondary mb-2">{plan.label}</div>
                      <button
                        className={`btn btn-purple-hover flex items-center gap-2 mt-auto w-full ${inCart ? 'opacity-60 cursor-not-allowed' : ''}`}
                        onClick={() => addToCart({ id: plan.id, name: `${service.title} - ${plan.name}`, price: plan.price })}
                        disabled={inCart}
                      >
                        <ShoppingCart className="w-5 h-5" /> {inCart ? 'Added' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddItemsPage; 