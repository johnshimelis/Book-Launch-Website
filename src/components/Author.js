import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../styles/author.css";

const Author = () => {
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "authors"));
        // Assuming there is only one author in the "authors" collection
        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data();
          setAuthorData(data);
        }
      } catch (error) {
        console.error("Error fetching author data: ", error);
      }
    };

    fetchAuthorData();
  }, []);

  if (!authorData) {
    return <p>Loading author details...</p>;
  }

  const { title, description, slogan, image } = authorData;

  // Split the description into paragraphs by double newline
  const paragraphs = description ? description.split("\n\n") : [];

  return (
    <section className="author" id="author">
      <div className="container">
        {/* Image Section */}
        <div className="author-banner">
          <img
            src={image}
            alt={title || "Author"}
            className="responsive-image"
          />
        </div>

        {/* Content Section */}
        <div className="author-content" id="author-content">
          <h2 className="section-title">{title || "Meet the Author"}</h2>
          {paragraphs.length > 0 ? (
            paragraphs.map((para, index) => (
              <p key={index} className="section-paragraph">
                {para}
              </p>
            ))
          ) : (
            <p className="section-paragraph">Author details not available.</p>
          )}
          {slogan && (
            <div className="author-slogan-wrapper">
              <div className="author-slogan">
                "{slogan}"
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Author;
