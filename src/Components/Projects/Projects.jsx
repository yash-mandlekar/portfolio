import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
// for all the projects, we will be using the github api
// https://api.github.com/users/yash-mandlekar/repos?sort=updated&direction=desc
const Projects = ({ repos }) => {
  const { theme } = useSelector((state) => state.theme);
  console.log(repos);
  return (
    <>
      <Navbar />
      <div className={`about ${theme === "dark" ? "grey" : ""}`}>Projects</div>
    </>
  );
};

export default Projects;
