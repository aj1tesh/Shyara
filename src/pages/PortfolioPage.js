import React, { useState, useEffect, useRef } from 'react';

const portfolioItems = [
  {
    title: 'Social Media for Fashion',
    category: 'Social Media',
    img: require('../pics/Screenshot 2025-06-23 003115.png'),
    description: '3-month social media management including 48 creative posts, festive campaigns, and reel creation.',
    results: 'Increased Instagram followers by 60%, engagement up by 45%.',
    services: 'Content creation, account management, analytics reporting.',
  },
  {
    title: 'Fitness Coach Website',
    category: 'Web Development',
    img: require('../pics/fit.jpg'),
    description: 'Responsive website with booking and payment integration.',
    results: '40% increase in online bookings within first two months.',
    services: 'Custom design, SEO optimization, CMS training.',
  },
  {
    title: 'Event Management App',
    category: 'App Development',
    img: require('../pics/event.jpeg'),
    description: 'Cross-platform MVP app for event management.',
    results: 'Launched within 8 weeks; secured initial funding based on prototype.',
    services: 'UI/UX design, development, testing, deployment.',
  },
  {
    title: 'Influencer Reels',
    category: 'Video Editing',
    img: require('../pics/influencer.png'),
    description: 'Monthly production of 20 reels with creative captions and hashtag strategy.',
    results: 'Tripled follower count and boosted engagement on Instagram.',
    services: 'Video editing, social media posting, performance analysis.',
  },
  {
    title: 'E-commerce Ad Campaign',
    category: 'Ad Campaigns',
    img: require('../pics/ad campaign.png'),
    description: 'Facebook and Instagram ad campaign with custom image design and video editing.',
    results: '30% increase in sales and 25% reduction in customer acquisition cost.',
    services: 'Ad design, budget management, campaign optimization.',
  },
  {
    title: 'Tech Startup Website',
    category: 'Web Development',
    img: require('../pics/startup.png'),
    description: 'Modern, responsive website for a tech startup.',
    results: 'Improved brand presence and lead generation.',
    services: 'Web design, development, SEO.',
  },
];

const PortfolioCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`bg-surface rounded-xl shadow-lg overflow-hidden border border-transparent transition-all duration-300 relative group cursor-pointer mb-8
        ${hovered ? 'scale-[1.025] -translate-y-1 bg-surface/95' : ''}
      `}
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="h-56 w-full overflow-hidden flex items-center justify-center bg-black">
        <img
          src={item.img}
          alt={item.title}
          className={`object-cover w-full h-full transition-all duration-500 ease-in-out ${hovered ? 'scale-105 grayscale-0' : 'scale-100 grayscale'} `}
          style={{ aspectRatio: '16/9' }}
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-text-secondary mb-1">{item.category}</p>
        <h3 className="text-xl font-bold text-text-primary mb-2">{item.title}</h3>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${hovered ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}
        >
          <p className="text-text-secondary text-sm mb-1"><span className="font-semibold text-text-primary">Description:</span> {item.description}</p>
          <p className="text-text-secondary text-sm mb-1"><span className="font-semibold text-text-primary">Results:</span> {item.results}</p>
          <p className="text-text-secondary text-sm"><span className="font-semibold text-text-primary">Services:</span> {item.services}</p>
        </div>
      </div>
      <div className={`absolute inset-0 pointer-events-none transition-all duration-300 ${hovered ? 'bg-white/5' : ''}`}></div>
    </div>
  );
};

// Track animation state across navigations (per session)
let hasPortfolioCTAAnimated = false;
let hasPortfolioHeadingAnimated = false;

const PortfolioHeading = () => {
  const LINE = 'Our Work';
  const [displayed, setDisplayed] = useState(hasPortfolioHeadingAnimated ? LINE : '');

  useEffect(() => {
    if (hasPortfolioHeadingAnimated) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayed(LINE);
      hasPortfolioHeadingAnimated = true;
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
        hasPortfolioHeadingAnimated = true;
      }
    };
    typeLine();
    return () => {};
  }, []);

  return (
    <h1 className="text-4xl font-bold text-text-primary mb-4 min-h-[2.5em]">
      {displayed}
      <span className="inline-block w-2 h-6 align-middle bg-text-primary animate-pulse ml-1" aria-hidden="true" style={{verticalAlign:'-0.2em'}}></span>
      <span className="sr-only">Our Work</span>
    </h1>
  );
};

const CTA_LINE1 = 'Ready to Join Our Growing List of Success Stories?';
const CTA_LINE2 = 'Contact us today to discuss how Shyara\'s freelance community can bring your next project to life.';

const AnimatedCTA = () => {
  const [displayed1, setDisplayed1] = useState(hasPortfolioCTAAnimated ? CTA_LINE1 : '');
  const [showPara, setShowPara] = useState(hasPortfolioCTAAnimated);
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPortfolioCTAAnimated) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || hasPortfolioCTAAnimated) return;
    hasPortfolioCTAAnimated = true;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayed1(CTA_LINE1);
      setTimeout(() => setShowPara(true), 1000);
      return;
    }
    let i = 0;
    const speed = 55;
    const typeLine1 = () => {
      if (i <= CTA_LINE1.length) {
        setDisplayed1(CTA_LINE1.slice(0, i));
        i++;
        setTimeout(typeLine1, speed);
      } else {
        setTimeout(() => setShowPara(true), 700);
      }
    };
    typeLine1();
    return () => {};
  }, [visible]);

  return (
    <div ref={ref} className={`transition-opacity duration-700 ${hasPortfolioCTAAnimated ? 'opacity-100' : visible ? 'opacity-100' : 'opacity-0'} mt-24 mb-8 flex flex-col items-center`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary text-center mb-2 min-h-[2.5em]">
        {displayed1}
        <span className="inline-block w-2 h-6 align-middle bg-text-primary animate-pulse ml-1" aria-hidden="true" style={{verticalAlign:'-0.2em'}}></span>
        <span className="sr-only">Ready to Join Our Growing List of Success Stories?</span>
      </h2>
      <p className={`text-lg sm:text-xl text-text-secondary text-center max-w-2xl min-h-[2.5em] transition-opacity duration-700 ${showPara ? 'opacity-100' : 'opacity-0'}`}>
        {CTA_LINE2}
      </p>
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <PortfolioHeading />
        <p className="text-lg text-text-secondary mb-12">
          We're proud of what we create. Our work speaks for itself.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ gridAutoRows: 'min-content' }}>
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.title} item={item} />
        ))}
      </div>
      <AnimatedCTA />
    </div>
  );
};

export default PortfolioPage; 