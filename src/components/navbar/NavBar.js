import React from 'react';
import { Link } from 'react-scroll';
import "./style.css";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <Link to="header" smooth={true} duration={500} className="logo">
            <strong>Developer</strong> portfolio
          </Link>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <Link
                to="header"
                smooth={true}
                duration={500}
                className={normalLink}
                activeClass={activeLink}
              >
                Home
              </Link>
            </li>

            <li className="nav-list__item">
              <Link
                to="skillsSection"
                smooth={true}
                duration={500}
                className={normalLink}
                activeClass={activeLink}
              >
                Skills
              </Link>
            </li>

            <li className="nav-list__item">
              <Link
                to="projectsSection"
                smooth={true}
                duration={500}
                className={normalLink}
                activeClass={activeLink}
              >
                Projects
              </Link>
            </li>

            <li className="nav-list__item">
              <Link
                to="contactsSection"
                smooth={true}
                duration={500}
                className={normalLink}
                activeClass={activeLink}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
