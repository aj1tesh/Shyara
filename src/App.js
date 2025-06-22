import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeLinkStyle = {
    color: '#E6EDF3', // text-primary
    fontWeight: '600',
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <Router>
      <div className="bg-background text-text-secondary min-h-screen font-sans relative">
        <AnimatedBackground />
        <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-sm border-b border-surface">
          <nav className="container mx-auto flex items-center justify-between py-4 px-6 relative">
            <NavLink to="/" className="text-3xl font-bold text-text-primary" onClick={closeMenu}>Shyara</NavLink>
            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-8 text-lg">
              <li><NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="hover:text-text-primary transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="hover:text-text-primary transition-colors">About</NavLink></li>
              <li><NavLink to="/services" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="hover:text-text-primary transition-colors">Services</NavLink></li>
              <li><NavLink to="/portfolio" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="hover:text-text-primary transition-colors">Portfolio</NavLink></li>
              <li><NavLink to="/contact" className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">Contact Us</NavLink></li>
            </ul>
            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7 text-text-primary" /> : <Menu className="w-7 h-7 text-text-primary" />}
            </button>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="fixed inset-0 z-50 bg-background/90 md:hidden" onClick={closeMenu}>
                <ul className="space-y-4 text-lg font-medium bg-surface border border-primary rounded-2xl px-6 py-8 shadow-xl w-[90vw] max-w-xs mt-20 mx-auto max-h-[80vh] overflow-y-auto" style={{marginLeft: 'auto', marginRight: 'auto'}} onClick={e => e.stopPropagation()}>
                  <li><NavLink to="/" onClick={closeMenu} style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="hover:text-primary transition-colors block pb-2 border-b border-surface">Home</NavLink></li>
                  <li><NavLink to="/about" onClick={closeMenu} style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="hover:text-primary transition-colors block pb-2 border-b border-surface">About</NavLink></li>
                  <li><NavLink to="/services" onClick={closeMenu} style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="hover:text-primary transition-colors block pb-2 border-b border-surface">Services</NavLink></li>
                  <li><NavLink to="/portfolio" onClick={closeMenu} style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="hover:text-primary transition-colors block pb-2 border-b border-surface">Portfolio</NavLink></li>
                  <li><NavLink to="/contact" onClick={closeMenu} className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors block mt-2">Contact Us</NavLink></li>
                </ul>
              </div>
            )}
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 