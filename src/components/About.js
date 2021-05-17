import React from 'react'
import aboutImg from '../assets/hero.png'

const About = () => {
    return (
        <div className="about">
            <div className="about-model">
                <img src={aboutImg} alt="about" />
            </div>
            <div className="about-text">
                <h2>We are the best <br/> Real Esate Company</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laudantium, minus id assumenda quibusdam suscipit porro impedit saepe magnam iure </p>
                <button>More Details</button>
            </div>
        </div>
    )
}

export default About
