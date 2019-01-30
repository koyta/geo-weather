import { action, configure, observable, runInAction } from "mobx";
import axios from "axios";

configure({
  enforceActions: "observed",
});

class WeatherStore {
  @observable public weather: MWLocationWeather | null;
  @observable loading: boolean;
  @observable statusText: string;

  constructor() {
    this.weather = null;
    this.loading = false;
    this.statusText = "";
  }

  @action.bound setLoading(value: boolean) {
    this.loading = value;
  }

  @action.bound setStatusText(value: string) {
    this.statusText = value;
  }

  @action.bound requestLocationAndWeather() {
    this.setLoading(true);
    this.setStatusText("Seeking you through space satellites");
    navigator.geolocation.getCurrentPosition(this.updateUserLocationSuccess, this.updateUserLocationFailure, {
      enableHighAccuracy: true,
    });
  }

  @action.bound updateUserLocationSuccess(position: Position) {
    this.setStatusText("Predicting weather conditions");
    this.getWeather(position.coords.latitude, position.coords.longitude).then(() => {
      this.setLoading(false);
      this.setStatusText("");
    });
  }

  @action.bound updateUserLocationFailure(error: PositionError) {
    alert(error.message);
    this.setStatusText("We can't find you, sorry 😒");
  }

  @action.bound getWeather(latt: number, long: number): Promise<object> {
    const url = "/weather";
    const config = { params: { latt, long } };

    return axios
      .get(url, config)
      .then(response => {
        const weather: MWLocationWeather = response.data;
        runInAction(() => {
          this.weather = weather;
        });
        return Promise.resolve({});
      })
      .catch(error => {
        console.error(error);
        return Promise.reject(error);
      });
  }
}

export default WeatherStore;
