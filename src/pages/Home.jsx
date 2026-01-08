import "./Home.css";
import { useEffect, useRef } from "react";

import princetonLogo from "./images/princetonLogo.png";
import bnuLogo from "./images/bnuLogo.png";
import gatesLogo from "./images/gatesLogo.png";
import linkedinLogo from "./images/linkedinLogo.png";
import instaLogo from "./images/instaLogo.png";

export default function Home() {
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

  return (
    <>
      <div className='title-container'>
        <div className="title-text">
          <div className='title'>Welcome</div>
          <div className='subtitle'>I'm Jack Kelly! Get to know a little bit more about me below.</div>
        </div>
      </div>
      
      <div className="main-container">
        <div className="section-container" ref={(el) => (sectionsRef.current[0] = el)}>
          <div className='header-container'>
            <h1><b>Projects</b></h1>
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