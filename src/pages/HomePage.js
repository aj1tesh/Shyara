import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const HomePage = () => {
  return (
    <div className="relative">
      {/* <AnimatedBackground /> Removed to prevent double rendering */}
      <div className="relative z-10 container mx-auto">
        {/* Hero Section */}
        <section className="text-center pt-16 pb-8 sm:pt-20 sm:pb-10 px-4">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-text-primary mb-3 sm:mb-4 leading-tight px-2 sm:px-0 min-h-[3.5em]">
            <Typewriter
              options={{
                strings: ['Creative Digital Solutions', 'for Growing Brands.'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-3 sm:mb-6 max-w-3xl mx-auto">
            We combine data-driven strategy with creative storytelling to help your business stand out in a crowded digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/services" className="px-6 py-2 sm:px-8 sm:py-3 bg-primary text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors transform hover:scale-105">
              Our Services
            </Link>
            <Link to="/portfolio" className="px-6 py-2 sm:px-8 sm:py-3 bg-surface text-text-primary rounded-lg font-semibold shadow-lg hover:bg-gray-700 transition-colors transform hover:scale-105">
              View Our Work
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-3 sm:py-">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6 sm:mb-8">Loved by Our Clients</h2>
            <div className="bg-surface p-6 sm:p-8 rounded-xl shadow-lg relative">
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