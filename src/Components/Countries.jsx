import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Countries(props) {
  function handleClick() {
    props.selectedCountry(props.name);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div onClick={handleClick} className="country-wrapper">
      <Link
        to={`/Countries-App/Country/${props.name}`}
        style={{ textDecoration: "none" }}
      >
        <div className="display-img-div">
          <img
            className="transition display-img"
            loading="lazy"
            src={props.flag}
            alt={props.alt}
          />
        </div>
        <div className="country-content">
          <p className="country-name standard-fz4 blue sec-font">
            {props.name}
          </p>
          <div className="content-sub">
            <p className="sub-texts standard-fz3">
              Population: <span>{props.population.toLocaleString()}</span>
            </p>
            <p className="sub-texts standard-fz3">
              Region: <span>{props.region}</span>
            </p>
            {props.capital && (
              <p className="sub-texts standard-fz3">
                Capital: <span>{props.capital}</span>
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
