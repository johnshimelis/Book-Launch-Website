import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../styles/style.css";
import Header2 from "./Header2";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Join = () => {
  const [formData, setFormData] = useState({ name: "", email_address: "" });
  const [eventFormData, setEventFormData] = useState({ name: "", email_address: "" });
  const [eventDetails, setEventDetails] = useState([]);
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [disableEventPopup, setDisableEventPopup] = useState(false);
  const [registeredEventIds, setRegisteredEventIds] = useState(new Set()); // Track registered event IDs

  // Fetch event details
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const eventsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEventDetails(eventsList);
        if (eventsList.length > 0) setShowEventPopup(true);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    fetchEvents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setEventFormData({ ...eventFormData, [name]: value });
  };

  const sendThankYouEmail = (userName, userEmail, eventName, isInterest) => {
    const message = isInterest
        ? "Thank you for registering! A confirmation email has been sent."
        : `Thank you for registering for the ${eventName} event!`;

    emailjs
      .send(
        "service_uxokd2w",
        "template_ntew4dr",
        { to_name: userName, to_email: userEmail },
        "6rsBu89RM8MG6FC_x"
      )
      .then(
        (result) => {
          console.log("Thank-you email sent", result.text);
          setMessage(message);  // Display updated message
          setShowThankYouPopup(true);  // Show Thank You popup
        },
        (error) => {
          console.error("Error sending thank-you email:", error.text);
          setMessage("There was an error. Please try again.");
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); 

    emailjs
      .send(
        "service_uxokd2w",
        "template_9pqsp4m",
        { user_name: formData.name, user_email: formData.email_address },
        "6rsBu89RM8MG6FC_x"
      )
      .then(
        (result) => {
          console.log("Email sent", result.text);
          sendThankYouEmail(formData.name, formData.email_address, "our community", true); // Pass true to indicate interest registration
          
          setFormData({ name: "", email_address: "" }); // Clear form data
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("There was an error. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const handleJoinEvent = (event) => {
    if (!registeredEventIds.has(event.id)) {
      setCurrentEvent(event);
      setShowPopup(true);
    }
  };

  const handleCancelEvent = (eventId) => {
    setEventDetails((prev) => prev.filter((event) => event.id !== eventId));
    if (eventDetails.length === 1) setShowEventPopup(false);
  };

  const handleCloseThankYouPopup = () => {
    setShowThankYouPopup(false);
    setFormData({ name: "", email_address: "" });
    setEventFormData({ name: "", email_address: "" });
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_uxokd2w",
        "template_ntew4dr",
        {
          user_name: eventFormData.name,
          user_email: eventFormData.email_address,
          event_name: currentEvent.name,
        },
        "6rsBu89RM8MG6FC_x"
      )
      .then(
        (result) => {
          console.log("Event registration email sent", result.text);
          // Pass the event name for dynamic message
          sendThankYouEmail(eventFormData.name, eventFormData.email_address, currentEvent.name, false); // Pass false for event registration
          setShowPopup(false);
          setRegisteredEventIds((prev) => new Set(prev).add(currentEvent.id)); // Register event ID to disable future registrations
          setEventFormData({ name: "", email_address: "" }); // Clear form data
        },
        (error) => {
          console.error("Error sending event registration email:", error.text);
          setMessage("There was an error. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
      .replace(",", ", ");
  };

  return (
    <section className="section contact" id="join" aria-label="contact">
      <Header2 />
      <div className="container">
        <h1 className="h2 section-title has-underline">
          Join the Unselling Community
          <span className="span has-before"></span>
        </h1>
        <p className="section-subtitle centered-text" style={{ padding: "20px" }}>
          Be part of an exclusive community of sales professionals dedicated to reshaping the way we approach sales. Register your interest below to be the first to know about launch updates, events, and learning opportunities!
        </p>

        <form className="contact-form" onSubmit={handleSubmit} style={{ width: "700px", margin: "0 auto" }}>
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
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            Register Your Interest
          </button>
        </form>
      </div>

      {/* Event Details Popup */}
      {showEventPopup && eventDetails.length > 0 && (
        <div className="popup-overlay" id="overlay">
          <div className="popup-content scrollable" id="scrollable">
            <h2 style={{ paddingBottom: "20px" }}>Available Events</h2>
            {eventDetails.map((event) => (
              <div key={event.id} className="event-item" style={{ marginBottom: "30px" }}>
                {event.image && (
                  <div className="event-banner" style={{ paddingBottom: "20px" }}>
                    <img src={event.image} alt={event.name || "Event"} className="responsive-image" />
                  </div>
                )}
                <h3>{event.name}</h3>
                <div className="texts">
                  <p>{event.description}</p>
                  <p>
                    <strong>Date:</strong> {formatDate(event.date)}
                  </p>
                  <p>
                    <strong>Location:</strong> {event.location}
                  </p>
                </div>
                <div className="event-buttons">
                  <button
                    className="btn join-event-btn"
                    onClick={() => handleJoinEvent(event)}
                    disabled={registeredEventIds.has(event.id)}
                  >
                    {registeredEventIds.has(event.id) ? "Registered" : "Join Now"}
                  </button>
                  <button className="btn cancel-event-btn" onClick={() => handleCancelEvent(event.id)}>
                    Cancel
                  </button>
                </div>
              </div>
            ))}
            <button className="btn close-btn" onClick={() => setShowEventPopup(false)}>
              
            </button>
          </div>
        </div>
      )}

      {/* Event Registration Form Popup */}
      {!disableEventPopup && showPopup && currentEvent && (
        <div className="popup-overlay" id="overlay">
          <div className="popup-content">
            <h3>Join {currentEvent.name} Event</h3>
            <form onSubmit={handleRegistrationSubmit}>
              <input
                type="text"
                name="name"
                value={eventFormData.name}
                placeholder="Your Name"
                onChange={handleEventChange}
                required
                className="input-field"
              />
              <input
                type="email"
                name="email_address"
                value={eventFormData.email_address}
                placeholder="Your Email"
                onChange={handleEventChange}
                required
                className="input-field"
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Register for Event
              </button>
            </form>
            <button className="btn close-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Thank You Popup */}
      {showThankYouPopup && (
        <div className="popup-overlay">
          <div className="popup-content thank-you-popup" id="thankyou">
            <h3>{message}</h3>
            <button className="btn close-btn" onClick={handleCloseThankYouPopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Join;
