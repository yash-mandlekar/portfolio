import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";

const Projects = () => {
  
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <Navbar />
      <div className={`about ${theme === "dark" ? "grey" : ""}`}>Projects</div>
    </>
  );
};

export default Projects;
