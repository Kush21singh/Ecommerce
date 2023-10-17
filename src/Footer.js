import React from "react";
import "./Footer.css"; // Create a CSS file for styling
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <h4>THE GENERICS</h4>
          </div>
          <div className="footer-icons">
            <a href="https://www.youtube.com/">
                <i class="fa fa-youtube" aria-hidden="true"></i>
            </a>
            <a href="https://www.spotify.com/">
                <i class="fa fa-spotify" aria-hidden="true"></i>
            </a>
            <a href="https://www.facebook.com/">
                <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
         </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
