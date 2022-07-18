import React from "react";
import "./error.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <div className="" id="errorPage">
      <div className="d-flex align-items-start ps-5 flex-column justify-content-center left">
        <h3 className="text-start">Oops...</h3>
        <h1 className="errornumber">404</h1>
        <h2>There's Nothing here...</h2>

        <div className=" pt-3 m-4">
          <div className="blockquote-footer">
            The Page you are looking for is not found
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back to home &nbsp; <i className="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
