import React, { useState } from "react";
import logo from "../../assets/logo-small-no-bg.webp";
import menuBar from "../../assets/menu.webp";
import xBar from "../../assets/xbar.webp";
import ScrollToTop from "../../helpers/ScrollToTop";

const Navbar = (props) => {
  const { pages = [], setCurrentPage } = props;
  const [active, setActive] = useState("nav-menu");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navToggler = () => {
    setActive(active === "nav-menu" ? "nav-menu nav-active" : "nav-menu");
    setIsMenuOpen(!isMenuOpen);
  };

  const handleListItemClick = () => {
    setActive("nav-menu");
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="/ttec">
        <img src={logo} alt="TTEC logo" className="nav-logo"></img>
      </a>
      <ul className={active}>
        <li
          className="nav-link"
          onClick={() => {
            ScrollToTop();
            setTimeout(() => {
              setCurrentPage(pages[0]);
              handleListItemClick();
            }, 1000);
          }}
        >
          Home
        </li>
        <li
          className="nav-link"
          onClick={() => {
            ScrollToTop();
            setTimeout(() => {
              setCurrentPage(pages[1]);
              handleListItemClick();
            }, 1000);
          }}
        >
          About
        </li>
        <li
          className="nav-link"
          onClick={() => {
            ScrollToTop();
            setTimeout(() => {
              setCurrentPage(pages[2]);
              handleListItemClick();
            }, 1000);
          }}
        >
          Gallery
        </li>
        <li
          className="nav-link"
          onClick={() => {
            ScrollToTop();
            setTimeout(() => {
              setCurrentPage(pages[3]);
              handleListItemClick();
            }, 1000);
          }}
        >
          Tuition
        </li>
        <li
          className="nav-link"
          onClick={() => {
            ScrollToTop();
            setTimeout(() => {
              setCurrentPage(pages[4]);
              handleListItemClick();
            }, 1000);
          }}
        >
          Apply
        </li>
        <li
          className="nav-link"
          onClick={() => {
            ScrollToTop();
            setTimeout(() => {
              setCurrentPage(pages[5]);
              handleListItemClick();
            }, 1000);
          }}
        >
          Contact
        </li>
        <li className="nav-link last-nav-link">
          <a
            className="dbox-donation-button"
            href="https://donorbox.org/make-a-donation-230?default_interval=o&hide_donation_meter=true"
          >
            Donate
          </a>
        </li>
      </ul>
      <div onClick={navToggler} className="toggler">
        <img
          width="100"
          height="100"
          rel="prefetch"
          src={isMenuOpen ? xBar : menuBar}
          alt="open menu"
          className={`menu-btn${isMenuOpen ? " turned-btn" : ""}`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
