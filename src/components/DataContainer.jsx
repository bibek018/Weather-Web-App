import React, { useState, useEffect } from "react";

export const DataContainer = ({ lat, lon }) => {
  const [city, setCity] = useState("");
  const [temp1, setTemp1] = useState("");
  const [temp2, setTemp2] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [pressure, setPressure] = useState("");
  const [visibility, setVisibility] = useState("");

 
  const getWeather = async () => {
    if (!lat || !lon) return;
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=16c8969c7a7d4de9946172740251012&q=${lat},${lon}&aqi=no`
      );
      const data = await response.json();
      updateState(data);
    } catch (err) {
      console.log("Error ", err);
    }
  };

 
  const updateState = (data) => {
    setCity(data.location.name + ", " + data.location.country);
    setTemp1(data.current.temp_c);
    setTemp2(data.current.temp_f);
    setHumidity(data.current.humidity);
    setWind(data.current.wind_kph);
    setWeather(data.current.condition.text);
    setIcon(data.current.condition.icon);
    setFeelsLike(data.current.feelslike_c);
    setPressure(data.current.pressure_mb);
    setVisibility(data.current.vis_km);
  };

  useEffect(() => {
    getWeather();
  }, [lat, lon]);

  const handleSearch = () => {
    if (!city) return;
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=16c8969c7a7d4de9946172740251012&q=${city}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => {
        updateState(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        resetState();
      });
  };

  const resetState = () => {
    setCity("");
    setTemp1("-");
    setTemp2("-");
    setHumidity("");
    setWind("");
    setWeather("");
    setIcon("");
    setFeelsLike("");
    setPressure("");
    setVisibility("");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-13 gap-4">
        <input
          type="text"
          value={city} 
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Enter city name"
          className="bg-white text-black p-2 rounded-md w-fit-content text-center text-lg font-semibold border-4 border-slate-600 md:w-1/2 lg:w-1/3 focus:outline-none scale-110 shadow-xl/5 shadow-indigo-500/50 transition-all duration-300"
        />
        <button
          onClick={handleSearch}
          className="bg-gray-500 text-white p-2 rounded-md w-25 cursor-pointer hover:bg-gray-700 transition-all duration-200"
        >
          Search
        </button>
      </div>
      <div>
        <ul className="flex flex-col justify-center items-center mt-13 gap-4 text-white text-lg font-semibold">
          <li>City: {city}</li>
          <li>
            Temperature: {temp1}°C / {temp2}°F
          </li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind} km/h</li>
          <li>Weather: {weather}</li>
          <li>Feels Like: {feelsLike}°C</li>
          <li>Pressure: {pressure} mb</li>
          {icon && (
            <li>
              <img src={icon} alt="weather icon" className="inline-block" />
            </li>
          )}
        </ul>
      </div>
    </>
  );
};