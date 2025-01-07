import React from "react";
import { useSelector } from "react-redux";
import Darkmode from "../../miniComp/Darkmode";
import Navbar from "../Navbar/Navbar";
import "./Projects.css";
import {
  SiBootstrap,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiExpress,
} from "react-icons/si";

const Projects = ({ repos }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <Navbar />
      <div className={`about projects ${theme === "dark" ? "grey" : ""}`}>
        <h1>Projects</h1>
        <div className="cards">
          {repos.sort().map((repo, i) => (
            <div
              key={i}
              className={`card ${theme === "dark" ? "darkcard" : "lightcard"}`}
            >
              <a href={repo.homepage} target="_blank" rel="noreferrer">
                <img src={repo.img} alt="" />
              </a>
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>
              <div className="techcnt">
                <h3>Tech Stack:</h3>
                {repo?.tech?.map((tech, i) => (
                  <div key={i}>
                    {tech === "MongoDB" && (
                      <SiMongodb key={i} color="green" size={30} />
                    )}
                    {tech === "Express" && (
                      <SiExpress key={i} color="green" size={30} />
                    )}
                    {tech === "React" && (
                      <SiReact key={i} color="#5cceed" size={30} />
                    )}
                    {tech === "Node.js" && (
                      <SiNodedotjs key={i} color="green" size={30} />
                    )}
                    {tech === "Bootstrap" && (
                      <SiBootstrap key={i} color="purple" size={30} />
                    )}
                    {tech === "Javascript" && (
                      <SiJavascript key={i} color="yellow" size={30} />
                    )}
                  </div>
                ))}
              </div>
              {/* project link */}
              <div className="btn-cnt">
                <a href={repo.homepage} target="_blank" rel="noreferrer">
                  <button>View Project</button>
                </a>
                {repo?.html_url && (
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    <button>View Code</button>
                  </a>
                )}
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
