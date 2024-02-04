import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Typical from "react-typical";
import CTA from "../header/CTA";

const about = () => {
  return (
    <div>
      <div className="logoHeader">
        <img src="logo.png" alt="" />
      </div>
      <section id="about">
        <h5>Hello I'm</h5>
        <p className="helloI">Subin Aryal</p>
        <CTA />
        <h2 className="typ">
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Frontend Web Developer 💻",
              1500,
              "Full Stack Developer 👑",
              1500,
              "Back End Developer 👓 ",
              1500,
            ]}
          />
        </h2>

        <div className="container about__container">
          <div className="about__me">
            <img src={ME} className="about__me" alt="me"></img>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about_icon" />
                <h5>Experience</h5>
                <small>
                  {" "}
                  3 month+
                  <br /> still seeking for a full time job
                </small>
              </article>
              <article className="about__card">
                <FiUsers className="about_icon" />
                <h5>Clients</h5>
                <small>1</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about_icon" />
                <h5>Projects</h5>
                <small>self projects</small>
              </article>
            </div>
            <p>
              Hello there! 👋 I am <b>Subin Aryal</b>, an <b>MIT</b> Student and
              a passionate web developer with a keen eye for design and a love
              for crafting seamless user experiences.
            </p>
            <p>
              I'm an expert front-end web developer with a wealth of experience
              in HTML, CSS, and JavaScript. Proficient in frameworks like React
              JS and Next JS, I excel in styling with Tailwind CSS. I leverage
              Redux.js/Zustand for effective state management and employ React
              Query for seamless data fetching, updating, creating, and
              deleting. Specializing in crafting high-quality user experiences,
              I am eager to connect if you're seeking a dedicated professional
              to elevate your team and enhance your site. Thank you for
              considering me
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
