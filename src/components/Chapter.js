import React from 'react';
import '../styles/style.css';

const Chapter = ({ number, title, description }) => {
  return (
    <div className="chapter-card">
      <p className="card-subtitle">Chapter {number}</p>
      <h3 className="h3 card-title">{title}</h3>
      <p className="card-text">{description}</p>
    </div>
  );
};

export default Chapter;
