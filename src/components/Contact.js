import React, { useState } from "react";
import emailjs from "emailjs-com";
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
        "service_ytvtbrj", // Service ID (EmailJS service)
        "template_n6ucvch", // Template ID for contacting Rajesh
        templateParams,
        "-T3smZVfSZAUcBqWs" // User ID from EmailJS
      );

      // Send confirmation email to the user
      const confirmationParams = {
        to_email: formData.email_address,
        message: "Thank you for contacting us! A confirmation email has been sent to your email address.",
      };

      await emailjs.send(
        "service_ytvtbrj",
        "template_8muvr0h", // Template ID for confirmation email
        confirmationParams,
        "-T3smZVfSZAUcBqWs"
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
        <h2 className="h2 section-title has-underline">
          Contact Rajesh Grover
          <span className="span has-before"></span>
        </h2>
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
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
              
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
