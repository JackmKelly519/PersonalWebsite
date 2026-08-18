import "./styles/variables.css";
import "./styles/base.css";
import "./styles/hero.css";
import "./styles/experience.css";
import "./styles/affiliations.css";
import "./styles/socials.css";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

import ssLogo from "./images/spectacles_logo.png";
import tigerlinkLogo from "./images/tigerlinkLogo.png";

import princetonLogo from "./images/princetonLogo.png";
import bnuLogo from "./images/bnuLogo.png";
import gatesLogo from "./images/gatesLogo.png";
import PII_Logo from "./images/PII_Logo.png";
import aiLogo from "./images/aiLogo.jpg";
import codeherLogo from "./images/codeherLogo.png";

import linkedinLogo from "./images/linkedinLogo.png";
import githubLogo from "./images/github_logo.png";
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
      { threshold: 0.2 }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      observer.observe(el);
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
        <div className="section-container">
          <div className='header-container' data-reveal>
            <h1><b>Experiences</b></h1>
            <div className="exp-container" data-reveal>
              <img src={ssLogo} className="exp-img" alt="Snap Spectacles Logo"/>
              <div className="exp-text">
                <h2><b>Independent Developer, <i>Language Learning Lenses</i> (2026)</b></h2>
                <ul className="exp-list">
                  <li>
                    Developed an augmented reality (AR) Mandarin learning app that provides live 
                    conversation vocabulary assistance using AI 
                  </li>
                  <li>
                    Built a Flask/SQLite backend with Google Cloud STT for real-time transcription 
                    and speaker diarization 
                  </li>
                  <li>
                    Wrote a <a href="./files/HCI_LLL.pdf" target="_blank" rel="noopener noreferrer">Human-Computer Interaction academic report</a> on
                    the developments and final conclusions from the project
                  </li>
                </ul>
              </div>
            </div>
            <div className="exp-container" data-reveal>
              <img src={tigerlinkLogo} className="exp-img" alt="TigerLink Logo"/>
              <div className="exp-text">
                <h2><b>Full Stack Developer, <i>TigerLink</i> (2025)</b></h2>
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

        <div className="section-container">
          <div className='header-container' data-reveal>
            <h1><b>Affiliations</b></h1>
            <div className="grid">
              <div className='affil-container' data-reveal onClick={() => window.open('https://www.princeton.edu/', '_blank')}>
                <img src={princetonLogo} className='affil' alt="Princeton Logo"/>
                <div>Princeton University '27</div>
              </div>
              
              <div className='affil-container' data-reveal onClick={() => window.open('https://english.bnu.edu.cn/', '_blank')}>
                <img src={bnuLogo} className='affil' alt="Beijing Normal University Logo"/>
                <div>Beijing Normal University</div>
              </div>
 
              <div className='affil-container' data-reveal onClick={() => window.open('https://pii.princeton.edu/', '_blank')}>
                <img src={PII_Logo} className='affil' alt="PII Logo"/>
                <div>Princeton in Ishikawa</div>
              </div>

              <div className='affil-container' data-reveal onClick={() => window.open('https://ai-4-all.org/', '_blank')}>
                <img src={aiLogo} className='affil' alt="AI4ALL Logo"/>
                <div>AI4ALL</div>
              </div>

              <div className='affil-container' data-reveal onClick={() => window.open('https://codehercompetition.org/', '_blank')}>
                <img src={codeherLogo} className='affil-wide' alt="CodeHER Competition Logo"/>
                <div>CodeHER Competition</div>
              </div>

              <div className='affil-container' data-reveal onClick={() => window.open('https://www.thegatesscholarship.org/', '_blank')}>
                <img src={gatesLogo} className='affil-wide' alt="Gates Scholarship Logo"/>
                <div>The Gates Scholarship</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section-container">
          <div className='header-container' data-reveal>
            <h1><b>Socials</b></h1>         
            <a href="https://www.linkedin.com/in/jack-kelly-391696259/" target="_blank" rel="noopener noreferrer">
              <div className='social-container' data-reveal>
                <img src={linkedinLogo} alt="LinkedIn" className="social-logo"/>
                <div>LinkedIn</div>
              </div>
            </a>
            <a href="https://www.github.com/JackmKelly519/" target="_blank" rel="noopener noreferrer">
              <div className='social-container' data-reveal>
                <img src={githubLogo} alt="Github" className="social-logo"/>
                <div>GitHub</div>
              </div>
            </a>
            <a href="https://www.instagram.com/jackmkelly519/" target="_blank" rel="noopener noreferrer">
              <div className='social-container' data-reveal>
                <img src={instaLogo} alt="Instagram" className="social-logo"/>
                <div>Instagram</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}