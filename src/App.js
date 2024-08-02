import { Route,  Routes } from "react-router-dom";
// import CountryFinder from "./Project1/countryfinderproject/country";
import WeatherApp from "./Project1/weatherappproject/weather";
// import RecipeList from "./recepiesproject/recepieListing";
import CountryFinder from "./Project1/countryfinderproject/country";
// import AppRoutes from "./Project1/currencycunvertor/routes";

import HomePage from "./Project1/Home/Home";
import CurrencyConverter from "./Project1/currencyconverter/currency";
import CApp from "./Project1/currencyconverter/capp";


const App =() =>{

  return(
    // <div>
    //  <Routes>
    //   <Route path="/" element={<HomePage/>}/>
    //   <Route path="/countryFinder" element={<CountryFinder/>}/>
    //   <Route path="/weatherApp" element={<WeatherApp/>}/>
    //   <Route path="/currencyconverter" element={<></>}/>
    //  </Routes>
    //  </div>
    <CApp/>
  ) 
};
export default App;
