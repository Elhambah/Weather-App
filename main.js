
var cityInput=document.getElementById("cityInput")
var subButton=document.getElementById("add")

var cityOutinfo=document.getElementById("cityoutput")
var descOutinfo=document.getElementById("description")
var tempOutinfo=document.getElementById("temp")
var windOutinfo=document.getElementById("wind")
const apiKey="3045dd712ffe6e702e3245525ac7fa38";

 async function getWeather(){
var wheaterInfo=await (
    await fetch
    (`https://api.openweathermap.org/data/2.5/weather?q=
        ${cityInput.value}&appid=${apiKey}`)).json()

    setInfoWeather(wheaterInfo)}

    function convertToCan(data){
return (data-273).toFixed(2);
    }
  

 function setInfoWeather(data){
    cityOutinfo.innerHTML=`City=${data["name"]}`
    descOutinfo.innerHTML=`Description =${data["weather"][0]["description"]}`
    tempOutinfo.innerHTML=`Temprature =${convertToCan(data["main"]["temp"])} C`
    windOutinfo.innerHTML =`Wind Speed  =${data["wind"]["speed"]} kh/h`
  
 }

 subButton.addEventListener("click",getWeather)


 
