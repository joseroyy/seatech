import React from 'react';
import { BackgroundAmbient } from '../components/ui/BackgroundAmbient';

import SEO from '../components/SEO';

export default function Clients() {
  const clientsList = [
    { name: 'ISRO', type: 'Govt. Space Research' },
    { name: 'Cochin Shipyard Limited', type: 'Marine & Shipbuilding' },
    { name: 'BPCL', type: 'Oil, Gas & Refinery' },
    { name: 'FACT', type: 'Chemicals & Fertilizers' },
    { name: 'KMML', type: 'Titanium & Processing' },
    { name: 'HAL', type: 'Aerospace & Defense' },
    { name: 'Hindalco', type: 'Metals & Manufacturing' },
    { name: 'Indian Railways', type: 'Govt. Infrastructure' },
    { name: 'Malabar Cements', type: 'Heavy Cement Industry' },
    { name: 'Apollo Tyres', type: 'Automotive & Rubber' },
    { name: 'West Coast Paper Mills', type: 'Paper & Processing' }
  ];

  return (
    <div className="page-container clients-page">
      <SEO
        title="Our Clients - Trusted by ISRO, CSL, BPCL, FACT, HAL"
        description="Sea Tech Agencies is proud to serve India's premier public sector, defense, marine, and manufacturing leaders including ISRO, Cochin Shipyard Limited, BPCL, FACT, HAL, and Indian Railways."
        keywords="Sea Tech Agencies clients, ISRO supplier Kerala, Cochin Shipyard industrial vendor, BPCL vendor, FACT supplier, HAL aerospace supplier"
        canonicalUrl="https://www.seatechagencies.com/clients"
      />
      <BackgroundAmbient />
      {/* Hero Section */}
      <section className="subpage-hero">
        <div className="subpage-bg-logo-watermark" />
        <div className="subpage-hero-content">
          <h1>Trusted by India's Leading Organizations</h1>
          <p>
            For more than two decades, SEA TECH AGENCIES has proudly served government organizations, public sector undertakings, and leading private industries.
          </p>
        </div>
      </section>

      {/* Intro section */}
      <section className="content-section">
        <div className="container">
          <div className="split-grid-section" style={{ alignItems: 'center' }}>
            <div className="story-text-container">
              <h3>Building Sturdy Partnerships</h3>
              <p>
                At SEA TECH AGENCIES, we provide highly specialized industrial products that meet the rigorous standards of precision aerospace research, high-voltage power grids, deep mining sites, and national defense shipyards. Our commitment to excellence has positioned us as a reliable pillar in the industrial supply chain.
              </p>
              <p>
                By maintaining a flawless track record of timely deliveries and uncompromised product quality, we have earned the long-term trust of some of India's most critical public sector undertakings and leading private corporations. We understand that in heavy industry, reliability is not just a preference—it is an absolute necessity.
              </p>
              <p>
                We view every transaction not just as a sale, but as a crucial opportunity to strengthen these vital partnerships and actively support the nation's core infrastructure. Our clients know they can depend on us to perform, no matter the scale or complexity of the demand.
              </p>
            </div>
            
            <div className="about-illustration-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <img 
                src="/images/clients-illustration.png" 
                alt="Clients Professional" 
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

      {/* Clients Grid */}
      <section className="content-section alt-bg">
        <div className="container">
          <h2 className="section-title">Our Valued Clients</h2>
          <p className="section-subtitle">A list of major national public sector entities and top-tier corporations who trust us.</p>
          
          <div className="client-card-grid">
            {clientsList.map((client, idx) => (
              <div key={idx} className="client-card">
                <span className="client-logo-text">{client.name}</span>
                <span className="client-type">{client.type}</span>
              </div>
            ))}
          </div>

          {/* Commitment quote block */}
          <div className="commitment-quote-block">
            <p className="commitment-quote-text">
              "Long-term partnerships are built through consistent quality, reliable service, and timely delivery. Every client relationship reflects our commitment to excellence."
            </p>
            <p className="commitment-quote-author">
              — SEA TECH AGENCIES Quality Assurance Team
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
