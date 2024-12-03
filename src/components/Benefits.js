import React from 'react';
import '../styles/style.css';
import '../styles/learn.css';

// Import images
import benefit1 from '../assets/images/yourself.jpg';
import benefit2 from '../assets/images/kyc.jpg';
import benefit3 from '../assets/images/opening.png';
import benefit4 from '../assets/images/objection.jpg';
import benefit5 from '../assets/images/referal.webp';
import benefit6 from '../assets/images/technology.avif';


const BenefitCard = ({ icon, title, text }) => (
  <li>
    <div className="benefits-card has-before has-after" id>
      <div className="card-icon">
        <img src={icon} width="40" height="40" loading="lazy" alt={title} />
      </div>
      <h3 className="h3 card-title">{title}</h3>
      <p className="section-text">{text}</p>
     
    </div>
  </li>
);

const Benefits = () => {
  const benefitsData = [
    { icon: benefit1, title: "Knowing Yourself", text: "Discover the foundation of all great sales—understanding your own strengths, values, and how they shape your approach. Build the confidence to connect authentically." },
    { icon: benefit2, title: "KYC to UYC to AYC", text: "Move beyond knowing your customer to truly understanding and adapting to them. Learn how to tailor your approach to meet customers where they are." },
    { icon: benefit3, title: "Mastering Openings", text: "First impressions matter. Master the art of opening conversations with impact, setting the tone for a successful sales journey from the very first moment." },
    { icon: benefit4, title: "Making Objections Your Best Friend", text: "Turn obstacles into opportunities. Learn how to view objections as a path to deeper understanding and use them to strengthen your sales strategy." },
    { icon: benefit5, title: "Building Your Referrals", text: "Referrals are the backbone of long-term success. Develop strategies to turn satisfied customers into enthusiastic advocates who refer others to you." },
    { icon: benefit6, title: "Using Technology as an Unfair Advantage", text: "Gain insights into leveraging modern tools and data-driven approaches to elevate your sales process and outperform the competition." },
 
 
  ];

  return (
    <section className="section benefits" id="benefits" aria-label="benefits">
      <div className="container">
        <div className="grid-list">
          <li className="benefits-content">
            <h2 className="h2 section-title">What You'll learn in this book</h2>
           
          </li>
          {benefitsData.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Benefits;
