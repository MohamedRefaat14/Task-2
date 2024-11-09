const request =require("request")
const geocode = (country, callback) => {
const geocodeurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+country+".json?access_token=pk.eyJ1IjoibW9oYW1lZDE0MTIiLCJhIjoiY20zYTlrYXhjMTcydTJucjFqMWRxZXNwbyJ9.yojIWlAvUU2XNhoZ7x_yNA"
request({url : geocodeurl, json : true}, (error , response)=>{
   if(error)
    callback("Don't reach this site",undefined)
   else if(response.body.message)
    callback(response.body.message,undefined)
   else if(response.body.features.length == 0)
    callback("country name is not found",undefined)
   else{
    callback(undefined,{
     longtitude : response.body.features[0].center[0],
     latitude : response.body.features[0].center[1]
   })
   }
}

)
}
module.exports = geocode