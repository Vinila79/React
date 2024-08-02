// import axios from "axios";
import { useEffect, useState } from "react";
import "./weatherapp.css";

import cloudy from "./assets/weather.jpg"
import rainy from "./assets/images.jpg"
import sunnyweather from "./assets/download.jpg"
import { Link } from "react-router-dom";
// import bgimg from "./assets/weather2.jpg"

const WeatherApp=()=>{
    const [city,setCity]=useState("")
    const [weather,setWeather]=useState(null)  
    const [bgImage, setBgImage] = useState("");
    console.log(weather)
    // console.log(weather.main.temp)
const YOUR_API_KEY="80910612dcf7b8881a64531ad282247c"
const fecthData=()=>
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${YOUR_API_KEY}&units=metric`)
    .then(res=>res.json())
    .then(res => {
        setWeather(res);
        if (res.weather[0].main === "Clouds") {
            setBgImage(cloudy);
        } else if (res.weather[0].main === "Rain") {
            setBgImage(rainy);
        } else {
            setBgImage(sunnyweather);
        }
    });
}

useEffect(() => {
    if (bgImage) {
        document.body.style.backgroundImage = `url(${bgImage})`;
        document.body.style.backgroundSize ="cover"; 
        document.body.style.backgroundAttachment = "fixed"; 
     
    }
}, [bgImage]);
return(
  
  
   <div className="App">

          <div className="nav-bar">
      <Link to={"/"} className="heading1">Home</Link>
      <Link to={"/countryfinder"} className="heading2">Country Finder</Link>
      <Link to={"/weatherApp"} className="heading3">Weather App</Link>
      <Link to={"/currency converter"} className="heading1">Cureency Converter</Link>
      
      </div>
  
    <div className="weather-app" style={{ backgroundImage: `url(${bgImage})` }}>
         
  <div className="weather-info">
  <h1>Weather App</h1>
    <input type="text"  placeholder="search city here... " onChange={(e)=>setCity(e.target.value)}/>
    <button onClick={fecthData}>get Weather</button>
   {weather && <div className="weather-details">
    <p>City:{weather.name}</p>
    <p>Temparature:{weather.main.temp}°C</p>
    <p>{weather.weather[0].main}</p>
    <p>Humidity:{weather.main.humidity}%</p>
    <p>Wind-Speed:{weather.wind.speed}</p>

    </div>}
    </div>
    </div>
    </div>
  
)
};
export default WeatherApp;