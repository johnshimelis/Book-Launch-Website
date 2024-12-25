import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const Testimonials = () => {
  const [readerOpinions, setReaderOpinions] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const db = getFirestore();

  useEffect(() => {
    const fetchReaderOpinions = async () => {
      try {
        const snapshot = await getDocs(collection(db, "readerOpinions"));
        const data = snapshot.docs.map((doc) => doc.data());
        setReaderOpinions(data);
      } catch (error) {
        console.error("Error fetching reader opinions: ", error);
      }
    };

    fetchReaderOpinions();
  }, []);

  // Function to handle slide changes
  const changeSlide = (direction) => {
    const newSlide = (currentSlide + direction + readerOpinions.length) % readerOpinions.length;
    setCurrentSlide(newSlide);
  };

  // Auto-carousel logic
  useEffect(() => {
    if (readerOpinions.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % readerOpinions.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [readerOpinions]);

  if (readerOpinions.length === 0) {
    return <p>Loading reader opinions...</p>;
  }

  return (
    <section className="testimonials" id="testimonials">
      <h2>What Readers Are Saying</h2>
      <div className="testimonial-carousel">
        {readerOpinions.map((opinion, index) => (
          <div
            key={index}
            className={`testimonial-slide ${index === currentSlide ? "active" : ""}`}
          >
            <p className="testimonial-quote">"{opinion.quote}"</p>
            <p className="testimonial-author">{opinion.author}</p>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="prev-btn" onClick={() => changeSlide(-1)}>❮</button>
        <button className="next-btn" onClick={() => changeSlide(1)}>❯</button>
      </div>
    </section>
  );
};

export default Testimonials;
