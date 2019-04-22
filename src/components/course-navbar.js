import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const CourseNavbar = () => (
  <CourseNavbarContainer>
    <CourseNavbarNav>
      <Accordion>
        <AccordionItem expanded={true}>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Introduction</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/course-philosophy">
              Course Philosophy
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/course-overview-goals">
              Course Overview and Goals
            </CourseNavLink>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Introducing the Raspberry Pi</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/raspberry-pi-basics">
              Raspberry Pi Basics
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/raspberry-pi-hardware-overview">
              Raspberry Pi: Hardware Overview
            </CourseNavLink>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Working With HTML</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/html-basics-part-1">
              HTML Basics: Part 1
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/html-attributes">
              HTML Attributes
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/adding-images">
              Adding Images
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/linking-betweeen-pages">
              Linking Between Pages
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/creating-page-structure-with-html">
              Creating a Page Structure With HTML
            </CourseNavLink>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Working With CSS</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/css-basics-part-1">
              CSS Basics: Part 1
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/css-page-layout-part-1">
              CSS for Page Layout: Part 1
            </CourseNavLink>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Designing for Users</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/creating-wireframe">
              Creating a Wireframe
            </CourseNavLink>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Navigating in Linux</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/command-line-basics">
              Command Line Basics
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/introducing-ssh">
              Introducing SSH
            </CourseNavLink>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Setting Up a Server</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/how-internet-works-part-1">
              How the Internet Works: Part 1
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/how-internet-works-part-2">
              How the Internet Works: Part 2
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/loading-content-onto-server">
              Loading Content Onto a Server
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/setting-up-local-ip-address">
              Setting Up a Local IP Address
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink to="/lessons/accessing-your-site">
              Accessing Your Site
            </CourseNavLink>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    </CourseNavbarNav>
  </CourseNavbarContainer>
);

export default CourseNavbar;

const CourseNavbarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  margin-top: 2rem;
`;

const CourseNavbarNav = styled.nav`
  display: inline-block;
  padding: 0px;
`;

const CourseNavList = styled.ul`
  /* margin-left: 1.45rem; */
  padding: 0px;
`;

const CourseNavEntry = styled.li`
  list-style-type: none;
  /* padding-bottom: 5px; */
  margin-bottom: 0px;
  /* margin-left: 1.25rem; */
`;

const CourseNavLink = styled(Link)`
  list-style-type: none;
  padding-bottom: 5px;
  font-size: 1rem;
  margin-bottom: 0px;
  margin-left: 0px;
  color: #63686b;
  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    color: #000000;
    text-decoration: none;
    cursor: pointer;
    border-bottom: none;
  }
`;

const ModuleTitle = styled.p`
  margin-bottom: 10px;
  margin-left: 0px;
  padding-right: 3rem;
  font-size: 1rem;
  font-weight: bolder;
`;
