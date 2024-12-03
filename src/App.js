import React from 'react';
import './styles/style.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Availability from './components/Availability';
import WhyUnselling from './components/WhyUnseling';
import Chapters from './components/Chapters';
import ChapterPreview from './components/ChapterPreview';
import Pricing from './components/Pricing';
import Author from './components/Author';
import Join from './components/Join';
import AuthorNote from './components/AuthorNote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonial';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation(); // useLocation inside a Router context

  return (
    <div className="App">
      {/* Render Header only on the main page */}
      {location.pathname === '/' && <Header />}

      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <section id="availability">
                <Availability />
              </section>
              <main>
                <section id="why-unselling">
                  <WhyUnselling />
                </section>
                <section id="author">
                  <Author />
                </section>
                <section id="endorsements">
                  <ChapterPreview />
                </section>

                <section id="learn">
                  <Benefits />
                </section>
                <section id="testimonials">
                  <Testimonials />
                </section>
                <section id="order">
                 
                </section>

                <section id="availability">
                  <Availability />
                </section>
              </main>
            </>
          }
        />
        {/* Other Pages */}
          <Route path="/author-note" element={<AuthorNote />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      <Footer />
    </div>
  );
};

export default App;
