import React, { useEffect, useRef, useState } from "react";
import "./nav.css";
import "animate.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Darkmode from "../../miniComp/Darkmode";

const Navbar = () => {
  const { pathname } = useLocation();
  const sidenavRef = useRef(null);
  const { theme } = useSelector((state) => state.theme);
  const [width, setwidth] = useState(window.innerWidth);
  const [sidenav, setSidenav] = useState(false);
  const handleMenu = () => {
    sidenav ? setSidenav(false) : setSidenav(true);
    sidenavRef.current.classList.toggle("animate__slideInLeft");
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    setwidth(window.innerWidth);
  };
  return (
    <>
      <div className={`Navbar ${theme === "dark" ? "dark" : ""}`}>
        <div className="tokyo">
          <h1>MERN</h1>
        </div>
        <div className="details">
          <ul>
            <li
              to="/"
              className={`${theme === "dark" ? `txt-white` : `txt-black`}
              ${pathname === "/" ? "active" : "darkactive"}
              `}
            >
              <Link to="/">
                <i className="ri-home-3-line"></i>Home
              </Link>
            </li>
            <li
              className={`${theme === "dark" ? `txt-white` : `txt-black`} ${
                pathname === "/about" ? "active" : "darkactive"
              }`}
            >
              <Link to="/about">
                <i className="ri-user-fill"></i>About
              </Link>
            </li>
            <li
              className={`${theme === "dark" ? `txt-white` : `txt-black`}
              ${pathname === "/projects" ? "active" : "darkactive"}
              `}
            >
              <Link to="/projects">
                <i className="ri-settings-2-line"></i>Projects
              </Link>
            </li>
            <li
              className={`${theme === "dark" ? ` txt-white` : `txt-black`}
              ${pathname === "/contact" ? "active" : "darkactive"}`}
            >
              <Link to="/contact">
                <i className="ri-phone-fill"></i>Contact
              </Link>
            </li>
            <li
              className={`${theme === "dark" ? ` txt-white` : `txt-black`} ${
                pathname === "/mydesigns" ? "active" : "darkactive"
              }`}
            >
              <Link to="/mydesigns">
                <i className="ri-image-edit-fill"></i>My Designs
              </Link>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <h2>© 2023 YASH</h2>
        </div>
        {width < 1200 && (
          <div className={`switch2 ${theme === "dark" ? "dark" : ""}`}>
            <input type="checkbox" onClick={handleMenu} name="menu" />
            <div>
              <span
                className={`line-1 ${theme === "dark" ? "" : "dark"}`}
              ></span>
              <span
                className={`line-2 ${theme === "dark" ? "" : "dark"}`}
              ></span>
              <span
                className={`line-3 ${theme === "dark" ? "" : "dark"}`}
              ></span>
            </div>
          </div>
        )}
      </div>
      <div
        ref={sidenavRef}
        className={`sidenav ${theme === "dark" ? "dark" : "light"}`}
      >
        <ul>
          <li
            to="/"
            className={`${theme === "dark" ? `txt-white` : `txt-black`}
              ${pathname === "/" ? "active" : "darkactive"}
              `}
          >
            <Link to="/">
              <i className="ri-home-3-line"></i>Home
            </Link>
          </li>
          <li
            className={`${theme === "dark" ? `txt-white` : `txt-black`} ${
              pathname === "/about" ? "active" : "darkactive"
            }`}
          >
            <Link to="/about">
              <i className="ri-user-fill"></i>About
            </Link>
          </li>
          <li
            className={`${theme === "dark" ? `txt-white` : `txt-black`}
              ${pathname === "/projects" ? "active" : "darkactive"}
              `}
          >
            <Link to="/projects">
              <i className="ri-settings-2-line"></i>Projects
            </Link>
          </li>
          <li
            className={`${theme === "dark" ? ` txt-white` : `txt-black`}
              ${pathname === "/contact" ? "active" : "darkactive"}`}
          >
            <Link to="/contact">
              <i className="ri-phone-fill"></i>Contact
            </Link>
          </li>
          <li
            className={`${theme === "dark" ? ` txt-white` : `txt-black`} ${
              pathname === "/mydesigns" ? "active" : "darkactive"
            }`}
          >
            <Link to="/mydesigns">
              <i className="ri-image-edit-fill"></i>My Designs
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
