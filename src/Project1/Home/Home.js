import React from "react";
import { Link } from "react-router-dom";
import "./homestyle.css";

const HomePage = () => {
    return (
        <div className="home-container">
            {/* <div className="nav-bar">
                <Link to="/" className="heading1">Home</Link>
                <Link to="/countryfinder" className="heading2">Country Finder</Link>
                <Link to="/weatherApp" className="heading3">Weather App</Link>
                <Link to={"/currency converter"} className="heading1">Cureency converter</Link>
            </div> */}
            <h1>Welcome to Our Project</h1>
            <div className="cards-container">
                <div className="card">
                    <div className="country-image">
                    <h2>Country Finder</h2>
                    <p>Find information about any country.</p>
                    <Link to="/countryfinder">
                        <button>Go to Country Finder</button>
                    </Link>

                    </div>
                    
                </div>
                <div className="card">
                    <h2>Weather App</h2>
                    <p>Check the current weather in your location.</p>
                    <Link to="/weatherApp">
                        <button>Go to Weather App</button>
                    </Link>
                </div>
                <div className="card">
                    <h2>Currency Converter</h2>
                    <p>Convert currencies with the latest exchange rates.</p>
                    <Link to="/currency-converter">
                        <button>Go to Currency Converter</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
