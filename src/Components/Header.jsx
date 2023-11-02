import React from "react";

export default function Header() {
  if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'dark')
  }
  function setDarkMode() {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    if (document.querySelector(".flex-main")) {
      const themeImage = document.querySelector(".theme-img");
      themeImage.setAttribute("src", "./images/moon.webp");
    }
  }

  function setLightMode() {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    if (document.querySelector(".flex-main")) {
      const themeImage = document.querySelector(".theme-img");
      themeImage.setAttribute("src", "./images/sun.png");
    }
  }

  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    setDarkMode();
  }

  function toggleTheme(e) {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  }

  return (
    <header className="flex-main blue constant-margin constant-padding">
      <h1 className="title">Where in the world?</h1>
      <button className="mode flex transition theme-img-wrapper">
        <input
          className="dark-mode-input"
          type="checkbox"
          id="darkmode-toggle"
          onChange={toggleTheme}
          defaultChecked={theme === "dark"}
        />
        <label htmlFor="darkmode-toggle">
          {localStorage.getItem("theme") === "dark" && (
            <img className="theme-img" src="./images/moon.webp" alt="image of the moon" />
          )}
          {localStorage.getItem("theme") === "light" && (
            <img className="theme-img" src="./images/sun.png" alt="image of the sun" />
          )}
        </label>
      </button>
    </header>
  );
}
