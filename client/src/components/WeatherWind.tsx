import * as React from "react";
import { convertMphToKmh } from "../utils/functions";

const WeatherWind = ({ weather }: { weather: MWConsolidatedWeather }) => (
  <React.Fragment>
    <span>{convertMphToKmh(weather.wind_speed).toFixed(0)} km/h&nbsp;</span>
    <span>{weather.wind_direction_compass}</span>
  </React.Fragment>
);

export default WeatherWind;
