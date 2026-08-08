import React from 'react';
import { Target, Eye, Shield, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { BackgroundAmbient } from '../components/ui/BackgroundAmbient';
import SEO from '../components/SEO';

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Sea Tech Agencies",
  "url": "https://www.seatechagencies.com/about",
  "description": "Established in 1998, Sea Tech Agencies is a leading supplier of industrial products, hydraulic machinery, bearings, and heavy engineering tools across South India."
};

export default function AboutUs() {
  const coreValues = [
    { title: 'Integrity', desc: 'Operating with transparency, ethical standards, and honesty in all business dealings.' },
    { title: 'Uncompromising Quality', desc: 'Rejecting grey-market components entirely by sourcing solely from certified global manufacturers to guarantee absolute operating reliability under extreme conditions.' },
    { title: 'Reliability', desc: 'Being a dependable partner that keeps your production lines running without interruption.' },
    { title: 'Customer Commitment', desc: 'Going above and beyond to support procurement requirements with custom service.' },
    { title: 'Technical Excellence', desc: 'Offering deep product expertise and support to guide complex engineering choices.' },
    { title: 'Continuous Improvement', desc: 'Evolving our sourcing network and services to serve you better.' }
  ];

  const whyChooseUs = [
    '27+ Years of Industry Experience',
    'Genuine Products from Trusted Manufacturers',
    'Competitive Pricing',
    'Extensive Supplier Network',
    'Technical Product Assistance',
    'Prompt Delivery',
    'Reliable After-Sales Support',
    'Customer-Centric Service'
  ];

  return (
    <div className="page-container about-page">
      <SEO
        title="About Us - 27+ Years Industrial Supply Excellence"
        description="Learn about Sea Tech Agencies, South India's trusted distributor of genuine industrial tools, hydraulic equipment, and heavy engineering supplies since 1998."
        keywords="About Sea Tech Agencies, industrial supplier history Kerala, Perumbavoor engineering distributor, industrial sourcing partner Kochi"
        canonicalUrl="https://www.seatechagencies.com/about"
        schema={aboutSchema}
      />
      <BackgroundAmbient />
      {/* Hero Section */}
      <section className="subpage-hero">
        <div className="subpage-bg-logo-watermark" />
        <div className="subpage-hero-content">
          <h1>About SEA TECH AGENCIES</h1>
          <p>Sustaining Heavy Engineering Sourcing and Supply Chain Resilience Since 1998</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="content-section">
        <div className="container">
          <div className="split-grid-section">
            <div className="story-text-container">
              <h3>Our Story</h3>
              <p className="lead-text"><strong>Built on Trust. Driven by Quality.</strong></p>
              <p>
                Established in 1998, SEA TECH AGENCIES has grown into one of South India's trusted industrial supply companies by consistently delivering quality products, dependable service, and customized procurement solutions.
              </p>
              <p>
                We specialize in supplying industrial maintenance products, engineering consumables, hydraulic systems, material handling equipment, industrial tools, safety products, bearings, lubricants, welding consumables, valves, adhesives, and allied engineering materials.
              </p>
              <p>
                With an extensive supplier network and decades of industry experience, we understand the critical importance of quality, availability, and timely delivery in industrial operations.
              </p>
              <p>
                Today, we continue to support some of India's leading organizations with dependable industrial procurement solutions that keep businesses operating efficiently.
              </p>
            </div>
            
            <div className="about-illustration-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <img 
                src="/images/about-illustration.png" 
                alt="About Us Illustration" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  maxWidth: '700px', 
                  objectFit: 'contain', 
                  mixBlendMode: 'multiply' 
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="content-section alt-bg">
        <div className="container">
          <div className="card-grid">
            <div className="premium-card">
              <div className="card-icon-wrapper">
                <Target size={24} />
              </div>
              <h3>Mission</h3>
              <p className="lead-text"><strong>Delivering Value Through Reliable Industrial Solutions</strong></p>
              <p>
                Our mission is to provide reliable industrial products and engineering solutions through quality, integrity, technical expertise, and exceptional customer service while building long-term partnerships with our clients.
              </p>
            </div>

            <div className="premium-card">
              <div className="card-icon-wrapper">
                <Eye size={24} />
              </div>
              <h3>Vision</h3>
              <p className="lead-text"><strong>Building Long-Term Industrial Partnerships</strong></p>
              <p>
                To become South India's most trusted industrial supply partner by consistently delivering value, innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Core Values</h2>
          <p className="section-subtitle">The guiding principles behind our daily operations and client interactions.</p>
          <div className="card-grid">
            {coreValues.map((val, idx) => (
              <div key={idx} className="premium-card">
                <div className="card-icon-wrapper">
                  {idx === 0 && <Shield size={20} />}
                  {idx === 1 && <Award size={20} />}
                  {idx === 2 && <CheckCircle2 size={20} />}
                  {idx === 3 && <Sparkles size={20} />}
                  {idx === 4 && <Award size={20} />}
                  {idx === 5 && <CheckCircle2 size={20} />}
                </div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="content-section alt-bg">
        <div className="container">
          <h2 className="section-title">Why Choose SEA TECH</h2>
          <p className="section-subtitle">Decades of experience combined with trusted channels and expert support.</p>
          <div className="checklist-grid">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="checklist-item">
                <CheckCircle2 className="checklist-icon" size={18} />
                <span className="checklist-content">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
