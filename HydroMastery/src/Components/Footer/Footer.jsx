import './Footer.css';
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {

  const iconComponents = {
    BsTwitterX,
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaLinkedin
  };

  const renderIcon = (icon, classNames, { ...restOptions} = {}) => {
    const IconComponent = iconComponents[icon] || BsTwitterX; // FaXTwitter default icon
    return <IconComponent className={classNames} style={{...restOptions }}/>;
  }
  
    return <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="footer-info">
              <h3>HydroMastery</h3>
              <p className="pb-3"><em>Join a community where passion meets innovation, and let us guide you on a journey of excellence in aquatics.</em></p>
              <p>
                A108 Adam Street <br/>
                NY 535022, USA<br/><br/>
                <strong>Phone:</strong> +1 5589 55488 55<br/>
                <strong>Email:</strong> info@example.com<br/>
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"> 
                {renderIcon("BsTwitterX", "bx bxl-twitter")}
                  <i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook">
                {renderIcon("FaFacebookF", "bx bxl-facebook")}
                <i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram">
                {renderIcon("FaInstagram", "bx bxl-instagram")}
                  <i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus">
                {renderIcon("FaWhatsapp", "bx bxl-facebook")}
                  <i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin">
                {renderIcon("FaLinkedin", "bx bxl-linkedin")}
                  <i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Individual Consultation</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Club Consultation</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">System Integrations</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Hydromastery is powered by:</h4>
            <div className='images'>
            <img className='techLogo' src="./assets/img/footer/ReactJs.png" alt="./assets/ReactJs.png"></img>
            <img className='techLogo' src="./assets/img/footer/NetCore.png" alt="./assets/NetCore.png"></img>
            <img className='techLogo' src="./assets/img/footer/Bootstrap.png" alt="./assets/Bootstrap.png"></img>
            <img source=""></img>
            <img source=""></img>
            </div>
            {/* <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form> */}

          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>HydroMastery</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by HydroMastery
      </div>
    </div>
  </footer>
}