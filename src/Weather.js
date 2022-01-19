import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function displayWeather(response) {
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form className="row mt-5">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              autoFocus="on"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="Submit" value="Search" className="btn btn-success" />
          </div>
        </form>
        <h1 className="mt-5">{weatherData.city}</h1>
        <ul>
          <li>Wednesday 18:05</li>
          <li clasName="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-5">
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Windsepeed: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5eac19cf21f53d5d30820a9a9bafd9f0";
    let city = "Moscow";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    return "Searching...";
  }
}
