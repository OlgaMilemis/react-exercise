import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1 className="mt-5">Berlin</h1>
      <ul>
        <li>Wednesday 18:05</li>
        <li>Rainy</li>
      </ul>
      <div className="row mt-5">
        <div className="col-6">
          <img
            className="icon"
            src="https://www.accuweather.com/images/weathericons/07.svg"
          />
          <span className="temperature">2</span>
          <span className="units">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 70%</li>
            <li>Windsepeed: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
