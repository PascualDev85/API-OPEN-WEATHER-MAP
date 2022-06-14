import React from "react";
import moment from "moment-timezone";
import Moment from "moment/locale/es";
import { capitalizarPrimeraLetra, conversor } from "../../utils/date";

import humidity from "../../assets/humidity.svg";
import wind from "../../assets/wind.svg";
import temp from "../../assets/temp.png";
import "../SCSS/weatherWeek.scss";

export const WeatherWeek = ({ weather }) => {
  return (
    <div className="box-week">
      {weather
        ? weather.list.map((item, index) => {
            return (
              <div className="box-week-detail" key={index}>
                <div>
                  <p className="pDay">
                    {capitalizarPrimeraLetra(
                      moment.unix(item.dt).tz("Europe/Madrid").format("dddd D")
                    )}
                  </p>
                  <img
                    className="iconosTiempo2"
                    src={conversor(item.weather[0].icon)}
                  />
                </div>

                <div className="box-humidity">
                  <img className="humidity" src={wind} alt="wind" />
                  <span>{Math.round(item.speed)} m/s</span>
                </div>
                <div className="box-humidity">
                  <img
                    className="humidity humidity2"
                    src={humidity}
                    alt="humidity"
                  />
                  <span>{Math.round(item.humidity)}%</span>
                </div>
                <div className="box-humidity">
                  <img
                    className="humidity humidity3"
                    src={temp}
                    alt="humidity"
                  />
                  <span className="tempMaxMix">
                    {Math.round(item.temp.max)}º / {Math.round(item.temp.min)}º
                  </span>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};
