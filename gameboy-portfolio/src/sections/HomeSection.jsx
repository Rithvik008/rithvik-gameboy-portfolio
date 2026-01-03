import React from 'react'
import '../styles/HomeSection.css'
import idle from '../assets/avatar/idle.png'; 

function HomeSection() {
  return (
    <div className="homePage">
        <h2 className='title'>Player Name: Rithvik Hari Prasad</h2>
        <div className="banner">
            <div className="banner-right">
                <img src={idle} alt="Pixel avatar" />
                <div className="hp-bar">
                    <div className="hp-fill"></div>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default HomeSection;