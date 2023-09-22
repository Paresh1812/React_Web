import React from "react";
// // import Navbar from "./Navbar";
// // import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import home from '../images/home.svg'
import { NavLink } from "react-router-dom";

let Coman = ({name,image,btn_name,visit}) => {
  return (
    <>
      <section id="header" className=" d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1  d-flex justify-content-center flex-column">
                <h1>
                {name}
                  <strong className="brand-name"> Paresh Waghela</strong>
                </h1>
                <h2 className="my-3">
                  We are the team of talented developer making website
                </h2>
                <div className="mt-3">
                  <NavLink to={visit} className=" btn-get-started">
                    {btn_name}
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={image} className="img-fluid animated" alt="Images Not Found" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Coman;
