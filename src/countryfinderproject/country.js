

import React, { useEffect, useState } from "react";
import "./countrystyles.css"
import axios from "axios";

const CountryFinder=()=>{
    const [country,setCountry]=useState('')
    const [allCountries, setAllCountries]=useState([]);
    const [filteredCountries, setFilteredCountries]=useState([])


    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const response =await axios.get("https://restcountries.com/v3.1/all")
        .then((response)=>{
            setAllCountries(response.data)
            setFilteredCountries(response.data);
            console.log(response.data,"response")
        })
    }
    const inputHandler=(event)=>{
        setCountry(event.target.value)
    }
    const searchHandler=()=>{
        const filtered = allCountries.filter((countryData)=>
        countryData.name.common.toLowerCase().includes(country.toLowerCase()))
    setFilteredCountries(filtered)
    }
   
    return(
        <div style={{color:"black", backgroundColor:"white"}}>
            <h1>Contry Finder</h1>
            <div className="search-bar">
                <input
                 type="text"
                 value={country}
                 placeholder="Enter country name..."
                 onChange={inputHandler}/>
                 <button onClick={searchHandler}>Search</button>

            </div>
            <div className="country-list">
                {/* {filteredCountries.map((countryData) =>(
))

                } */}
               <p><strong>Capital:</strong>{}</p>
               <p><strong>Region:</strong>{}</p>
               <p><strong>Population:</strong>{}</p>
               <p><strong>Area:</strong>{}</p>

            </div>
            </div>
    )
};
export default CountryFinder;