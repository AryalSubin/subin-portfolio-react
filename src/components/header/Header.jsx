import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import Typical from "react-typical";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Subin Aryal</h1>

        <h2>
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
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
