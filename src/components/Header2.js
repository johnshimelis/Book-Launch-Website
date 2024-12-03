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
    { name: "Author's Note", path: '/author-note', id: 'author-note' },
    { name: 'Contact', path: '/contact', id: 'contact' },
    { name: 'Join Unselling Community', path: '/join', id: 'join-academy' },
  ];

  const handleNavClick = (event, id) => {
    event.preventDefault();
    closeNavbar();

    const targetElement = document.getElementById(id);
    const offset = document.querySelector('header').offsetHeight; // Dynamically use header height

    if (targetElement) {
      const elementPosition = targetElement.offsetTop - offset; // Calculate position based on header height
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth', // Smooth scroll
      });
    }
  };

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
                {item.path ? (
                  <Link
                    to={item.path}
                    className="navbar-link"
                    onClick={closeNavbar}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={`#${item.id}`}
                    className="navbar-link"
                    onClick={(event) => handleNavClick(event, item.id)}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
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
