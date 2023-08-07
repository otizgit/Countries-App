import React, { useState, useEffect } from "react";
import DisplayTray from "./DisplayTray";
import FilterAndSearch from "./FilterAndSearch";

export default function Home(props) {
  const [triggerSearch, setTriggerSearch] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(false);
  const [gridDisplay, setGridDisplay] = useState("");

  useEffect(() => {
    if (props.countries.length && props.countries.length === 1) {
      setGridDisplay("single-grid");
    } else {
      setGridDisplay("");
    }
  }, [props.countries]);

  return (
    <div className="overall-container">
      <FilterAndSearch
        data={props.allData}
        countries={props.setCountries}
        trigger={triggerSearch}
        triggerSearch={setTriggerSearch}
        triggerRandomCountries={props.setRandomCountriesDisplay}
      />
      <DisplayTray
        gridDisplay={gridDisplay}
        data={props.countries}
        selectedCountry={setSelectedCountry}
      />
    </div>
  );
}
