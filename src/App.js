import React, { Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
const Home = React.lazy(() => import("./Components/Home/Home"));
const About = React.lazy(() => import("./Components/About/About"));
const Service = React.lazy(() => import("./Components/Service/Service"));
const Contact = React.lazy(() => import("./Components/Contact/Contact"));
const Projects = React.lazy(() => import("./Components/Projects/Projects"));
const App = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <Suspense
        fallback={
          <div
            style={{ height: "99vh" }}
            className={theme === "dark" ? "dark" : ""}
          >
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;