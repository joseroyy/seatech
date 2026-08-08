import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/industries', label: 'Industries' },
    { path: '/brands', label: 'Brands' },
    { path: '/clients', label: 'Clients' },
    { path: '/contact', label: 'Contact' }
  ];

  const productCategories = [
    { label: 'Industrial Tools', path: '/products' },
    { label: 'Hydraulic Equipment', path: '/products' },
    { label: 'Bearings', path: '/products' },
    { label: 'Safety Equipment', path: '/products' },
    { label: 'Material Handling', path: '/products' },
    { label: 'Lubricants', path: '/products' }
  ];

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Company Description */}
        <div className="footer-brand-section">
          <Link to="/" className="footer-brand">
            <div className="logo-wrapper">
              <img src="/images/logo.png" alt="Sea Tech Agencies Logo" className="brand-logo-img" />
              <div className="brand-text">
                <span className="brand-primary">SEA TECH</span>
                <span className="brand-secondary">AGENCIES</span>
              </div>
            </div>
          </Link>
          <p className="footer-tagline">
            Delivering reliable industrial products and engineering solutions across South India since 1998.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links-section">
          <h4>Quick Links</h4>
          <ul className="footer-links-grid">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Categories Quick Links */}
        <div className="footer-links-section">
          <h4>Products</h4>
          <ul className="footer-links-grid">
            {productCategories.map((cat, idx) => (
              <li key={idx}>
                <Link to={cat.path}>{cat.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-contact-section">
          <h4>Contact Us</h4>
          <address className="footer-address">
            <strong>SEA TECH AGENCIES</strong><br />
            XIX/464, M.C. Road, Perumbavoor,<br />
            Kerala – 683542
          </address>
          <div className="footer-contacts">
            <p>
              <strong>Phone:</strong> <a href="tel:+919447053834">+91 9447053834</a>
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:info@seatechagencies.com">info@seatechagencies.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {currentYear} Sea Tech Agencies. All Rights Reserved. | Established 1998</p>
          <p className="technical-signature">
            Designed & Developed by <a href="https://www.linkedin.com/in/jose-roy1/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'none', borderBottom: '1px dotted var(--color-accent)', paddingBottom: '1px', transition: 'all 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--color-white)'} onMouseOut={(e) => e.target.style.color = 'var(--color-accent)'}>Jose Roy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
