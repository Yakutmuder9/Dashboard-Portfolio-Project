import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import "./about.css";
import jet from "../../../app/assets/images/Picture1.png";
import Tablet from "../../../app/assets/images/tab.png";

const About = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className="AboutPageSlide bg-white ">
      <div className="diagonalBackground  ">
        <p className="Aboutexperience ">EXPLORE OUR SERVICES</p>
        <h2 className="Aboutexperiencedisc">
          Which Link Building Package Fits Your Needs?
        </h2>
      </div>
      <div className="container bottomBackground  py-2 ">
        <div className="row  gy-3">
          <div className="col-12  col-lg-4 rounded">
            <div className="p-3 border bg-light d-flex  flex-column align-items-center justify-content-between rounded  bg-white shadow">
              <img src={Tablet} className="w-50 h-50 PostCardHover" />
              <h2>Guest Posts</h2>
              <p>
                100% done-for-you guest posts on real websites with high organic
                visitors, juicy authority metrics, and strict quality control.
                Scale & Save
              </p>
              <button className="btn btn-primary px-4">View Option</button>
            </div>
          </div>
          <div className="col-12 col-lg-4 rounded ">
            <div className="p-3 border bg-light d-flex centerDif flex-column align-items-center rounded  bg-white shadow">
              <img src={Tablet} className="w-50 h-50 PostCardHover" />
              <h2>Guest Posts</h2>
              <p>
                100% done-for-you guest posts on real websites with high organic
                visitors, juicy authority metrics, and strict quality control.
                Scale & Save
              </p>
              <button className="btn btn-primary px-4">View Option</button>
            </div>
          </div>
          <div className="col-12 col-lg-4 rounded ">
            <div className="p-3 border bg-light rounded d-flex bg-white shadow flex-column align-items-center justify-content-between rounded">
              <img src={Tablet} className="w-50 h-50 PostCardHover" />
              <h2>Guest Posts</h2>
              <p>
                100% done-for-you guest posts on real websites with high organic
                visitors, juicy authority metrics, and strict quality control.
                Scale & Save
              </p>
              <button className="btn btn-primary px-4">View Option</button>
            </div>
          </div>
        </div>

        <div className=" mt-4 shadow p-3 rounded d-flex align-items-center justify-content-between">
          <img src={jet} className="jetImage" />
          <div>
            <h3>Need Help Choosing?</h3>
            <p>
              We’ll help you with a custom strategy to meet your goals, spend
              less and earn more with the right volume and velocity of links.
            </p>
          </div>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default About;
