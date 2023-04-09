import React, { Suspense, useEffect, useRef, useState } from "react";
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
    "medium_clone",
    "Instagram-Clone",
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
    // fetching ip address of user
    console.log("Fetching ip address");
    var ip = null;
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        ip = data.ip;
        fetch(`https://ipapi.co/${data.ip}/json/`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      });

    // fetching hostname of user
    
  }, []);
  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              height: "99vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={theme === "dark" ? "dark" : ""}
          >
            <svg className="loader" viewBox="25 25 50 50">
              <circle r="20" cy="50" cx="50"></circle>
            </svg>
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
