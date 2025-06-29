import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ThreeDBackground from './components/ThreeDBackground';
import CustomCursor from './components/CustomCursor';
import SocialMediaManagementPage from './pages/SocialMediaManagementPage';
import FestivePostsPage from './pages/FestivePostsPage';
import AdsCampaignManagementPage from './pages/AdsCampaignManagementPage';
import WebsiteDevelopmentPage from './pages/WebsiteDevelopmentPage';
import AppDevelopmentPage from './pages/AppDevelopmentPage';
import VideoEditingReelsPage from './pages/VideoEditingReelsPage';
import PersonalizedServicesPage from './pages/PersonalizedServicesPage';
import { CartContext } from './CartContext';
import CartPage from './pages/CartPage';
import AddItemsPage from './pages/AddItemsPage';
import ClientDashboardPage from './pages/ClientDashboardPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminDashboardStandalone from './pages/AdminDashboardStandalone';
import ClientDashboardStandalone from './pages/ClientDashboardStandalone';

function StandaloneRoutes() {
  return (
    <Routes>
      <Route path="/admin-standalone" element={<AdminDashboardStandalone />} />
      <Route path="/client-standalone" element={<ClientDashboardStandalone />} />
    </Routes>
  );
}

function MainAppLayout({ children, cart, mobileMenuOpen, setMobileMenuOpen, closeMenu, activeLinkStyle }) {
  return (
    <div className="bg-transparent text-text-secondary min-h-screen font-sans relative overflow-x-hidden">
      <ThreeDBackground />
      <CustomCursor />
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-sm border-b border-surface">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6 relative">
          <NavLink to="/" className="text-3xl font-bold text-text-primary" onClick={closeMenu}>Shyara</NavLink>
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 text-lg">
            <li><NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="hover:text-text-primary transition-colors">Home</NavLink></li>
            <li><NavLink to="/about" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="hover:text-text-primary transition-colors">About</NavLink></li>
            <li><NavLink to="/services" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="hover:text-text-primary transition-colors">Services</NavLink></li>
            <li><NavLink to="/portfolio" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="hover:text-text-primary transition-colors">Portfolio</NavLink></li>
            <li><NavLink to="/contact" className="btn btn-purple-hover">Contact Us</NavLink></li>
            {/* Cart Icon: always visible, badge only if cart has items */}
            <li style={{width:'2.5rem', display:'flex', justifyContent:'center', alignItems:'center', position:'relative'}}>
              <NavLink to="/cart" className="relative">
                <ShoppingCart className="w-7 h-7 text-primary" />
                {cart.length >= 1 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full px-2 py-0.5 font-bold">{cart.length}</span>
                )}
              </NavLink>
            </li>
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
                <li><NavLink to="/contact" onClick={closeMenu} className="btn btn-purple-hover block mt-2">Contact Us</NavLink></li>
              </ul>
            </div>
          )}
        </nav>
      </header>
      <main>
        <div style={{paddingTop:'5.5rem'}}>
          <div className="fade-page-transition">{children}</div>
        </div>
      </main>
    </div>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const activeLinkStyle = {
    color: '#E6EDF3', // text-primary
    fontWeight: '600',
  };
  const closeMenu = () => setMobileMenuOpen(false);
  const addToCart = (item) => {
    setCart(prev => prev.some(i => i.id === item.id) ? prev : [...prev, item]);
  };
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  // Use location to determine if we're on a standalone dashboard route
  const location = window.location.hash.replace('#', '').split('?')[0];
  const isStandalone = location === '/admin-standalone' || location === '/client-standalone';

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <Router>
        {isStandalone ? (
          <StandaloneRoutes />
        ) : (
          <MainAppLayout cart={cart} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} closeMenu={closeMenu} activeLinkStyle={activeLinkStyle}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/social-media-management" element={<SocialMediaManagementPage />} />
              <Route path="/services/festive-posts" element={<FestivePostsPage />} />
              <Route path="/services/ads-campaign-management" element={<AdsCampaignManagementPage />} />
              <Route path="/services/website-development" element={<WebsiteDevelopmentPage />} />
              <Route path="/services/app-development" element={<AppDevelopmentPage />} />
              <Route path="/services/video-editing-reels" element={<VideoEditingReelsPage />} />
              <Route path="/services/personalized" element={<PersonalizedServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/add-items" element={<AddItemsPage />} />
              <Route path="/client-dashboard" element={<ClientDashboardPage />} />
              <Route path="/letmein" element={<AdminLoginPage />} />
              <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
              <Route path="/admin-standalone" element={<AdminDashboardStandalone />} />
              <Route path="/client-standalone" element={<ClientDashboardStandalone />} />
            </Routes>
          </MainAppLayout>
        )}
      </Router>
    </CartContext.Provider>
  );
}

export default App; 