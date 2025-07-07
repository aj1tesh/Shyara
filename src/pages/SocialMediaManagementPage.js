import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, ListChecks, BadgePercent, Star, MessageCircle, Rocket, CheckCircle, ShoppingCart, ArrowLeft } from 'lucide-react';
import ThreeDBackground from '../components/ThreeDBackground';
import FancyText from '../components/FancyText';
import { CartContext } from '../CartContext';

const Divider = () => (
  <div className="w-full flex justify-center my-8">
    <div className="h-1 w-2/3 bg-gradient-to-r from-primary via-purple-400 to-primary rounded-full animate-pulse shadow-lg" style={{minWidth:'200px'}}></div>
  </div>
);

const StickyGoBack = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed top-24 left-8 z-50 btn btn-surface px-4 py-2 rounded-full flex items-center gap-2 shadow border border-primary/30 backdrop-blur-md hover:bg-primary/10 transition-all animate-fade-in"
    style={{boxShadow:'0 2px 16px 0 rgba(80,80,120,0.10)', opacity:0.97}}
    aria-label="Go Back"
  >
    <ArrowLeft className="w-5 h-5 text-primary" />
    <span>Go Back</span>
  </button>
);

const SocialMediaManagementPage = () => {
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);
  const isMonthlyInCart = cart.some(item => item.id === 'smm-monthly');
  const isYearlyInCart = cart.some(item => item.id === 'smm-yearly');
  return (
    <div className="relative min-h-screen">
      <ThreeDBackground />
      <StickyGoBack onClick={() => navigate('/services')} />
      <div className="container mx-auto py-16 px-4 relative z-10 flex justify-center items-start min-h-screen">
        <div className="bg-surface/70 backdrop-blur-md rounded-3xl shadow-2xl border border-surface max-w-5xl w-full p-8 sm:p-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <Users className="w-8 h-8 text-primary drop-shadow" />
            <FancyText text="Social Media Management" />
          </h1>
          <section className="prose prose-invert max-w-none text-lg text-text-secondary mb-8 animate-fade-in">
            <p>In today's digital world, <b>consistent and engaging social media content</b> is the key to growing your brand's reach, building trust, and driving sales. But managing multiple platforms can be overwhelming — that's where Shyara comes in.</p>
          </section>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.1s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <ListChecks className="w-6 h-6 text-primary" /> What We Offer
            </h2>
            <ul className="pl-4 border-l-4 border-primary/60 space-y-4">
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <span><b>Account Handling:</b> Instagram, Facebook, LinkedIn, Twitter, Google My Business — all managed professionally.</span>
              </li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <span><b>Creative Content:</b> 16 unique, eye-catching posts each month tailored to your brand voice.</span>
              </li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <span><b>Reels & Videos:</b> 2 engaging reels every alternate Sunday to maximize reach and engagement.</span>
              </li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <span><b>High-Impact Captions:</b> Crafted with high-volume keywords and trending hashtags for SEO and discoverability.</span>
              </li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <span><b>Festive Posts — FREE:</b> Celebrate festivals and special days with custom-designed posts featuring your logo and contact info.</span>
              </li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <span><b>New to Social Media?</b> No worries — we'll set up your profiles free of charge!</span>
              </li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <span><b>Content Calendar:</b> Stay ahead with a monthly content plan, so you know what's coming next.</span>
              </li>
            </ul>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.2s'}}>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <BadgePercent className="w-6 h-6 text-primary" /> Pricing
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex-1 bg-surface/80 rounded-2xl shadow-lg p-6 border border-primary/30 flex flex-col items-center">
                <div className="text-2xl font-bold text-primary mb-2">Monthly Plan</div>
                <div className="text-lg text-text-secondary mb-2">₹15,000/month</div>
                <div className="text-base text-green-500 mb-4">Now with 30% discount — Pay ₹10,500!</div>
                <button
                  className={`btn btn-purple-hover flex items-center gap-2 mt-auto ${isMonthlyInCart ? 'opacity-60 cursor-not-allowed' : ''}`}
                  onClick={() => addToCart({ id: 'smm-monthly', name: 'Social Media Management - Monthly', price: 10500 })}
                  disabled={isMonthlyInCart}
                >
                  <ShoppingCart className="w-5 h-5" /> {isMonthlyInCart ? 'Added' : 'Add to Cart'}
                </button>
              </div>
              <div className="flex-1 bg-surface/80 rounded-2xl shadow-lg p-6 border border-primary/30 flex flex-col items-center">
                <div className="text-2xl font-bold text-primary mb-2">Yearly Plan</div>
                <div className="text-lg text-text-secondary mb-2">₹1,80,000/year</div>
                <div className="text-base text-green-500 mb-4">35% discount on upfront payment</div>
                <button
                  className={`btn btn-purple-hover flex items-center gap-2 mt-auto ${isYearlyInCart ? 'opacity-60 cursor-not-allowed' : ''}`}
                  onClick={() => addToCart({ id: 'smm-yearly', name: 'Social Media Management - Yearly', price: 180000 })}
                  disabled={isYearlyInCart}
                >
                  <ShoppingCart className="w-5 h-5" /> {isYearlyInCart ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.3s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <Star className="w-6 h-6 text-primary" /> Why Choose Us?
            </h2>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>We are a <b>community of freelancers</b> with diverse skills — combining creativity, analytics, and marketing know-how.</li>
              <li>Your content is crafted with <b>SEO best practices</b> in mind to help you rank organically.</li>
              <li>Transparent pricing, no hidden fees.</li>
              <li>Personalized strategy aligned with your goals.</li>
            </ul>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.4s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-primary" /> Client Success Story
            </h2>
            <blockquote className="border-l-4 border-primary pl-4 italic text-text-secondary mb-2">"Shyara transformed our social media presence in just 3 months — our engagement increased by 200%, and we started getting real leads."<br /><span className="font-semibold text-text-primary">— Amit Kumar, Local Café Owner</span></blockquote>
          </div>
          <Divider />
          <div className="text-center mt-10 animate-fade-in" style={{animationDelay:'0.5s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2 justify-center">
              <Rocket className="w-6 h-6 text-primary" /> Ready to Amplify Your Social Media?
            </h2>
            <p className="mb-4 text-text-secondary">Book a free consultation today and let's get your brand buzzing online!</p>
            <button className="btn btn-purple-hover" onClick={() => navigate('/contact')}>Get Started Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaManagementPage; 