import React from "react";
import "../App.css";
import "./HeroSection.css";
import { Link } from "react-scroll";

function HeroSection() {
  return (
    <div className="hero-container"  id="about">
      <div className="container">
      <div className="card-container-shadow">
      <div className="card-container">
        <h1>Welcome! I'm Óscar,</h1>
        <p>
          a Front-End Developer who had been a Graphic Designer the most part of
          my life and currently studying a Multimedia degree. I like to take
          care of the User Experience (UX), which leads me to pay great
          attention for small details, something you can see if you take a look
          at my projects.
        </p>
        <p>
          I have been playing with <strong>HTML</strong> and 
           <strong> CSS </strong>  since my time in school and now that I want to
          become professional I learned about <strong>semantic HTML</strong> and
          <strong> preprocessor SASS</strong>. My first programming language is
          <strong> Javascript</strong> and I always try to be updated to the last
          recommendations.
          <strong> React JS</strong> is my favorite framework at the moment, but
          I'm also interested to improve with <strong>Angular</strong>.
        </p>
        <p>
          In addition to web development, I manage with some ease with Adobe
          software like
          <strong> Photoshop</strong>, <strong>Illustrator </strong>
          and <strong>Indesign</strong> and I have work with{" "}
          <strong>Agile metodology SCRUM</strong>. I plan to continue with
          programming since I am very passionate about it and I spend many hours
          to keep learning. My next step will be <strong> Python</strong>
          and/or <strong>PHP</strong>.
        </p>
</div>
</div>
        <p class="conocimientos">
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
           
            <img
              src="https://raw.githubusercontent.com/Oscarandio/Oscarandio/83a7ae8e8b32eaeb362903b3d29da40502354c58/images/html5-original-wordmark.svg"
              title="HTML5"
              alt="HTML5"
            />
          </a>
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
          
            <img
              src="https://raw.githubusercontent.com/Oscarandio/Oscarandio/83a7ae8e8b32eaeb362903b3d29da40502354c58/images/css3-original-wordmark.svg"
              title="CSS3"
              alt="CSS3"
            />
          </a>
          <a
            href="https://developer.mozilla.org/es-ES/docs/Web/JavaScript"
            target="_blank" rel="noreferrer"
          >
           
            <img
              src="https://raw.githubusercontent.com/Oscarandio/Oscarandio/83a7ae8e8b32eaeb362903b3d29da40502354c58/images/javascript-original.svg"
              title="Javascript"
              alt="Javascript"
            />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
           
            <img
              src="https://raw.githubusercontent.com/Oscarandio/Oscarandio/main/images/react.png"
              title="React"
              alt="Javascript"
            />
          </a>
          <a href="https://sass-lang.com//" target="_blank" rel="noreferrer">
          
            <img
              src="https://raw.githubusercontent.com/Oscarandio/Oscarandio/main/images/sass.png"
              title="Sass" alt="Sass"
            />
          </a>

          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          
            <img
              src="https://raw.githubusercontent.com/Oscarandio/Oscarandio/main/images/Tailwind.png"
              title="Sass" alt="Sass"
            />
          </a>

          <a href="https://github.com/Oscarandio" target="_blank" rel="noreferrer">
            <img
              alt="GitHub"
              title="GitHub"
              src="https://raw.githubusercontent.com/Oscarandio/Oscarandio/main/images/github_.png"
            />
          </a>
          <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
            <img
              title="VS Code"
              alt="VS Code"
              src="https://raw.githubusercontent.com/Oscarandio/Oscarandio/main/images/visual-studio-code.png"
            />
          </a>
       
          <a href="https://www.adobe.com/es" target="_blank" rel="noreferrer">
      
            <img
              src="https://raw.githubusercontent.com/Oscarandio/Oscarandio/5589bf2e69799ec6bfb770cb17a35e0d27e3d2cd/images/Adobe_Photoshop_CC_icon.svg"
              alt="Photoshop"
              title="Photoshop"
            />
          </a>
          <a href="https://www.adobe.com/es" target="_blank" rel="noreferrer">
           
            <img
              src="https://raw.githubusercontent.com/Oscarandio/Oscarandio/5589bf2e69799ec6bfb770cb17a35e0d27e3d2cd/images/Adobe_Illustrator_CC_icon.svg"
              alt="Illustrator"
              title="Illustrator"
            />
          </a>
          <a href="https://www.adobe.com/es" target="_blank" rel="noreferrer">
            
            <img
              src="https://raw.githubusercontent.com/Oscarandio/Oscarandio/5589bf2e69799ec6bfb770cb17a35e0d27e3d2cd/images/Adobe_InDesign_CC_icon.svg"
              alt="Indesign"
              title="InDesign"
            />
          </a>
        </p>

        <Link to="portfolio" spy={true} smooth={true}>
          <i class="fas fa-chevron-circle-down"></i>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
