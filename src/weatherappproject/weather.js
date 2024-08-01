// import axios from "axios";
import { useEffect, useState } from "react";
import "./weatherapp.css";

import cloudy from "./assets/cloudy.jpg"
import rainy from "./assets/images.jpg"
import sunnyweather from "./assets/sunnyweather.jpg"

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
        document.body.style.backgroundSize ="cover"; // Optional: Adjust background size
        document.body.style.backgroundAttachment = "fixed"; // Optional: Fix background position
     
    }
}, [bgImage]);
return(
    <div className="weather-app">
  <div className="weather-info" style={{ backgroundImage: `url(${bgImage})` }}>
    
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
  
)
};
export default WeatherApp;