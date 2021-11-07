const request = require('request');

const geocode = (address, callback) =>{

    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYW1hcmpvdDA0MyIsImEiOiJja3V1cDl1cWoxZXlqMm5sbm44OXo1ZmZjIn0.mpW0SzThw_rhu1qoGkuG6g`;

    request({url: geocodeURL, json: true}, (error, response) =>{

        if (error) {
                    callback('Unable to connect to location services ', undefined)
                } else if (response.body.features.length === 0) {

                   callback("Unable to find location. Please try another search", undefined)
                    

                } else {  

                callback(undefined, {
                longitude: response.body.features[0].center[1],
                    latitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name  })
                }
             })
}

module.exports = geocode;