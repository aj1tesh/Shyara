import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';
import ThreeDBackground from '../components/ThreeDBackground';
import FancyText from '../components/FancyText';
import { Globe, ListChecks, BadgePercent, Star, MessageCircle, Rocket } from 'lucide-react';

const Divider = () => (
  <div className="w-full flex justify-center my-8">
    <div className="h-1 w-2/3 bg-gradient-to-r from-primary via-purple-400 to-primary rounded-full animate-pulse shadow-lg" style={{minWidth:'200px'}}></div>
  </div>
);

const WebsiteDevelopmentPage = () => {
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);
  const isBasicInCart = cart.some(item => item.id === 'web-basic');
  const isEcomInCart = cart.some(item => item.id === 'web-ecom');
  return (
    <div className="relative min-h-screen">
      <ThreeDBackground />
      <div className="container mx-auto py-16 px-4 relative z-10 flex justify-center items-start min-h-screen">
        <div className="bg-surface/70 backdrop-blur-md rounded-3xl shadow-2xl border border-surface max-w-5xl w-full p-8 sm:p-16 animate-fade-in">
          <button onClick={() => navigate('/services')} className="btn btn-surface mb-8">&larr; Go Back</button>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <Globe className="w-8 h-8 text-primary drop-shadow" />
            <FancyText text="Web Development" />
          </h1>
          <section className="prose prose-invert max-w-none text-lg text-text-secondary mb-8 animate-fade-in">
            <p>Your website is often the first impression customers have of your brand. A fast, responsive, and well-designed site can turn visitors into loyal customers — while a slow or outdated site can drive them away.</p>
            <p>At <b>Shyara</b>, we bring together talented freelance web developers, designers, and SEO specialists to create websites that look great, perform perfectly, and rank well on search engines.</p>
          </section>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.1s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <ListChecks className="w-6 h-6 text-primary" /> What We Offer
            </h2>
            <ul className="pl-4 border-l-4 border-primary/60 space-y-4">
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Custom Website Design & Development:</b> Tailored to your brand identity and business goals.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Responsive & Mobile-Friendly:</b> Your site will look amazing on phones, tablets, and desktops.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>SEO-Optimized:</b> Built with SEO best practices to improve your Google rankings and organic traffic.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>E-commerce & Booking Systems:</b> Sell products, services, or accept bookings online with ease.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Content Management:</b> Easy-to-use CMS so you can update your content anytime.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Maintenance & Support:</b> Ongoing website updates and technical support from our freelancer network.</li>
            </ul>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.2s'}}>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <BadgePercent className="w-6 h-6 text-primary" /> Pricing
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <div className="flex-1 bg-surface/80 rounded-2xl shadow-lg p-6 border border-primary/30 flex flex-col items-center">
                <div className="text-2xl font-bold text-primary mb-2">Basic Portfolio / Business Site</div>
                <div className="text-lg text-text-secondary mb-2">Starting at ₹15,000</div>
                <button
                  className={`btn btn-purple-hover flex items-center gap-2 mt-auto ${isBasicInCart ? 'opacity-60 cursor-not-allowed' : ''}`}
                  onClick={() => addToCart({ id: 'web-basic', name: 'Web Development - Basic Site', price: 15000 })}
                  disabled={isBasicInCart}
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex-1 bg-surface/80 rounded-2xl shadow-lg p-6 border border-primary/30 flex flex-col items-center">
                <div className="text-2xl font-bold text-primary mb-2">E-commerce / Booking Platform</div>
                <div className="text-lg text-text-secondary mb-2">Starting at ₹45,000</div>
                <button
                  className={`btn btn-purple-hover flex items-center gap-2 mt-auto ${isEcomInCart ? 'opacity-60 cursor-not-allowed' : ''}`}
                  onClick={() => addToCart({ id: 'web-ecom', name: 'Web Development - E-commerce/Booking', price: 45000 })}
                  disabled={isEcomInCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <p className="mt-2 text-text-secondary">Contact us for a <b>free consultation and custom quote</b>.</p>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.3s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <Star className="w-6 h-6 text-primary" /> Why Choose Shyara for Web Development?
            </h2>
            <ul className="pl-4 border-l-4 border-primary/60 space-y-4">
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Projects delivered by a <b>community of skilled freelancers</b>, ensuring diverse expertise.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Transparent pricing and flexible packages tailored to your budget.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Focus on speed, usability, and SEO to grow your business online.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Seamless communication and project management through our dedicated platform.</li>
            </ul>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.4s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-primary" /> Client Feedback
            </h2>
            <blockquote className="border-l-4 border-primary pl-4 italic text-text-secondary mb-2">“Our new website by Shyara's developers is stunning and loads quickly on all devices. It's already helping us attract more customers!”<br /><span className="font-semibold text-text-primary">— Sneha Mehta, Fitness Coach</span></blockquote>
          </div>
          <Divider />
          <div className="text-center mt-10 animate-fade-in" style={{animationDelay:'0.5s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2 justify-center">
              <Rocket className="w-6 h-6 text-primary" /> Ready to Build Your Website?
            </h2>
            <p className="mb-4 text-text-secondary">Start your project with Shyara's trusted freelance web developers today!</p>
            <button className="btn btn-purple-hover" onClick={() => navigate('/contact')}>Get a Free Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopmentPage; 