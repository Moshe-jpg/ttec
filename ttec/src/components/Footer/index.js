import React from "react";
import arrow from "../../assets/arrow.png";

const Footer = (props) => {
  const { pages = [], setCurrentPage } = props;

  return (
    <footer id="footer">
      <div className="footer-header-container">
        <h4>בית מדרש מעין התורה</h4>
        <h5>Toronto's Post Israel Beis Medrash</h5>
        <button
          onClick={() => {
            setCurrentPage(pages[0]);
          }}
        >
          Make A Tax Deductible Donation
        </button>
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
              Email: ttecyeshiva@gmail.com
            </a>
            <img src={arrow} alt="email"></img>
          </li>
          <li>
            <a href="tel:647-648-2845">Phone: 647-648-2845</a>
            <img src={arrow} alt="phone"></img>
          </li>
          <li>
            <a href="https://goo.gl/maps/JfwxE36Cr4cnVY297">
              Mailing Address: 461 York Hill Blvd, Thornhill, ON L4J 3C6
            </a>
            <img src={arrow} alt="mailing address"></img>
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
                1 Viewmount Ave, North York, ON M6B
              </a>
              <img src={arrow} alt="viewmount/south location"></img>
            </li>
            <li>
              <a
                href="https://goo.gl/maps/H3zbghvuu6UDLZv5A"
                target="_blank"
                rel="noopener noreferrer"
              >
                129 McGillivray Ave, North York, ON M5M
              </a>
              <img src={arrow} alt="Agudah location"></img>
            </li>
            <li>
              <a
                href="https://goo.gl/maps/fHARitcbJ9xozhkT6"
                target="_blank"
                rel="noopener noreferrer"
              >
                601 Clark Ave W, Thornhill, ON L4J 8E1
              </a>
              <img src={arrow} alt="Thornhill/North location"></img>
            </li>
          </ul>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
