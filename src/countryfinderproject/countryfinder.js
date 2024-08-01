// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './countrystyles.css';

// function CountryFinder() {
//   const [country, setCountry] = useState('');
//   const [allCountries, setAllCountries] = useState([]);
//   const [filteredCountries, setFilteredCountries] = useState([]);

//   useEffect(() => {
//     axios.get('https://restcountries.com/v3.1/all')
//       .then((response) => {
//         setAllCountries(response.data);
//         setFilteredCountries(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching countries data:', error);
//       });
//   }, []);

//   const handleInputChange = (event) => {
//     setCountry(event.target.value);
//   };

//   const handleSearch = () => {
//     const filtered = allCountries.filter((countryData) =>
//       countryData.name.common.toLowerCase().includes(country.toLowerCase())
//     );
//     setFilteredCountries(filtered);
//   };

//   return (
//     <div className="App">
//       <h1>Country Finder</h1>
//       <div className="search-bar">
//         <input
//           type="text"
//           value={country}
//           onChange={handleInputChange}
//           placeholder="Enter country name"
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <div className="country-list">
//         {filteredCountries.map((countryData) => (
//           <div key={countryData.cca3} className="country-card">
//             <h2>{countryData.name.common}</h2>
//             <img src={countryData.flags.png} alt={`${countryData.name.common} flag`} />
//             <p><strong>Capital:</strong> {countryData.capital ? countryData.capital[0] : 'N/A'}</p>
//             <p><strong>Region:</strong> {countryData.region}</p>
//             <p><strong>Population:</strong> {countryData.population.toLocaleString()}</p>
//             <p><strong>Area:</strong> {countryData.area.toLocaleString()} km²</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CountryFinder;
