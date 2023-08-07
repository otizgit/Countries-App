import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SelectedTray from "./Components/SelectedTray";
import NotFound from "./Components/NotFound";
import Header from "./Components/Header";
import ScrollButton from "./Components/ScrollButton";

export default function App() {
  const [allData, setAllData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [randomCountriesDisplay, setRandomCountriesDisplay] = useState(false);

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

          randomCountries.sort((a, b) => {
            const firstCountry = a.name.common.toLowerCase();
            const restCountries = b.name.common.toLowerCase();
            if (firstCountry < restCountries) {
              return -1;
            }
            if (firstCountry > restCountries) {
              return 1;
            }
            return 0;
          });

          setCountries(randomCountries);
        }
      });
  }, [randomCountriesDisplay]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/Countries-App/"
          element={
            <Home
              allData={allData}
              countries={countries}
              setCountries={setCountries}
              setRandomCountriesDisplay={setRandomCountriesDisplay}
            />
          }
        />
        <Route
          path="/Countries-App/Country/:id"
          element={<SelectedTray data={allData} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollButton />
    </>
  );
}
