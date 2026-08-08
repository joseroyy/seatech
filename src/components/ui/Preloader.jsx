import React from 'react';

export default function Preloader({ progress, fadeOut }) {
  return (
    <div className={`preloader-overlay ${fadeOut ? 'preloader-fade-out' : ''}`}>
      <div className="preloader-content">
        {/* Logo Container */}
        <div className="preloader-logo-container">
          <img 
            src="/images/logo.png" 
            alt="Sea Tech Agencies Logo" 
            className="preloader-logo" 
          />
          <div className="preloader-brand-text">
            <span className="preloader-brand-primary">SEA TECH</span>
            <span className="preloader-brand-secondary">AGENCIES</span>
          </div>
        </div>

        {/* Progress Section */}
        <div className="preloader-progress-section">
          <div className="preloader-progress-track">
            <div 
              className="preloader-progress-bar" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="preloader-meta" style={{ justifyContent: 'center' }}>
            <span className="preloader-percentage">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
