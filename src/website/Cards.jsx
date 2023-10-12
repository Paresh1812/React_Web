import React from "react";
import { NavLink } from "react-router-dom";

function Cards({imageSource,title}) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imageSource} style={{height: "300px"}} className="card-img-top" alt="https://picsum.photos/200" />
          <div className="card-body">
            <h5 className="card-title  font-weight-bold">{title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="/contact" className="btn btn-primary">
              Click 
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
