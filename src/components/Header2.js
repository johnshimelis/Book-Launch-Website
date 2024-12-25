import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  const [isHeaderActive, setHeaderActive] = useState(false);
  const [isNavbarActive, setNavbarActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => setNavbarActive(!isNavbarActive);
  const closeNavbar = () => setNavbarActive(false);

  const navItems = [
    { name: "Author's Note", path: '/author-note' },
    { name: 'Contact', path: '/contact' },
    { name: 'Join Unselling Community', path: '/join' },
  ];

  return (
    <header id='navbar' className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
      <div className="container">
        <Link to="/" className="logo">
          Start Unselling Now
        </Link>

        <nav className={`navbar ${isNavbarActive ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            {navItems.map((item, index) => (
              <li className="navbar-item" key={index}>
                {/* Check if the item has a valid path */}
                <Link
                  to={item.path}
                  className="navbar-link"
                  onClick={closeNavbar} // Close the navbar when a link is clicked
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {/* For smooth scroll to sections */}
            {/* For example, if you need to scroll to an element on the same page */}
            <li className="navbar-item">
              <a
                href="#some-section"
                className="navbar-link"
                onClick={(event) => {
                  event.preventDefault();
                  const targetElement = document.getElementById('some-section');
                  if (targetElement) {
                    const offset = document.querySelector('header').offsetHeight;
                    const elementPosition = targetElement.offsetTop - offset;
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth', // Smooth scroll behavior
                    });
                  }
                }}
              >

              </a>
            </li>
          </ul>
        </nav>

        <button
          className="nav-toggle-btn"
          aria-label="toggle menu"
          data-nav-toggler
          onClick={toggleNavbar}
        >
          {!isNavbarActive ? (
            <ion-icon
              name="menu-outline"
              aria-hidden="true"
              className="open"
            ></ion-icon>
          ) : (
            <ion-icon
              name="close-outline"
              aria-hidden="true"
              className="close"
            ></ion-icon>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
