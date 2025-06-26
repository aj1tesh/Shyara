import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThreeDBackground from '../components/ThreeDBackground';
import FancyText from '../components/FancyText';

const LINE1 = 'Creative Digital Solutions';
const LINE2 = 'for Growing Brands.';

// Track animation state across navigations (per session)
let hasAnimated = false;

const HomePage = () => {
  const [displayed1, setDisplayed1] = useState(hasAnimated ? LINE1 : '');
  const [displayed2, setDisplayed2] = useState(hasAnimated ? LINE2 : '');

  useEffect(() => {
    if (hasAnimated) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayed1(LINE1);
      setDisplayed2(LINE2);
      hasAnimated = true;
      return;
    }
    let i = 0;
    let j = 0;
    const speed = 55; // slower typing
    const pause = 500; // pause between lines
    const typeLine1 = () => {
      if (i <= LINE1.length) {
        setDisplayed1(LINE1.slice(0, i));
        i++;
        setTimeout(typeLine1, speed);
      } else {
        setTimeout(typeLine2, pause);
      }
    };
    const typeLine2 = () => {
      if (j <= LINE2.length) {
        setDisplayed2(LINE2.slice(0, j));
        j++;
        setTimeout(typeLine2, speed);
      } else {
        hasAnimated = true;
      }
    };
    typeLine1();
    return () => {};
  }, []);

  return (
    <div className="relative">
      <ThreeDBackground />
      <div className="relative z-10 container mx-auto">
        {/* Hero Section */}
        <section className="text-center pt-16 pb-8 sm:pt-20 sm:pb-10 px-4">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-text-primary mb-3 sm:mb-4 leading-tight px-2 sm:px-0 min-h-[3.5em]">
            <FancyText text={displayed1} />
            <br />
            <FancyText text={displayed2} />
            <span className="inline-block w-2 h-6 align-middle bg-text-primary animate-pulse ml-1" aria-hidden="true" style={{verticalAlign:'-0.2em'}}></span>
            <span className="sr-only">Creative Digital Solutions for Growing Brands.</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-text-primary drop-shadow-lg mb-3 sm:mb-6 max-w-5xl mx-auto px-0">
            We combine data-driven strategy with creative storytelling to help your business stand out in a crowded digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/services" className="btn btn-purple-hover">
              Our Services
            </Link>
            <Link to="/portfolio" className="btn btn-surface">
              View Our Work
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-3 sm:py-">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6 sm:mb-8">
              <FancyText text="Loved by Our Clients" />
            </h2>
            <div className="bg-surface/60 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-lg relative">
              <p className="text-base sm:text-lg italic text-text-secondary">
                "Shyara has been the perfect partner for my business. Their social media marketing service helped us go from 0 to 5K followers with genuine engagement."
              </p>
              <p className="mt-4 font-semibold text-text-primary">— Ritika Sharma, Boutique Owner</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage; 