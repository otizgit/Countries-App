import React, { useState, useEffect } from "react";
import DisplayTray from "./Components/DisplayTray";
import SelectedTray from "./Components/SelectedTray";
import FilterAndSearch from "./Components/FilterAndSearch";
import Header from "./Components/Header";

export default function App() {
  const [allData, setAllData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [triggerDisplay, setTriggerDisplay] = useState(false);
  const [triggerSearch, setTriggerSearch] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(false);
  const [gridDisplay, setGridDisplay] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setAllData(data);

        if (data.length) {
          function generateNonRepeatingRandomNumbers() {
            let numbers = [];
            while (numbers.length < 8) {
              let randomNumber = Math.floor(Math.random() * 251);
              if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
              }
            }
            return numbers;
          }
          let randomNumbersArray = generateNonRepeatingRandomNumbers();

          const randomCountries = [];
          randomNumbersArray.forEach((randomNumber) => {
            randomCountries.push(data[randomNumber]);
          });
          setCountries(randomCountries);
        }
      });
  }, []);

  useEffect(() => {
    if (countries.length && countries.length === 1) {
      setGridDisplay("single-grid");
    } else {
      setGridDisplay("");
    }
  }, [countries]);

  return (
    <div>
      <Header />
      {!triggerDisplay && (
        <FilterAndSearch
          data={allData}
          countries={setCountries}
          trigger={triggerSearch}
          triggerSearch={setTriggerSearch}
        />
      )}
      {!triggerDisplay && (
        <DisplayTray
          gridDisplay={gridDisplay}
          data={countries}
          trigger={setTriggerDisplay}
          selectedCountry={setSelectedCountry}
        />
      )}
      {triggerDisplay && (
        <SelectedTray
          data={allData}
          selectedCountry={selectedCountry}
          trigger={setTriggerDisplay}
          triggerDisplay={triggerDisplay}
        />
      )}
    </div>
  );
}
