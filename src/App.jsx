import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Industries from './pages/Industries';
import Brands from './pages/Brands';
import Clients from './pages/Clients';
import ContactUs from './pages/ContactUs';
import RequestQuote from './pages/RequestQuote';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/ui/Preloader';

const IMAGES_TO_PRELOAD = [
  // Core UI assets
  '/images/logo.png',
  '/hero-bg-overlay.png',
  // Home page illustrations
  '/images/home-highlights.png',
  '/images/home-products.png',
  '/images/home-industries.png',
  '/images/home-brands.png',
  '/images/home-clients.png',
  // Subpage illustrations (blend-mode: multiply)
  '/images/about-illustration.png',
  '/images/products-center-image.png',
  '/images/industries-illustration.png',
  '/images/brands-illustration.png',
  '/images/clients-illustration.png',
  '/images/industrial-banner.png',
  '/images/illustrations/business-quote.png',
  '/images/illustrations/contact-support.png',
  '/images/illustrations/industrial-worker.png',
  // Product card images (blend-mode pre-cached)
  '/images/material_handling.png',
  '/images/industrial_tools.png',
  '/images/hydraulic_equipment.png',
  '/images/bearings_transmission.png',
  '/images/lubricants_greases.png',
  '/images/welding_equipment.png',
  '/images/safety_equipment.png',
  '/images/industrial_valves.png',
  '/images/engineering_consumables.png',
  '/images/adhesives_sealants.png',
  '/images/polymer_ptfe.png',
  '/images/maintenance_products.png',
  // Industry served images
  '/images/ind_government.png',
  '/images/ind_psu.png',
  '/images/ind_manufacturing.png',
  '/images/ind_marine.png',
  '/images/ind_oil_gas.png',
  '/images/ind_petrochemical.png',
  '/images/ind_chemical.png',
  '/images/ind_cement.png',
  '/images/ind_mining.png',
  '/images/ind_power.png',
  '/images/ind_heavy_eng.png',
  '/images/ind_infrastructure.png',
  '/images/ind_railways.png',
];

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Lenis Smooth Scroll Initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Image Preloading Mechanism
    let loadedCount = 0;
    const total = IMAGES_TO_PRELOAD.length;

    const onLoad = () => {
      loadedCount++;
      const currentProgress = Math.round((loadedCount / total) * 100);
      setProgress(currentProgress);
      if (loadedCount === total) {
        // Delay slightly for smoother visual transition
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setLoading(false);
          }, 800); // Match preloader-overlay CSS transition duration
        }, 500);
      }
    };

    const onError = (src) => {
      console.warn(`Failed to preload image: ${src}`);
      onLoad(); // Count failed images as loaded to prevent stuck screen
    };

    if (total === 0) {
      setLoading(false);
    } else {
      IMAGES_TO_PRELOAD.forEach((src) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = src;
        img.onload = () => {
          // Force GPU decode + blend-mode pre-cache via off-screen canvas
          try {
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth || 2;
            canvas.height = img.naturalHeight || 2;
            const ctx = canvas.getContext('2d');
            ctx.globalCompositeOperation = 'multiply';
            ctx.drawImage(img, 0, 0);
            // Trigger a read to ensure the compositor has processed it
            ctx.getImageData(0, 0, 1, 1);
          } catch (e) { /* cross-origin taint — decode still cached */ }
          onLoad();
        };
        img.onerror = () => onError(src);
      });
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {loading && <Preloader progress={progress} fadeOut={fadeOut} />}
      
      <Router>
        <ScrollToTop />
        <div className="app-wrapper">
          <Header />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/products" element={<Products />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/request-quote" element={<RequestQuote />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
