import express from "express";
import path from "path";
import cors from "cors";
import logger from "morgan";

import weatherRouter from "./routes/weather";

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client", "build")));
app.use("/weather", weatherRouter);

app.listen(5001, function() {
  console.log("Listening on port 5001. http://localhost:5001");
});
