import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { ThemeProvider } from "styled-components";
import { styled, theme } from "./theme";

import Button from "./components/Button";
import WeatherTable from "./components/WeatherTable";
import WeatherToday from "./components/WeatherToday";

import WeatherStore from "./stores/WeatherStore";
import Loading from "./components/Loading";

interface AppProps {
  weatherStore?: WeatherStore;
}

const GetWeatherContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatusText = styled.p`
  color: ${props => props.theme.primaryColor};
`;

const AppContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;

  min-height: 100%;
  width: 100%;

  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 525px) and (max-width: 1023px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    padding-left: 64px;
    padding-right: 64px;
  }

  @media (min-width: 1280px) {
    padding-left: 100px;
    padding-right: 100px;

    margin: 0 auto;
    width: 1024px;
  }
`;

@inject("weatherStore")
@observer
class App extends Component<AppProps, {}> {
  showWeather = () => {
    this.props.weatherStore!.requestLocationAndWeather();
  };

  render() {
    const { weather, loading, statusText } = this.props.weatherStore!;
    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          {weather ? (
            <>
              <WeatherToday />
              <WeatherTable />
            </>
          ) : (
            <GetWeatherContainer>
              {loading && <Loading />}
              <StatusText>{statusText}</StatusText>
              <Button label="Получить прогноз погоды" onClick={this.showWeather} disabled={loading} />
            </GetWeatherContainer>
          )}
        </AppContainer>
      </ThemeProvider>
    );
  }
}

export default App;
