import React, { useEffect, useRef, useState } from "react";
import "./nav.css";
import "animate.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import resume from "./resume.pdf";

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
        <a href={resume} download>
          <div data-tooltip="Size: 43kb" className="button">
            <div className="button-wrapper">
              <div className="text">Download Resume</div>
              <span className="icon">
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
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </a>
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
