import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import Button from "./components/Button";
import AppContainer from "./components/AppContainer";
import WeatherTable from "./components/WeatherTable";
import WeatherToday from "./components/WeatherToday";

import { theme } from "./theme";
import WeatherStore from "./stores/WeatherStore";
import { ThemeProvider } from "styled-components";
import Loading from "./components/Loading";

interface AppProps {
  weatherStore?: WeatherStore;
}

@inject("weatherStore")
@observer
class App extends Component<AppProps, {}> {
  showWeather = () => {
    this.props.weatherStore!.requestLocationAndWeather();
  };

  render() {
    const { weather, loading } = this.props.weatherStore!;
    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          {weather ? (
            <React.Fragment>
              <WeatherToday />
              <WeatherTable />
            </React.Fragment>
          ) : loading ? (
            <Loading />
          ) : null}
          <Button
            label="Получить прогноз погоды"
            onClick={this.showWeather}
            style={{ marginTop: 24 }}
            disabled={loading}
          />
        </AppContainer>
      </ThemeProvider>
    );
  }
}

export default App;
