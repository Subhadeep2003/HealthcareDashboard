import React from 'react';
import './AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="body-wrapper">
        <img src="/assets/human-body.png" alt="Human Body" className="body-img" />
        <div className="scan-ring heart-scan"></div>
        <div className="label heart">❤️ Healthy Heart</div>

        
        <div className="scan-ring leg-scan"></div>
        <div className="label leg">🦵 Healthy Leg</div>
      </div>
    </div>
  );
};

export default AnatomySection;