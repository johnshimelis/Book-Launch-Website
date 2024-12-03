import React, { useEffect } from "react";
import "../styles/note.css"; // Make sure to update this with your correct path for styles

import authorImage from "../assets/images/2.png"; // Adjust the image path if necessary
import Header2 from "./Header2"; // Import the updated Header2 component

const AuthorNote = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const note = {
    image: authorImage,
    title: "A Note from the Author",
    subtitle: "Dear Reader,",
    description: (
      <>
        <p>
          For over 21 years, I’ve coached and trained thousands of salespeople
          across the globe. One phrase I’ve heard repeatedly, from budding sales
          professionals to seasoned experts, is “Selling is hard.”
        </p>
        <br />
        <p>
          In the beginning, I dismissed this notion. After all, I had witnessed
          countless top performers enjoying incredible success and rewards. But
          as I immersed myself further in the field—across industries, cultures,
          and markets—I realized that selling is indeed hard, especially in
          today’s fast-evolving world.
        </p>
        <br />
        <p>
          Sales has undergone a radical transformation. The era of traditional
          tactics—pushy pitches and aggressive persuasion—is behind us. Today’s
          buyers, shaped by technology, globalization, and an information-rich
          world, approach their decisions differently. They are well-informed,
          digitally savvy, and seek authenticity, transparency, and
          personalization. Selling to this new breed of buyer with outdated
          techniques is like shooting at a moving target with your eyes closed.
        </p>
        <br />
        <p>
          As I dissected the reasons for success and failure across thousands of
          sales interactions, a simple truth became clear: Selling to customers
          does not work. Instead, success lies in understanding and adapting to
          the modern buyer’s journey, becoming a trusted guide rather than a
          persuader.
        </p>
        <br />
        <p>
          <b style={{ fontFamily: "polygon", color: "rgba(249, 199, 79)" }}>
            Start Unselling Now!
          </b>{" "}
          is a product of this realization. It’s a shift from conventional sales
          tactics to a more human-centered, customer-first approach. Through
          this book, I share insights and strategies that I have found impactful
          and adaptable across diverse industries and customer segments. This
          book is here to guide you on a path where success comes not from
          selling, but from empowering the customer to buy.
        </p>
        <br />
        <p>
          I hope you find in these pages the clarity and tools you need to
          elevate your approach, build authentic relationships, and achieve
          lasting success in today’s sales landscape.
        </p>
        <br />
        <p>Thank you for letting me be a part of your journey.</p>
      </>
    ),
  };

  return (
    <div className="author-notes-container" id="note">
      <Header2 />
      <div className="author-note-item" id="author-note">
        <div className="image-box">
          <img src={note.image} alt={note.title} className="landscape-image" />
        </div>
        <div className="text-box">
          <h2 className="author-title">{note.title}</h2>
          <h3 className="author-subtitle">{note.subtitle}</h3>
          <div className="author-description">{note.description}</div>
          <div className="author-signature">
            <p className="quote">Warm regards,</p>
            <p className="author-name">Rajesh Grover</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorNote;
