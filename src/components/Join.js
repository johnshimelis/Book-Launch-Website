import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../styles/style.css";
import Header2 from "./Header2";

const Join = () => {
  const [formData, setFormData] = useState({
    name: "",
    email_address: "",
  });
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending the registration notification to grover15@gmail.com
    emailjs
      .send(
        "service_j1n5sbp", // Replace with your EmailJS service ID
        "template_3yls758", // Replace with your EmailJS template ID for grover15@gmail.com
        {
          user_name: formData.name,
          user_email: formData.email_address,
        },
        "fHZ0ZnYngn5PhRgxY" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent to grover15@gmail.com successfully", result.text);

          // Send a thank-you email to the user
          emailjs
            .send(
              "service_j1n5sbp", // Replace with your EmailJS service ID
              "template_l8f4l9t", // Replace with your thank-you template ID
              {
                to_name: formData.name,
                to_email: formData.email_address,
              },
              "fHZ0ZnYngn5PhRgxY" // Replace with your EmailJS public key
            )
            .then((result) => {
              console.log("Thank-you email sent to the user successfully", result.text);
              setMessage("Thank you for registering! A confirmation email has been sent.");
              setShowPopup(true); // Show popup
            })
            .catch((error) => {
              console.error("Error sending thank-you email:", error.text);
              setMessage("There was an error. Please try again later.");
            });
        },
        (error) => {
          console.error("Error sending email to grover15@gmail.com:", error.text);
          setMessage("There was an error. Please try again later.");
        }
      );
  };

  const handleClosePopup = () => {
    // Clear the form fields when closing the popup
    setFormData({
      name: "",
      email_address: "",
    });
    setShowPopup(false);
  };

  return (
    <section className="section contact" id="join" aria-label="contact">
      <Header2 />
      <div className="container">
        <h2 className="h2 section-title has-underline">
          Join the Unselling Community
          <span className="span has-before"></span>
        </h2>
        <p className="section-subtitle">
          Be part of an exclusive community of sales professionals dedicated to
          reshaping the way we approach sales. The Unselling Academy is your
          gateway to insights, shared learning, and a network of like-minded
          salespeople from around the world.
          <br />
          <br />
          Register your interest below to be the first to know about launch
          updates, events, and learning opportunities!
        </p>
        <div className="wrapper join">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleChange}
              required
              className="input-field"
            />
            <input
              type="email"
              name="email_address"
              value={formData.email_address}
              placeholder="Your Email"
              onChange={handleChange}
              required
              className="input-field"
            />
            <button type="submit" className="btn btn-primary">
              Register Your Interest
            </button>
          </form>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Thank You for Registering!</h3>
            <p>{message}</p>
            <button className="btn btn-close" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Join;
