import React, { useState, useEffect } from "react";

export default function Header() {
  const body = document.body;
  let lightTheme = "light";
  let darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }
  if (theme === lightTheme || theme === darkTheme) {
    body.setAttribute("data-theme", theme);
  } else {
    body.setAttribute("data-theme", lightTheme);
  }

  function toggleTheme(e) {
    if (theme === darkTheme) {
      body.setAttribute("data-theme", lightTheme);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
      e.target.src = "sun.png";
    } else {
      body.setAttribute("data-theme", darkTheme);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
      e.target.src = "moon.webp";
    }
  }

  return (
    <header className="flex-main blue constant-margin constant-padding">
      <h1 className="title">Where in the world?</h1>
      <div
        onClick={toggleTheme}
        className="mode flex transition theme-img-wrapper"
      >
        <img
          className="theme-img"
          src={
            localStorage.getItem("theme") === "dark" ? "moon.webp" : "sun.png"
          }
          alt=""
        />
      </div>
    </header>
  );
}
