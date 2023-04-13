import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText"> Get started with Homyz </span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us. <br /> Find your
            residence soon
          </span>
          <button className="button">
            <a href="mailto:anika01839@gmail.com"> Get started </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
