import * as React from "react";
import { styled, theme } from "../theme";
import { inject, observer } from "mobx-react";
import WeatherStore from "../stores/WeatherStore";
import { parse, format } from "date-fns";
import WeatherCurrentTemp from "./WeatherCurrentTemp";

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

  font-size: 1.2rem;
  color: white;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
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
          <City>You are in {weather.title}</City>
          <Date dateTime={date.toUTCString()}>{format(date, "dddd, DD MMMM")}</Date>
        </InformationContainer>
        <WeatherCurrentTemp />
      </Container>
    );
  }
}

export default WeatherToday;
