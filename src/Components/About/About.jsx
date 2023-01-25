import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./About.css";
import myImg from "../../img/photu.jpg";
import Darkmode from "../../miniComp/Darkmode";
import resume from "./resume.pdf";
const About = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <Navbar />
      <div className={`about ${theme === "dark" ? "grey" : ""}`}>
        <div className="abouttop">
          <h1 className={`${theme === "dark" ? "grey" : "txt-black"}`}>
            About me
          </h1>
        </div>
        <div className="about2">
          <img src={myImg} alt="" />
        </div>
        <div className="about3">
          <h1 className={`${theme === "dark" ? "grey" : "txt-black"}`}>
            Hi, I'm Yash Mandlekar
          </h1>
          <h2>Full Stack Web Developer</h2>
          <div className="divider"></div>
          <p>
            I am a full stack web developer. I am a student of B.Com in Career
            College. I am a self taught web developer. I have learned web
            development from various online sources and Sheryians Coding School.
          </p>
          <p>
            My journey of web development is started from 2018.First i have
            learned Java and Sql then i got to know about web development and i
            started learning web development from Sheryians in 2021. I have
            Commerce background so i have learned web development from scratch.
            I really enjoy learning languages and frameworks like React.js,
            Node.js, Express.js, MongoDB, etc.
          </p>
          <div className="divider"></div>
        </div>
        <div className="about4">
          <div className="leftcnt">
            <div className="left">
              <span className="head">Age: </span>
              <span>20</span>
            </div>
            <div className="left">
              <span className="head">Email: </span>
              <span>ymandlekar9826@gmail.com</span>
            </div>
            <div className="left">
              <span className="head">Phone: </span>
              <span>+91-9826818996</span>
            </div>
          </div>
          <div className="rightcnt">
            <div className="left">
              <span className="head">Degree: </span>
              <span>Bachelor</span>
            </div>
            <div className="left">
              <span className="head">Interest: </span>
              <span>Playing Football</span>
            </div>
            <div className="left">
              <span className="head">Freelance: </span>
              <span>Available</span>
            </div>
          </div>
        </div>
        <a href={resume} download>
          <div data-tooltip="Size: 43kb" class="button">
            <div class="button-wrapper">
              <div class="text">Download Resume</div>
              <span class="icon">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  height="2em"
                  width="2em"
                  role="img"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke="currentColor"
                    fill="none"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </a>
      </div>
      <Darkmode />
    </>
  );
};

export default About;
