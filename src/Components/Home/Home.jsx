import React, { useState } from "react";
import "./home.css";
import Photu from "../../img/photo.png";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import Darkmode from "../../miniComp/Darkmode";
const Home = () => {
  const { theme } = useSelector((state) => state.theme);
  const handleIcon = (e) => {
    window.open(e.target.id, "_blank");
  };
  return (
    <>
      <Navbar />
      <div className={`home ${theme === "dark" ? "grey" : "light"}`}>
        <div className="homeLeft">
          <div
            className="image"
            style={{
              backgroundImage: `url(${Photu})`,
            }}
            alt=""
          />
        </div>
        <div className="homeRight">
          <div className="homeRightName">
            <h1 className="animate__animated animate__bounce animate__faster">
              Yash mandlekar
            </h1>
          </div>
          <div className="homeRightDetails">
            <main className="container">
              <section className="animation">
                <div className="first">Android Developer</div>
                <div className="second">Web Developer</div>
                <div className="third">Web Designer</div>
              </section>
            </main>
          </div>
          <div className="yashdetails">
            <p>
              I am an aspiring web developer seeking a full-time position in a
              reputable company. I have gained extensive experience in web
              development and deployment. I am a highly motivated and
              hardworking individual, skilled in Node JS and React JS. I am
              looking for a position where I can use my skills and experience to
              make a positive contribution to the company.
            </p>
          </div>
          <div className="yashicons">
            <i
              onClick={handleIcon}
              id="https://www.facebook.com/profile.php?id=100008677567868"
              className="ri-facebook-fill"
            ></i>
            <i
              onClick={handleIcon}
              id="https://twitter.com/mandlekaryash"
              className="ri-twitter-fill"
            ></i>
            <i
              onClick={handleIcon}
              id="https://github.com/yash-mandlekar"
              className="ri-github-fill"
            ></i>
            <i
              onClick={handleIcon}
              id="https://linkedin.com/in/yash-mandlekar-9a974421b"
              className="ri-linkedin-box-fill"
            ></i>
          </div>
        </div>
      </div>
      <Darkmode />
    </>
  );
};

export default Home;
