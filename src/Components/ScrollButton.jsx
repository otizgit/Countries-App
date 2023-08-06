import React, { useState, useEffect } from "react";

export default function ScrollButton() {
  const [isScrolledClass, setIsScrolledClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setIsScrolledClass("scrolled");
      } else {
        setIsScrolledClass("not-scrolled");
      }
    });
  }, []);

  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <button onClick={scrollUp} className={`${isScrolledClass} to-top transition`}>
        <img src="./rocket.gif" alt="rocket" />
      </button>
    </div>
  );
}
