import React from 'react';
import './CalendarView.css';
import { calendarData } from '../../data/appointments';

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h3>October 2021</h3>
        <div className="nav-icons">⟵ ⟶</div>
      </div>

      <div className="calendar-grid">
        {calendarData.map((day, index) => (
          <div key={index} className="calendar-day">
            <strong>{day.day}</strong>
            {day.times.map((time, i) => (
              <div key={i} className="appointment-time">{time}</div>
            ))}
          </div>
        ))}
      </div>

      <div className="calendar-cards">
        <div className="calendar-card dentist">
          <div className="card-header">
            <h4>Dentist</h4>
            <span role="img" aria-label="tooth">🦷</span>
          </div>
          <p>09:00–11:00</p>
          <p className="doctor">Dr. Cameron Williamson</p>
        </div>
        <div className="calendar-card physio">
          <div className="card-header">
            <h4>Physiotherapy Appointment</h4>
            <span role="img" aria-label="flex">💪</span>
          </div>
          <p>11:00–12:00</p>
          <p className="doctor">Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;