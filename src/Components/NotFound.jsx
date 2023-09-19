import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="error-container flex constant-padding">
      <h1 className="error-title">404</h1>
      <img className="error-img" src="./astr.png" alt="error-img" />
      <h1 className="error-sub">OOPS, YOU ARE LOST IN SPACE</h1>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <button className="back-to-home transition standard-fz2">Go Back Home</button>
      </Link>
    </div>
  );
}
