import React, { useState, useEffect } from 'react';
import { Share2, Sparkles, Megaphone, Globe, Smartphone, Film } from 'lucide-react';

const services = [
  {
    icon: <Share2 className="w-8 h-8 text-primary" />,
    title: 'Social Media Management',
    desc: 'Consistent, creative, and keyword-rich content for all major platforms. We handle everything from posts and reels to community engagement.',
    price: 'Starting at ₹10,500/month',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: 'Festive Post Designs',
    desc: 'Ready-to-share branded festival creatives to boost reach on special occasions. Includes your logo and contact info for brand recognition.',
    price: '₹1,000/month',
  },
  {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    title: 'Ads Campaign Management',
    desc: 'Run powerful, high-ROI ads across Meta, Google, and more. Includes free ad creatives, strategic budget management, and transparent reporting.',
    price: '15% of Ad Spend',
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: 'Web Development',
    desc: 'Fast, responsive, and SEO-friendly websites for portfolios, businesses, and e-commerce. Custom designs with complete development support.',
    price: 'Custom Quote',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: 'App Development',
    desc: 'Mobile apps for Android & iOS built by our skilled freelance developers. We handle UI/UX design, development, and deployment.',
    price: 'Custom Quote',
  },
  {
    icon: <Film className="w-8 h-8 text-primary" />,
    title: 'Video & Reels Editing',
    desc: 'Grow your brand with high-performing reels and video content. You provide the raw footage, and we handle the rest.',
    price: 'Starting at ₹25,000/month',
  },
];

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);
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
    >
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-3 text-text-primary">{service.title}</h3>
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
      {displayed}
      <span className="inline-block w-2 h-6 align-middle bg-text-primary animate-pulse ml-1" aria-hidden="true" style={{verticalAlign:'-0.2em'}}></span>
      <span className="sr-only">Our Services</span>
    </h1>
  );
};

const ServicesPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <ServicesHeading />
        <p className="text-lg text-text-secondary mb-12">
          Smart, scalable, and freelancer-powered digital solutions for every brand. Choose what you need.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage; 