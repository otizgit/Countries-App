import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export default function FilterAndSearch(props) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function trackSearch(e) {
    let value = e.target.value;
    setSearch(value);
  }

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${search}`)
      .then((response) => response.json())
      .then((data) => {
        if (search !== "") {
          if (!data.length) {
            alert(
              "Oops, this country does not exist, please check the spelling or try searching another country"
            );
          } else {
            props.countries(data);
          }
        }
      })
      .catch(() => {
        alert(
          "Oops, an error occured, please check your connection and try again"
        );
      });
  }, [props.trigger]);

  function handleSubmit(e) {
    e.preventDefault();
    props.triggerSearch((prevTrigger) => !prevTrigger);
  }

  function handleClick(e) {
    const target = e.target.innerText;
    const filteredCountries = props.data.filter((country) => {
      return country.region === target;
    });

    filteredCountries.sort((a, b) => {
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

    props.countries(filteredCountries);
  }

  function handleChange() {
    setIsOpen((prevOpen) => !prevOpen);
  }

  const filteredData = props.data.reduce((values, countriesData) => {
    if (!values.includes(countriesData.region)) {
      values.push(countriesData.region);
    }
    return values;
  }, []);

  return (
    <div className="flex-main constant-padding constant-margin filter-container">
      <form className="flex" onSubmit={handleSubmit}>
        <button className="search-btn">
          <i className="fa-solid fa-magnifying-glass standard-fz transition"></i>
        </button>
        <input
          className="standard-fz blue"
          onChange={trackSearch}
          type="text"
          placeholder="Search for a country..."
          required
        />
      </form>
      <div onClick={handleChange} className="filter-div flex-main transition">
        <p className="standard-fz2 blue weight">Filter by Region</p>
        <i
          className={`fa-solid fa-chevron-down blue standard-fz2 transition ${
            isOpen ? "rotate" : ""
          }`}
        ></i>
        <ul className={`filter-items blue transition ${isOpen ? "open" : ""}`}>
          {filteredData.map((data) => {
            return (
              <li
                onClick={handleClick}
                className="blue transition"
                key={nanoid()}
              >
                {data}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
