import "./Home.css";
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

import tigerlinkLogo from "./images/tigerlinkLogo.png";
import princetonLogo from "./images/princetonLogo.png";
import bnuLogo from "./images/bnuLogo.png";
import gatesLogo from "./images/gatesLogo.png";
import linkedinLogo from "./images/linkedinLogo.png";
import instaLogo from "./images/instaLogo.png";


export default function Home() {
  // for section entering animations
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // on click confetti
  const fireConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  // html
  return (
    <>
      <div className='title-container'>
        <div className="title-text">
          <div className='title' onClick={fireConfetti}>Welcome</div>
          <div className='subtitle'>I'm Jack Kelly! Get to know a little bit more about me below.</div>
        </div>
      </div>
      
      <div className="main-container">
        <div className="section-container" ref={(el) => (sectionsRef.current[0] = el)}>
          <div className='header-container'>
            <h1><b>Experience</b></h1>
            <div className="exp-container">
              <img src={tigerlinkLogo} className="exp-img" alt="TigerLink Logo"/>
              <div className="exp-text">
                <h2><b>Full Stack Developer, <i>TigerLink</i> (2025)</b></h2> <br/>
                <ul className="exp-list">
                  <li>
                    Built a full-stack, mobile-responsive dating platform for Princeton students
                    using Flask, PostgreSQL, HTML/CSS, JavaScript, and jQuery
                  </li>
                  <li>
                    Implemented secure user authentication with session management and input
                    sanitization, improving overall application security and reliability
                  </li>
                  <li>
                    Developed a custom matching algorithm backed by SQLAlchemy queries,
                    generating compatibility-based matches between verified users
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section-container" ref={(el) => (sectionsRef.current[1] = el)}>
          <div className='header-container'>
            <h1><b>Affiliations</b></h1>
            <div className='affil-container'>
              <img src={princetonLogo} className='affil' alt="Princeton Logo"/>
              <img src={bnuLogo} className='affil' alt="Beijing Normal University Logo"/>
              <img src={gatesLogo} className='affil-wide' alt="Gates Scholarship Logo"/>
            </div>
          </div>
        </div>
        
        <div className="section-container" ref={(el) => (sectionsRef.current[2] = el)}>
          <div className='header-container'>
            <h1><b>Socials</b></h1>
            <div className='socials-container'>
              <a href="https://www.linkedin.com/in/jack-kelly-391696259/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn" className="social-logo"/>
              </a>
              <a href="https://www.instagram.com/jackmkelly519/" target="_blank" rel="noopener noreferrer">
                <img src={instaLogo} alt="Instagram" className="social-logo"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}