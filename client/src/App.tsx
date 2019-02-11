import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { ThemeProvider } from "styled-components";
import { styled, theme } from "./theme";

import Button from "./shared/Button";
import WeatherList from "./components/WeatherList";
import WeatherToday from "./components/WeatherToday";

import WeatherStore from "./stores/WeatherStore";
import Loading from "./shared/Loading";

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

  getStatusText = () => {
    const { status } = this.props.weatherStore!;
    switch (status) {
      case "LOOKUP":
        return "Seeking you through space satellites";
      case "SUCCESS":
        return "";
      case "FETCH":
        return "Predicting weather conditions";
      case "FAILED":
        return "We can't find you, sorry 😒";
    }
  };

  render() {
    const { weather, loading, status } = this.props.weatherStore!;
    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          {weather ? (
            <>
              <WeatherToday />
              <WeatherList />
            </>
          ) : (
            <GetWeatherContainer>
              {loading && <Loading />}
              <StatusText>{this.getStatusText()}</StatusText>
              <Button label="Получить прогноз погоды" onClick={this.showWeather} disabled={loading} />
            </GetWeatherContainer>
          )}
        </AppContainer>
      </ThemeProvider>
    );
  }
}

export default App;
