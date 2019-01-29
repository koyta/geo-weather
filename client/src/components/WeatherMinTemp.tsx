import * as React from "react";

interface WeatherMinTempProps {
  weather: MWConsolidatedWeather;
}

const WeatherMinTemp = (props: WeatherMinTempProps) => <span>↓ {props.weather.min_temp.toFixed(0)}&nbsp;°C</span>;

export default WeatherMinTemp;
