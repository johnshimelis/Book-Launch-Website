import React from "react";

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
    <section className="section testimonials" id="endorsements">
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