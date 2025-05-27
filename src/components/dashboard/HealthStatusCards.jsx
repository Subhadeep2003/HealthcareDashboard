import React from 'react';
import './HealthStatusCards.css';
import { healthStatuses } from '../../data/healthData';
const statusColor = {
  Lungs: '#f87171', 
  Teeth: '#34d399',
  Bone: '#fb923c'
};
const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {healthStatuses.map((item, index) => (
        <div key={index} className="card">
          <div className="icon-title">
            <span className="emoji">{item.emoji}</span>
            <h4>{item.title}</h4>
          </div>
          <p className="date">Date: {item.date}</p>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ backgroundColor: statusColor[item.title], width: '60%' }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;