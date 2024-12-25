import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Ensure this points to your firebase.js
import { collection, getDocs } from "firebase/firestore";
import '../styles/availability.css';
import '../styles/style.css';

const Availability = () => {
  const [retailers, setRetailers] = useState([]);

  useEffect(() => {
    const fetchRetailers = async () => {
      try {
        // Fetch retailers from Firestore
        const querySnapshot = await getDocs(collection(db, "retailers"));
        
        // Map over the documents and add the necessary data
        const retailerData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            image: data.image // Assuming the image URL is stored in the 'image' field
          };
        });

        // Set the state with retailer data
        setRetailers(retailerData);
      } catch (error) {
        console.error("Error fetching retailers: ", error);
      }
    };

    fetchRetailers();
  }, []);

  return (
    <div className="availability-container" id="availability">
      <p className="availability">Get Your Copy of Start Unselling Now.</p>
      <div className="retailer-links">
        {retailers.map((retailer) => (
          <li key={retailer.id}>
            <a href={retailer.link} className="retailer" data-name={retailer.name} target="_blank" rel="noopener noreferrer">
              {/* Display the image using the URL stored in Firestore */}
              <img src={retailer.image} alt={retailer.name} />
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Availability;
