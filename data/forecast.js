const request =require("request")
const forecast = (longtitude, latitude, callback)=>{
const weatherurl = "http://api.weatherapi.com/v1/current.json?key=77e42b5a9a39434d98b162905240111&q="+ longtitude +","+ latitude
request({url : weatherurl , json : true} , (error , response)=>{
     //console.log(response.body)
    if(error){
        callback("Network errors", undefined)
    }else if(response.body.error){
        callback(response.body.error.message, undefined)
    }else
      callback(undefined, "Name: "+response.body.location.name +" \n\tTemperature : "+ response.body.current.temp_c+" ℃")
}

)
}
module.exports = forecast