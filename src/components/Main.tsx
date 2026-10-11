import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ankitdp from '../assets/images/ankitdp.png';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={ankitdp} alt="Ankit Kumar" />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/AnkitKumarxcodes" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/ankit-kumar-33251528a" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>

          <h1>Ankit Kumar</h1>
          <p>AI/ML Engineer | Applied ML, NLP & Intelligent Systems</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/AnkitKumarxcodes" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/ankit-kumar-33251528a" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;