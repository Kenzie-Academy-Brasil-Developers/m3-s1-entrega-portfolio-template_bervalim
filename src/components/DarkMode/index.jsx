import React, { useEffect } from "react";
import "./DarkMode.css";
import Sun from "../../assets/Sun.png";
import Moon from "../../assets/Moon.png";

export const DarkMode = () => {
  const setThemeToLocalStorage = (theme) => {
    localStorage.setItem("theme", theme);
  };

  const getThemeFromLocalStorage = () => {
    return localStorage.getItem("theme") || "light";
  };

  useEffect(() => {
    const theme = getThemeFromLocalStorage();
    document.body.setAttribute("data-theme", theme);
  }, []);

  const setDarkMode = () => {
    document.body.setAttribute("data-theme", "dark");
    setThemeToLocalStorage("dark");
  };

  const setLightMode = () => {
    document.body.setAttribute("data-theme", "light");
    setThemeToLocalStorage("light");
  };

  const toggleTheme = (event) => {
    if (event.target.checked) setDarkMode();
    else setLightMode();
  };

  const theme = localStorage.getItem("theme");

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={theme === "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src={Sun} className="sun" alt="Sun" />
        <img src={Moon} className="moon" alt="Moon" />
      </label>
    </div>
  );
};
