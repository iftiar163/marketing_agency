import { Link } from "react-router-dom";
import "./Footer.scss";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>

        <footer>
          <div className="container footer-container">
            <div className="col-one">
              <Link to={"/"}>Logo</Link>
              <p>At BoldBrandz, we transcend boundaries, propelling brands from where they are to where they aspire to be. With over three years of expertise, we{`'`}re your partners in navigating the global market landscape.</p>
              <div className="social-logo">
                  <ul>
                    <li>
                        <Link>
                            <FaTwitter/>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <FaInstagram/>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <FaYoutube/>
                        </Link>
                    </li>
                  </ul>
              </div>
            </div>
            <div className="col-two">
              <div className="quick-links">
                <h4>Quick Links</h4>
                <div className="content-links">
                  <ul>
                  <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/service"}>Services</Link>
                    </li>
                    <li>
                      <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"/insight"}>Insights</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-three"><div className="quick-links">
                <h4>Company</h4>
                <div className="content-links">
                  <ul>
                    <li>
                      <Link to={"/"}>Terms of Service</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Privacy and Policy</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Contact with us</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Customer Support</Link>
                    </li>
                  </ul>
                </div>
              </div></div>
            <div className="col-four"><div className="quick-links">
                <h4>Contact Us</h4>
                <div className="content-links">
                  <ul>
                    <li><MdAlternateEmail/><Link to={"#"}>contact@boldbrandz.com</Link></li>
                    <li><FaPhoneAlt/><Link to={"#"}>+ 034-456-890</Link></li>
                    <li><IoLocationOutline/><Link to={"#"}>23 Street, Tammana Hall,New York</Link></li>
                  </ul>
                </div>
              </div></div>
          </div>
        </footer>
    
    </>
  )
}

export default Footer