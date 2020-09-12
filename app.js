const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

const address = process.argv[2];
if (process.argv[2] === undefined) {
  console.log("No location was provided as input.");
} else {
  //Callback Chaining
  geocode(address, (error, data) => {
    // we will have access here after geocode function has completed
    if (error) {
      return console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log("Data", forecastData);
    });
  });
}
