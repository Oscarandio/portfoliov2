import React from "react";
import "../App.css";
import "./Contact.css";
import { Link } from "react-router-dom";


function Contact() {
    return (
        <>
         <h2>Contact Information</h2>
        <div id="contact" className="contact">
        <div className="contact-container">
             <p>  <i class='fas fa-envelope' /> <Link to="rabadanoscar@outlook.es">rabadanoscar@outlook.es</Link></p>
        <p> <i class='fab fa-github' /><Link to="https://github.com/Oscarandio"> github.com/Oscarandio</Link></p>
        <p>  <i class='fab fa-linkedin' /><Link to="https://www.linkedin.com/in/rabadanoscar"> linkedin.com/in/rabadanoscar</Link></p>
        </div>
        </div>
        </>
  );
}

export default Contact
