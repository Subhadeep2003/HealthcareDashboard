import React from 'react';
import './ActivityFeed.css';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="header">
        <h4>Activity</h4>
        <span>3 appointment on this week</span>
      </div>
      <div className="bar-chart">
        {days.map((day, index) => (
          <div key={index} className="day-bar">
            <div className="bar-group">
              <span className="bar light" style={{ height: '30px' }}></span>
              <span className="bar blue" style={{ height: '50px' }}></span>
              <span className="bar teal" style={{ height: '70px' }}></span>
            </div>
            <div className="day-label">{day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
