import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3> Frontend Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Responsive</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Reactive</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Scalable</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>User Friendly</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Updatable</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Development  */}
      </div>
    </section>
  );
};

export default Services;
