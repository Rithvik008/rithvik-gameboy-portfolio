import React from 'react';
import '../styles/HomeSection.css';
import idle from '../assets/avatar/idle.png'; 

function HomeSection() {
  return (
    <div className="homePage">
      <h2 className='title'>Player Name: Rithvik Hari Prasad</h2>

      <div className="banner">
        <div className="banner-left">
          <div className="intro-text">
            <p>Welcome to my Gameboy-themed portfolio! I'm Rithvik, a passionate developer and gamer. Explore my projects, skills, and adventures in the world of coding and gaming!</p>
          </div>
        </div>
        <div className="banner-right">
          <div className="avatar-section">
            <div className="top-banner-right">
                <div className="avatar-container">
                  <img className="avatar" src={idle} alt="Pixel avatar" />
              </div>
              <div className="stats-section">
                <div className="stat">Level: 23</div>
                <div className="stat">Games Played: 42</div>
                <div className="stat">Tech XP: 99</div>
                <div className="stat">Work Quests: 12</div>
                <div className="stat">Side Quest: Pool Lifeguarding</div>
              </div>
            </div>
            
            <div className="hp-label">HP</div>
            <div className="hp-bar">
              <div className="hp-fill"></div>
            </div>
          </div>

          

        </div>
      </div>
    </div>
  );
}

export default HomeSection;
