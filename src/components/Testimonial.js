import React, { useState, useEffect } from 'react';


const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "This book changed the way I approach sales! Rajesh’s insights on customer-centricity have helped me close more deals with ease. Highly recommended for anyone in sales.",
      author: "— Vin V., B2B Sales Head",
    },
    {
      quote: "Start Unselling Now! offers a fresh perspective on sales. The emphasis on helping the customer buy instead of selling to them resonated with me deeply.",
      author: "— Vicky M., Business Owner",
    },
    {
      quote: "Rajesh’s approach is revolutionary. The techniques in this book helped me build authentic connections with clients, leading to stronger relationships and referrals.",
      author: "— Marina B., Enterpreneur",
    },
    {
      quote: "A must-read for anyone looking to up their sales game. Rajesh’s principles have transformed the way I interact with customers.",
      author: "— Jafar J., Sales Consultant",
    },
  ];

  // Function to handle slide changes
  const changeSlide = (direction) => {
    const newSlide = (currentSlide + direction + testimonials.length) % testimonials.length;
    setCurrentSlide(newSlide);
  };

  // Auto-carousel logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimonials.length]);

  return (
    <section className="testimonials" id='testimonials'>
      <h2>What Readers Are Saying</h2>
      <div className="testimonial-carousel">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-author">{testimonial.author}</p>
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
