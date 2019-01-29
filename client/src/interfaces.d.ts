// MW = MetaWeather

interface MWLocationWeather {
  consolidated_weather: Array<MWConsolidatedWeather>;
  latt_long: string;
  location_type: string;
  parent: MWLocationParent;
  sources: Array<MWWeatherSource>;
  sun_rise: datetime;
  sun_set: string;
  time: string;
  timezone: string;
  timezone_name: string;
  title: string;
  woeid: number;
}

interface MWConsolidatedWeather {
  air_pressure: number;
  applicable_date: string;
  created: string;
  humidity: number;
  id: number;
  max_temp: number;
  min_temp: number;
  predictability: number;
  the_temp: number;
  visibility: number;
  weather_state_abbr: string;
  weather_state_name: string;
  wind_direction: number;
  wind_direction_compass: string;
  wind_speed: number;
}

interface MWLocationParent {
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
}

interface MWWeatherSource {
  title: string;
  slug: string;
  url: string;
  crawl_rate: number;
}
