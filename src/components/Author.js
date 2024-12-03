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
