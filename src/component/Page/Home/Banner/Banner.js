import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../../img/banner/banner1.png";
import banner2 from "../../../../img/banner/banner2.png";
import banner3 from "../../../../img/banner/banner3.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="home" className="slider-area">
      <Carousel fade>
        <Carousel.Item className="position-relative">
          <img className="img-fluid" src={banner1} alt="First slide" />
          <Carousel.Caption className="slider-caption">
            <h1>
              Helping make your
              <br /> financial dreams come true
            </h1>
            <p>
              Capitalise on low hanging fruit to identify a ballpark value added
              activity <br /> to beta test. Override the digital divide with
              additional clickthroughs.
            </p>

            <div className="button-area">
              <button className="btn btn-one">Read More</button>
              <button className="btn btn-two">Get in Touch</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="position-relative">
          <img className="img-fluid" src={banner2} alt="Second slide" />

          <Carousel.Caption className="slider-caption">
            <h1>
              I help Business <br /> innovate and grow
            </h1>
            <p>
              With over 10 years of experience helping businesses to find <br />{" "}
              comprehensive solutions .
            </p>
            <div className="button-area">
              <button className="btn btn-one">Read More</button>
              <button className="btn btn-two">Get in Touch</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="position-relative">
          <img className="img-fluid" src={banner3} alt="Third slide" />

          <Carousel.Caption className="slider-caption">
            <h1>
              New Bussines Advisory
              <br />
              Services Provider
            </h1>
            <p>
              Interactively procrastinate high-payoff content without
              backward-compatible data.
              <br /> Quickly cultivate optimal processes and tactical profit
              architectures.
            </p>
            <div className="button-area">
              <button className="btn btn-one">Read More</button>
              <button className="btn btn-two">Get in Touch</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
