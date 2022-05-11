const WEATHER_URL="https://goweather.herokuapp.com/weather/";
const weat=document.querySelector(".well");
function weathercall(){
    const wurl=WEATHER_URL.concat(document.getElementById("cityname").value);
    const promise=fetch(wurl);
    promise.
    then(function(response){
       const processedResponse= response.json();
       return processedResponse;
    })
    .then(function(processedResponse){
    document.querySelector(".temperature").innerText=processedResponse.temperature;
    document.querySelector(".description").innerText=processedResponse.description;
    document.querySelector(".wind").innerText=processedResponse.wind;
    if(parseInt(processedResponse.temperature)<10){
        document.body.style.backgroundImage="url(mountain-1376045.jpg)";
    }
    else if(parseInt(processedResponse.temperature)>=10 && parseInt(processedResponse.temperature)<30){
        document.body.style.backgroundImage="url(mountain-1557554.jpg)";
    }
    else{
        document.body.style.backgroundImage="url(desert-1404575.jpg)";
    }
    });
}
document.getElementById("submit").addEventListener("click",weathercall);