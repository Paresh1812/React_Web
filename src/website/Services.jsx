import React from "react";
import Cards from "./Cards";
import Data from "./Data";

function Services() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row  gy-5">
              {Data.map((value, index) => {
                return (
                  <Cards key={index} imageSource={value.images} title={value.title} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
