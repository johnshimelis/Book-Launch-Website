import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  const [isHeaderActive, setHeaderActive] = useState(false);
  const [isNavbarActive, setNavbarActive] = useState(false);
  const location = useLocation();

  // Ensure the page scrolls to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

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
    { name: 'Why Unselling', id: 'why-unselling', type: 'scroll' },
    { name: 'Meet the Author', id: 'author', type: 'scroll' },
    { name: 'Endorsements', id: 'endorsements', type: 'scroll' },
    { name: "What You'll Learn", id: 'learn', type: 'scroll' },
    { name: "Reader's Opinion", id: 'testimonials', type: 'scroll' },
    { name: 'Order Now', id: 'order', type: 'scroll' },
    { name: "Author's Note", path: '/author-note', type: 'link' },
    { name: 'Contact', path: '/contact', type: 'link' },
    { name: 'Join Unselling Community', path: '/join', type: 'link' },
  ];

  const handleNavClick = (event, id) => {
    event.preventDefault();
    closeNavbar();

    const targetElement = document.getElementById(id);
    const offset = 80; // Adjust this value based on your header height

    if (targetElement) {
      const elementPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header id="navbar" className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
      <div className="container">
        <Link to="/" className="logo">
          Start Unselling Now
        </Link>

        <nav className={`navbar ${isNavbarActive ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            {navItems.map((item, index) => (
              <li className="navbar-item" key={index}>
                {item.type === 'scroll' ? (
                  <a
                    href={`#${item.id}`}
                    className="navbar-link"
                    onClick={(event) => handleNavClick(event, item.id)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="navbar-link"
                    onClick={closeNavbar}
                  >
                    {item.name}
                  </Link>
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
