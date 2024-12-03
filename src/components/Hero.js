import React from 'react';

import '../styles/style.css';
import bookcover from "../assets/images/bookcover11.png";

// Hero data
const heroData = [
  { number: '44%', description: 'of salespeople give up after just one follow-up call.' },
  { number: '8', description: 'follow-up calls are needed on average to reach a prospect.' },
  { number: '92%', description: 'of salespeople give up after four “no’s.' },
  { number: '80%', description: 'of prospects say “no” four times before they say “yes.”' },
  { number: '46.7%', description: 'of sales reps globally meet their quota.' },
  { number: '69%', description: 'of deals fail because the salesperson doesn’t help the customer buy effectively.' },
];  

const Hero = () => {
  // Redirect function to open the link in a new tab
  const handleButtonClick = () => {
    window.open('https://amzn.in/d/hxTJXN2', '_blank');
  };

  return (
    <section className="section hero" id="home" aria-label="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">Reimagine Selling with <span>Start Unselling Now!</span></h1>
          <p className="section-text">
            Transform the way you approach sales. Move beyond traditional selling and discover how to make 
            customers feel empowered to buy on their own terms. Start Unselling Now! takes you through 
            a proven journey that has helped sales teams succeed in even the toughest markets.
          </p>
        </div>
        <div id='hero-banner' className="hero-banner has-before">
          <img
            src={bookcover}
            width="431"
            height="596"
            alt="things I never said, a novel by Claudia Wilson"
            className="w-100"
          />
        </div>

        {/* Cards Section */}
        <div className="cards-grid">
          {heroData.map((item, index) => (
            <div className="card" key={index}>
              <div className="stat-number">{item.number}</div>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="button-container">
          {/* Add onClick handler to open in a new tab */}
          <button className="get-copy-btn" onClick={handleButtonClick}>
            Get Your Copy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
