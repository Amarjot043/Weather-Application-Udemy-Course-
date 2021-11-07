const request = require('request');


const forecast = (latitude, longitude,  callback) =>{
    
    
    const url = `http://api.weatherstack.com/current?access_key=66bf16052acede8944f3cb7bbb6f70a5&query=${latitude},${longitude}`;
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to fetch data', undefined);
            
        } 
        else if(response.body.error)
         {
            callback(' Location is nonexistent ', undefined)
        }
         else
          {
        
        
            
           callback(undefined, `${response.body.current.weather_descriptions[0]} . It is currently ${response.body.current.temperature}  degress out.`);
        }
    })
     

}
module.exports = { forecast };