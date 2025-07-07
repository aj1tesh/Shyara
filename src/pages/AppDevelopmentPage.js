import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';
import ThreeDBackground from '../components/ThreeDBackground';
import FancyText from '../components/FancyText';
import { Smartphone, ListChecks, BadgePercent, Star, MessageCircle, Rocket, ArrowLeft } from 'lucide-react';

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

const AppDevelopmentPage = () => {
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);
  const isBasicInCart = cart.some(item => item.id === 'app-basic');
  const isEnterpriseInCart = cart.some(item => item.id === 'app-enterprise');
  return (
    <div className="relative min-h-screen">
      <ThreeDBackground />
      <StickyGoBack onClick={() => navigate('/services')} />
      <div className="container mx-auto py-16 px-4 relative z-10 flex justify-center items-start min-h-screen">
        <div className="bg-surface/70 backdrop-blur-md rounded-3xl shadow-2xl border border-surface max-w-5xl w-full p-8 sm:p-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <Smartphone className="w-8 h-8 text-primary drop-shadow" />
            <FancyText text="App Development" />
          </h1>
          <section className="prose prose-invert max-w-none text-lg text-text-secondary mb-8 animate-fade-in">
            <p>Mobile apps offer direct engagement, improved customer experience, and new revenue streams. Whether you want to launch a startup MVP or build a feature-rich app, having a skilled team behind you is crucial.</p>
            <p>At <b>Shyara</b>, our community of freelance developers and designers collaborate to deliver robust, user-friendly mobile apps tailored to your vision.</p>
          </section>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.1s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <ListChecks className="w-6 h-6 text-primary" /> What We Offer
            </h2>
            <ul className="pl-4 border-l-4 border-primary/60 space-y-4">
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Cross-Platform Development:</b> Android, iOS, or hybrid apps using the latest technologies.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Custom UI/UX Design:</b> Beautiful interfaces designed for ease of use and engagement.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Feature-Based Pricing:</b> Pay for only what your app needs — from basic to advanced features.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>MVP & Startup Support:</b> Quick development cycles to get your idea to market fast.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>App Maintenance & Updates:</b> Ongoing support to keep your app secure and up-to-date.</li>
            </ul>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.2s'}}>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <BadgePercent className="w-6 h-6 text-primary" /> Pricing Guide
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <div className="flex-1 bg-surface/80 rounded-2xl shadow-lg p-6 border border-primary/30 flex flex-col items-center">
                <div className="text-2xl font-bold text-primary mb-2">Basic App</div>
                <div className="text-lg text-text-secondary mb-2">Starting at ₹30,000</div>
                <button
                  className={`btn btn-purple-hover flex items-center gap-2 mt-auto ${isBasicInCart ? 'opacity-60 cursor-not-allowed' : ''}`}
                  onClick={() => addToCart({ id: 'app-basic', name: 'App Development - Basic', price: 30000 })}
                  disabled={isBasicInCart}
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex-1 bg-surface/80 rounded-2xl shadow-lg p-6 border border-primary/30 flex flex-col items-center">
                <div className="text-2xl font-bold text-primary mb-2">Enterprise/Advanced App</div>
                <div className="text-lg text-text-secondary mb-2">Custom pricing</div>
                <button
                  className={`btn btn-purple-hover flex items-center gap-2 mt-auto ${isEnterpriseInCart ? 'opacity-60 cursor-not-allowed' : ''}`}
                  onClick={() => addToCart({ id: 'app-enterprise', name: 'App Development - Enterprise', price: 0 })}
                  disabled={isEnterpriseInCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <p className="mt-2 text-text-secondary">Contact us for a detailed proposal and timeline.</p>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.3s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <Star className="w-6 h-6 text-primary" /> Why Work with Shyara?
            </h2>
            <ul className="pl-4 border-l-4 border-primary/60 space-y-4">
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Access to a <b>flexible freelance network</b> of developers, designers, and testers.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Transparent project management with regular updates.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Focus on quality, security, and performance.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Competitive pricing and personalized service.</li>
            </ul>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.4s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-primary" /> Client Story
            </h2>
            <blockquote className="border-l-4 border-primary pl-4 italic text-text-secondary mb-2">“Shyara's freelance app developers brought our idea to reality ahead of schedule, with a sleek design and smooth performance."<br /><span className="font-semibold text-text-primary">— Manish Gupta, Tech Startup Founder</span></blockquote>
          </div>
          <Divider />
          <div className="text-center mt-10 animate-fade-in" style={{animationDelay:'0.5s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2 justify-center">
              <Rocket className="w-6 h-6 text-primary" /> Ready to Build Your App?
            </h2>
            <p className="mb-4 text-text-secondary">Bring your app idea to life with Shyara's expert freelance developers.</p>
            <button className="btn btn-purple-hover" onClick={() => navigate('/contact')}>Request a Free Consultation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopmentPage; 