import React from "react";
import { useSelector } from "react-redux";
import Darkmode from "../../miniComp/Darkmode";
import Navbar from "../Navbar/Navbar";
import "./Projects.css";
const Projects = ({ repos }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <Navbar />
      <div className={`about projects ${theme === "dark" ? "grey" : ""}`}>
        <h1>Projects</h1>
        <div className="cards">
          {repos.map((repo, i) => (
            <div
              key={i}
              className={`card ${theme === "dark" ? "darkcard" : "lightcard"}`}
            >
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>
              {/* project link */}
              <div className="btn-cnt">
                <a href={repo.homepage} target="_blank" rel="noreferrer">
                  <button>View Project</button>
                </a>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  <button>View Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Darkmode />
    </>
  );
};

export default Projects;
