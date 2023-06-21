import React from "react";
import logo from "../../assets/logo-small.png";

const Navbar = (props) => {
  const { pages = [], setCurrentPage } = props;

  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} alt="TTEC logo" className="nav-logo"></img>
      </a>
      <ul>
        <li
          className="nav-link"
          onClick={() => {
            setCurrentPage(pages[0]);
          }}
        >
          Home
        </li>
        <li
          className="nav-link"
          onClick={() => {
            setCurrentPage(pages[1]);
          }}
        >
          About
        </li>
        <li
          className="nav-link"
          onClick={() => {
            setCurrentPage(pages[2]);
          }}
        >
          Gallery
        </li>
        <li
          className="nav-link"
          onClick={() => {
            setCurrentPage(pages[3]);
          }}
        >
          Tuition
        </li>
        <li
          className="nav-link"
          onClick={() => {
            setCurrentPage(pages[4]);
          }}
        >
          Apply
        </li>
        <li className="nav-link" onClick={() => {}}>
          Contact
        </li>
        <li className="nav-link" onClick={() => {}}>
          More
        </li>
        <li className="nav-link last-nav-link" onClick={() => {}}>
          Donate
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
