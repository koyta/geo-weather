import express from "express";
import axios, { AxiosResponse, AxiosError } from "axios";
import MetaWeather from "../utils/MetaWeatherAPI";

const router = express.Router();

/* GET weather by latitude and longtitude. */
router.get("", function(req, res) {
  const { latt, long } = req.query;

  // If not latt or long provided in query, return
  if (!latt || !long) {
    res.sendStatus(400);
  }

  axios
    .get(MetaWeather.locationByLattLong(latt, long))
    .then((response: AxiosResponse) => {
      const { woeid } = response.data[0];
      return Promise.resolve(woeid);
    })
    .then((woeid: number) => {
      axios
        .get(MetaWeather.weatherByWoeid(woeid))
        .then(response => {
          res.send(response.data);
        })
        .catch((e: AxiosError) => {
          console.error(e);
          res.sendStatus(500);
          return Promise.reject(e);
        });
    })
    .catch((e: AxiosError) => {
      console.error(e);
      res.sendStatus(500);
    });
});

export default router;
