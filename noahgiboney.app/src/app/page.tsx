// import linkedinIcon from './images/icons/linkedin.png'; // Adjust the path as needed
// import githubIcon from './images/icons/github.png';    // Adjust the path as needed
// import mailIcon from './images/icons/mail.png';       // Adjust the path as needed
import { Fragment } from 'react';
import './page.css';
import faceShot from 'C:/Users/noahg/OneDrive/Desktop/Github/Bootcamp-project-2023/noahgiboney.app/images/faceshot.png'


export default function Home() {
  return (
    <div>
      <div id="particles-js" className="particles-js">
        <section className="home-container">
          <h2>Noah Giboney</h2>
          <div className="line"></div>
          <div className="socials-container">
            <a href="https://www.linkedin.com/in/noah-giboney-896847261/" target="_blank" rel="noopener noreferrer">
              <img src="images/icons/linkedin.png" className="round" alt="LinkedIn" />
            </a>
            <a href="https://github.com/noahgiboney" target="_blank" rel="noopener noreferrer">
              <img src="images/icons/github.png" alt="GitHub" />
            </a>
            <a href="#contact">
              <img src="images/icons/mail.png" alt="Email" />
            </a>
          </div>       
        </section>
      </div>
      <section className="arrow-container">
        <a href="#about"><div className="arrow"></div></a> 
      </section>
      <div className="main-container">
        <h3 id="about">About</h3> 
        <div className="line2"></div>
        <section className="about-container"> 
          <div className="inner-about-container">
            <div className="text-container">
              <h2>My name is <span className="name">Noah Giboney</span></h2>
              <p>I'm a computer science major at Cal Poly, San Luis Obispo.</p>
              <p>Currently interested in iOS Development and Software Engineering</p>
              <p>Connect with me on <a href="https://www.linkedin.com/in/noah-giboney-896847261/" className="link">LinkedIn</a> and check out my projects below</p>
            </div>
            <div className="image-container">
              <img src={faceShot.src} alt="Noah Giboney" />
            </div>
          </div>
        </section>

        <h3 id="portfolio">Portfolio</h3>
        <div className="line2"></div>
        
        <section id="portfolio-container"></section>

        <h3 id="contact">Contact</h3>
        <div className="line2"></div>
        <section className="contact-container">
          <p>Feel free to reach out to me on <a href="https://www.linkedin.com/in/noah-giboney-896847261/" className="link">LinkedIn</a>, also available through email at <a href="mailto:noahgiboney@gmail.com" className="link">noahgiboney@gmail.com</a>.</p>
          <p>↓ Check out my Resume below ↓</p>
          <div className="button-container">
            <a className="button" href="documents/Noah Giboney Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <a className="button" href="https://github.com/noahgiboney" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="button" href="https://www.linkedin.com/in/noah-giboney-896847261/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>
      </div>
    </div>
  );
}
