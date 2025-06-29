import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Share2, Sparkles, Megaphone, Globe, Smartphone, Film } from 'lucide-react';
import ThreeDBackground from '../components/ThreeDBackground';
import FancyText from '../components/FancyText';

const services = [
  {
    icon: <Share2 className="w-8 h-8 text-primary" />,
    title: 'Social Media Management',
    desc: 'Consistent, creative, and keyword-rich content for all major platforms. We handle everything from posts and reels to community engagement.',
    price: 'Starting at ₹10,500/month',
    route: '/services/social-media-management',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: 'Festive Post Designs',
    desc: 'Ready-to-share branded festival creatives to boost reach on special occasions. Includes your logo and contact info for brand recognition.',
    price: '₹1,000/month',
    route: '/services/festive-posts',
  },
  {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    title: 'Ads Campaign Management',
    desc: 'Run powerful, high-ROI ads across Meta, Google, and more. Includes free ad creatives, strategic budget management, and transparent reporting.',
    price: '15% of Ad Spend',
    route: '/services/ads-campaign-management',
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: 'Web Development',
    desc: 'Fast, responsive, and SEO-friendly websites for portfolios, businesses, and e-commerce. Custom designs with complete development support.',
    price: 'Custom Quote',
    route: '/services/website-development',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: 'App Development',
    desc: 'Mobile apps for Android & iOS built by our skilled freelance developers. We handle UI/UX design, development, and deployment.',
    price: 'Custom Quote',
    route: '/services/app-development',
  },
  {
    icon: <Film className="w-8 h-8 text-primary" />,
    title: 'Video & Reels Editing',
    desc: 'Grow your brand with high-performing reels and video content. You provide the raw footage, and we handle the rest.',
    price: 'Starting at ₹25,000/month',
    route: '/services/video-editing-reels',
  },
];

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={`bg-surface rounded-xl shadow-lg p-8 flex flex-col transition-all duration-300 relative cursor-pointer
        ${hovered ? 'scale-[1.03] shadow-2xl bg-surface/90' : ''}
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={() => navigate(service.route)}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate(service.route); }}
      role="button"
      aria-label={service.title}
    >
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-3 text-text-primary">
        <FancyText text={service.title} />
      </h3>
      <p className="text-text-secondary mb-4 flex-grow">{service.desc}</p>
      <p className="font-semibold text-primary text-lg">{service.price}</p>
      {/* Subtle overlay on hover */}
      <div className={`absolute inset-0 pointer-events-none transition-all duration-300 ${hovered ? 'bg-primary/5' : ''}`}></div>
    </div>
  );
};

// Track animation state across navigations (per session)
let hasServicesHeadingAnimated = false;

const ServicesHeading = () => {
  const LINE = 'Our Services';
  const [displayed, setDisplayed] = useState(hasServicesHeadingAnimated ? LINE : '');

  useEffect(() => {
    if (hasServicesHeadingAnimated) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayed(LINE);
      hasServicesHeadingAnimated = true;
      return;
    }
    let i = 0;
    const speed = 55;
    const typeLine = () => {
      if (i <= LINE.length) {
        setDisplayed(LINE.slice(0, i));
        i++;
        setTimeout(typeLine, speed);
      } else {
        hasServicesHeadingAnimated = true;
      }
    };
    typeLine();
    return () => {};
  }, []);

  return (
    <h1 className="text-4xl font-bold text-text-primary mb-4 min-h-[2.5em]">
      <FancyText text={displayed} />
      <span className="inline-block w-2 h-6 align-middle bg-text-primary animate-pulse ml-1" aria-hidden="true" style={{verticalAlign:'-0.2em'}}></span>
      <span className="sr-only">Our Services</span>
    </h1>
  );
};

const ServicesPage = () => {
  return (
    <div className="relative">
      <ThreeDBackground />
      <div className="container mx-auto py-16 px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <ServicesHeading />
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-text-primary drop-shadow-lg mb-12 max-w-5xl mx-auto px-0">
            Smart, scalable, and freelancer-powered digital solutions for every brand. Choose what you need.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        {/* Subtle button to Personalized Services at the end of the page */}
        <div className="flex justify-end mt-12">
          <button
            onClick={() => window.location.hash = '#/services/personalized'}
            className="text-primary/70 hover:text-primary bg-surface/70 hover:bg-surface/90 border border-primary/20 rounded-full px-6 py-2 shadow-lg transition-all duration-200 text-lg font-medium backdrop-blur-md animate-fade-in"
            style={{boxShadow:'0 2px 16px 0 rgba(80,80,120,0.10)', opacity:0.85}}
          >
            <span className="italic">Psst... come here...</span> <span className="ml-2"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 