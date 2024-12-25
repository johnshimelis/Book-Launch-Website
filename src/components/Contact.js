import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { db } from "../firebase"; // Ensure this points to your firebase.js
import { collection, getDocs } from "firebase/firestore";
import "../styles/style.css";
import Header2 from "./Header2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email_address: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [socialMedia, setSocialMedia] = useState([]); // State to store social media data

  useEffect(() => {
    // Fetch social media data from Firestore
    const fetchSocialMedia = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "socialMedia"));
        const socialData = querySnapshot.docs.map((doc) => doc.data());
        setSocialMedia(socialData);
      } catch (error) {
        console.error("Error fetching social media data: ", error);
      }
    };

    fetchSocialMedia();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email_address,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      // Send email to Rajesh Grover
      await emailjs.send(
        "service_s3nozkk", // Service ID (EmailJS service)
        "template_ueme0q7", // Template ID for contacting Rajesh
        templateParams,
        "jMv0sNxzzSMIDvmjP" // User ID from EmailJS
      );

      // Send confirmation email to the user
      const confirmationParams = {
        to_email: formData.email_address,
        message: "Thank you for contacting us! A confirmation email has been sent to your email address.",
      };

      await emailjs.send(
        "service_s3nozkk",
        "template_5ph60h7", // Template ID for confirmation email
        confirmationParams,
        "jMv0sNxzzSMIDvmjP"
      );

      setIsSubmitted(true); // Show thank you message after successful email send
      setShowPopup(true); // Show the popup
    } catch (error) {
      setError("Failed to send your message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setFormData({ name: "", email_address: "", subject: "", message: "" }); // Clear the form fields
  };

  return (
    <section className="section contact" id="contact">
      <div>
        <Header2 />
      </div>
      <div className="container">
        <h1 className="h2 section-title has-underline">
          Contact Rajesh Grover
          <span className="span has-before"></span>
        </h1>
        <p className="section-subtitle">
          Rajesh is a renowned sales strategist and a sought-after speaker
          worldwide. For inquiries, feedback, speaking engagements,
          consultation, or mentorship opportunities, feel free to reach out
          using the form below.
        </p>
        <div className="wrapper">
          {showPopup && (
            <div className="popup-overlay">
              <div className="popup-content">
                <h3>Thank you for contacting us!</h3>
                <p>We'll get back to you shortly.</p>
                <button className="btn-close" onClick={closePopup}>
                  Close
                </button>
              </div>
            </div>
          )}

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
            <input
              type="text"
              name="subject"
              value={formData.subject}
              placeholder="Subject"
              onChange={handleChange}
              required
              className="input-field"
            />
            <textarea
              name="message"
              value={formData.message}
              placeholder="Your Message"
              onChange={handleChange}
              required
              className="input-field"
            ></textarea>
            <button type="submit" className="btn btn-primary" disabled={isSending}>
              {isSending ? "Sending..." : "Send Now"}
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>

          <ul className="contact-card" id="contact-card">
            <li>
              <p className="card-title">Email:</p>
              <a href="mailto:support@support.com" className="card-link">
                grover15@gmail.com
              </a>
            </li>
            <li>
              <p className="social-list-title h3">Connect on socials</p>
              <ul className="social-list">
                {socialMedia.map((social, index) => (
                  <li key={index} className="social-item">
                    <a href={social.link} className="social-link" target="_blank" rel="noopener noreferrer">
                      <img src={social.icon} alt={social.name} className="social-icon" />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
