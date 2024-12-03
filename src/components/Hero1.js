import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import bookcover from "../assets/images/bookcover11.png";

// Hero data (will be fetched from Firestore)
const Hero = () => {
  const [heroData, setHeroData] = useState([]);
  
  useEffect(() => {
    const db = getFirestore();
    const heroRef = collection(db, "heroData");

    const fetchHeroData = async () => {
      const querySnapshot = await getDocs(heroRef);
      const data = querySnapshot.docs.map(doc => doc.data());
      setHeroData(data);
    };

    fetchHeroData();
  }, []);

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
          <button className="get-copy-btn">Get Your Copy Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
