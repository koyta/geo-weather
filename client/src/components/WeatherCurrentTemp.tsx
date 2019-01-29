import * as React from "react";
import { styled } from "../theme";
import WeatherStore from "../stores/WeatherStore";
import { inject, observer } from "mobx-react";

interface WeatherCurrentTempProps {
  weatherStore?: WeatherStore;
}

const Temperature = styled.span`
  font-size: 2.5rem;

  @media (min-width: 768px) {
    font-size: 7.5rem;
  }
`;

@inject("weatherStore")
@observer
class WeatherCurrentTemp extends React.Component<WeatherCurrentTempProps, {}> {
  render() {
    const { weather } = this.props.weatherStore!;
    if (!weather) return null;
    const currentWeather = weather.consolidated_weather[0];
    return <Temperature>{currentWeather.the_temp.toFixed(1)}&nbsp;°C</Temperature>;
  }
}

export default WeatherCurrentTemp;
