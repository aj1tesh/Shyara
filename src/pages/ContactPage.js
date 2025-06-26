import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ThreeDBackground from '../components/ThreeDBackground';
import FancyText from '../components/FancyText';

// Track animation state across navigations (per session)
let hasContactHeadingAnimated = false;

const ContactHeading = () => {
  const LINE = 'Get in Touch';
  const [displayed, setDisplayed] = useState(hasContactHeadingAnimated ? LINE : '');

  useEffect(() => {
    if (hasContactHeadingAnimated) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayed(LINE);
      hasContactHeadingAnimated = true;
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
        hasContactHeadingAnimated = true;
      }
    };
    typeLine();
    return () => {};
  }, []);

  return (
    <h1 className="text-4xl font-bold text-text-primary mb-4 min-h-[2.5em]">
      <FancyText text={displayed} />
      <span className="inline-block w-2 h-6 align-middle bg-text-primary animate-pulse ml-1" aria-hidden="true" style={{verticalAlign:'-0.2em'}}></span>
      <span className="sr-only">Get in Touch</span>
    </h1>
  );
};

const ContactPage = () => {
  return (
    <div className="relative">
      <ThreeDBackground />
      <div className="container mx-auto py-16 px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <ContactHeading />
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-text-primary drop-shadow-lg mb-12 max-w-5xl mx-auto px-0">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto p-8 rounded-2xl shadow-xl border border-surface">
          {/* Contact Info */}
          <div className="space-y-8 bg-surface/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-surface">
            <h2 className="text-2xl font-bold text-text-primary">Contact Information</h2>
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">
                  <FancyText text="Email" />
                </h3>
                <a href="mailto:contact@shyara.com" className="text-text-secondary hover:text-primary transition-colors">contact@shyara.com</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">
                  <FancyText text="Phone" />
                </h3>
                <p className="text-text-secondary">+91 93050 44148</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">
                  <FancyText text="Address" />
                </h3>
                <p className="text-text-secondary">123 Freelancer Lane, City, State, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">Full Name</label>
                <input type="text" id="name" className="w-full bg-background px-4 py-3 border border-text-secondary/50 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">Email Address</label>
                <input type="email" id="email" className="w-full bg-background px-4 py-3 border border-text-secondary/50 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">Message</label>
                <textarea id="message" rows="5" className="w-full bg-background px-4 py-3 border border-text-secondary/50 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition"></textarea>
              </div>
              <div>
                <button type="submit" className="btn btn-purple-hover w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 