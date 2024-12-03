import React from 'react';
import '../styles/style.css';
import author from '../assets/images/2.png';

const Note = () => {
  return (
    <section className="section author" id="author">
      <div className="container">
        <figure className="author-banner img-holder" style={{ '--width': 700, '--height': 720 }}>
          <img
            src={author}
            width="700"
            height="720"
            loading="lazy"
            alt="Martin Jenny"
            className="img-cover"
          />
        </figure>

        <div className="author-content">
          <p className="section-subtitle">Author's Note</p>
          <h2 className="h2 section-title">A Note from the Author</h2>
          <p className="author-name">Dear Reader,</p>
          <div className="section-text">
          For <b><em>over 21 years</em></b>, I’ve coached and trained thousands of salespeople across the globe. One phrase
        I’ve heard repeatedly, from budding sales professionals to seasoned experts, is “Selling is hard.” 
        In the beginning, I dismissed this notion. After all, I had witnessed countless top performers 
        enjoying incredible success and rewards. But as I immersed myself further in the field—across 
        industries, cultures, and markets—I realized that selling is indeed hard, especially in today’s
         fast-evolving world.<br/><br/>
        Sales has undergone a radical transformation. The era of traditional tactics—pushy pitches and 
        aggressive persuasion—is behind us. Today’s buyers, shaped by technology, globalization, and an 
        information-rich world, approach their decisions differently. They are well-informed, digitally 
        savvy, and seek authenticity, transparency, and personalization. Selling to this new breed of buyer 
        with outdated techniques is like shooting at a moving target with your eyes closed.<br/><br/>
        As I dissected the reasons for success and failure across thousands of sales interactions, 
        a simple truth became clear: Selling to customers does not work. Instead, success lies in understanding
         and adapting to the modern buyer’s journey, becoming a trusted guide rather than a persuader.<br/><br/>

         <b><em>Start Unselling Now!</em></b> is a product of this realization. It’s a shift from conventional 
         sales tactics to a more human-centered, customer-first approach. Through this book, I share insights 
         and strategies that I have found impactful and adaptable across diverse industries and customer segments.
          This book is here to guide you on a path where success comes not from selling, but from empowering the 
          customer to buy.<br/><br/>


        I hope you find in these pages the clarity and tools you need to elevate your approach,
         build authentic relationships, and achieve lasting success in today’s sales landscape.<br/><br/>

        Thank you for letting me be a part of your journey.
        <br/><br/>

       
           <div className='author-signature'>
           <p className='quote'>  
             Warm regards,
           Rajesh Grover
           </p>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Note;
