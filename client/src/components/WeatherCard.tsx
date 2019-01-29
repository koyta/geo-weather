import * as React from "react";
import { styled } from "../theme";
import { format, parse } from "date-fns";
import WeatherIcon from "./WeatherIcon";

export const Card = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  background: #fafafa;

  padding: 16px 12px;
  border-radius: 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    height: 100%;
    width: 18%;
    flex-direction: column;
    margin-bottom: 0;
  }
`;

export const Date = styled.time`
  display: block;
  font-size: 16px;
  flex-basis: 20%;
  font-weight: 300;

  @media (min-width: 768px) {
    flex-basis: auto;
  }
`;

export const StateName = styled.h3`
  margin: 0;
  font-weight: 300;
  font-size: 14px;
  flex-basis: 35%;

  @media (min-width: 768px) {
    flex-basis: auto;
  }
`;

export const Temperature = styled.div`
  display: inline-flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 300;
  flex-basis: 25%;

  @media (min-width: 768px) {
    flex-basis: auto;
  }
`;

interface WeatherCardProps {
  weather: MWConsolidatedWeather;
}

class WeatherCard extends React.PureComponent<WeatherCardProps, {}> {
  render() {
    const { weather } = this.props;
    const date = parse(weather.applicable_date);
    const formattedDate = format(date, "DD/MM");
    return (
      <Card>
        <Date dateTime={weather.applicable_date}>{formattedDate}</Date>
        <StateName>{weather.weather_state_name}</StateName>
        <Temperature>
          <span>↑ {weather.max_temp.toFixed(0)} °C</span>
          <span>↓ {weather.min_temp.toFixed(0)} °C</span>
        </Temperature>
        <WeatherIcon weather={weather} />
      </Card>
    );
  }
}

export default WeatherCard;
