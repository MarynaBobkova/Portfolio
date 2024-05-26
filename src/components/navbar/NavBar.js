import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink, useLocation } from 'react-router-dom';
import "./style.css";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

const Navbar = () => {
  const location = useLocation();
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Developer</strong> portfolio
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              {location.pathname === "/" ? (
                <ScrollLink
                  to="header"
                  smooth={true}
                  duration={500}
                  className={normalLink}
                  activeClass={activeLink}
                >
                  Home
                </ScrollLink>
              ) : (
                <NavLink
                  to="/"
                  className={normalLink}
                  activeClassName={activeLink}
                >
                  Home
                </NavLink>
              )}
            </li>

            <li className="nav-list__item">
              {location.pathname === "/" ? (
                <ScrollLink
                  to="skillsSection"
                  smooth={true}
                  duration={500}
                  className={normalLink}
                  activeClass={activeLink}
                >
                  Skills
                </ScrollLink>
              ) : (
                <NavLink
                  to="/#skillsSection"
                  className={normalLink}
                  activeClassName={activeLink}
                >
                  Skills
                </NavLink>
              )}
            </li>

            <li className="nav-list__item">
              {location.pathname === "/" ? (
                <ScrollLink
                  to="projectsSection"
                  smooth={true}
                  duration={500}
                  className={normalLink}
                  activeClass={activeLink}
                >
                  Projects
                </ScrollLink>
              ) : (
                <NavLink
                  to="/#projectsSection"
                  className={normalLink}
                  activeClassName={activeLink}
                >
                  Projects
                </NavLink>
              )}
            </li>

            <li className="nav-list__item">
              {location.pathname === "/" ? (
                <ScrollLink
                  to="contactsSection"
                  smooth={true}
                  duration={500}
                  className={normalLink}
                  activeClass={activeLink}
                >
                  Contacts
                </ScrollLink>
              ) : (
                <NavLink
                  to="/#contactsSection"
                  className={normalLink}
                  activeClassName={activeLink}
                >
                  Contacts
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
