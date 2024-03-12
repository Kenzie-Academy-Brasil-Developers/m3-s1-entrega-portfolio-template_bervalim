import React from "react";
import "./DarkMode.css";
import Sun from "../../assets/Sun.png";
import Moon from "../../assets/Moon.png";

export const DarkMode = () => {
  return (
    <div className="dark_mode">
      <input className="dark_mode_input" type="checkbox" id="darkmode-toggle" />
      <label className="dark_mode_label" for="darkmode-toggle">
        <img src={Sun} className="sun" />
        <img src={Moon} className="moon" />
      </label>
    </div>
  );
};
