import React, { useState, useEffect } from "react";
import DisplayTray from "./DisplayTray";
import FilterAndSearch from "./FilterAndSearch";
import ScrollButton from "./ScrollButton";
import Header from "./Header";

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
      <Header />
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
      <ScrollButton />
    </div>
  );
}
