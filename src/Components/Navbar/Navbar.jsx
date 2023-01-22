import React, { useEffect, useState } from "react";
import "./nav.css";
import "animate.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { pathname } = useLocation();
  const { theme } = useSelector((state) => state.theme);
  const [width, setwidth] = useState(window.innerHeight);
  const handleMenu = (e) => {
    console.log(e.target.id);
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
      <div className={`Navbar ${theme === "dark" ? "dark" : "light"}`}>
        <div className="tokyo">
          <h1>MERN</h1>
        </div>
        <div className="details">
          <ul>
            <li
              to="/"
              className={`${
                theme === "dark"
                  ? `txt-white ${pathname === "/" ? "active" : "darkactive"}`
                  : `light`
              }`}
            >
              <Link to="/">
                <i className="ri-home-3-line"></i>Home
              </Link>
            </li>
            <li
              className={`${
                theme === "dark"
                  ? `txt-white ${
                      pathname === "/about" ? "active" : "darkactive"
                    }`
                  : `light`
              }`}
            >
              <Link to="/about">
                <i className="ri-user-fill"></i>About
              </Link>
            </li>
            <li
              className={`${
                theme === "dark"
                  ? `txt-white ${
                      pathname === "/service" ? "active" : "darkactive"
                    }`
                  : `light`
              }`}
            >
              <Link to="/service">
                <i className="ri-settings-2-line"></i>Service
              </Link>
            </li>
            <li
              className={`${
                theme === "dark"
                  ? ` txt-white ${
                      pathname === "/contact" ? "active" : "darkactive"
                    }`
                  : `light`
              }`}
            >
              <Link to="/contact">
                <i className="ri-phone-fill"></i>Contact
              </Link>
            </li>
            <li
              className={`${
                theme === "dark"
                  ? ` txt-white ${
                      pathname === "/projects" ? "active" : "darkactive"
                    }`
                  : `light`
              }`}
            >
              <Link to="/projects">
                <i className="ri-image-edit-fill"></i>Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <h2>© 2023 YASH</h2>
        </div>
        {width < 1200 && (
          <div className={`switch2 ${theme === "dark" ? "dark" : "light"}`}>
            <input type="checkbox" onChange={handleMenu} name="menu" />
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
      <div className="sidenav">lol</div>
    </>
  );
};

export default Navbar;
