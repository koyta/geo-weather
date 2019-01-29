import { observable, action, runInAction, configure } from "mobx";
import axios from "axios";

configure({
  enforceActions: "observed",
});

class WeatherStore {
  @observable public weather: MWLocationWeather | null;
  @observable loading: boolean;

  constructor() {
    this.weather = null;
    this.loading = false;
  }

  @action.bound setLoading(value: boolean) {
    this.loading = value;
  }

  @action.bound requestLocationAndWeather() {
    this.setLoading(true);
    navigator.geolocation.getCurrentPosition(this.updateUserLocationSuccess, this.updateUserLocationFailure);
  }

  @action.bound updateUserLocationSuccess(position: Position) {
    this.getWeather(position.coords.latitude, position.coords.longitude);
  }

  @action.bound updateUserLocationFailure(error: PositionError) {
    alert(error.message);
  }

  @action.bound getWeather(latt: number, long: number): void {
    const url = "/weather";
    const config = { params: { latt, long } };

    axios
      .get(url, config)
      .then(response => {
        const weather: MWLocationWeather = response.data;
        runInAction(() => {
          this.weather = weather;
        });
        return Promise.resolve();
      })
      .catch(error => {
        console.error(error);
        return Promise.reject(error);
      })
      .finally(() => this.setLoading(false));
  }
}

export default WeatherStore;
