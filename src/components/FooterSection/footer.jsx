import React from "react";
import "./footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      
        <div className="footer-logo-section">
        <div className="logo-section">
          <img
            src="./geekfood-logo.svg"
            alt="logo"
            className="logo-image"
          />logoipsum</div>
          {/* <h2 className="footer-logo">logoipsum</h2> */}
          <p className="footer-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Incidunt consequuntur amet culpa cum itaque neque.
          </p>
        </div>

        <div className="footer-nav">
          <a href="#about" className="footer-link">About</a>
          <a href="#careers" className="footer-link">Careers</a>
          <a href="#history" className="footer-link">History</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#blog" className="footer-link">Blog</a>
        </div>

     
        <div className="footer-social">
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-square-instagram" />
        <i className="fa-brands fa-square-twitter" />
        <i className="fa-brands fa-github" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
