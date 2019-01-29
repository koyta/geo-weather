class MetaWeather {
  constructor() {
    this.root = "https://www.metaweather.com/api";
  }
  locationByLattLong(latt, long) {
    return `${this.root}/location/search/?lattlong=${latt},${long}`;
  }
  weatherByWoeid(woeid) {
    return `${this.root}/location/${woeid}`;
  }
}

export default new MetaWeather();
