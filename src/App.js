import React, { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
const Home = React.lazy(() => import("./Components/Home/Home"));
const About = React.lazy(() => import("./Components/About/About"));
const Projects = React.lazy(() => import("./Components/Projects/Projects"));
const Mydesigns = React.lazy(() => import("./Components/Mydesigns/Mydesigns"));
const App = () => {
  const { theme } = useSelector((state) => state.theme);
  const [repos, setRepos] = useState([]);
  const repoNames = [
    "WeatherForecast",
    "LokdeshVeb",
    "Spotify-clone",
    "Trending-Movies",
    "Animal-Clinic",
  ];
  const getRepos = async () => {
    repoNames.forEach(async (repo) => {
      const res = await fetch(
        `https://api.github.com/repos/yash-mandlekar/${repo}`
      );
      const data = await res.json();
      setRepos((prev) => [...prev, data]);
    });
  };
  useEffect(() => {
    getRepos();
  }, []);
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
          <Route path="/projects" element={<Projects repos={repos} />} />
          <Route path="/mydesigns" element={<Mydesigns />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
