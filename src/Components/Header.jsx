import React from "react";
import { useState } from "react";

export default function Header() {
  const [themeSwitch, setThemeSwitch] = useState(false);

  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
  }
  function setDarkMode() {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
  function setLightMode() {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }

  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    setDarkMode();
  } else {
    setLightMode();
  }

  function toggleTheme() {
    setThemeSwitch((prevTheme) => !prevTheme);
    if (themeSwitch === true) {
      setDarkMode();
    } else {
      setLightMode();
    }
  }

  return (
    <header className="flex-main blue constant-margin constant-padding">
      <h1 className="title">Where in the world?</h1>
      <div onClick={toggleTheme} className="mode flex transition">
        <i
          className={`fa-solid ${
            theme === "dark" ? "fa-moon" : "fa-sun"
          } standard-fz`}
        ></i>
        <p className="standard-fz">
          {`${theme} Mode`}
        </p>
      </div>
    </header>
  );
}
