import React, { useEffect, useState } from "react";
import "../components/style.css";
import WeatherDetails from "./WeatherDetails";

function SearchMain() {
  const [searchTerm, setSearchTerm] = useState("Digos");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=8c54b6762e99abf99b738ff00b4564ad`;

      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);

      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  // 8c54b6762e99abf99b738ff00b4564ad

  // https://api.openweathermap.org/data/2.5/weather?q=Digos&appid=8c54b6762e99abf99b738ff00b4564ad
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="type city name..."
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="searchButton">Search </button>
      </div>

      {/* This is the weather details page */}
      <WeatherDetails {...tempInfo} />
    </>
  );
}

export default SearchMain;
