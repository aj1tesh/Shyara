import React, { useState, useEffect, useContext } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ThreeDBackground from '../components/ThreeDBackground';
import FancyText from '../components/FancyText';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';

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
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [showCartAlert, setShowCartAlert] = useState(false);
  const [pendingSubmit, setPendingSubmit] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    if (cart && cart.length > 0) {
      setShowCartAlert(true);
      setPendingSubmit(true);
      return;
    }
    await actuallySubmit();
  };

  const actuallySubmit = async () => {
    setSubmitting(true);
    setTimeout(() => {
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setSubmitting(false);
      setShowCartAlert(false);
      setPendingSubmit(false);
    }, 800);
  };

  const handleProceed = async () => {
    await actuallySubmit();
  };

  const handleEditCart = () => {
    setShowCartAlert(false);
    setPendingSubmit(false);
    navigate('/cart');
  };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">Full Name</label>
                <input type="text" id="name" value={form.name} onChange={handleChange} className="w-full bg-background px-4 py-3 border border-text-secondary/50 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">Email Address</label>
                <input type="email" id="email" value={form.email} onChange={handleChange} className="w-full bg-background px-4 py-3 border border-text-secondary/50 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">Message</label>
                <textarea id="message" rows="5" value={form.message} onChange={handleChange} className="w-full bg-background px-4 py-3 border border-text-secondary/50 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition"></textarea>
              </div>
              {error && <div className="text-red-500 text-sm animate-fade-in">{error}</div>}
              {success && <div className="text-green-600 text-sm animate-fade-in">Message sent successfully!</div>}
              <div>
                <button type="submit" className="btn btn-purple-hover w-full" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            {/* Cart Alert Modal */}
            {showCartAlert && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                <div className="bg-surface/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-md w-full animate-fade-in border border-surface">
                  <h2 className="text-xl font-bold text-text-primary mb-4 text-center">Double checked the items in your cart?</h2>
                  <ul className="mb-6 max-h-48 overflow-y-auto divide-y divide-surface">
                    {cart.map(item => (
                      <li key={item.id} className="py-2 flex justify-between items-center text-text-primary">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-primary font-bold">₹{item.price.toLocaleString()}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4 justify-center">
                    <button className="btn btn-purple-hover flex-1 text-text-primary" style={{color: 'var(--color-text-primary)'}} onClick={handleProceed} disabled={submitting}>
                      {submitting ? 'Sending...' : 'Proceed'}
                    </button>
                    <button className="btn btn-surface flex-1 text-text-primary" style={{color: 'var(--color-text-primary)'}} onClick={handleEditCart} disabled={submitting}>
                      Edit Cart
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 