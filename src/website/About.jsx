import React from "react";
import about from "../images/about.jpg";
import Coman from "./Coman";

function About() {
  return (
    <>
      <Coman
        name="Welcome to About Page"
        image={about}
        visit="/contact"
        btn_name="Contact Now"
      />
    </>
  );
}

export default About;
