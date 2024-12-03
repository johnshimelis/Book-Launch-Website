import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database'; // Firebase Realtime Database
import '../styles/author.css';

const Author = () => {
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const authorRef = ref(db, 'author'); // Path in Firebase database

    // Listen for data changes
    const unsubscribe = onValue(authorRef, (snapshot) => {
      const data = snapshot.val();
      setAuthorData(data);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (!authorData) {
    return <p>Loading author information...</p>; // Loading state
  }

  return (
    <section className="author" id="author">
      <div className="container">
        {/* Image Section */}
        <div className="author-banner">
          <img
            src={authorData.imageUrl || ''}
            alt={authorData.name || 'Author'}
            className="responsive-image"
          />
        </div>

        {/* Content Section */}
        <div className="author-content" id="author-content">
          <h2 className="section-title">Meet the Author</h2>
          <p className="section-texts">{authorData.bio || ''}</p>
          <div className="author-slogan-wrapper">
            <div className="author-slogan">{authorData.slogan || ''}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
