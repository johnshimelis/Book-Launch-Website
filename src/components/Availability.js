import React from "react";
import '../styles/availability.css';
import '../styles/style.css';
import Amazon from '../assets/images/amazon.png';
import Filpkart from '../assets/images/filpkart.png';
import Rupa from '../assets/images/rupa2.avif';
import Kuku from '../assets/images/kuku.png';
import Book from '../assets/images/newbookstore.png';

const Availability = () => {
  return (
    <div className="availability-container" id="availability">
      <p className="availability">
        Get Your Copy of Start Unselling Now.
      </p>
      <div className="retailer-links">
        <li>
          <a href="https://amzn.in/d/hxTJXN2" className="retailer" data-name="Amazon" target="_blank" rel="noopener noreferrer">
            <img src={Amazon} alt="Amazon" />
          </a>
        </li>
        <li>
          <a href="#" className="retailer" data-name="Filpkart"  rel="noopener noreferrer">
            <img src={Filpkart} alt="Filpkart" />
          </a>
        </li>
        <li>
          <a href="https://rupapublications.co.in/books/start-unselling-now-the-sales-manifesto-for-winning-customers/" className="retailer" data-name="Rupa" target="_blank" rel="noopener noreferrer">
            <img src={Rupa} alt="Rupa" />
          </a>
        </li>
        <li>
          <a href="#" className="retailer" data-name="Kuku"  rel="noopener noreferrer">
            <img src={Kuku} alt="Kuku" />
          </a>
        </li>
        <li>
          <a  className="retailer" data-name="Book"   rel="noopener noreferrer">
            <img id="bookstore" src={Book} alt="Book" />
            
          </a>
          <p>Available at Bookstores Nationwide</p>
          
        </li>
      </div>
    </div>
  );
};

export default Availability;
