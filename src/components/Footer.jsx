import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {
  return (
 <div className="page-wrapper">
    <footer className="footer">
      <nav className="footer-links">
        <a href="#">Meta</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Jobs</a>
        <a href="#">Help</a>
        <a href="#">API</a>
        <a href="#">Privacy</a>
        <a href="#">Cookie settings</a>
        <a href="#">Terms</a>
        <a href="#">Locations</a>
        <a href="#">Instagram Lite</a>
        <a href="#">Threads</a>
        <a href="#">Contact uploading and non-users</a>
        <a href="#">Meta Verified</a>
        <a href="#" className="language">English (UK)</a>
      </nav>
      <div className="footer-copy">
        © 2025 Instagram from Meta
      </div>
    </footer>
  </div> 
  );
};

export default Footer;
