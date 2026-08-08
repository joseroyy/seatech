import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, Check 
} from 'lucide-react';
import { BackgroundAmbient } from '../components/ui/BackgroundAmbient';

import SEO from '../components/SEO';

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Sea Tech Agencies",
  "url": "https://www.seatechagencies.com/contact",
  "mainEntity": {
    "@type": "IndustrialSupplyStore",
    "name": "Sea Tech Agencies",
    "telephone": "+91-9447053834",
    "email": "info@seatechagencies.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "XIX/464, M.C. Road, Near Kunnathan Residency, Opp. Reliance Petrol Pump",
      "addressLocality": "Perumbavoor",
      "addressRegion": "Kerala",
      "postalCode": "683542",
      "addressCountry": "IN"
    }
  }
};

export default function ContactUs() {
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const subject = encodeURIComponent(`Website Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `\nMessage:\n${formData.message}`
      );
      
      // Open Gmail directly in a new tab safely
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@seatechagencies.com&su=${subject}&body=${body}`;
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
      
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <div className="page-container contact-page">
      <SEO
        title="Contact Us - Industrial Equipment Supplier Perumbavoor Kochi"
        description="Get in touch with Sea Tech Agencies in Perumbavoor, Ernakulam, Kerala for industrial product inquiries, prices, and engineering solutions. Phone: +91 9447053834."
        keywords="contact Sea Tech Agencies, industrial supplier address Perumbavoor, engineering tools dealer Kochi, industrial hydraulics contact Kerala"
        canonicalUrl="https://www.seatechagencies.com/contact"
        schema={contactSchema}
      />
      <BackgroundAmbient />
      {/* Hero Section */}
      <section className="subpage-hero">
        <div className="subpage-bg-logo-watermark" />
        <div className="subpage-hero-content">
          <h1>Let's Discuss Your Industrial Requirements</h1>
          <p>
            Our team is ready to help you source the right industrial products and engineering solutions.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="content-section">
        <div className="container">
          <div className="form-layout-container">
            {/* Contact Information Cards Grid */}
            <div className="contact-info-cards">
              {/* Address */}
              <div className="contact-info-card span-2">
                <h4><MapPin size={18} /> Registered Office</h4>
                <address>
                  <strong>SEA TECH AGENCIES</strong><br />
                  XIX/464, M.C. Road<br />
                  Near Kunnathan Residency<br />
                  Opposite Reliance Petrol Pump<br />
                  Perumbavoor, Ernakulam, Kerala – 683542
                </address>
              </div>

              {/* Contact Persons & Numbers */}
              <div className="contact-info-card">
                <h4><Phone size={18} /> Contact Details</h4>
                <p>
                  <strong>Moan M Joseph:</strong><br />
                  <a href="tel:+919447053834">+91 9447053834</a><br />
                  <a href="tel:+919847053834">+91 9847053834</a>
                </p>
                <p style={{ marginTop: '12px' }}>
                  <strong>Athul Joseph Moan:</strong><br />
                  <a href="tel:+919847420211">+91 9847420211</a><br />
                  <a href="tel:+919645768000">+91 9645768000</a>
                </p>
              </div>

              {/* Email */}
              <div className="contact-info-card">
                <h4><Mail size={18} /> Emails</h4>
                <p>
                  <strong>General Inquiry:</strong><br />
                  <a href="mailto:info@seatechagencies.com">info@seatechagencies.com</a>
                </p>
                <p style={{ marginTop: '12px' }}>
                  <strong>Sales & RFQ:</strong><br />
                  <a href="mailto:stakochipvr@gmail.com">stakochipvr@gmail.com</a>
                </p>
              </div>

              {/* Business Hours */}
              <div className="contact-info-card span-2">
                <h4><Clock size={18} /> Business Hours</h4>
                <p>
                  <strong>Monday – Saturday:</strong> 9:00 AM – 6:00 PM<br />
                  <strong>Sunday:</strong> Closed
                </p>
              </div>

              {/* Google Maps Embed */}
              <div className="contact-info-card span-2" style={{ padding: 0, overflow: 'hidden', position: 'relative', minHeight: '250px' }}>
                <iframe
                  title="Sea Tech Agencies Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
                  loading="lazy"
                  allowFullScreen
                  src="https://maps.google.com/maps?q=Sea%20Tech%20Agencies,%20Perumbavoor,%20Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed"
                />
                {/* Transparent overlay link to open Maps */}
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Sea+Tech+Agencies,+Perumbavoor,+Kerala" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ position: 'absolute', inset: 0, zIndex: 10, display: 'block' }}
                  aria-label="Open in Google Maps"
                  title="Click to open in Google Maps"
                />
              </div>
            </div>

            {/* Message Form */}
            <div>
              {!submitted ? (
                <form className="interactive-form" onSubmit={handleSubmit}>
                  <div className="form-title-group">
                    <h3>Send Us a Message</h3>
                    <p>Have a question or looking for a specific industrial product? Fill out the contact form below.</p>
                  </div>

                  <div className="form-grid">
                    {/* Name */}
                    <div className="form-group full-width">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter full name"
                        style={errors.name ? { borderColor: '#ef4444' } : {}}
                      />
                      {errors.name && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="form-group full-width">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email@example.com"
                        style={errors.email ? { borderColor: '#ef4444' } : {}}
                      />
                      {errors.email && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                    </div>

                    {/* Message */}
                    <div className="form-group full-width">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your inquiry, products requested, or custom logistics requirements..."
                        rows="6"
                        style={errors.message ? { borderColor: '#ef4444' } : {}}
                      ></textarea>
                      {errors.message && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Send Message <Send size={16} style={{ marginLeft: '8px' }} />
                  </button>
                </form>
              ) : (
                <div className="success-overlay">
                  <div className="success-icon-circle">
                    <Check size={36} />
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you for reaching out. A representative from SEA TECH AGENCIES will review your message and reply as soon as possible.
                  </p>
                  <button className="btn btn-primary" onClick={resetForm}>
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
