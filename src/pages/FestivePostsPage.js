import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';
import ThreeDBackground from '../components/ThreeDBackground';
import FancyText from '../components/FancyText';
import { Sparkles, ListChecks, BadgePercent, Star, MessageCircle, Rocket, ArrowLeft } from 'lucide-react';

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

const FestivePostsPage = () => {
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);
  const isMonthlyInCart = cart.some(item => item.id === 'festive-monthly');
  const isYearlyInCart = cart.some(item => item.id === 'festive-yearly');
  return (
    <div className="relative min-h-screen">
      <ThreeDBackground />
      <StickyGoBack onClick={() => navigate('/services')} />
      <div className="container mx-auto py-16 px-4 relative z-10 flex justify-center items-start min-h-screen">
        <div className="bg-surface/70 backdrop-blur-md rounded-3xl shadow-2xl border border-surface max-w-5xl w-full p-8 sm:p-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-primary drop-shadow" />
            <FancyText text="Festive Post Designs" />
          </h1>
          <section className="prose prose-invert max-w-none text-lg text-text-secondary mb-8 animate-fade-in">
            <p>Festivals and special occasions offer prime opportunities to connect with your audience emotionally and boost your brand's visibility. At <b>Shyara</b>, we create <b>eye-catching, shareable festive posts</b> that feature your logo and contact details — designed specifically to maximize engagement when your followers share them.</p>
            <p>Stand out in crowded social feeds during Diwali, Christmas, Eid, Holi, and more!</p>
          </section>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.1s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <ListChecks className="w-6 h-6 text-primary" /> What's Included?
            </h2>
            <ul className="pl-4 border-l-4 border-primary/60 space-y-4">
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Custom Festive Designs:</b> Beautiful, professionally crafted posts that fit your brand style and message.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Logo & Contact Info:</b> Ensures your brand stays top-of-mind when posts get shared.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Easy Sharing:</b> Optimized formats for Instagram, Facebook, WhatsApp, and more.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Sample Designs:</b> Preview our style before committing.</li>
            </ul>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.2s'}}>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <BadgePercent className="w-6 h-6 text-primary" /> Pricing Plans
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <div className="flex-1 bg-surface/80 rounded-2xl shadow-lg p-6 border border-primary/30 flex flex-col items-center">
                <div className="text-2xl font-bold text-primary mb-2">Monthly Plan</div>
                <div className="text-lg text-text-secondary mb-2">₹1,000/month</div>
                <button
                  className={`btn btn-purple-hover flex items-center gap-2 mt-auto ${isMonthlyInCart ? 'opacity-60 cursor-not-allowed' : ''}`}
                  onClick={() => addToCart({ id: 'festive-monthly', name: 'Festive Posts - Monthly', price: 1000 })}
                  disabled={isMonthlyInCart}
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex-1 bg-surface/80 rounded-2xl shadow-lg p-6 border border-primary/30 flex flex-col items-center">
                <div className="text-2xl font-bold text-primary mb-2">Yearly Plan</div>
                <div className="text-lg text-text-secondary mb-2">₹12,000/year</div>
                <button
                  className={`btn btn-purple-hover flex items-center gap-2 mt-auto ${isYearlyInCart ? 'opacity-60 cursor-not-allowed' : ''}`}
                  onClick={() => addToCart({ id: 'festive-yearly', name: 'Festive Posts - Yearly', price: 12000 })}
                  disabled={isYearlyInCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.3s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <Star className="w-6 h-6 text-primary" /> Why Choose Our Festive Posts?
            </h2>
            <ul className="pl-4 border-l-4 border-primary/60 space-y-4">
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Crafted by a community of freelancers passionate about design and culture.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Perfect for businesses wanting <b>high engagement with minimal effort</b>.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Affordable pricing for startups and local brands.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Quick turnaround to meet all festival calendars.</li>
            </ul>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.4s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-primary" /> Client Feedback
            </h2>
            <blockquote className="border-l-4 border-primary pl-4 italic text-text-secondary mb-2">“The festive posts from Shyara really made a difference during last year's holidays. Our page engagement soared, and customers kept calling!”<br /><span className="font-semibold text-text-primary">— Priya Singh, Boutique Owner</span></blockquote>
          </div>
          <Divider />
          <div className="text-center mt-10 animate-fade-in" style={{animationDelay:'0.5s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2 justify-center">
              <Rocket className="w-6 h-6 text-primary" /> Ready to Celebrate With Us?
            </h2>
            <p className="mb-4 text-text-secondary">Make your brand part of the celebration and watch your social media buzz increase!</p>
            <button className="btn btn-purple-hover" onClick={() => navigate('/contact')}>Get Started Today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivePostsPage; 