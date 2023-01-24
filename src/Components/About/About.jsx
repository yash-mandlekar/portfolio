import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./About.css";
import myImg from "../../img/photu.jpg";
import { changeTheme } from "../../Store/Actions/Theme";
import Darkmode from "../../miniComp/Darkmode";
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
            I am a full stack web developer. I am a student of B.Tech in
            Information Technology. I am a self taught web developer. I have
            learned web development from various online sources. I have learned
            web development from various online sources. I have learned web
            development from various online sources.
          </p>
          <p>
            I am a full stack web developer. I am a student of B.Tech in
            Information Technology. I am a self taught web developer. I have
            learned web development from various online sources. I have learned
            web development from various online sources. I have learned web
            development from various online sources.
          </p>
          <div className="divider"></div>
        </div>
      </div>
      <Darkmode />
    </>
  );
};

export default About;
