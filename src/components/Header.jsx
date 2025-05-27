import React from 'react';
import './Header.css';
import { FiBell, FiPlus, FiSearch } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="header">
      <div className="search-container">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="search-bell">
          <FiBell />
        </div>
      </div>
      <div className="right-icons">
        <img
          src="https://api.dicebear.com/7.x/thumbs/svg?seed=Patient"
          alt="Avatar"
          className="avatar-icon"
        />
        <div className="plus-icon">
          <FiPlus />
        </div>
      </div>
    </header>
  );
};

export default Header;