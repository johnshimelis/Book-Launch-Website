import React from 'react';
import '../styles/whyunselling.css';
import author from '../assets/images/bookcover.jpg';

const WhyUnselling = () => {
  return (
    <section className="whyunselling" id='whyunselling'>
      <div className="container">
        {/* Image Section */}
        <div className="why-banner">
          <img
            src={author}
            alt="Why Unselling"
            className="responsive-image"
          />
        </div>

        {/* Content Section */}
        <div className="why-content" id='why-content'>
          <h2 className="section-title">Why Unselling and Why Now?</h2>
          <p className="section-texts">
       The Paradigm Shift: It’s No Longer About Selling — It’s About Helping Customers Buy. 
       And the Time to Adapt Is Now.   <br/><br/>

The modern buyer has redefined the rules of engagement, and the change isn’t coming — it’s already here.
 In today’s world, success in sales isn’t about pushing products or mastering closing techniques. 
 It’s about embracing a profound shift in perspective — from "how you want to sell" to "how the 
 customer wants to buy."   <br/><br/>

This shift is the foundation of Start UNSELLING Now. It’s not just another sales manual; it’s a manifesto 
for change — an urgent call to transform how you approach sales to meet the demands of today’s empowered 
buyer. This book introduces the concept of UNSELLING, where the focus is no longer on convincing customers
 but on guiding them seamlessly through their own buying journey. The goal? To align with their 
 expectations, provide value, and build trust in every interaction.   <br/><br/>

Why now? Because buyers today expect more than ever. They want a personalized experience, transparency, 
and a seamless journey. If you’re still following traditional sales tactics, you risk losing relevance — 
and customers. This book equips you to make the shift immediately, ensuring you stay ahead and connect with 
buyers on their terms.   <br/><br/>

Start UNSELLING Now is for both newcomers and seasoned professionals. For novices, it lays the groundwork 
for mastering unselling with practical insights and actionable strategies. For experienced salespeople, 
it provides a fresh perspective, showing how to connect with today’s customer in a way that resonates.   <br/><br/>

Each chapter concludes with the Reflect, Practice, and Plan methodology, turning insights into practical 
actions you can implement right away. This structure empowers you to personalize unselling, making 
it effective for your unique style and your customers’ needs.   <br/><br/>

Welcome to the new era of salesmanship, where success depends not on selling but on empowering the
 customer to buy. The future of sales is here, and the time to start is now.   <br/><br/>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUnselling;
