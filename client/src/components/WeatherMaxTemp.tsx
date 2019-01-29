import * as React from "react";

interface WeatherMaxTempProps {
  weather: MWConsolidatedWeather;
}

const WeatherMaxTemp = (props: WeatherMaxTempProps) => <span>↑ {props.weather.max_temp.toFixed(0)}&nbsp;°C</span>;

export default WeatherMaxTemp;
