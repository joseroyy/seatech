import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleBrandClick = (e) => {
    closeMobileMenu();
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/industries', label: 'Industries' },
    { path: '/brands', label: 'Brands' },
    { path: '/clients', label: 'Clients' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <NavLink to="/" className="site-brand" onClick={handleBrandClick}>
            <div className="logo-wrapper">
              <img src="/images/logo.png" alt="Sea Tech Agencies Logo" className="brand-logo-img" />
              <div className="brand-text">
                <span className="brand-primary">SEA TECH</span>
                <span className="brand-secondary">AGENCIES</span>
              </div>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/request-quote" className="btn btn-accent btn-sm">
              Request a Quote
            </NavLink>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className={`mobile-nav-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Rendered outside the header tag so fixed positioning works correctly) */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}>
        <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
          <div className="mobile-nav-header">
            <span className="brand-primary">SEA TECH</span>
            <button className="mobile-nav-close" onClick={closeMobileMenu} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <div className="mobile-nav-links">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
                onClick={closeMobileMenu}
                style={{ '--stagger-index': index }}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/request-quote"
              className="btn btn-accent btn-block mobile-cta"
              onClick={closeMobileMenu}
            >
              Request a Quote
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}
