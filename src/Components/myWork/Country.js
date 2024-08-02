import React, { useEffect, useState } from "react";

import axios from "axios";

const CountryFinders = () => {
  const [country, setCountry] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setAllCountries(response.data);
        setFilteredCountries(response.data);
        console.log(response.data, "response");
      });
  };

  const inputHandler = (event) => {
    setCountry(event.target.value);
  };

  const searchHandler = () => {
    const filtered = allCountries.filter((countryData) =>
      countryData.name.common.toLowerCase().includes(country.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <div >
      <h1>Country Finder</h1>
      <div className="search-bar">
        <input
          type="text"
          value={country}
          placeholder="Enter country name..."
          onChange={inputHandler}
        />
        <button onClick={searchHandler}>Search</button>
      </div>

      <div className="country-list">
        {filteredCountries.map((countryData) => (
          <div key={countryData.cca3} className="country-card">
            <h2>{countryData.name.common}</h2>
            <img src={countryData.flags.png} alt={`${countryData.name.common} flag`} />
            <p><strong>Capital:</strong> {countryData.capital ? countryData.capital[0] : 'N/A'}</p>
            <p><strong>Region:</strong> {countryData.region}</p>
            <p><strong>Population:</strong> {countryData.population.toLocaleString()}</p>
            <p><strong>Area:</strong> {countryData.area.toLocaleString()} km²</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryFinders;
