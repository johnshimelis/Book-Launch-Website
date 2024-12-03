import React from "react";
import '../styles/style.css';
import '../styles/preview.css';

const Testimonials = () => {
  const endorsements = [
    {
      text: `"Rajesh's ability to turn what seems unsellable into something customers crave is remarkable. In Start Unselling Now, he shares the principles that made him and countless salespeople successful in even the toughest markets."`,
      author: "M. Chahrour",
      title: "Managing Director of GGW Insurance Group",
    },
    {
      text: `"Rajesh has mastered the art of making the unsellable irresistible by focusing on what customers truly need. Start Unselling Now! is a must-read for anyone in sales."`,
      author: "Roland Abella",
      title: "Chief Executive Officer - Right Mix International",
    },
    {
      text: `"Start (UN)SELLING NOW challenges conventional sales methods by focusing on the customer experience, creating long-lasting results in the process."`,
      author: "Hitesh Bharwani",
      title: "Co-Founder and Group Managing Director– Kanmo Group",
    },
  ];

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Industry Leaders Are Saying</h2>
        <div className="endorsements-container">
          {endorsements.map((item, index) => (
            <div className="endorsement-card" key={index}>
              <p className="endorsement-text">{item.text}</p>
              <p className="endorsement-author">— {item.author}</p>
              <p className="endorsement-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


//Availiability

import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Availability = () => {
  const [retailers, setRetailers] = useState([]);

  useEffect(() => {
    const fetchRetailers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "retailers"));
        setRetailers(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching retailers: ", error);
      }
    };
    fetchRetailers();
  }, []);

  return (
    <div className="availability-container">
      <p className="availability">Get Your Copy of Start Unselling Now.</p>
      <div className="retailer-links">
        {retailers.map((retailer) => (
          <a
            key={retailer.id}
            href={retailer.link}
            className="retailer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={retailer.image}
              alt={retailer.name}
              style={{ width: "50px", height: "50px", objectFit: "contain" }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Availability;


//Hero

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


//Testimonial

import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Import Firestore instance
import { collection, getDocs } from "firebase/firestore";
import '../styles/style.css';
import '../styles/preview.css';

const Testimonials = () => {
  const [endorsements, setEndorsements] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const querySnapshot = await getDocs(collection(db, "testimonials"));
      const testimonialsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEndorsements(testimonialsData);
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="section testimonials" id="testimonials">    
     <div className="container">
      <h2  className="section-title">What Industry Leaders Are Saying</h2>
      <div className="endorsements-container">
        {endorsements.map((item) => (
          <div className="endorsement-card" key={item.id}>
            <p className="endorsement-text">{item.text}</p>
            <p className="endorsement-author">— {item.author}</p>
            <p className="endorsement-title">{item.title}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Testimonials;





//Author.js

import React from 'react';
import '../styles/author.css';
import author from '../assets/images/rajesh.png';

const Author = () => {
  return (
    <section className="author" id='author'>
      <div className="container">
        {/* Image Section */}
        <div className="author-banner">
          <img
            src={author}
            alt="Why Unselling"
            className="responsive-image"
          />
        </div>

        {/* Content Section */}
        <div className="author-content" id='author-content'>
          <h2 className="section-title">Meet the Author</h2>
          <p className="section-texts">
          Rajesh Grover is a globally respected sales strategist, transformation expert, and thought leader 
          with over two decades of experience driving remarkable success across multiple geographies 
          and industries. From FMCG and consumer electronics to retail, real estate, edtech, and e-commerce, 
          Rajesh’s versatile approach has delivered powerful results in some of the world’s most 
          competitive sectors.  <br/><br/>

          With a unique blend of practical strategy and innovative thinking, Rajesh has coached and trained 
          thousands of salespeople across the globe, equipping them to reach their highest potential. 
          His coaching methods go beyond traditional sales tactics, empowering teams to engage with 
          customers on a deeper level and create genuine, lasting relationships. <br/><br/>

          A sought-after speaker and knowledge expert, Rajesh is frequently invited to share his insights
           at conferences, roundtables, and industry forums worldwide. His visionary approach to sales has
            earned him recognition as a thought leader, inspiring both emerging talents and seasoned
             professionals alike.  <br/><br/>

             <div className="author-slogan-wrapper">
                <div className="author-slogan">
                  "Always treat your customer like he/she is your only customer. If you won't someone else will."
                </div>
               </div>

          </p>
        </div>
      </div>
    </section>
  );
};

export default Author;

