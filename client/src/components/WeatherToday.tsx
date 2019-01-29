import * as React from "react";
import { inject, observer } from "mobx-react";
import { parse, format } from "date-fns";

import WeatherStore from "../stores/WeatherStore";
import { styled } from "../theme";

import WeatherCurrentTemp from "./WeatherCurrentTemp";
import WeatherMaxTemp from "./WeatherMaxTemp";
import WeatherMinTemp from "./WeatherMinTemp";
import WeatherWind from "./WeatherWind";

const City = styled.span`
  margin-bottom: 16px;
`;

const Date = styled.time``;

const Container = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font-size: 1.125rem;
  color: white;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  // Please don't shoot me in the head for this
  & > * {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const MaxMinTemperatures = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;

  // I'm lazy, sorry
  & > span:nth-child(1) {
    margin-right: 4px;
  }
`;

const Wind = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 16px;
`;

interface WeatherTodayProps {
  weatherStore?: WeatherStore;
}

@inject("weatherStore")
@observer
class WeatherToday extends React.Component<WeatherTodayProps, {}> {
  render() {
    const { weather } = this.props.weatherStore!;

    if (!weather) {
      return null;
    }

    const currentWeather = weather.consolidated_weather[0];
    const date = parse(currentWeather.applicable_date);

    return (
      <Container>
        <InformationContainer>
          <City>You are in&nbsp;{weather.title}</City>
          <Date dateTime={date.toUTCString()}>{format(date, "dddd, DD MMMM")}</Date>
        </InformationContainer>
        <WeatherContainer>
          <WeatherCurrentTemp />
          <MaxMinTemperatures>
            <WeatherMaxTemp weather={currentWeather} />
            <WeatherMinTemp weather={currentWeather} />
          </MaxMinTemperatures>
          <Wind>
            <WeatherWind weather={currentWeather} />
          </Wind>
        </WeatherContainer>
      </Container>
    );
  }
}

export default WeatherToday;
