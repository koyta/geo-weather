import * as React from "react";
import { styled, theme } from "../theme";
import { inject, observer } from "mobx-react";
import { ThemeProvider } from "styled-components";
import WeatherStore from "../stores/WeatherStore";
import WeatherCard from "./WeatherCard";

const CardList = styled.div`
  margin: 0;
  padding: 0;

  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 12px;
  padding-bottom: 12px;

  @media (min-width: 768px) {
    height: 240px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

interface WeatherTableProps {
  weatherStore?: WeatherStore;
}

@inject("weatherStore")
@observer
class WeatherTable extends React.Component<WeatherTableProps, {}> {
  render() {
    const { weather } = this.props.weatherStore!;
    if (!weather) return null;

    const days = weather.consolidated_weather.slice(1, weather.consolidated_weather.length);

    return (
      <ThemeProvider theme={theme}>
        <CardList>
          {days.map((item: MWConsolidatedWeather) => {
            return <WeatherCard key={item.applicable_date} weather={item} />;
          })}
        </CardList>
      </ThemeProvider>
    );
  }
}

export default WeatherTable;
