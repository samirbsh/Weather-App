const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  //const url = "http://api.weatherstack.com/current?access_key=c86b952bd99f8e889997f77aaf4d27fe&%20query=37.8267,-122.4233"
  const url = `http://api.weatherstack.com/current?access_key=c86b952bd99f8e889997f77aaf4d27fe&%20query=${encodeURIComponent(
    latitude
  )},${encodeURIComponent(longitude)}`;
  console.log(url);
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service !!", undefined);
    } else if (response.body.error) {
      callback("Unable to find Weather !!", undefined);
    } else {
      callback(undefined, {
        weatherDescription: response.body.current.weather_descriptions[0],
        temperature: response.body.current.temperature,
        feelsLike: response.body.current.feelslike,
        location:
          response.body.location.name +
          ", " +
          response.body.location.region +
          " ," +
          response.body.location.country,
      });
    }
  });
};

module.exports = forecast;
