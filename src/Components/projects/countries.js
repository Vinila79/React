import axios from "axios";
import { useEffect, useState } from "react";



const Wether = () =>{

    const [CountryData, setCountryData] = useState([]);

    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all").then(Response => setCountryData(Response.data) )
    },[]);

    const Mycountry =() =>{
        CountryData.map((items) =>{
            return console.log(items.name.common)
        })
    }

    Mycountry()
  
    return(
        <>
        <h1>country listing</h1>

        <select>
            {/* {CountryData.map(eachCountry) =>{
                <option value={eachCountry}>{eachCountry}</option>
            }} */}




        </select>
        </>
    )
}
export default Wether;