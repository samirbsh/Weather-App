const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

geocode("Patna", (error, data) => {
  // we will have access here after geocode function has completed
  console.log("Error : ", error);
  console.log("data : ", data);
});

forecast(25.61, 85.14139, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
