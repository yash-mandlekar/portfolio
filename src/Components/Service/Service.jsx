import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";

const Service = () => {
  
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <Navbar />
      <div className={`about ${theme === "dark" ? "grey" : ""}`}>Service</div>
    </>
  );
};

export default Service;
