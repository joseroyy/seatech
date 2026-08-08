import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Weight, Drill, Cylinder, Cog, Droplets, Flame, HardHat, 
  Settings2, Nut, Pipette, Layers, Wrench, ArrowRight, HelpCircle
} from 'lucide-react';
import { BackgroundAmbient } from '../components/ui/BackgroundAmbient';
import SEO from '../components/SEO';

const productsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Industrial Products & Engineering Equipment",
  "description": "Full catalog of industrial tools, hydraulic equipment, bearings, lubricants, safety gear, valves, and material handling solutions by Sea Tech Agencies.",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Material Handling Equipment" },
    { "@type": "ListItem", "position": 2, "name": "Industrial Tools & Power Tools" },
    { "@type": "ListItem", "position": 3, "name": "Hydraulic Equipment & Cylinders" },
    { "@type": "ListItem", "position": 4, "name": "Bearings & Power Transmission" },
    { "@type": "ListItem", "position": 5, "name": "Specialty Lubricants & Greases" },
    { "@type": "ListItem", "position": 6, "name": "Welding Equipment & Consumables" },
    { "@type": "ListItem", "position": 7, "name": "Safety & PPE Equipment" },
    { "@type": "ListItem", "position": 8, "name": "Industrial Valves & Pipeline Accessories" }
  ]
};

export default function Products() {
  const categories = [
    {
      title: 'Material Handling Equipment',
      desc: 'Efficient solutions designed to improve productivity, safety, and operational efficiency.',
      icon: <Weight size={24} />,
      image: '/images/material_handling.png',
      items: ['Chain Blocks', 'Hoists', 'Lifting Equipment', 'Trolleys', 'Pallet Trucks']
    },
    {
      title: 'Industrial Tools',
      desc: 'Professional-grade tools for industrial maintenance and engineering applications.',
      icon: <Drill size={24} />,
      image: '/images/industrial_tools.png',
      items: ['Hand Tools', 'Power Tools', 'Precision Tools', 'Cutting Tools', 'Measuring Instruments']
    },
    {
      title: 'Hydraulic Equipment',
      desc: 'Reliable hydraulic products engineered for demanding industrial applications.',
      icon: <Cylinder size={24} />,
      image: '/images/hydraulic_equipment.png',
      items: ['Hydraulic Pumps', 'Cylinders', 'Hydraulic Fittings', 'Hose Assemblies', 'Hydraulic Accessories']
    },
    {
      title: 'Bearings & Power Transmission',
      desc: 'High-performance components designed for durability and efficiency.',
      icon: <Cog size={24} />,
      image: '/images/bearings_transmission.png',
      items: ['Bearings', 'Chains', 'Belts', 'Couplings', 'Power Transmission Components']
    },
    {
      title: 'Industrial Lubricants & Greases',
      desc: 'Premium lubricants designed to maximize equipment life and performance.',
      icon: <Droplets size={24} />,
      image: '/images/lubricants_greases.png',
      items: ['Heavy Duty Engine Oils', 'Gear & Transmission Fluids', 'Specialized Bearing Greases', 'Synthetic & Mineral Lubricants']
    },
    {
      title: 'Welding Equipment & Consumables',
      desc: 'Complete welding solutions for industrial fabrication and maintenance.',
      icon: <Flame size={24} />,
      image: '/images/welding_equipment.png',
      items: ['Welding Machines', 'Electrodes & Wires', 'Gas Regulators & Torches', 'Welding Safety Shields']
    },
    {
      title: 'Industrial Safety Equipment',
      desc: 'Personal protective equipment and workplace safety products.',
      icon: <HardHat size={24} />,
      image: '/images/safety_equipment.png',
      items: ['Safety Shoes & Helmets', 'Protective Gloves & Goggles', 'Ear Protection', 'Fall Arrest Systems']
    },
    {
      title: 'Industrial Valves',
      desc: 'Reliable flow-control solutions for industrial systems.',
      icon: <Settings2 size={24} />,
      image: '/images/industrial_valves.png',
      items: ['Ball & Gate Valves', 'Butterfly & Check Valves', 'Pressure Relief Valves', 'Pneumatic Actuators']
    },
    {
      title: 'Engineering Consumables',
      desc: 'Everyday engineering products essential for industrial operations.',
      icon: <Nut size={24} />,
      image: '/images/engineering_consumables.png',
      items: ['Fasteners & Washers', 'Abrasive Discs & Wheels', 'Gaskets & O-Rings', 'Drill Bits & Taps']
    },
    {
      title: 'Adhesives & Sealants',
      desc: 'Industrial-grade bonding and sealing solutions.',
      icon: <Pipette size={24} />,
      image: '/images/adhesives_sealants.png',
      items: ['Threadlockers & Retainers', 'Silicone Sealants', 'Epoxy Adhesives', 'Instant Superglues']
    },
    {
      title: 'Rubber, Nylon & Teflon Products',
      desc: 'Engineered polymer products for specialized industrial applications.',
      icon: <Layers size={24} />,
      image: '/images/polymer_ptfe.png',
      items: ['Rubber Sheets & Hoses', 'Nylon Rods & Sheets', 'PTFE Tape & Components', 'Polyurethane Products']
    },
    {
      title: 'Maintenance Products',
      desc: 'Complete maintenance solutions for industrial plants and machinery.',
      icon: <Wrench size={24} />,
      image: '/images/maintenance_products.png',
      items: ['Rust Preventive Sprays', 'Contact Cleaners', 'Industrial Degreasers', 'Anti-Seize Lubricants']
    }
  ];

  return (
    <div className="page-container products-page">
      <SEO
        title="Industrial Products Catalog - Hydraulics, Bearings, Tools & Valves"
        description="Explore Sea Tech Agencies' complete range of certified industrial products: hydraulic pumps, bearings, material handling hoists, safety equipment, specialty greases, and valves in Kerala."
        keywords="industrial products catalog Kerala, hydraulic pumps Kochi, bearings supplier Ernakulam, material handling equipment Perumbavoor, industrial valves, safety equipment"
        canonicalUrl="https://www.seatechagencies.com/products"
        schema={productsSchema}
      />
      <BackgroundAmbient />
      {/* Hero Section */}
      <section className="subpage-hero">
        <div className="subpage-bg-logo-watermark" />
        <div className="subpage-hero-content">
          <h1>Industrial Products That Keep Your Operations Running</h1>
          <p>
            Supplying a comprehensive range of industrial products and engineering consumables for manufacturing, infrastructure, marine, energy, and government sectors.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="content-section">
        <div className="container">
          <div className="split-grid-section" style={{ alignItems: 'center' }}>
            <div className="story-text-container">
              <h3>Sourcing Excellence Since 1998</h3>
              <p>
                At SEA TECH AGENCIES, we understand that every industry has unique operational requirements. Our extensive product portfolio enables us to supply everything from routine maintenance materials to specialized heavy engineering equipment, tailored to the rigorous demands of modern industrial operations.
              </p>
              <p>
                From single-item rapid sourcing to comprehensive, end-to-end industrial procurement support, we remain committed to providing competitive pricing, uncompromising quality, and unparalleled customer service to keep your business running continuously and efficiently.
              </p>
            </div>
            
            <div className="about-illustration-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <img 
                src="/images/products-center-image.png" 
                alt="Products Illustration" 
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

      {/* Product Categories Grid */}
      <section className="content-section alt-bg">
        <div className="container">
          <h2 className="section-title">Product Categories</h2>
          <p className="section-subtitle">Explore our diverse selection of industrial tools and heavy engineering supplies.</p>
          
          <div className="card-grid">
            {categories.map((cat, idx) => (
              <div key={idx} className="premium-card product-card">
                <div className="product-card-image-wrapper">
                  <img src={cat.image} alt={cat.title} className="product-card-image" loading="lazy" />
                </div>
                <div className="product-card-content">
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                  <ul className="card-list">
                    {cat.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="card-list-item">
                        <span className="card-list-item-bullet"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Banner */}
      <section className="content-section">
        <div className="container">
          <div className="authenticity-banner" style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div className="authenticity-icon-wrapper">
              <HelpCircle size={48} />
            </div>
            <div className="authenticity-content">
              <h3>Need Something Else?</h3>
              <p>
                Can't find the product you're looking for? Our sourcing network allows us to supply thousands of industrial products based on your specific requirements.
              </p>
            </div>
            <div style={{ marginLeft: 'auto', flexShrink: 0 }}>
              <Link to="/contact" className="btn btn-primary btn-sm">
                Inquire Now <ArrowRight size={14} style={{ marginLeft: '6px' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
