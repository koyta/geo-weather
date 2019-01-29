import express from "express";
const router = express.Router();
import axios from "axios";

import MetaWeather from "../utils/MetaWeatherAPI";

/* GET weather by latitude and longtitude. */
router.get("", function(req, res) {
  const { latt, long } = req.query;

  // If not latt or long provided in query, return
  if (!latt || !long) {
    res.sendStatus(400);
  }

  axios
    .get(MetaWeather.locationByLattLong(latt, long))
    .then(response => {
      const { woeid } = response.data[0];
      return Promise.resolve(woeid);
    })
    .then(woeid => {
      axios
        .get(MetaWeather.weatherByWoeid(woeid))
        .then(response => {
          res.send(response.data);
        })
        .catch(e => {
          console.error(e);
          res.sendStatus(500);
          return Promise.reject(e);
        });
    })
    .catch(e => {
      console.error(e);
      res.sendStatus(500);
    });
});

module.exports = router;
