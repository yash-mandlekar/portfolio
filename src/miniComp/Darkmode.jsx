import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../Store/Actions/Theme";
import "./mini.css";
const Darkmode = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const handleTheme = () => {
    dispatch(changeTheme(theme));
  };
  return (
    <div className="darkmode">
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleTheme}
          name="theme"
          checked={theme === "dark" ? false : true}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Darkmode;
