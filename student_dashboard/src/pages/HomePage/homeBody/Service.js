import React from "react";
import "../homePage.css";
import comflat from "../../../app/assets/images/cloud.svg";
import phone from "../../../app/assets/images/phoneIcon.png";

const Service = () => {
  return (
    <div className="service overflow-hidden px-5 ">
      <div className="mt-5 p-2">
        <div className="text-white w-100 text-center">
          <h1>Our Service</h1>
        </div>
        <div className=" mt-4">
          <div className="row gx-5 gy-4 pb-2">
            <div className="col-12 col-md-6 rounded shadow-lg">
            <div className="rounded shadow-lg bg-light px-4">
              <div className="Servicecloud card shadow bg-white">
                <img
                  src={comflat}
                  className="card-img-top bg-red"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Digital Agencies</h5>
                  <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="d-flex justify-content-between pb-3">
                    <a href="#" className="btn btn-dark px-4 py-2">
                      <h4>Reac More..</h4>
                    </a>
                    <a href="#" className="btn btn-primary px-4 py-2">
                     <h4>Action</h4> 
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="col-12 col-md-6 rounded shadow-lg">
            <div className="rounded shadow-lg bg-light px-4">
              <div className="Servicecloud card shadow bg-white">
                <div 
                  className="card-img-top bg-red mt-4  w-50  text-center" >
                  <img
                  src={phone}
                  className="card-img-top bg-red w-50 ps-3"
                  alt="..."
                />
                </div>
                
                <div className="card-body">
                  <h5 className="card-title">Digital Agencies</h5>
                  <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="d-flex justify-content-between pb-3">
                    <a href="#" className="btn btn-dark px-4 py-2">
                      <h4>Reac More..</h4>
                    </a>
                    <a href="#" className="btn btn-primary px-4 py-2">
                     <h4>Action</h4> 
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
