import { action, configure, observable } from "mobx";
import axios, { AxiosError } from "axios";

configure({
  enforceActions: "observed",
});

type WeatherStoreStatus = "LOOKUP" | "SUCCESS" | "FAILED" | "FETCH" | "";

class WeatherStore {
  @observable public weather: MWLocationWeather | null;
  @observable loading: boolean;
  @observable status: WeatherStoreStatus;

  constructor() {
    this.weather = null;
    this.loading = false;
    this.status = "";
  }

  @action.bound setLoading(value: boolean) {
    this.loading = value;
  }

  @action.bound setStatus(value: WeatherStoreStatus) {
    this.status = value;
  }

  @action.bound setWeather(value: MWLocationWeather) {
    this.weather = value;
  }

  @action.bound requestLocationAndWeather() {
    this.setLoading(true);
    this.setStatus("LOOKUP"); //Seeking you through space satellites
    navigator.geolocation.getCurrentPosition(this.updateUserLocationSuccess, this.updateUserLocationFailure, {
      enableHighAccuracy: true,
    });
  }

  @action.bound updateUserLocationSuccess(position: Position) {
    this.setStatus("FETCH"); //Predicting weather conditions
    this.getWeather(position.coords.latitude, position.coords.longitude)
      .then(() => {
        this.setStatus("SUCCESS");
      })
      .catch(() => {
        this.setStatus("FAILED");
      })
      .finally(() => {
        this.setLoading(false);
      });
  }

  @action.bound updateUserLocationFailure(error: PositionError) {
    alert(error.message);
    this.setStatus("FAILED"); //We can't find you, sorry 😒
  }

  @action getWeather = async (latt: number, long: number): Promise<{} | AxiosError> => {
    const url = "/weather";
    const config = { params: { latt, long } };

    try {
      const response = await axios.get(url, config);
      const { data } = response;
      this.setWeather(data);
      return Promise.resolve({});
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

export default WeatherStore;
