import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { BackgroundAmbient } from '../components/ui/BackgroundAmbient';

import SEO from '../components/SEO';

export default function Brands() {
  const brandsList = [
    { name: 'Bosch', desc: 'Industrial Power Tools & Tech' },
    { name: 'FAG', desc: 'Precision Bearings & Spares' },
    { name: 'Mobil', desc: 'Premium Lubricants & Greases' },
    { name: 'Parker', desc: 'Hydraulics & Filtration' },
    { name: 'Fenner', desc: 'Power Transmission & Belts' },
    { name: '3M', desc: 'Safety Equipment & Adhesives' },
    { name: 'Loctite', desc: 'Anaerobic Adhesives & Sealants' },
    { name: 'Lubriplate', desc: 'Specialized Industrial Greases' },
    { name: 'Miranda Tools', desc: 'Metal Cutting & HSS Tools' },
    { name: 'Indian Tools', desc: 'Engineering & Drilling Spares' }
  ];

  return (
    <div className="page-container brands-page">
      <SEO
        title="Partner Brands & Authorized Products - Bosch, SKF, Enerpac, Parker, Mobil"
        description="Sea Tech Agencies supplies certified products from world-leading industrial brands: Bosch, SKF, FAG, Mobil, Parker, Fenner, 3M, Loctite, Miranda Tools across Kerala."
        keywords="industrial brands distributor Kerala, Bosch power tools Kochi, SKF bearings supplier Ernakulam, Enerpac hydraulics Kerala, Parker hydraulics, Loctite supplier"
        canonicalUrl="https://www.seatechagencies.com/brands"
      />
      <BackgroundAmbient />
      {/* Hero Section */}
      <section className="subpage-hero">
        <div className="subpage-bg-logo-watermark" />
        <div className="subpage-hero-content">
          <h1>Trusted Global Brands</h1>
          <p>
            Supplying genuine industrial products from globally recognized manufacturers.
          </p>
        </div>
      </section>

      {/* Intro section */}
      <section className="content-section">
        <div className="container">
          <div className="split-grid-section" style={{ alignItems: 'center' }}>
            <div className="story-text-container">
              <h3>Quality Sourced from World Leaders</h3>
              <p>
                Quality begins with trusted manufacturers. SEA TECH AGENCIES partners with some of the world's leading industrial brands to ensure every customer receives reliable, high-performance products that meet strict international engineering standards.
              </p>
              <p>
                By maintaining direct distribution channels with these globally recognized manufacturers, we eliminate the risk of counterfeit components entering your supply chain. Our commitment to authentic sourcing means you can trust the durability and safety of every product we deliver to your facility.
              </p>
            </div>
            
            <div className="about-illustration-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <img 
                src="/images/brands-illustration.png" 
                alt="Brands Professional" 
                className="multiply-image"
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  maxWidth: '700px', 
                  objectFit: 'contain'
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands Grid Section */}
      <section className="content-section alt-bg">
        <div className="container">
          <h2 className="section-title">Featured Brands</h2>
          <p className="section-subtitle">We distribute high-performance consumables and components from leading manufacturers.</p>
          
          <div className="brand-card-grid">
            {brandsList.map((brand, idx) => (
              <div key={idx} className="brand-card">
                <span className="brand-name">{brand.name}</span>
                <span className="brand-desc">{brand.desc}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '1.1rem', fontWeight: '500', color: 'var(--color-steel)' }}>
            ...and many more leading industrial manufacturers.
          </div>
        </div>
      </section>

      {/* Commitment Banner */}
      <section className="content-section">
        <div className="container">
          <div className="authenticity-banner" style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div className="authenticity-icon-wrapper">
              <ShieldCheck size={48} />
            </div>
            <div className="authenticity-content">
              <h3>Genuine Sourcing Guarantee</h3>
              <p>
                Every product supplied by SEA TECH AGENCIES is sourced through trusted channels, ensuring authenticity, quality, and dependable performance. We explicitly stand against counterfeit products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
