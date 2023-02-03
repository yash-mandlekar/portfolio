import React from "react";
import { useSelector } from "react-redux";
import Darkmode from "../../miniComp/Darkmode";
import Navbar from "../Navbar/Navbar";
import "./mydesigns.css";
import Aerial from "./Aerial.png";
import LV from "./LV.png";
import Ocean from "./Ocean.png";
import Snowbear from "./Snowbear.png";
const Mydesigns = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <Navbar />
      <div className={`mydesigns ${theme === "dark" ? "grey" : ""}`}>
        <h1>My Designs</h1>
        <div className="mydesign">
          <h2>1. Aerial Photography</h2>
          <div className="img-cnt">
            <img src={Aerial} alt="" />
          </div>
          <p>
            Aerial photography is the taking of photographs from an aircraft or
            other flying object. Aerial photography is used to capture images of
            the Earth's surface from a high altitude. Aerial photography is used
            to capture images of the Earth's surface from a high altitude.
          </p>
        </div>
        <div className="mydesign">
          <h2>2. LV (Louis Vuitton) </h2>
          <div className="img-cnt">
            <img src={LV} alt="" />
          </div>
          <p>
            Louis Vuitton is a French fashion house founded in 1854 by Louis
            Vuitton. The label's LV monogram appears on most of its products,
            ranging from luxury trunks and leather goods to ready-to-wear,
            shoes, watches, jewelry, accessories, sunglasses and books.
          </p>
        </div>
        <div className="mydesign">
          <h2>3. Ocean</h2>
          <div className="img-cnt">
            <img src={Ocean} alt="" />
          </div>
          <p>
            Ocean is a Greek fashion house founded in 1948 by Ocean. The label's
            monogram appears on most of its products, ranging from luxury trunks
            and leather goods to ready-to-wear, shoes, watches, jewelry,
            accessories, sunglasses and books.
          </p>
        </div>
        <div className="mydesign">
          <h2>4. Snowbear</h2>
          <div className="img-cnt">
            <img src={Snowbear} alt="" />
          </div>
          <p>
            Snowbear is a website for a fictional company that sells snowboards.
            The website is built using HTML, CSS, and JavaScript. The website is
            built using HTML, CSS, and JavaScript.
          </p>
        </div>
      </div>
      <Darkmode />
    </>
  );
};

export default Mydesigns;
