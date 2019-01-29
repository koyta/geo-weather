import * as React from "react";
import styled from "styled-components";

const IconImg = styled.img<{ size?: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: ${props => props.size}px;
  width: ${props => props.size}px;
`;

interface WeatherIconProps {
  weather: MWConsolidatedWeather;
  size?: number;
}

const WeatherIcon = ({ weather, ...props }: WeatherIconProps) => {
  const src = `https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`;
  return <IconImg src={src} alt={weather.weather_state_name} size={props.size} />;
};

WeatherIcon.defaultProps = {
  size: 24,
};

export default WeatherIcon;
