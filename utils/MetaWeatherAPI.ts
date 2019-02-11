class MetaWeather {
  root: string = "";

  constructor() {
    this.root = "https://www.metaweather.com/api";
  }
  locationByLattLong(latt: number, long: number) {
    return `${this.root}/location/search/?lattlong=${latt},${long}`;
  }
  weatherByWoeid(woeid: number) {
    return `${this.root}/location/${woeid}`;
  }
}

export default new MetaWeather();
