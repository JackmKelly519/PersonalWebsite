import "./Home.css";
import princetonLogo from "./images/princetonLogo.png";
import bnuLogo from "./images/bnuLogo.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className='title-container'>
        <div className='title'>Welcome</div>
        <div className='subtitle'>I'm Jack Kelly! Get to know a little bit more about me below.</div>
      </div>
      <div className='header-container'>
        <h1><b>Projects</b></h1>
      </div>
      <div className='header-container'>
        <h1><b>Affiliations</b></h1>
        <img src={princetonLogo}></img>
        <img src={bnuLogo}></img>
      </div>
      <div className='header-container'>
        <h1><b>Socials</b></h1>
        <Link to="https://www.linkedin.com/in/jack-kelly-391696259/">LinkedIn</Link>
        <Link to="https://www.instagram.com/jackmkelly519/">Instagram</Link>
      </div>
    </>
  );
}