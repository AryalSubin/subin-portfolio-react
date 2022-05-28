import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
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
            Hello I am <b>Subin Aryal</b>, <b>BSc. CSIT</b> student and
            Technology enthusiast, passionate about developing in general. I
            have always had a knack for technology and working with computers.
            My first bit of exposure to web development was in a high school
            computer class. In there, we learned how to use basic{" "}
            <b>HTML and CSS</b>.
            <br />
          </p>
          <p>
            {" "}
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I am now spending my time
            building projects with <b>React JS, Firebase</b> , and learning
            backend technologies.
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
