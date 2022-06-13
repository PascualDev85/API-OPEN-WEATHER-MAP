import React, { useEffect, useState } from "react";
import { API } from "../services/apiKey";
import { WeatherForm } from "./weatherForm/WeatherForm";

import "./SCSS/infoMeteo.scss";
import { WeatherWeek } from "./weatherForm/WeatherWeek";

export const InfoMeteo = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [masInfo, setMasInfo] = useState(false);

  const geocalition = useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(
        `${API.url}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&cnt=5&units=metric&APPID=${API.key}&lang=es`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
        });
    });
  }, []);

  const searchCity = (e) => {
    if (e.key === "Enter") {
      fetch(`${API.url}?q=${city}&units=metric&cnt=7&appid=${API.key}&lang=es`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setCity("");
          console.log(result);
        });
    }
  };

  return (
    <div>
      <WeatherForm
        setCity={setCity}
        searchCity={searchCity}
        masInfo={masInfo}
        setMasInfo={setMasInfo}
        city={city}
        weather={weather}
        geocalition={geocalition}
      />
    </div>
  );
};
