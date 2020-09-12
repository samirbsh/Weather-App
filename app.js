const request = require("postman-request");
const geocode = require("./utils/geocode.js")
// const url =
//   "http://api.weatherstack.com/current?access_key=c86b952bd99f8e889997f77aaf4d27fe&%20query=37.8267,-122.4233&units=f";
// request({ url: url,json:true}, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to weather service !!");
//     }
//     else if(response.body.error){
//         console.log("Unable to find Weather !!")
//     }
//      else {
//         console.log(response.body.current.weather_descriptions[0]+ '. It is currently '+response.body.current.temperature+" degrees out . It feels like "+ response.body.current.feelslike+" degrees out.");
//     }  
// });

geocode('Patna',(error,data)=>{
    // we will have access here after geocode function has completed
    console.log('Error : ',error)
    console.log('data : ',data)
})