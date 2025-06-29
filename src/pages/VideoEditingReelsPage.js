import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';
import ThreeDBackground from '../components/ThreeDBackground';
import FancyText from '../components/FancyText';
import { Film, ListChecks, BadgePercent, Star, MessageCircle, Rocket } from 'lucide-react';

const Divider = () => (
  <div className="w-full flex justify-center my-8">
    <div className="h-1 w-2/3 bg-gradient-to-r from-primary via-purple-400 to-primary rounded-full animate-pulse shadow-lg" style={{minWidth:'200px'}}></div>
  </div>
);

const VideoEditingReelsPage = () => {
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);
  const isMonthlyInCart = cart.some(item => item.id === 'video-monthly');
  const isYearlyInCart = cart.some(item => item.id === 'video-yearly');
  return (
    <div className="relative min-h-screen">
      <ThreeDBackground />
      <div className="container mx-auto py-16 px-4 relative z-10 flex justify-center items-start min-h-screen">
        <div className="bg-surface/70 backdrop-blur-md rounded-3xl shadow-2xl border border-surface max-w-5xl w-full p-8 sm:p-16 animate-fade-in">
          <button onClick={() => navigate('/services')} className="btn btn-surface mb-8">&larr; Go Back</button>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <Film className="w-8 h-8 text-primary drop-shadow" />
            <FancyText text="Video Editing & Reels" />
          </h1>
          <section className="prose prose-invert max-w-none text-lg text-text-secondary mb-8 animate-fade-in">
            <p>Video content, especially short-form reels, is the fastest-growing way to engage audiences across social media. It builds brand awareness, drives interaction, and converts viewers into customers.</p>
            <p>At <b>Shyara</b>, our community of freelance video editors creates dynamic reels tailored to your brand voice and audience.</p>
          </section>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.1s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <ListChecks className="w-6 h-6 text-primary" /> What We Offer
            </h2>
            <ul className="pl-4 border-l-4 border-primary/60 space-y-4">
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>20 Reels per Month:</b> Fresh, high-quality content to keep your feed active and engaging.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Raw Footage Provided by You:</b> We professionally edit your videos into compelling stories.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Free Social Media Account Handling:</b> We manage your accounts alongside video posting.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Creative Captions with High-Volume Keywords & Hashtags:</b> Designed for maximum reach and discoverability.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4"><b>Consistent Branding:</b> Ensuring your visuals reflect your brand identity.</li>
            </ul>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.2s'}}>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <BadgePercent className="w-6 h-6 text-primary" /> Pricing
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <div className="flex-1 bg-surface/80 rounded-2xl shadow-lg p-6 border border-primary/30 flex flex-col items-center">
                <div className="text-2xl font-bold text-primary mb-2">Monthly Plan</div>
                <div className="text-lg text-text-secondary mb-2">₹25,000/month</div>
                <button
                  className={`btn btn-purple-hover flex items-center gap-2 mt-auto ${isMonthlyInCart ? 'opacity-60 cursor-not-allowed' : ''}`}
                  onClick={() => addToCart({ id: 'video-monthly', name: 'Video Editing & Reels - Monthly', price: 25000 })}
                  disabled={isMonthlyInCart}
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex-1 bg-surface/80 rounded-2xl shadow-lg p-6 border border-primary/30 flex flex-col items-center">
                <div className="text-2xl font-bold text-primary mb-2">Yearly Plan</div>
                <div className="text-lg text-text-secondary mb-2">₹2,85,000/year</div>
                <button
                  className={`btn btn-purple-hover flex items-center gap-2 mt-auto ${isYearlyInCart ? 'opacity-60 cursor-not-allowed' : ''}`}
                  onClick={() => addToCart({ id: 'video-yearly', name: 'Video Editing & Reels - Yearly', price: 285000 })}
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
              <Star className="w-6 h-6 text-primary" /> Why Choose Shyara for Video Editing?
            </h2>
            <ul className="pl-4 border-l-4 border-primary/60 space-y-4">
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Access to a <b>talented network of freelance editors</b> who specialize in social media trends.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">High-quality videos tailored to your niche and target audience.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Integrated social media management to maximize your content's impact.</li>
              <li className="flex items-start gap-3 bg-surface/80 rounded-xl shadow p-4">Transparent pricing and reliable service.</li>
            </ul>
          </div>
          <Divider />
          <div className="mb-8 animate-fade-in" style={{animationDelay:'0.4s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-primary" /> Client Feedback
            </h2>
            <blockquote className="border-l-4 border-primary pl-4 italic text-text-secondary mb-2">“Since partnering with Shyara for reels and social media management, our follower count has grown 3x and our engagement skyrocketed!”<br /><span className="font-semibold text-text-primary">— Neha Sharma, Lifestyle Influencer</span></blockquote>
          </div>
          <Divider />
          <div className="text-center mt-10 animate-fade-in" style={{animationDelay:'0.5s'}}>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2 justify-center">
              <Rocket className="w-6 h-6 text-primary" /> Ready to Make Videos That Convert?
            </h2>
            <p className="mb-4 text-text-secondary">Get started with Shyara's expert freelance video editors and boost your brand's presence.</p>
            <button className="btn btn-purple-hover" onClick={() => navigate('/contact')}>Contact Us for a Free Consultation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoEditingReelsPage; 