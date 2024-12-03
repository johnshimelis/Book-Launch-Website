import React from 'react';
import '../styles/style.css';

const PricingCard = ({ title, price, features, isPrimary }) => {
  // Function to scroll to the availability section
  const handleBuyNowClick = () => {
    const availabilitySection = document.getElementById('availability');
    if (availabilitySection) {
      const offset = 80; // Adjust if necessary
      const elementPosition = availabilitySection.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`pricing-card ${isPrimary ? 'bundle' : ''}`}>
      <h3 className="h3 card-title">{title}</h3>
      <data className="price" value={price}>{`$${price}`}</data>
      
      <ul className="pricing-card-list">
        {features.map((feature, index) => (
          <li className="card-item" key={index}>
            <p className="card-text">{feature}</p>
          </li>
        ))}
      </ul>

      <button 
        className={`btn ${isPrimary ? 'btn-primary' : 'btn-secondary'}`} 
        onClick={handleBuyNowClick}
      >
        BUY NOW
      </button>
    </div>
  );
};

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'E-Book',
      price: '30',
      features: [
        'Complete Book in digital format',
        'PDF and EPUB format',
        'Access to Downloads'
      ],
      isPrimary: false,
    },
    {
      title: 'Bundle',
      price: '35',
      features: [
        'Complete Book in both digital and hardcover formats',
        'PDF and EPUB formats for the E-Book',   
        'Access to Downloads'
      ],
      isPrimary: true,
    },
    {
      title: 'Hardcover',
      price: '40',
      features: [
        'Complete Book in physical hardcover format',
        'Free Delivery',
      ],
      isPrimary: false,
    }
  ];

  return (
    <section className="section pricing" id="pricing" aria-label="pricing">
      <div className="container">
        <p className="section-subtitle">Pricing</p>
        <h2 className="h2 section-title has-underline">
          Pricing based on their version
          <span className="span has-before"></span>
        </h2>

        <ul className="grid-list">
          {pricingPlans.map((plan, index) => (
            <li key={index}>
              <PricingCard 
                title={plan.title} 
                price={plan.price} 
                features={plan.features} 
                isPrimary={plan.isPrimary} 
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Pricing;
