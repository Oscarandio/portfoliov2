import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";


function Footer() {
  return (
    <div className="footer-container">
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to="about" spy={true} smooth={true}  className='social-logo'>
              ÓSCAR RABADÁN
             
            </Link>
          </div>
       
          <div class='social-icons'>
           
            <a
              class='social-icon-link twitter'
              href='https://www.linkedin.com/in/rabadanoscar'
              target='_blank' rel="noreferrer"
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
            

            <a
              class='social-icon-link twitter'
              href='https://github.com/Oscarandio'
              target='_blank' rel="noreferrer"
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </a>

          </div>
        </div>
        </section>
        </div>
  );
}

export default Footer;
