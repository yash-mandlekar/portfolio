import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./About.css";
const About = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <Navbar />
      <div className={`about ${theme === "dark" ? "grey" : ""}`}>About</div>
    </>
  );
};

export default About;
