import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Award, Network, CheckCircle2 
} from 'lucide-react';
import { GradientBackground } from '@/components/ui/noisy-gradient-backgrounds';
import { BackgroundAmbient } from '../components/ui/BackgroundAmbient';
import ShinyText from '../components/ui/ShinyText';
import CountUp from '../components/ui/CountUp';
import SEO from '../components/SEO';

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What industrial products does Sea Tech Agencies supply in Kerala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sea Tech Agencies supplies a comprehensive range of industrial products including high-pressure hydraulic equipment, industrial bearings, power and pneumatic tools, material handling equipment, specialty lubricants and greases, industrial valves, and engineering polymers across Kerala and South India."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Sea Tech Agencies located in Kerala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sea Tech Agencies is located at XIX/464, M.C. Road, Perumbavoor, Ernakulam, Kerala - 683542, near Kunnathan Residency and opposite Reliance Petrol Pump."
      }
    },
    {
      "@type": "Question",
      "name": "Does Sea Tech Agencies supply products to public sector and government clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Sea Tech Agencies has been a trusted supplier for PSU and government defense organizations since 1998, supplying clients like ISRO, Cochin Shipyard Limited (CSL), BPCL, FACT, and HAL."
      }
    },
    {
      "@type": "Question",
      "name": "How can I request a quote for industrial equipment from Sea Tech Agencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can request a quote by visiting our Request Quote page on seatechagencies.com, emailing info@seatechagencies.com, or calling our sales team directly at +91 9447053834."
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="page-container home-page">
      <SEO
        title="Trusted Industrial Supply Partner in Kerala & South India"
        description="Sea Tech Agencies is South India's premier industrial products distributor since 1998. Supplying high-quality hydraulic equipment, bearings, power tools, material handling, and engineering consumables in Perumbavoor, Ernakulam, Kochi, Kerala."
        keywords="Sea Tech Agencies, industrial products supplier Kerala, hydraulic tools Kochi, bearings distributor Ernakulam, industrial equipment Perumbavoor, Enerpac distributor Kerala, SKF bearings Kochi, power tools Kerala, material handling equipment, industrial valves Kerala"
        canonicalUrl="https://www.seatechagencies.com/"
        schema={homeFaqSchema}
      />
      <BackgroundAmbient />
      {/* Hero Section */}
      <section className="hero-section">
        <GradientBackground
          gradientOrigin="bottom-middle"
          enableNoise={true}
          noiseIntensity={0.7}
          noisePatternSize={90}
          noisePatternRefreshInterval={1}
          noisePatternAlpha={30}
        />
        <div className="hero-bg-overlay-image" />
        <div className="hero-bg-logo-watermark" />

        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1>
              <ShinyText speed={6} color="#1b1f23" shineColor="#e8a317" className="shiny-hero-text shiny-hero-wrapper">
                <span className="desktop-nowrap hero-title-first">Powering Industrial Continuity</span> 
                <br /> & <br /> 
                <span>Engineered Sourcing</span>
              </ShinyText>
            </h1>
            <p className="hero-subtitle">
              South India's premier high-precision procurement partner, supplying authenticated industrial components to leading engineering, marine, and public sector enterprises for over 27 years.
            </p>
            <div className="hero-actions">
              <Link to="/request-quote" className="btn btn-cta">
                Request a Quote <ArrowRight size={16} className="btn-icon" />
              </Link>
              <Link to="/products" className="btn btn-ghost">
                Explore Products
              </Link>
            </div>
          </div>
        </div>

        {/* Pinned Stats Strip */}
        <div className="hero-stats-strip">
          <div className="stats-container">
            <div className="stats-cell">
              <span className="stats-number"><CountUp end={27} suffix="+" /></span>
              <span className="stats-label">Years Experience</span>
            </div>
            <div className="stats-cell">
              <span className="stats-number"><CountUp end={1000} suffix="+" /></span>
              <span className="stats-label">Products</span>
            </div>
            <div className="stats-cell">
              <span className="stats-number"><CountUp end={500} suffix="+" /></span>
              <span className="stats-label">Happy Customers</span>
            </div>
            <div className="stats-cell">
              <span className="stats-number"><CountUp end={50} suffix="+" /></span>
              <span className="stats-label">Trusted Brands</span>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Highlights Section */}
      <section className="content-section highlights-section">
        <div className="container">
          <div className="split-grid-section" style={{ alignItems: 'center', marginBottom: '40px' }}>
            <div className="story-text-container">
              <h2 className="section-title" style={{ textAlign: 'left', marginLeft: 0 }}>Operational Highlights</h2>
              <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>Delivering precision, reliability, and technical expertise across every procurement requirement.</p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="about-illustration-wrapper" 
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <img src="/images/home-highlights.png" alt="Engineering precision" className="multiply-image" style={{ width: '100%', maxWidth: '400px', objectFit: 'contain' }} />
            </motion.div>
          </div>
          
          <div className="card-grid">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="premium-card"
            >
              <div className="card-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <h3>Zero-Tolerance Authenticity</h3>
              <p>Sourcing exclusively through direct OEM partnerships to guarantee 100% genuine engineering consumables, full manufacturer warranties, and zero-defect quality control.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="premium-card"
            >
              <div className="card-icon-wrapper">
                <Award size={24} />
              </div>
              <h3>27+ Years of Trust</h3>
              <p>Providing uninterrupted supply chain support and high-precision procurement for South India's heavy engineering, marine, and infrastructure sectors.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="premium-card"
            >
              <div className="card-icon-wrapper">
                <Network size={24} />
              </div>
              <h3>Elite Sourcing Protocol</h3>
              <p>A mature global procurement network enabling rapid sourcing of legacy, rare-specification, and custom-engineered parts without operational delays.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="content-section alt-bg why-choose-us-section">
        <div className="container">
          <div className="split-grid-section">
            <div className="story-text-container">
              <h3>Why Partner With Sea Tech?</h3>
              <p className="lead-text"><strong>Unmatched dependability for your supply chain.</strong></p>
              <p>
                In industrial operations, downtime is costly. We design our sourcing and logistics pipelines to provide maximum speed and precision.
              </p>
              <p>
                From specialized certifications to bulk procurement support, our deep engineering knowledge ensures you receive the correct products tailored to your exact operational specifications.
              </p>
              <div style={{ marginTop: '28px' }}>
                <Link to="/about" className="btn btn-primary">
                  Learn More About Us <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                </Link>
              </div>
            </div>
            
            <div className="checklist-grid">
              <div className="checklist-item">
                <CheckCircle2 className="checklist-icon" size={18} />
                <span className="checklist-content">Genuine Sourced Guarantee</span>
              </div>
              <div className="checklist-item">
                <CheckCircle2 className="checklist-icon" size={18} />
                <span className="checklist-content">Competitive Wholesale Pricing</span>
              </div>
              <div className="checklist-item">
                <CheckCircle2 className="checklist-icon" size={18} />
                <span className="checklist-content">Broad Technical Assortment</span>
              </div>
              <div className="checklist-item">
                <CheckCircle2 className="checklist-icon" size={18} />
                <span className="checklist-content">On-Demand Custom Sourcing</span>
              </div>
              <div className="checklist-item">
                <CheckCircle2 className="checklist-icon" size={18} />
                <span className="checklist-content">Timely South India Delivery</span>
              </div>
              <div className="checklist-item">
                <CheckCircle2 className="checklist-icon" size={18} />
                <span className="checklist-content">Expert Technical Assistance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="content-section product-categories-section">
        <div className="container">
          <div className="split-grid-section" style={{ alignItems: 'center', marginBottom: '40px' }}>
            <div className="story-text-container">
              <h2 className="section-title" style={{ textAlign: 'left', marginLeft: 0 }}>Product Categories</h2>
              <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>We stock and source an extensive array of premium engineering consumables and tools.</p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="about-illustration-wrapper" 
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <img src="/images/home-products.png" alt="Industrial tools" className="multiply-image" style={{ width: '100%', maxWidth: '400px', objectFit: 'contain' }} />
            </motion.div>
          </div>
          
          <div className="card-grid">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="premium-card product-card"
            >
              <div className="product-card-image-wrapper">
                <img src="/images/material_handling.png" alt="Material Handling" className="product-card-image" loading="lazy" />
              </div>
              <div className="product-card-content">
                <h3>Material Handling</h3>
                <p>Hoists, chain blocks, lifting equipment, and trolleys built for heavy-duty industrial loading.</p>
                <ul className="card-list">
                  <li className="card-list-item"><span className="card-list-item-bullet"></span>Chain Blocks & Hoists</li>
                  <li className="card-list-item"><span className="card-list-item-bullet"></span>Lifting Slings & Shackles</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="premium-card product-card"
            >
              <div className="product-card-image-wrapper">
                <img src="/images/industrial_tools.png" alt="Industrial Tools" className="product-card-image" loading="lazy" />
              </div>
              <div className="product-card-content">
                <h3>Industrial Tools</h3>
                <p>Professional hand tools, high-performance power tools, and high-precision measuring instruments.</p>
                <ul className="card-list">
                  <li className="card-list-item"><span className="card-list-item-bullet"></span>Pneumatic & Power Tools</li>
                  <li className="card-list-item"><span className="card-list-item-bullet"></span>Precision Measuring Instruments</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="premium-card product-card"
            >
              <div className="product-card-image-wrapper">
                <img src="/images/hydraulic_equipment.png" alt="Hydraulic Equipment" className="product-card-image" loading="lazy" />
              </div>
              <div className="product-card-content">
                <h3>Hydraulic Equipment</h3>
                <p>High-pressure pumps, double-acting cylinders, robust hose assemblies, and fittings.</p>
                <ul className="card-list">
                  <li className="card-list-item"><span className="card-list-item-bullet"></span>Hydraulic Pumps & Valves</li>
                  <li className="card-list-item"><span className="card-list-item-bullet"></span>High-Pressure Hose Fittings</li>
                </ul>
              </div>
            </motion.div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/products" className="btn btn-secondary">
              View All 12 Categories <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="content-section alt-bg industries-served-section">
        <div className="container">
          <div className="split-grid-section" style={{ alignItems: 'center', marginBottom: '40px' }}>
            <div className="story-text-container">
              <h2 className="section-title" style={{ textAlign: 'left', marginLeft: 0 }}>Industries Served</h2>
              <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>Supporting major industries, infrastructure projects, and national research installations.</p>
            </div>
            <div className="about-illustration-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/images/home-industries.png" alt="Industrial skyline" className="multiply-image" style={{ width: '100%', maxWidth: '700px', objectFit: 'contain' }} />
            </div>
          </div>
          
          <div className="card-grid">
            <div className="premium-card product-card">
              <div className="product-card-image-wrapper">
                <img src="/images/ind_marine.png" alt="Marine & Shipbuilding" className="product-card-image" loading="lazy" />
              </div>
              <div className="product-card-content" style={{ paddingBottom: '32px' }}>
                <h3>Marine & Shipbuilding</h3>
                <p style={{ marginBottom: 0 }}>Heavy duty rigging, specialized sealants, and marine engineering tools for shipyards.</p>
              </div>
            </div>
            
            <div className="premium-card product-card">
              <div className="product-card-image-wrapper">
                <img src="/images/ind_manufacturing.png" alt="Manufacturing & PSUs" className="product-card-image" loading="lazy" />
              </div>
              <div className="product-card-content" style={{ paddingBottom: '32px' }}>
                <h3>Manufacturing & PSUs</h3>
                <p style={{ marginBottom: 0 }}>Supplying critical spares, power transmission belts, and bearings for automated assembly lines.</p>
              </div>
            </div>
            
            <div className="premium-card product-card">
              <div className="product-card-image-wrapper">
                <img src="/images/ind_government.png" alt="Defense & Government" className="product-card-image" loading="lazy" />
              </div>
              <div className="product-card-content" style={{ paddingBottom: '32px' }}>
                <h3>Defense & Government</h3>
                <p style={{ marginBottom: 0 }}>Meeting the high-precision requirements of defense laboratories, aerospace hubs, and railways.</p>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/industries" className="btn btn-secondary">
              View All Sectors <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="content-section brands-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 10px auto' }}>Trusted Partner Brands</h2>
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>We distribute high-performance consumables and spares from the world's leading brands.</p>
          </div>
          
          <div className="brand-card-grid">
            <div className="brand-card">
              <span className="brand-name">Bosch</span>
              <span className="brand-desc">Power Tools</span>
            </div>
            <div className="brand-card">
              <span className="brand-name">FAG</span>
              <span className="brand-desc">Precision Bearings</span>
            </div>
            <div className="brand-card">
              <span className="brand-name">Mobil</span>
              <span className="brand-desc">Industrial Lubricants</span>
            </div>
            <div className="brand-card">
              <span className="brand-name">Fenner</span>
              <span className="brand-desc">Belts & Transmission</span>
            </div>
            <div className="brand-card">
              <span className="brand-name">Loctite</span>
              <span className="brand-desc">Adhesives & Sealants</span>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/brands" className="btn btn-secondary btn-sm">
              Explore All Brands
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="content-section alt-bg clients-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 10px auto' }}>Valued Customers</h2>
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>Prominent organizations that rely on Sea Tech Agencies for engineering supplies.</p>
          </div>
          
          <div className="client-card-grid">
            <div className="client-card">
              <span className="client-logo-text">ISRO</span>
              <span className="client-type">Govt. Space Research</span>
            </div>
            <div className="client-card">
              <span className="client-logo-text">CSL</span>
              <span className="client-type">Cochin Shipyard Limited</span>
            </div>
            <div className="client-card">
              <span className="client-logo-text">BPCL</span>
              <span className="client-type">Refinery & Oil Sector</span>
            </div>
            <div className="client-card">
              <span className="client-logo-text">FACT</span>
              <span className="client-type">Chemicals & Fertilizers</span>
            </div>
            <div className="client-card">
              <span className="client-logo-text">HAL</span>
              <span className="client-type">Defense Aerospace</span>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/clients" className="btn btn-secondary btn-sm">
              See Client List
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="content-section testimonials-section">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">Hear from the procurement officers and plant managers who work with us.</p>
          
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Sea Tech Agencies has been our go-to supplier for hydraulic spares and specialized lubricants for over a decade. Their turnaround times and authenticity are impeccable."
              </p>
              <div className="testimonial-meta">
                <div className="testimonial-avatar">PM</div>
                <div className="testimonial-info">
                  <span className="testimonial-author">Procurement Manager</span>
                  <span className="testimonial-company">Leading Shipbuilding Yard</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Finding legacy engineering components is a major challenge for our plant maintenance. Sea Tech's sourcing network consistently delivers original products right when we need them."
              </p>
              <div className="testimonial-meta">
                <div className="testimonial-avatar">ME</div>
                <div className="testimonial-info">
                  <span className="testimonial-author">Maintenance Engineer</span>
                  <span className="testimonial-company">Chemical Processing Plant</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Competitive pricing, strict compliance documentation, and genuine product delivery make Sea Tech Agencies a highly dependable supply partner for government projects."
              </p>
              <div className="testimonial-meta">
                <div className="testimonial-avatar">GO</div>
                <div className="testimonial-info">
                  <span className="testimonial-author">Senior Purchase Officer</span>
                  <span className="testimonial-company">Government Infrastructure Org</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (AEO & GEO Optimization) */}
      <section className="content-section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions (FAQ)</h2>
          <p className="section-subtitle">Key information for industrial buyers, procurement managers, and engineering partners.</p>
          
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '32px' }}>
            <div className="interactive-card" style={{ padding: '24px', borderRadius: '12px', background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', color: 'var(--color-primary)' }}>
                What industrial products does Sea Tech Agencies supply in Kerala?
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                We supply high-pressure hydraulic equipment, industrial bearings, power and pneumatic tools, material handling products, specialty lubricants, industrial valves, and engineering polymers across Kerala and South India.
              </p>
            </div>

            <div className="interactive-card" style={{ padding: '24px', borderRadius: '12px', background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', color: 'var(--color-primary)' }}>
                Where is Sea Tech Agencies located in Ernakulam, Kerala?
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                Our registered office is located at XIX/464, M.C. Road, Perumbavoor, Ernakulam, Kerala - 683542, near Kunnathan Residency and opposite Reliance Petrol Pump.
              </p>
            </div>

            <div className="interactive-card" style={{ padding: '24px', borderRadius: '12px', background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', color: 'var(--color-primary)' }}>
                Does Sea Tech Agencies supply to government & PSU organizations?
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                Yes, since 1998 we have been an authorized, trusted procurement partner for organizations like ISRO, Cochin Shipyard Limited (CSL), BPCL, FACT, and HAL.
              </p>
            </div>

            <div className="interactive-card" style={{ padding: '24px', borderRadius: '12px', background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', color: 'var(--color-primary)' }}>
                How can I submit an RFQ or get a price quotation?
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                You can submit an RFQ online via our Request Quote page, email your specs to info@seatechagencies.com, or call our sales team directly at +91 9447053834.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        
        <div className="container">
          <div className="cta-glass-card">
            <h2>Optimize Your Industrial Supply Chain</h2>
            <p>
              Work with a trusted procurement partner that prioritizes quality, speed, and technical support. Let us handle your engineering supply requirements.
            </p>
            <div className="hero-actions">
              <Link to="/request-quote" className="btn btn-cta">
                Request a Quote <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
