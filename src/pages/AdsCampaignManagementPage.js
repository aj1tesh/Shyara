import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';
import ThreeDBackground from '../components/ThreeDBackground';
import FancyText from '../components/FancyText';
import { Megaphone, ListChecks, BadgePercent, Star, MessageCircle, Rocket } from 'lucide-react';

const Divider = () => (
  <div className="w-full flex justify-center my-8">
    <div className="h-1 w-2/3 bg-gradient-to-r from-primary via-purple-400 to-primary rounded-full animate-pulse shadow-lg" style={{minWidth:'200px'}}></div>
  </div>
);

const AdsCampaignManagementPage = () => {
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);
  const isAdMgmtInCart = cart.some(item => item.id === 'ads-mgmt');
  const isVideoInCart = cart.some(item => item.id === 'ads-video');
  return (
    <div className="relative min-h-screen">
      <ThreeDBackground />
      <div className="container mx-auto py-16 px-4 relative z-10 flex justify-center items-start min-h-screen">
        <div className="bg-surface/70 backdrop-blur-md rounded-3xl shadow-2xl border border-surface max-w-5xl w-full p-8 sm:p-16 animate-fade-in">
          <button onClick={() => navigate('/services')} className="btn btn-surface mb-8">&larr; Go Back</button>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <Megaphone className="w-8 h-8 text-primary drop-shadow" />
            <FancyText text="Ads Campaign Management" />
          </h1>
          <section className="prose prose-invert max-w-none text-lg text-text-secondary mb-8 animate-fade-in">
            <p>Online advertising is one of the fastest ways to grow your brand, increase traffic, and boost sales. But running effective ad campaigns requires expertise, creativity, and constant optimization — which can be time-consuming and expensive.</p>
            <p>At <b>Shyara</b>, our community of skilled freelancers manages your ad campaigns end-to-end, ensuring your budget is spent smartly and delivers measurable results.</p>
          </section>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.1s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <ListChecks className="w-6 h-6 text-primary" /> What We Provide
            </h2>
            <ul className="pl-4 border-l-4 border-primary/60 space-y-4">
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Free Ad Image Design:</b> Professionally designed images tailored to your brand and campaign goals.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Ad Video Editing:</b> For ₹2,000 per video, we edit raw footage you provide into high-impact ads. (100% advance payment required)</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Complete Ad Management:</b> We handle your ad budget, targeting, optimization, and reporting across platforms like Facebook, Instagram, Google Ads, and more.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Transparent Pricing:</b> Advance payment for 1 month of ad budget, 15% service fee of the ad budget after 15 days, full payment of ad budget after campaign completion.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Performance Tracking:</b> Receive detailed reports and insights so you know exactly how your campaign is performing.</li>
            </ul>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.2s'}}>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <BadgePercent className="w-6 h-6 text-primary" /> Pricing Summary
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <div className="flex-1 bg-surface/80 rounded-2xl shadow-lg p-6 border border-primary/30 flex flex-col items-center">
                <div className="text-2xl font-bold text-primary mb-2">Ad Management Service</div>
                <div className="text-lg text-text-secondary mb-2">15% of ad budget (after 15 days)</div>
                <button
                  className={`btn btn-purple-hover flex items-center gap-2 mt-auto ${isAdMgmtInCart ? 'opacity-60 cursor-not-allowed' : ''}`}
                  onClick={() => addToCart({ id: 'ads-mgmt', name: 'Ads Campaign Management Service', price: 0 })}
                  disabled={isAdMgmtInCart}
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex-1 bg-surface/80 rounded-2xl shadow-lg p-6 border border-primary/30 flex flex-col items-center">
                <div className="text-2xl font-bold text-primary mb-2">Ad Video Editing</div>
                <div className="text-lg text-text-secondary mb-2">₹2,000 per video</div>
                <button
                  className={`btn btn-purple-hover flex items-center gap-2 mt-auto ${isVideoInCart ? 'opacity-60 cursor-not-allowed' : ''}`}
                  onClick={() => addToCart({ id: 'ads-video', name: 'Ad Video Editing', price: 2000 })}
                  disabled={isVideoInCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.3s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <Star className="w-6 h-6 text-primary" /> Why Partner With Shyara?
            </h2>
            <ul className="pl-4 border-l-4 border-primary/60 space-y-4">
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Managed by a <b>community of expert freelancers</b> skilled in digital marketing and ad strategy.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Creative, data-driven approach ensures <b>high ROI</b>.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Full transparency and communication throughout your campaign.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Flexible budgets — from startups to growing businesses.</li>
            </ul>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.4s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-primary" /> Client Success Story
            </h2>
            <blockquote className="border-l-4 border-primary pl-4 italic text-text-secondary mb-2">“With Shyara handling our Facebook and Instagram ads, our sales increased by 30% in the first month itself. The team's communication and creativity are top-notch.”<br /><span className="font-semibold text-text-primary">— Rahul Verma, E-commerce Entrepreneur</span></blockquote>
          </div>
          <Divider />
          <div className="text-center mt-10 animate-fade-in" style={{animationDelay:'0.5s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2 justify-center">
              <Rocket className="w-6 h-6 text-primary" /> Ready to Accelerate Your Growth?
            </h2>
            <p className="mb-4 text-text-secondary">Let's craft an ad campaign that delivers real business results.</p>
            <button className="btn btn-purple-hover" onClick={() => navigate('/contact')}>Get Started Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsCampaignManagementPage; 