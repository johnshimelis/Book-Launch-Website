import React, { useState } from 'react';
import '../styles/style.css';

const Navbar = () => {
  const [isNavbarActive, setNavbarActive] = useState(false); // Navbar toggling state

  // Toggle Navbar visibility
  const toggleNavbar = () => {
    setNavbarActive(!isNavbarActive);
  };

  // Close Navbar when a link is clicked
  const closeNavbar = () => {
    setNavbarActive(false);
  };

  return (
    <nav className={`navbar ${isNavbarActive ? 'active' : ''}`} data-navbar>
      <ul className="navbar-list">
        {['Home', 'Benefits', 'Chapters', 'Pricing', 'Author', 'Achievements', 'Contact'].map((item, index) => (
          <li className="navbar-item" key={index}>
            <a
              href={`#${item.toLowerCase()}`}
              className="navbar-link"
              data-nav-link
              onClick={closeNavbar}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`nav-toggle-btn ${isNavbarActive ? 'active' : ''}`}
        aria-label="toggle menu"
        data-nav-toggler
        onClick={toggleNavbar}
      >
        <ion-icon name="menu-outline" aria-hidden="true" className={`open ${isNavbarActive ? 'active' : ''}`}></ion-icon>
        <ion-icon name="close-outline" aria-hidden="true" className={`close ${isNavbarActive ? 'active' : ''}`}></ion-icon>
      </button>
    </nav>
  );
};

export default Navbar;
