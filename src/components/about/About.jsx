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
    <section id="about">
      <h5>Hello I'm</h5>
        <h2>Subin Aryal</h2>
        <CTA />
        <h2 className="typ">
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Frontend Developer 💻",
              1500,
              "Full Stack Developer 👑",
              1500,
              "MERN Stack Developer 👓 ",
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
              <small>still seeking for a full time job</small>
            </article>
            <article className="about__card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>--</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>self projects</small>
            </article>
          </div>
          <p>
            Hello I am <b>Subin Aryal</b>, <b>BSc. CSIT</b> graduate and
            Technology enthusiast, passionate about developing in general.
          </p>
          <p>
          I am an Expert front-end web developer with extensive experience in HTML/CSS and JavaScript. I've also worked with ReactJS, Tailwind CSS and Redux.js - so I know my way around creating high-quality user experiences. 
            If you're looking for someone to join your team and help take your site to the next level, please don't hesitate to get in touch. Thanks for considering me!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
