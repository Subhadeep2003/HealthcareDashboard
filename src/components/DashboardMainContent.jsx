import React from 'react';
import './DashboardMainContent.css';
import AnatomySection from './dashboard/AnatomySection';
import HealthStatusCards from './dashboard/HealthStatusCards';
import CalendarView from './dashboard/CalenderView';
import UpcomingSchedule from './dashboard/UpcomingSchedule';
import ActivityFeed from './dashboard/ActivityFeed';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="main-layout">
        <div className="left-column">
          <div className="anatomy-cards">
            <AnatomySection />
            <HealthStatusCards />
          </div>
          <ActivityFeed />
        </div>

        <div className="right-column">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;