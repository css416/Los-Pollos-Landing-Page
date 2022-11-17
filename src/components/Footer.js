import { Link } from 'react-router-dom';
import square_logo from "../assets/images/square_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-details">
            <div className="footer-image">
              {/* <Link to="/" className="logo"><img src={square_logo} alt="" /></Link> */}
              <a href="/">
                <img src={square_logo} alt="" />
              </a>
            </div>
            <p>
              Monday to Thursday (7 AM - 10 PM) <br />
              Friday to Saturday (7 AM - 12 AM) <br />
              (Drive-thru open until 1 AM Friday) <br />
              Sunday (7 AM - 9 PM)
            </p>
          </div>

          <div className="footer-contact">
            <h2>Contact Info</h2>
            <div className="footer-contact-details">
              <address>
                12000 - 12100 Coors Rd SW, Albuquerque, New Mexico 87045
              </address>
              {/* <Link to="mailto:customercare@lph.com">customercare@lph.com</Link> */}
              <span>customercare@lph.com</span>
              <span>(505) 146-0195</span>
            </div>
          </div>

          <div className="quick-links">
            <h2>Quick Links</h2>
            <div className="quick-links-container">
              <a href="#header-video">Home</a>
              <a href="#about">About</a>
              <a href="#menu">Menu</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact Us</a>
            </div>
          </div>

          <div className="subscription">
            <h2>Subscription</h2>
            <span>Don't forget to subscribe to our newsletter</span>
            {/* <form method="POST" className="submit-email">
              <div className="input-container">
                <input type="text" name="email" placeholder="Email" />
                <div className="button"><p><FontAwesomeIcon icon={faPaperPlane} /></p></div>
              </div>
            </form> */}
            <form className="subscribe_form">
              <div className="input-group">
                <input type="text" className="form-control" name="email" placeholder="Enter your email" />
                <span className="input-group-btn">
                      <button className="btn btn-default" type="button">subscribe</button>
                </span>
              </div>
            </form>
          </div>
          
        </div>
      </div>
      <p className="trademark">
        LOS POLLOS HERMANOS, INC. IS A REGISTERED TRADEMARK OF MADRIGAL
        ELECTROMOTIVE GmbH
      </p>
    </footer>
  );
};

export default Footer;
