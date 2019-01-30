import * as React from "react";
import { inject, observer } from "mobx-react";
import { config, Spring } from "react-spring";

import { styled } from "../theme";
import WeatherStore from "../stores/WeatherStore";

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

    return (
      <Spring from={{ number: 0 }} to={{ number: +currentWeather.the_temp }} config={config.molasses}>
        {spring => <Temperature>{spring.number.toFixed(1)}&nbsp;°C</Temperature>}
      </Spring>
    );
  }
}

export default WeatherCurrentTemp;
