const request = require("postman-request");
// Geocoding : Process of taking an address and converting them into latitude and longitude pair 
// Adress -> Lat/Long -> Weather
const geocode = (address, callback) => {
    const geoCodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2FtaXJrcjI1MjciLCJhIjoiY2tleG9tZmRuNGZuazJ4cGkzbzZsM3V5ciJ9.d3aXbSrMRBcGyznIWJiKyA&limit=1`;
    request({ url:geoCodeURL,json:true}, (error,response) => {
    if (error) {
        callback('Unable to connect to the Location Service !!',undefined);
    }
    else if(response.body.message){
        callback('Unable to find Location !!',undefined)
    } 
    else if(response.body.features.length === 0){
        callback("Invalid Search !! Try another search.",undefined)
    }
    else {
        const coordinates = response.body.features[0].center; 
        callback(undefined,{
            latitude: coordinates[1],
            longitude: coordinates[0],
            location: response.body.features[0].place_name
        })
    }
})
}

module.exports = geocode