import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./About.css";
import myImg from "../../img/photu.jpg";
import Darkmode from "../../miniComp/Darkmode";
const About = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <Navbar />
      <div className={`about ${theme === "dark" ? "grey" : ""}`}>
        <div className="abouttop">
          <h1>About me</h1>
        </div>
        <div
          className={`about2 ${
            theme === "dark" ? "about2-dark" : "about2-light"
          }`}
        >
          <img src={myImg} alt="" />
        </div>
        <div className="about3">
          <h1>Hi, I'm Yash Mandlekar</h1>
          <h2>Full Stack Web Developer</h2>
          <div className="divider"></div>
          <p>
            I am a full-stack web developer and a student of B.Com in Career
            College. I am self-taught, having learned web development through
            various online sources and Sheryians Coding School.
          </p>
          <p>
            My journey in web development began in 2018, starting with Java and
            SQL. In 2021, I began learning web development specifically at
            Sheryians. Having a background in commerce, I had to learn web
            development from the ground up. I find it very enjoyable to learn
            new languages and frameworks, such as React.js, Node.js, Express.js,
            and MongoDB
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
       
      </div>
      <Darkmode />
    </>
  );
};

export default About;
