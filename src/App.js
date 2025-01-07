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
  var arr = [
    {
      name: "Builds Your Mind",
      description:
        "Buildsyourmind is educational technology platform designed to provide online learning resources for students. It mainly focuses on affordable, high-quality education for students.",
      homepage: "https://buildsyourmind.in/",
      img: "/buildsyourmind.webp",
      tech: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      name: "Roomieqindia",
      description:
        "Roomieqindia is a platform where regular people (like you and me) can buy and sell used items directly to each other without needing a middleman. It’s like an online garage sale where you can sell your old stuff or find cool second-hand deals.",
      homepage: "https://roomieqindia.com/",
      img: "/roomieqindia.webp",
      tech: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      name: "Sage Euphoria",
      description:
        "Developed a university event website using React.js. Implemented dynamic animations using the Framer Motion library.",
      homepage: "https://sageeuphoria.com/",
      html_url: "https://github.com/abhishekhojha/sageeuphoria",
      img: "/sageeuphoria.webp",
      tech: ["React"],
    },
    {
      name: "Medium Clone",
      description: "Medium Clone is a web application where you can post blogs",
      homepage: "https://medium-clone-phi-ashy.vercel.app/",
      html_url: "https://github.com/yash-mandlekar/medium_clone",
      img: "/medium.webp",
      tech: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      name: "Instagram Clone",
      description: "In this Web App we can signup and login",
      homepage: "https://instagram-clone-dbuu06qx7-yash-mandleakar.vercel.app/",
      html_url: "https://github.com/yash-mandlekar/Instagram-Clone",
      img: "/instagram.webp",
      tech: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      name: "Weather Forecast",
      description:
        "Weather Forecast web application is used to search cities and there weather report",
      homepage: "https://yes-weather.vercel.app/",
      html_url: "https://github.com/yash-mandlekar/WeatherForecast",
      img: "/weather.webp",
      tech: ["React"],
    },
    {
      name: "Spotify clone",
      description:
        "Spotify is a web application where you can listen to songs preview and search artists",
      homepage: "https://spotiify.vercel.app/",
      html_url: "https://github.com/yash-mandlekar/Spotify-clone",
      img: "/spotify.webp",
      tech: ["React"],
    },
    {
      name: "Trending Movies",
      description:
        "Trending Movies is a community built movie and TV database. Every piece of data has been added by TMDB api. This app is made with the help of react.js.",
      homepage: "https://trending-movies-lake.vercel.app/",
      html_url: "https://github.com/yash-mandlekar/Trending-Movies",
      img: "/netflix.webp",
      tech: ["React"],
    },
    {
      name: "Animal Clinic",
      description:
        "Animal Clinic is a website where you can add your pet health issues. You have to register and login to your account for adding any pet",
      homepage: "https://animal-clinic.vercel.app/",
      html_url: "https://github.com/yash-mandlekar/Animal-Clinic",
      img: "/animal.webp",
      tech: ["React"],
    },
  ];

  useEffect(() => {
    // fetching ip address of user
    // console.log("Fetching ip address");
    var ip = null;
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        ip = data.ip;
        fetch(`https://ipapi.co/${data.ip}/json/`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // alert(data.ip);
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
          <Route path="/projects" element={<Projects repos={arr} />} />
          <Route path="/mydesigns" element={<Mydesigns />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
