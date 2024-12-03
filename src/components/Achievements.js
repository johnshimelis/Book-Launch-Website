import React from 'react';
import '../styles/style.css';
const achievementsData = [
  { imgSrc: "./assets/images/achievement-1.jpg", title: "Nominated", description: "International Thriller Writers Award for Best Novel (These Toxic Things)" },
  { imgSrc: "./assets/images/achievement-2.jpg", title: "Winner", description: "International Thriller Writers Award for Best Novel (These Toxic Things)" },
  { imgSrc: "./assets/images/achievement-3.jpg", title: "Guest of Honor", description: "International Thriller Writers Award for Best Novel (These Toxic Things)" },
  { imgSrc: "./assets/images/achievement-4.jpg", title: "Finalist", description: "International Thriller Writers Award for Best Novel (These Toxic Things)" },
  { imgSrc: "./assets/images/achievement-5.jpg", title: "Winner", description: "International Thriller Writers Award for Best Novel (These Toxic Things)" },
  { imgSrc: "./assets/images/achievement-1.jpg", title: "Nominated", description: "International Thriller Writers Award for Best Novel (These Toxic Things)" },
];

const Achievements = () => {
  return (
    <section className="section achievement" id="achievements" aria-label="achievement">
      <div className="container">
        <p className="section-subtitle">Achievements</p>
        <h2 className="h2 section-title has-underline">
          Honor & Awards Achieved
          <span className="span has-before"></span>
        </h2>

        <ul className="grid-list">
          {achievementsData.map((achievement, index) => (
            <li key={index}>
              <div className="achievement-card">
                <figure className="card-banner img-holder" style={{ '--width': 450, '--height': 300 }}>
                  <img src={achievement.imgSrc} width="450" height="300" loading="lazy" alt={achievement.title} className="img-cover" />
                </figure>
                <div className="card-content">
                  <img src="./assets/images/award.svg" width="80" height="80" loading="lazy" alt="trophy" className="abs-img" />
                  <h3 className="h3 card-title">{achievement.title}</h3>
                  <p className="card-text">{achievement.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
