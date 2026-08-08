import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { BackgroundAmbient } from '../components/ui/BackgroundAmbient';
import SEO from '../components/SEO';

export default function RequestQuote() {
  // Form states
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
    productRequired: '',
    quantity: '',
    location: '',
    requirements: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const industriesList = [
    'Government Org / Defence',
    'Public Sector Undertaking (PSU)',
    'Manufacturing',
    'Shipbuilding & Marine',
    'Oil & Gas / Chemical',
    'Infrastructure / Construction',
    'Other Industry'
  ];

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
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Invalid phone number format';
    }
    if (!formData.productRequired.trim()) newErrors.productRequired = 'Product requirements are required';
    if (!formData.industry) newErrors.industry = 'Please select your industry';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Quote Request Submitted:', formData);
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      industry: '',
      productRequired: '',
      quantity: '',
      location: '',
      requirements: ''
    });
    setSubmitted(false);
  };

  const benefits = [
    { title: 'Competitive Pricing', desc: 'Direct distributor rates to minimize procurement budgets.' },
    { title: 'Genuine Products', desc: '100% authenticity guaranteed through verified manufacture channels.' },
    { title: 'Fast Response', desc: 'Dedicated team of specialists ensuring prompt RFQ processing.' },
    { title: 'Expert Product Assistance', desc: 'Technical guidance to help map technical constraints to exact product specs.' },
    { title: 'Reliable Delivery', desc: 'Robust logistics networks keeping supply timelines secure.' }
  ];

  return (
    <div className="page-container quote-page">
      <SEO
        title="Request a Quote - Industrial Products RFQ Kerala"
        description="Submit an RFQ (Request for Quotation) to Sea Tech Agencies. Get bulk pricing and technical proposals for hydraulic equipment, bearings, tools, and industrial supplies in South India."
        keywords="request quote industrial products Kerala, RFQ hydraulic equipment, industrial supplier price quotation Kochi, engineering equipment quote"
        canonicalUrl="https://www.seatechagencies.com/request-quote"
      />
      <BackgroundAmbient />
      {/* Hero Section */}
      <section className="subpage-hero">
        <div className="subpage-bg-logo-watermark" />
        <div className="subpage-hero-content">
          <h1>Accelerated Industrial Sourcing</h1>
          <p>
            Submit your parts list, technical datasheets, or RFQ specifications. Our dedicated technical sourcing desk will evaluate your requirements and deliver a comprehensive procurement quote within 2 business hours.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="content-section">
        <div className="container">
          <div className="form-layout-container">
            {/* Form Column */}
            <div>
              {!submitted ? (
                <form className="interactive-form" onSubmit={handleSubmit}>
                  <div className="form-title-group">
                    <h3>Tell Us Your Requirements</h3>
                    <p>Provide details below to receive a guaranteed response and direct-manufacturer quote within 2 business hours.</p>
                  </div>

                  <div className="form-grid">
                    {/* Company Name */}
                    <div className="form-group">
                      <label htmlFor="companyName">Company Name *</label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Enter company name"
                        style={errors.companyName ? { borderColor: '#ef4444' } : {}}
                      />
                      {errors.companyName && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.companyName}</span>}
                    </div>

                    {/* Contact Person */}
                    <div className="form-group">
                      <label htmlFor="contactPerson">Contact Person *</label>
                      <input
                        type="text"
                        id="contactPerson"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        placeholder="Enter contact name"
                        style={errors.contactPerson ? { borderColor: '#ef4444' } : {}}
                      />
                      {errors.contactPerson && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.contactPerson}</span>}
                    </div>

                    {/* Email */}
                    <div className="form-group">
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

                    {/* Phone */}
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 9447053834"
                        style={errors.phone ? { borderColor: '#ef4444' } : {}}
                      />
                      {errors.phone && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.phone}</span>}
                    </div>

                    {/* Industry */}
                    <div className="form-group">
                      <label htmlFor="industry">Industry *</label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        style={errors.industry ? { borderColor: '#ef4444' } : {}}
                      >
                        <option value="">Select Industry</option>
                        {industriesList.map((ind, idx) => (
                          <option key={idx} value={ind}>{ind}</option>
                        ))}
                      </select>
                      {errors.industry && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.industry}</span>}
                    </div>

                    {/* Quantity */}
                    <div className="form-group">
                      <label htmlFor="quantity">Quantity Required</label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="e.g. 50 units, 2 barrels"
                      />
                    </div>

                    {/* Product Required */}
                    <div className="form-group full-width">
                      <label htmlFor="productRequired">Product / Materials Needed *</label>
                      <input
                        type="text"
                        id="productRequired"
                        name="productRequired"
                        value={formData.productRequired}
                        onChange={handleInputChange}
                        placeholder="Specify the tools, valves, cylinders, lubricants, etc."
                        style={errors.productRequired ? { borderColor: '#ef4444' } : {}}
                      />
                      {errors.productRequired && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.productRequired}</span>}
                    </div>

                    {/* Delivery Location */}
                    <div className="form-group full-width">
                      <label htmlFor="location">Delivery Location</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Enter city / state"
                      />
                    </div>

                    {/* Additional Requirements */}
                    <div className="form-group full-width">
                      <label htmlFor="requirements">Additional Requirements</label>
                      <textarea
                        id="requirements"
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        placeholder="Describe material dimensions, pressure ratings, certifications, or custom sourcing instructions..."
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Request Quote <Send size={16} style={{ marginLeft: '8px' }} />
                  </button>
                </form>
              ) : (
                <div className="success-overlay">
                  <div className="success-icon-circle">
                    <Check size={36} />
                  </div>
                  <h3>Quote Request Received!</h3>
                  <p>
                    Thank you for contacting SEA TECH AGENCIES. Our procurement team has logged your requirements and will reach out with pricing shortly.
                  </p>
                  <button className="btn btn-primary" onClick={resetForm}>
                    Send Another Request
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar Column */}
            <div className="form-sidebar-card">
              <h3>Why Request a Quote?</h3>
              <ul className="sidebar-list">
                {benefits.map((item, idx) => (
                  <li key={idx} className="sidebar-list-item">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
