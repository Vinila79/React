


import React, { useEffect, useState } from "react";
import "./countrystyles.css";
import axios from "axios";
import { Link } from "react-router-dom";

const CountryFinder = () => {
  const [country, setCountry] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 4; 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios
      .get("https://restcountries.com/v3.1/all")
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
    setCurrentPage(1); 
  };


  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);

  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="backgroundimg" style={{ color: "black", backgroundColor: "white" }}>
      
         <div className="nav-bar">
      <Link to={"/"} className="heading1">Home</Link>
      <Link to={"/countryfinder"} className="heading2">Country Finder</Link>
      <Link to={"/weatherApp"} className="heading3">Weather App</Link>
      <Link to={"/currency converter"} className="heading1">Cureency Converter</Link>
      
      </div>
          

      <h1 className="heading">Country Finder</h1>
      <div className="search-bar1">
        <input
          type="text"
          value={country}
          placeholder="Enter country name..."
          onChange={inputHandler}
        />
        <button onClick={searchHandler}>Search</button>
      </div>

      <div className="country-list">
        {currentCountries.map((countryData, index) => (
          <div key={countryData.cca3} className="country-card">
            <h2>{indexOfFirstCountry + index + 1}. {countryData.name.common}</h2>
            <img src={countryData.flags.png} alt={`${countryData.name.common} flag`} />
            <p><strong>Capital:</strong> {countryData.capital ? countryData.capital[0] : 'N/A'}</p>
            <p><strong>Region:</strong> {countryData.region}</p>
            <p><strong>Population:</strong> {countryData.population.toLocaleString()}</p>
            <p><strong>Area:</strong> {countryData.area.toLocaleString()} km²</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default CountryFinder;


