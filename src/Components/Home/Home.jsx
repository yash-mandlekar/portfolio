import React, { useState } from "react";
import "./home.css";
import Photu from "../../img/photu.jpg";
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
                <div className="first">
                  <div>Android Developer</div>
                </div>
                <div className="second">
                  <div>Web Developer</div>
                </div>
                <div className="third">
                  <div>Web Designer</div>
                </div>
              </section>
            </main>
          </div>
          <div className="yashdetails">
            <p>
              Creative Photographer based in New York and happy to travel all
              over Europe to capture photos.
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
              id="https://instagram.com/_yxshh_._"
              className="ri-instagram-fill"
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
