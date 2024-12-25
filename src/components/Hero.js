import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Ensure this points to your firebase.js
import { collection, getDocs } from "firebase/firestore";
import bookcover from "../assets/images/bookcover11.png";

const Hero = () => {
  const [heroData, setHeroData] = useState([]);
  const [link, setLink] = useState("");
  const [kindleLink, setKindleLink] = useState(""); // For storing Kindle link

  // Fetch data from Firestore
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        // Fetching hero data
        const heroSnapshot = await getDocs(collection(db, "heroData"));
        const heroItems = heroSnapshot.docs.map((doc) => doc.data());
        setHeroData(heroItems);

        // Fetching the latest link from the "links" collection
        const linkSnapshot = await getDocs(collection(db, "links"));
        const links = linkSnapshot.docs.map((doc) => doc.data());
        if (links.length > 0) {
          setLink(links[links.length - 1]?.link || ""); // Use the most recent link's URL
        } else {
          console.warn("No links found in links collection.");
        }

        // Fetching the latest Kindle book link
        const kindleSnapshot = await getDocs(collection(db, "kindleBooks"));
        const kindleBooks = kindleSnapshot.docs.map((doc) => doc.data());
        if (kindleBooks.length > 0) {
          setKindleLink(kindleBooks[kindleBooks.length - 1]?.link || ""); // Use the most recent Kindle book link
        } else {
          console.warn("No Kindle books found.");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchHeroData();
  }, []);

  const handleButtonClick = () => {
    if (link) {
      window.open(link, "_blank");
    } else {
      alert("No link is currently available.");
    }
  };

  const handleNextButtonClick = () => {
    if (kindleLink) {
      window.open(kindleLink, "_blank"); // Open the latest Kindle link
    } else {
      alert("No Kindle link is available.");
    }
  };

  return (
    <section className="section hero" id="home" aria-label="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">
            Reimagine Selling with <span>Start Unselling Now!</span>
          </h1>
          <p className="section-text">
            Transform the way you approach sales. Move beyond traditional
            selling and discover how to make customers feel empowered to buy on
            their own terms. Start Unselling Now! takes you through a proven
            journey that has helped sales teams succeed in even the toughest
            markets.
          </p>
        </div>
        <div id="hero-banner" className="hero-banner has-before">
          <img
            src={bookcover}
            width="431"
            height="596"
            alt="Things I never said, a novel by Claudia Wilson"
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
          <button className="get-copy-btn" onClick={handleButtonClick}>
            Get Your Copy Now (Amazon India)
          </button>
          <button className="get-copy-btn yellow-btn" onClick={handleNextButtonClick}>
            Get The Kindle Edition (Global)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
