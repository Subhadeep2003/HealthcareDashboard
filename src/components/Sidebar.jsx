import React, { useState } from 'react';
import './Sidebar.css';
import {
  FaTachometerAlt, FaHistory, FaCalendarAlt, FaClipboardList,
  FaChartBar, FaFlask, FaComments, FaLifeRing, FaCog, FaBars
} from 'react-icons/fa';

const links = [
  { icon: <FaTachometerAlt />, label: 'Dashboard' },
  { icon: <FaHistory />, label: 'History' },
  { icon: <FaCalendarAlt />, label: 'Calendar' },
  { icon: <FaClipboardList />, label: 'Appointments' },
  { icon: <FaChartBar />, label: 'Statistics' },
  { icon: <FaFlask />, label: 'Tests' },
  { icon: <FaComments />, label: 'Chat' },
  { icon: <FaLifeRing />, label: 'Support' },
  { icon: <FaCog />, label: 'Setting' }
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(prev => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {isOpen && <div className="sidebar-backdrop active" onClick={closeSidebar} />}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo-brand">
          <span className="logo-blue">Health</span>
          <span className="logo-black">care.</span>
        </div>
        <h3 className="section-title">General</h3>
        <ul>
          {links.map((link, index) => (
            <li key={index} onClick={closeSidebar}>
              <span className="icon">{link.icon}</span>
              <span>{link.label}</span>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
