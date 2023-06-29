import React, { useState } from "react";
import logo from "../../assets/logo-small.png";
import menuBar from "../../assets/menu.png";
import xBar from "../../assets/xbar.png";

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
      <a href="/">
        <img src={logo} alt="TTEC logo" className="nav-logo"></img>
      </a>
      <ul className={active}>
        <li
          className="nav-link"
          onClick={() => {
            setCurrentPage(pages[0]);
            handleListItemClick();
          }}
        >
          Home
        </li>
        <li
          className="nav-link"
          onClick={() => {
            setCurrentPage(pages[1]);
            handleListItemClick();
          }}
        >
          About
        </li>
        <li
          className="nav-link"
          onClick={() => {
            setCurrentPage(pages[2]);
            handleListItemClick();
          }}
        >
          Gallery
        </li>
        <li
          className="nav-link"
          onClick={() => {
            setCurrentPage(pages[3]);
            handleListItemClick();
          }}
        >
          Tuition
        </li>
        <li
          className="nav-link"
          onClick={() => {
            setCurrentPage(pages[4]);
            handleListItemClick();
          }}
        >
          Apply
        </li>
        <li
          className="nav-link"
          onClick={() => {
            setCurrentPage(pages[5]);
            handleListItemClick();
          }}
        >
          Tests
        </li>
        <li
          className="nav-link"
          onClick={() => {
            setCurrentPage(pages[6]);
            handleListItemClick();
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
