import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./contact.css";

const Contact = () => {
  
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <Navbar />
      <div className={`contact ${theme === "dark" ? "grey" : ""}`}> contact</div>
    </>
  );
};

export default Contact;
