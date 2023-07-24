import React from "react";

export default function Countries(props) {
  function handleClick() {
    props.trigger(true);
    props.selectedCountry(props.name);
  }

  return (
    <div onClick={handleClick} className="country-wrapper">
      <img
        className="transition display-img"
        loading="lazy"
        src={props.flag}
        alt={props.alt}
      />
      <div className="country-content">
        <p className="country-name standard-fz4 blue sec-font">{props.name}</p>
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
    </div>
  );
}
