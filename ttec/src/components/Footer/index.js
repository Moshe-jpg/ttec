import React from "react";
import arrow from "../../assets/arrow.png";
import mgLogo from "../../assets/moshe-gadol-logo.webp";
import ScrollToTop from "../../helpers/ScrollToTop";

const Footer = (props) => {
  const { pages = [], setCurrentPage } = props;

  return (
    <footer id="footer">
      <div className="footer-header-container">
        <h4>בית מדרש מעין התורה</h4>
        <h5>Toronto's Post Israel Beis Medrash</h5>
        <a
          className="dbox-donation-button"
          href="https://donorbox.org/make-a-donation-230?default_interval=o&hide_donation_meter=true"
        >
          Make A Donation
        </a>
      </div>
      <div className="footer-info-container">
        <ul className="contact-container">
          <li>
            <header>
              <h6>Contact</h6>
            </header>
          </li>
          <li>
            <a href="mailto:ttecyeshiva@gmail.com">
              <p>Email: ttecyeshiva@gmail.com</p>
              <img src={arrow} alt="email"></img>
            </a>
          </li>
          <li>
            <a href="tel:647-648-2845">
              <p>Phone: 647-648-2845</p>
              <img src={arrow} alt="phone"></img>
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/JfwxE36Cr4cnVY297">
              <p>Mailing Address: 461 York Hill Blvd, Thornhill, ON L4J 3C6</p>
              <img src={arrow} alt="mailing address"></img>
            </a>
          </li>
        </ul>
        <address>
          <ul className="address-container">
            <li>
              <header>
                <h6>Locations</h6>
              </header>
            </li>
            <li>
              <a
                href="https://goo.gl/maps/Mk1aD2jqixXSxELT7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>1 Viewmount Ave, North York, ON M6B</p>
                <img src={arrow} alt="viewmount/south location"></img>
              </a>
            </li>
            <li>
              <a
                href="https://goo.gl/maps/H3zbghvuu6UDLZv5A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>129 McGillivray Ave, North York, ON M5M</p>
                <img src={arrow} alt="Agudah location"></img>
              </a>
            </li>
            <li>
              <a
                href="https://goo.gl/maps/fHARitcbJ9xozhkT6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>601 Clark Ave W, Thornhill, ON L4J 8E1</p>
                <img src={arrow} alt="Thornhill/North location"></img>
              </a>
            </li>
          </ul>
        </address>
      </div>
      <div className="footer-links-outer-container">
        <ul className="footer-links-container">
          <li>
            <button
              onClick={() => {
                ScrollToTop();
                setTimeout(() => {
                  setCurrentPage(pages[0]);
                }, 1000);
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                ScrollToTop();
                setTimeout(() => {
                  setCurrentPage(pages[1]);
                }, 1000);
              }}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                ScrollToTop();
                setTimeout(() => {
                  setCurrentPage(pages[2]);
                }, 1000);
              }}
            >
              Gallery
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                ScrollToTop();
                setTimeout(() => {
                  setCurrentPage(pages[3]);
                }, 1000);
              }}
            >
              Tuition
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                ScrollToTop();
                setTimeout(() => {
                  setCurrentPage(pages[4]);
                }, 1000);
              }}
            >
              Apply
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                ScrollToTop();
                setTimeout(() => {
                  setCurrentPage(pages[5]);
                }, 1000);
              }}
            >
              Contact
            </button>
          </li>
          <li>
            <a
              className="dbox-donation-button"
              style={{
                fontSize: "1.2rem",
              }}
              href="https://donorbox.org/make-a-donation-230?default_interval=o&hide_donation_meter=true"
            >
              Donate
            </a>
          </li>
        </ul>
      </div>
      <div className="website-container">
        <p>Website created by</p>&nbsp;
        <a href="www.gadol.dev">
          <img src={mgLogo} alt="Moshe Gadol Portfolio Site"></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
