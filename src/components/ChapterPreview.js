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
    <section className="section testimonials" id="endorsements">    
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
