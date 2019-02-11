import * as React from "react";
import IconImg, { IconImgProps } from "./IconImg";

interface WeatherIconProps extends IconImgProps {
  weather: MWConsolidatedWeather;
}

const WeatherIcon = ({ weather, ...props }: WeatherIconProps) => {
  const src = `https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`;
  return <IconImg src={src} alt={weather.weather_state_name} {...props} />;
};

export default WeatherIcon;
