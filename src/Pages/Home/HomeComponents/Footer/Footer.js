import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="row">
          <div className="col-xl-3 lg-3 col-md-6 ">
            <div className="wrapper-footer p-4 ">
              <h1>OPENING HOURS</h1>
              <div className="footer-content">
                <div className="footer-content-item">MONDAY</div>
                <div className="space-footer"></div>
                <div className="footer-content-time1">CLOSED</div>
              </div>
              <div className="footer-content">
                <div className="footer-content-item">TUESDAY</div>
                <div className="space-footer"></div>
                <div className="footer-content-time">9:00 - 22:00</div>
              </div>
              <div className="footer-content">
                <div className="footer-content-item">WEDNESDAY</div>
                <div className="space-footer"></div>
                <div className="footer-content-time">9:00 - 22:00</div>
              </div>
              <div className="footer-content">
                <div className="footer-content-item">THURSDAY</div>
                <div className="space-footer"></div>
                <div className="footer-content-time">9:00 - 22:00</div>
              </div>
              <div className="footer-content">
                <div className="footer-content-item">FRIDAY</div>
                <div className="space-footer"></div>
                <div className="footer-content-time">9:00 - 1:00</div>
              </div>
              <div className="footer-content">
                <div className="footer-content-item">SARTUDAY</div>
                <div className="space-footer"></div>
                <div className="footer-content-time">12:00 - 01:00</div>
              </div>
              <div className="footer-content">
                <div className="footer-content-item">SUNDAY</div>
                <div className="space-footer"></div>
                <div className="footer-content-time">9:00 - 22:00</div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 lg-3 col-md-6">
            <div className="wrapper-footer2 p-4 nopadbttm">
              <h1>LASTEST POSTS</h1>
            </div>
            <div className="footer-content2">
              <div className="footer-content-item1">
                EXPAND YOUR MIND, CHANGE EVERYTHING
              </div>
              <div className="footer-content-time2">5.06.2022</div>
              <div className="space-footer w-100"></div>
            </div>
            <div className="footer-content2">
              <div className="footer-content-item1">
                EXPAND YOUR MIND, CHANGE EVERYTHING
              </div>
              <div className="footer-content-time2">5.06.2022</div>
              <div className="space-footer w-100"></div>
            </div>
            <div className="footer-content2">
              <div className="footer-content-item1">
                EXPAND YOUR MIND, CHANGE EVERYTHING
              </div>
              <div className="footer-content-time2">5.06.2022</div>
              <div className="space-footer w-100"></div>
            </div>
          </div>
          <div className="col-xl-3 lg-3 col-md-6">
            <div className="wrapper-footer p-4">
              <h1>CONTACT US</h1>
              <div className="footer-content3">
                <div className="footer-content-time2">
                  <p>canhlam09102000@gmail.com</p>
                </div>
                <div className="footer-content-time2">
                  <div className="footer-phone">0376400635</div>
                  <div className="footer-address">Ktx VKU Ngu Hanh Son </div>
                  <div className="footer-address">Da Nang</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 lg-3 col-md-6">
            <div className="wrapper-footer p-4">
              <h1>OTHER LOCATION</h1>
              <div className="footer-cotent2">HANABI COFFEE SHOP</div>
              <div className="footer-address">Loc Son Phu Loc</div>
              <div className="footer-address">Thua Thien Hue</div>
            </div>
          </div>
        </div>
        <div className="footer-license">
          <div className="row">
            <div className="license-l col-xl-3 col-md-3 col-sm-3">
              © CanhLam
            </div>
            <div className="license-c col-xl-6 col-md-5 col-sm-5">
              <FontAwesomeIcon className="cart" icon={faYoutube} />{" "}
              <FontAwesomeIcon className="cart" icon={faFacebook} />{" "}
              <FontAwesomeIcon className="cart" icon={faTwitter} />{" "}
              <FontAwesomeIcon className="cart" icon={faInstagram} />{" "}
              <FontAwesomeIcon className="cart" icon={faGithub} />{" "}
            </div>
            <div className="license-r col-xl-3 col-md-4 col-sm-4">
              2022 All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
