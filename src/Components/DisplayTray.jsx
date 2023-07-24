import React from "react";
import { nanoid } from "nanoid";
import Countries from "./Countries";

export default function DisplayTray(props) {
  const displayElement = props.data.map((dataEl) => {
    return (
      <Countries
        data={props.data}
        selectedCountry={props.selectedCountry}
        trigger={props.trigger}
        key={nanoid()}
        flag={dataEl.flags.svg}
        alt={dataEl.flags.alt}
        name={dataEl.name.common}
        population={dataEl.population}
        region={dataEl.region}
        capital={dataEl.capital}
      />
    );
  });

  return (
    <div className={`countries-wrapper grid ${props.gridDisplay} constant-padding`}>
      <img className="earth" src="./bgImage.webp" alt="the world" />
      {displayElement}
    </div>
  );
}
