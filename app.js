const request = require("postman-request");
const url =
  "http://api.weatherstack.com/current?access_key=c86b952bd99f8e889997f77aaf4d27fe&%20query=37.8267,-122.4233&units=f";
request({ url: url,json:true}, (error, response) => {
//   const data = response.body.current;
    console.log(response.body.current.weather_descriptions[0]+ '. It is currently '+response.body.current.temperature+" degrees out . It feels like "+ response.body.current.feelslike+" degrees out.");
});

// Geocoding : Process of taking an address and converting them into latitude and longitude pair 
// Adress -> Lat/Long -> Weather

const geoCodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FtaXJrcjI1MjciLCJhIjoiY2tleG9tZmRuNGZuazJ4cGkzbzZsM3V5ciJ9.d3aXbSrMRBcGyznIWJiKyA&limit=1";
// const geoCodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${"Delhi"}.json?access_token=pk.eyJ1Ijoic2FtaXJrcjI1MjciLCJhIjoiY2tleG9tZmRuNGZuazJ4cGkzbzZsM3V5ciJ9.d3aXbSrMRBcGyznIWJiKyA&limit=1`;
request({ url:geoCodeURL,json:true}, (error,response) => {
    const coordinates = response.body.features[0].center;
    latitude = coordinates[1]
    longitude = coordinates[0]
    console.log("latitude = " + latitude+" longitude = " + longitude)
})