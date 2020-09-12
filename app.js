const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

const address = process.argv[2];
if (process.argv[2] === undefined) {
  console.log("No location was provided as input.");
} else {
  //Callback Chaining
  geocode(address, (error, {latitude, longitude, location}={}) => {     // a default object is provided
    // we will have access here after geocode function has completed
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log("Data", forecastData);
    });
  });
}
