import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./Projects.css";
// for all the projects, we will be using the github api
// https://api.github.com/users/yash-mandlekar/repos?sort=updated&direction=desc
const Projects = ({ repos }) => {
  const { theme } = useSelector((state) => state.theme);
  console.log(repos);
  return (
    <>
      <Navbar />
      <div className={`about ${theme === "dark" ? "grey" : ""}`}>
        <div className="cards">
          {repos.map((repo) => (
            <div className="card">
              <div className="card2">
                {/* project name */}
                <h2>{repo.name}</h2>
                {/* project description */}
                <p>{repo.description}</p>
                {/* project link */}
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  <button>View Project</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
