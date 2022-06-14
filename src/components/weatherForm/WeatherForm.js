import React from "react";
import {
  capitalizarFecha,
  capitalizarPrimeraLetra,
  conversor,
} from "../../utils/date";
import moment from "moment-timezone";
import { WeatherWeek } from "./WeatherWeek";

import sunrise from "../../assets/sunrise.svg";
import sunset from "../../assets/sunset.svg";
import plus from "../../assets/iconocruz.png";
import menos from "../../assets/icono-menos.png";
import "../SCSS/weatherForm.scss";

export const WeatherForm = ({
  setCity,
  searchCity,
  city,
  weather,
  masInfo,
  setMasInfo,
}) => {
  return (
    <div
      className={
        weather
          ? moment().format("HH:mm") > "07:00" &&
            moment().format("HH:mm") < "21:30"
            ? "app"
            : "warm"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            className="search-input"
            type="text"
            placeholder="Buscar ciudad..."
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyPress={searchCity}
          />
        </div>
        {weather.city != null && (
          <>
            <div className="box-time">
              <p className="hour">{moment().format("HH:mm")}</p>
              <p className="date">
                {capitalizarFecha(
                  capitalizarPrimeraLetra(moment().format("dddd, D MMMM"))
                )}
              </p>
            </div>
            <div className="box-weather">
              <p className="city-name-country">
                {weather.city.name}, {weather.city.country}
              </p>
              <div className="box-temp-icon">
                <span className="temDay">
                  {Math.round(weather.list[0].temp.day)} ºC
                </span>
                <img
                  className="tempIcon"
                  src={conversor(weather.list[0].weather[0].icon)}
                />
              </div>
              <div className="box-max-min">
                <span className="hot">
                  ↑ {Math.round(weather.list[0].temp.max)} º
                </span>
                <span className="cold">
                  ↓ {Math.round(weather.list[0].temp.min)} º
                </span>
              </div>
              <p className="description">
                {capitalizarPrimeraLetra(
                  weather.list[0].weather[0].description
                )}
              </p>
            </div>
            <div className="box-details">
              <div className="box-details-3">
                <p>Viento: </p>
                <p>{Math.round(weather.list[0].speed)} m/s</p>
              </div>
              <div className="box-details-3">
                <p>Humedad: </p>
                <p>{Math.round(weather.list[0].humidity)}%</p>
              </div>
              <div className="box-details-3">
                <p>Precip. : </p>
                <p>{Math.round(weather.list[0].pop)}%</p>
              </div>
            </div>
            <div className="box-details-sun">
              <div className="box-details-sun2">
                <img className="sunrise" src={sunrise} alt="sunrise" />
                <span className="sunriseAM">
                  {moment.unix(weather.list[0].sunrise).format("HH:mm")} AM
                </span>
              </div>
              <div className="box-details-sun2">
                <div className="boxPlus">
                  <img
                    className={!masInfo ? "plus" : "menos"}
                    onClick={() => {
                      setMasInfo(!masInfo);
                    }}
                    src={!masInfo ? plus : menos}
                    alt="plus"
                  />
                </div>
              </div>

              <div className="box-details-sun2">
                <span lassName="sunriseAM">
                  {moment.unix(weather.list[0].sunset).format("HH:mm")} PM
                </span>
                <img className="sunrise" src={sunset} alt="sunset" />
              </div>
            </div>
          </>
        )}
        {masInfo ? <WeatherWeek weather={weather} masInfo={masInfo} /> : null}
      </main>
    </div>
  );
};
