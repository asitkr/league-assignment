import React from 'react';
import "./Footer.css";

function Footer() {

    const handleContactUs = () => {
        window.location.href = 'mailto:contact@leaguex.com';
    };
  return (
    <div className="footer">
        <div className="container">
            <div className="footer-data">
                <div className="social-media">
                    <h2 className='footer-heading'>Follow Us On:</h2>
                    <div className="footer__icons">
                        <a href="https://www.linkedin.com/company/leaguex-gaming?originalSubdomain=in" className="footer__social-link" target="">
                            <i class="bx bxl-linkedin-square"></i>
                        </a>

                        <a href="https://www.facebook.com/LeagueX.official/" className="footer__social-link" target="">
                            <i class='bx bxl-facebook-circle'></i>
                        </a>
        
                        <a href="https://twitter.com/LeagueXofficial" className="footer__social-link" target="">
                            <i class="bx bxl-twitter"></i>
                        </a>

                        <a href="https://www.youtube.com/channel/UCoRNFlgAx7W9VgZVZgaqMYA" className="footer__social-link" target="">
                            <i class='bx bxl-youtube' ></i>
                        </a>

                        <a href="https://www.instagram.com/leaguex.official/" className="footer__social-link" target="">
                            <i class='bx bxl-instagram-alt' ></i>
                        </a>
                    </div>
                </div>
                <div className="contact-form">
                    <h2 className='footer-heading'>If You Faced Any Problem You Can Tell Us:</h2>
                    <button type="button" className='footer-button' onClick={handleContactUs}>Contact Us</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;