import React from 'react';
import { BackgroundAmbient } from '../components/ui/BackgroundAmbient';
import SEO from '../components/SEO';

export default function Industries() {
  const industries = [
    {
      title: 'Government Organizations',
      desc: 'Supporting government departments with dependable industrial procurement solutions.',
      image: '/images/ind_government.png'
    },
    {
      title: 'Public Sector Undertakings',
      desc: "Supplying quality engineering products to India's leading PSUs.",
      image: '/images/ind_psu.png'
    },
    {
      title: 'Manufacturing',
      desc: 'Providing industrial maintenance products that keep production running efficiently.',
      image: '/images/ind_manufacturing.png'
    },
    {
      title: 'Shipbuilding & Marine',
      desc: 'Reliable supplies for shipyards, marine engineering, and offshore industries.',
      image: '/images/ind_marine.png'
    },
    {
      title: 'Oil & Gas',
      desc: 'Industrial products designed for demanding operational environments.',
      image: '/images/ind_oil_gas.png'
    },
    {
      title: 'Petrochemical',
      desc: 'Supporting large-scale processing industries with quality engineering materials.',
      image: '/images/ind_petrochemical.png'
    },
    {
      title: 'Chemical Industries',
      desc: 'Reliable maintenance and engineering consumables.',
      image: '/images/ind_chemical.png'
    },
    {
      title: 'Cement Industries',
      desc: 'Industrial maintenance solutions for heavy-duty operations.',
      image: '/images/ind_cement.png'
    },
    {
      title: 'Mining',
      desc: 'Products built to withstand challenging industrial environments.',
      image: '/images/ind_mining.png'
    },
    {
      title: 'Power Plants',
      desc: 'Supporting efficient plant operations through reliable industrial supplies.',
      image: '/images/ind_power.png'
    },
    {
      title: 'Heavy Engineering',
      desc: 'Supplying engineering consumables for large-scale manufacturing.',
      image: '/images/ind_heavy_eng.png'
    },
    {
      title: 'Infrastructure & Construction',
      desc: 'Products supporting modern infrastructure development.',
      image: '/images/ind_infrastructure.png'
    },
    {
      title: 'Railways',
      desc: 'Reliable engineering products for railway maintenance and infrastructure.',
      image: '/images/ind_railways.png'
    }
  ];

  return (
    <div className="page-container industries-page">
      <SEO
        title="Industries Served - Marine, Defense, PSUs & Manufacturing"
        description="Sea Tech Agencies serves key sectors across South India: Government Organizations, PSUs, Shipbuilding & Marine, Oil & Gas, Defense Aerospace, Cement, Mining, and Heavy Engineering."
        keywords="industries served industrial supplier Kerala, marine equipment supplier Cochin, PSU defense procurement Kerala, oil and gas industrial supply"
        canonicalUrl="https://www.seatechagencies.com/industries"
      />
      <BackgroundAmbient />
      {/* Hero Section */}
      <section className="subpage-hero">
        <div className="subpage-bg-logo-watermark" />
        <div className="subpage-hero-content">
          <h1>Supporting Industries Across South India</h1>
          <p>
            Delivering reliable industrial procurement solutions to organizations operating across diverse sectors.
          </p>
        </div>
      </section>

      {/* Intro section */}
      <section className="content-section">
        <div className="container">
          <div className="split-grid-section" style={{ alignItems: 'center' }}>
            <div className="story-text-container">
              <h3>Decades of Dependability</h3>
              <p>
                For over two decades, Sea Tech Agencies has served as the backbone for a diverse range of critical sectors across South India. We specialize in providing robust engineering components, precision equipment, and essential maintenance supplies to high-demand environments including massive manufacturing plants, advanced processing facilities, large-scale construction sites, and specialized marine workshops.
              </p>
              <p>
                We understand that every industry operates under its own unique pressures and regulatory environments. That is why we tailor our end-to-end procurement services to meet the strict quality standards, exact material tolerances, and stringent certification requirements demanded by heavy manufacturing, infrastructure development, and defense installations.
              </p>
            </div>
            
            <div className="about-illustration-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <img 
                src="/images/industries-illustration.png" 
                alt="Industries Professional" 
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

      {/* Industries Grid */}
      <section className="content-section alt-bg">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">Providing critical supply chain solutions to key sectors keeping South India running.</p>
          
          <div className="card-grid">
            {industries.map((ind, idx) => (
              <div key={idx} className="premium-card product-card">
                <div className="product-card-image-wrapper">
                  <img src={ind.image} alt={ind.title} className="product-card-image" loading="lazy" />
                </div>
                <div className="product-card-content" style={{ paddingBottom: '32px' }}>
                  <h3>{ind.title}</h3>
                  <p style={{ marginBottom: 0 }}>{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
