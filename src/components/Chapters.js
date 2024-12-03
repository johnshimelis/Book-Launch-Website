import React from 'react';
import Chapter from './Chapter';
import '../styles/style.css';

const chaptersData = [
  { number: '1', title: 'Getting started', description: 'Introduction to the book, covering the basics and foundational concepts for unselling.' },
  { number: '2', title: 'The Language of Influence', description: 'Exploring how language impacts perception and how it can be used to shift from selling to unselling.' },
  { number: '3', title: 'The Rise of Authenticity', description: 'Discussing trends that favor authenticity over traditional sales tactics.' },
  { number: '4', title: 'Understanding Buyer Psychology', description: 'A deep dive into the mindset of customers and how understanding it can help foster genuine connections.' },
  { number: '5', title: 'Building Trust Through Transparency', description: 'Exploring how transparency builds trust and removes the pressure of traditional sales methods.' },
  { number: '6', title: 'Non-Technical Literature for Storytelling', description: 'Using storytelling techniques that resonate on a personal level to build customer relationships.' },
  { number: '7', title: 'The Power of Word-of-Mouth', description: 'Examining the role of word-of-mouth and how it is more valuable than direct sales pitches.' },
  { number: '8', title: 'Creating Value, Not Sales Pitches', description: 'Exploring design trends that shape industries and public perceptions.' },
  { number: '9', title: 'Adopting an Unselling Mindset', description: 'Conclusion on how to incorporate an unselling approach into business and personal life.' },
 
  // Add more chapters as needed
];

const Chapters = () => {
  return (
    <section className="section chapters" id="chapters">
      <div className="container">
        <p className="section-subtitle">Chapters</p>
        <h2 className="h2 section-title has-underline">
          Chapters we've covered
          <span className="span has-before"></span>
        </h2>
        
        <ul className="grid-list">
          {chaptersData.map((chapter, index) => (
            <li key={index}>
              <Chapter 
                number={chapter.number} 
                title={chapter.title} 
                description={chapter.description} 
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Chapters;
