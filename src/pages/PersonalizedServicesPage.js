import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';
import ThreeDBackground from '../components/ThreeDBackground';
import FancyText from '../components/FancyText';
import { UserCog, ListChecks, BadgePercent, Star, MessageCircle, Rocket, ArrowLeft } from 'lucide-react';

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

const PersonalizedServicesPage = () => {
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);
  const isConsultInCart = cart.some(item => item.id === 'personalized-consult');
  const isCustomInCart = cart.some(item => item.id === 'personalized-custom');
  return (
    <div className="relative min-h-screen">
      <ThreeDBackground />
      <StickyGoBack onClick={() => navigate('/services')} />
      <div className="container mx-auto py-16 px-4 relative z-10 flex justify-center items-start min-h-screen">
        <div className="bg-surface/70 backdrop-blur-md rounded-3xl shadow-2xl border border-surface max-w-5xl w-full p-8 sm:p-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <UserCog className="w-8 h-8 text-primary drop-shadow" />
            <FancyText text="Personalized Services" />
          </h1>
          <section className="prose prose-invert max-w-none text-lg text-text-secondary mb-8 animate-fade-in">
            <p>Have a unique idea or need a custom solution? <b>Shyara</b> offers personalized digital services tailored to your exact requirements. From one-on-one consulting to fully custom projects, our freelancer network is ready to help you stand out.</p>
            <p>Let's co-create something extraordinary for your brand!</p>
          </section>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.1s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <ListChecks className="w-6 h-6 text-primary" /> What We Offer
            </h2>
            <ul className="pl-4 border-l-4 border-primary/60 space-y-4">
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Consulting Sessions:</b> Strategy, branding, marketing, or tech — get expert advice for your business.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Custom Projects:</b> Websites, apps, campaigns, or anything digital — built to your specs.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Flexible Engagement:</b> One-time or ongoing support, as you need it.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Direct Collaboration:</b> Work closely with our top freelancers for a truly bespoke experience.</li>
            </ul>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.2s'}}>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <BadgePercent className="w-6 h-6 text-primary" /> Pricing
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <div className="flex-1 bg-surface/80 rounded-2xl shadow-lg p-6 border border-primary/30 flex flex-col items-center">
                <div className="text-2xl font-bold text-primary mb-2">Consulting Session</div>
                <div className="text-lg text-text-secondary mb-2">₹2,000/hour</div>
                <button
                  className={`btn btn-purple-hover flex items-center gap-2 mt-auto ${isConsultInCart ? 'opacity-60 cursor-not-allowed' : ''}`}
                  onClick={() => addToCart({ id: 'personalized-consult', name: 'Personalized Consulting Session', price: 2000 })}
                  disabled={isConsultInCart}
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex-1 bg-surface/80 rounded-2xl shadow-lg p-6 border border-primary/30 flex flex-col items-center">
                <div className="text-2xl font-bold text-primary mb-2">Custom Project</div>
                <div className="text-lg text-text-secondary mb-2">Custom pricing</div>
                <button
                  className={`btn btn-purple-hover flex items-center gap-2 mt-auto ${isCustomInCart ? 'opacity-60 cursor-not-allowed' : ''}`}
                  onClick={() => addToCart({ id: 'personalized-custom', name: 'Personalized Custom Project', price: 0 })}
                  disabled={isCustomInCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <p className="mt-2 text-text-secondary">Contact us for a custom quote or to discuss your idea.</p>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.3s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <Star className="w-6 h-6 text-primary" /> Why Choose Shyara?
            </h2>
            <ul className="pl-4 border-l-4 border-primary/60 space-y-4">
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Work with a <b>handpicked team</b> of creative and technical experts.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Truly custom solutions — no templates, no shortcuts.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Transparent process and direct communication.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Results that make your brand stand out.</li>
            </ul>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.4s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-primary" /> Client Story
            </h2>
            <blockquote className="border-l-4 border-primary pl-4 italic text-text-secondary mb-2">"Shyara's personalized approach helped us launch a campaign that was truly unique to our brand. The results exceeded our expectations!"<br /><span className="font-semibold text-text-primary">— Ritu Jain, Boutique Owner</span></blockquote>
          </div>
          <Divider />
          <div className="text-center mt-10 animate-fade-in" style={{animationDelay:'0.5s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2 justify-center">
              <Rocket className="w-6 h-6 text-primary" /> Ready for Something Unique?
            </h2>
            <p className="mb-4 text-text-secondary">Let's create a solution as unique as your business. Reach out to discuss your vision!</p>
            <button className="btn btn-purple-hover" onClick={() => navigate('/contact')}>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedServicesPage; 