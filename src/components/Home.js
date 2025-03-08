import React from "react";
import hero from "../images/hero.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "../styles/Home.css";
import { BackgroundBeams } from "./ui/background-beams";

export default function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Beams */}
      <div className="bg-container">
        <BackgroundBeams />
      </div>
      

      {/* Main Content */}
      <section className="sec1 relative z-10 text-white text-center">
        <img className="image" src={hero} alt="profile image" />
        <div>
          <p className="name">
            I am <span className="myname">SUSHIL KUMAR</span>
          </p>
          <p className="profile-info">A Front-End Developer</p>

          <div className="icons-wrapper">
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#E4405F" }} size="2x" />
            <FontAwesomeIcon icon={faGithub} style={{ color: "#FFFFFF" }} size="2x" />
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0A66C2" }} size="2x" />
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#74C0FC" }} size="2x" />
          </div>

          <div className="homebtns-wrapper">
            <button className="home-btns">RESUME</button>
          </div>
        </div>
      </section>
    </div>
  );
}

