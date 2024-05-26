import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Skills from "../components/header/Skills";
import Header from "./../components/header/Header";
import Contacts from "./Contacts";
import Projects from "./Projects";
import { Element } from "react-scroll";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = location.hash.substring(1);
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      });
    }
  }, [location]);

  return (
    <>
      <Header />
      <Element name="skillsSection">
        <Skills />
      </Element>
      <Element name="projectsSection">
        <Projects />
      </Element>
      <Element name="contactsSection">
        <Contacts />
      </Element>
    </>
  );
};

export default Home;
