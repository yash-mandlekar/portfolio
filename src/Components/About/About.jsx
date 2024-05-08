import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./About.css";
import { AiFillHtml5 } from "react-icons/ai";
import { ImCss3 } from "react-icons/im";
import {
  SiBootstrap,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
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

        <h1 className="skills">Skills </h1>
        <div className="about4">
          <div className="leftcnt">
            <div className="left">
              <AiFillHtml5 color="red" size={40} />
              <span className="skill">HTML </span>
            </div>
            <div className="left">
              <ImCss3 color="blue" size={35} />
              <span className="skill">CSS </span>
            </div>
            <div className="left">
              <SiJavascript className="js" color="#ebd41b" size={35} />
              <span className="skill">JAVASCRIPT </span>
            </div>
            <div className="left">
              <TbBrandNextjs className="nextjs" size={35} color="white" />
              <span className="skill">NEXT JS </span>
            </div>
          </div>
          <div className="rightcnt">
            <div className="left">
              <SiMongodb color="green" size={35} />
              <span className="skill">MONGO DB </span>
            </div>
            <div className="left">
              <SiReact color="#5cceed" size={35} />
              <span className="skill">REACT JS</span>
            </div>
            <div className="left">
              <BsGithub size={35} />
              <span className="skill">GITHUB </span>
            </div>
          </div>
          <div className="rightcnt">
            <div className="left">
              <SiNodedotjs color="green" size={35} />
              <span className="skill">NODE JS </span>
            </div>
            <div className="left">
              <GrMysql color="#045a84" size={35} />
              <span className="skill">SQL </span>
            </div>
            <div className="left">
              <SiBootstrap color="blue" size={35} />
              <span className="skill">BOOTSTRAP </span>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="about4">
          <div className="leftcnt">
            <div className="left">
              <span className="head">Age: </span>
              <span>22</span>
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
              <span>Masters</span>
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
