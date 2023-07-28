import React from "react";
import { nanoid } from "nanoid";

export default function SelectedTray(props) {
  const selectedCountryObj = props.data.filter((country) => {
    return country.name.common === props.selectedCountry;
  });

  function handleTrigger() {
    props.trigger(false);
  }

  return (
    <div
      className={`filter-overall-wrapper ${
        props.triggerDisplay ? "slide" : ""
      } constant-padding`}
    >
      <button
        onClick={handleTrigger}
        className="exit-btn standard-fz3 blue transition constant-margin"
      >
        <i className="fa-solid fa-arrow-left-long"></i>
        Back
      </button>
      {selectedCountryObj.map((data) => {
        return (
          <div key={nanoid()} className="filter-wrapper">
            <img
              className="selected-flag"
              src={data.flags.svg}
              alt={data.flags.alt}
            />
            <div className="filter-content">
              <div className="top-section">
                <h1 className="filter-title blue sec-font">
                  {data.name.common}
                </h1>
                <div className="information-wrapper">
                  <div className="filter-wrapper filter-wrapper2 filter-content-container">
                    <div>
                      {data.name.nativeName && (
                        <p className="sub-texts standard-fz3">
                          Native Name:{" "}
                          <span>
                            {Object.values(data.name.nativeName).length > 1
                              ? Object.values(data.name.nativeName)[1].official
                              : Object.values(data.name.nativeName)[0].official}
                          </span>
                        </p>
                      )}
                    </div>
                    <div>
                      <p className="sub-texts standard-fz3">
                        Top Level Domain:
                        {data.tld.map((level) => {
                          return <span key={nanoid()}> {level}</span>;
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="filter-wrapper filter-wrapper2 filter-content-container">
                    <div>
                      <p className="sub-texts standard-fz3">
                        Population:{" "}
                        <span>{data.population.toLocaleString()}</span>
                      </p>
                    </div>
                    <div>
                      {data.currencies && (
                        <p className="sub-texts standard-fz3">
                          Currencies:{" "}
                          <span className="currencies">
                            {Object.values(data.currencies)[0].name}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="filter-wrapper filter-wrapper2 filter-content-container">
                    <div>
                      <p className="sub-texts standard-fz3">
                        Region: <span>{data.region}</span>
                      </p>
                    </div>
                    <div>
                      {data.languages && (
                        <p className="sub-texts standard-fz3">
                          Languages:{" "}
                          {Object.values(data.languages).map((language) => {
                            return (
                              <span className="language-span" key={nanoid()}>
                                {language}
                              </span>
                            );
                          })}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="filter-wrapper filter-wrapper2 filter-content-container">
                    <div>
                      {data.subregion && (
                        <p className="sub-texts standard-fz3">
                          Sub Region: <span>{data.subregion}</span>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="filter-wrapper filter-wrapper2 filter-content-container">
                    <div>
                      {data.capital && (
                        <p className="sub-texts standard-fz3">
                          Capital: <span>{data.capital}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-section">
                <div>
                  {data.borders && (
                    <p className="sub-texts border-text standard-fz3">
                      Border Countries: <br />{" "}
                      <span className="border-wrapper">
                        {data.borders.map((border) => {
                          return (
                            <span className="borders" key={nanoid()}>
                              {border}
                            </span>
                          );
                        })}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
