import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Darkmode from "../../miniComp/Darkmode";
import Navbar from "../Navbar/Navbar";
import "./mydesigns.css";
import Aerial from "./Aerial.png";
import LV from "./LV.png";
import Ocean from "./Ocean.png";
import Snowbear from "./Snowbear.png";
import { AiFillHtml5 } from "react-icons/ai";
import { ImCss3 } from "react-icons/im";
const Mydesigns = () => {
  const [image, setImage] = useState(null);
  const { theme } = useSelector((state) => state.theme);
  const handleOverlay = (e) => {
    if (
      e.target.classList.value === "overlay" ||
      e.target.classList.value === "close" ||
      e.target.classList.value === "close-img"
    ) {
      setImage(null);
    }
  };
  const handleImage = (e) => {
    setImage(e);
  };
  useEffect(() => {
    window.addEventListener("click", handleOverlay);
    return () => {
      window.removeEventListener("click", handleOverlay);
    };
  }, []);
  return (
    <>
      {image && (
        <div className="overlay">
          <div className="close">X</div>
          <img className="close-img" src={image} alt="" />
        </div>
      )}
      <Navbar />
      <div className={`mydesigns ${theme === "dark" ? "grey" : ""}`}>
        <h1>My Designs</h1>
        <div className="mydesign">
          <h2>1. Aerial Photography</h2>
          <div className="img-cnt">
            <img onClick={() => handleImage(Aerial)} src={Aerial} alt="" />
          </div>
          <h3>Description: </h3>
          <p>
            Aerial photography is the taking of photographs from an aircraft or
            other flying object. Aerial photography is used to capture images of
            the Earth's surface from a high altitude. Aerial photography is used
            to capture images of the Earth's surface from a high altitude.
          </p>
          <h3>Tech Stack:</h3>
          <div className="techs">
            <div className="tech">
              <AiFillHtml5 color="red" size={40} />
              <span>HTML</span>
            </div>
            <div className="tech">
              <ImCss3 color="blue" size={35} />
              <span>CSS</span>
            </div>
          </div>
        </div>
        <div className="mydesign">
          <h2>2. LV (Louis Vuitton) </h2>
          <div className="img-cnt">
            <img onClick={() => handleImage(LV)} src={LV} alt="" />
          </div>
          <h3>Description: </h3>
          <p>
            Louis Vuitton is a French fashion house founded in 1854 by Louis
            Vuitton. The label's LV monogram appears on most of its products,
            ranging from luxury trunks and leather goods to ready-to-wear,
            shoes, watches, jewelry, accessories, sunglasses and books.
          </p>
          <h3>Tech Stack:</h3>
          <div className="techs">
            <div className="tech">
              <AiFillHtml5 color="red" size={40} />
              <span>HTML</span>
            </div>
            <div className="tech">
              <ImCss3 color="blue" size={35} />
              <span>CSS</span>
            </div>
          </div>
        </div>
        <div className="mydesign">
          <h2>3. Ocean</h2>
          <div className="img-cnt">
            <img onClick={() => handleImage(Ocean)} src={Ocean} alt="" />
          </div>
          <h3>Description: </h3>
          <p>
            Ocean is a Greek fashion house founded in 1948 by Ocean. The label's
            monogram appears on most of its products, ranging from luxury trunks
            and leather goods to ready-to-wear, shoes, watches, jewelry,
            accessories, sunglasses and books.
          </p>
          <h3>Tech Stack:</h3>
          <div className="techs">
            <div className="tech">
              <AiFillHtml5 color="red" size={40} />
              <span>HTML</span>
            </div>
            <div className="tech">
              <ImCss3 color="blue" size={35} />
              <span>CSS</span>
            </div>
          </div>
        </div>
        <div className="mydesign">
          <h2>4. Snowbear</h2>
          <div className="img-cnt">
            <img onClick={() => handleImage(Snowbear)} src={Snowbear} alt="" />
          </div>
          <h3>Description: </h3>
          <p>
            Snowbear is a website for a fictional company that sells snowboards.
            The website is built using HTML, CSS, and JavaScript. The website is
            built using HTML, CSS, and JavaScript.
          </p>
          <h3>Tech Stack:</h3>
          <div className="techs">
            <div className="tech">
              <AiFillHtml5 color="red" size={40} />
              <span>HTML</span>
            </div>
            <div className="tech">
              <ImCss3 color="blue" size={35} />
              <span>CSS</span>
            </div>
          </div>
        </div>
      </div>
      <Darkmode />
    </>
  );
};

export default Mydesigns;
