import React from 'react';
import './UpcomingSchedule.css';
import { upcomingAppointments } from '../../data/appointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3 className="schedule-title">The Upcoming Schedule</h3>
      {upcomingAppointments.map((section, index) => (
        <div key={index} className="schedule-section">
          <h4>{section.day}</h4>
          <div className="schedule-cards">
            {section.appointments.map((item, i) => (
              <SimpleAppointmentCard key={i} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;