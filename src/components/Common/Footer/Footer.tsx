import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5" 
    style={{position:'relative',bottom:'0px', width:'100%'}}>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-3">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light">Home</Link></li>
              <li><Link to="/blogs" className="text-light">Blog</Link></li>
              <li><Link to="/" className="text-light">About</Link></li>
              <li><Link to="/contact" className="text-light">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 mb-3">
            <h5>Contact Us</h5>
            <address>
              24, 13th Main, 21st Cross<br />
              BTM 2nd Stage, Bangalore, Karnataka, India<br />
              <a href="mailto:info@example.com" className="text-light">info@example.com</a><br />
              <a href="tel:+1234567890" className="text-light">+1234567890</a>
            </address>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <p className="mb-0">&copy; 2024 Rokucraft. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
