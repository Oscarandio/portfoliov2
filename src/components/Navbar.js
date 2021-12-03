import React, { useState } from "react";
import { Link } from "react-scroll";
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="about" spy={true} smooth={true} className="nav-links" onCLick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="portfolio" spy={true} smooth={true}
                className="nav-links"
                onCLick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact" spy={true} smooth={true}
                className="nav-links"
                onCLick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
