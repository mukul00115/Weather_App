document.getElementsByClassName("contentBox")[0].classList.add("visibility");
let inputbox = document.getElementsByTagName("input")[0];
let search_btn = document.getElementById("search_btn");
let weather_img = document.getElementById("image");
let temp = document.getElementById("temperature");
let Wcondition = document.getElementById("Wcondition");
let humidity = document.querySelectorAll("span")[1];
let windspeed = document.querySelectorAll("span")[3];

const showWeather = async (cityname) => {
  document.getElementsByClassName("navbar")[0].classList.add("navmoveup");
  document.getElementsByClassName("contentBox")[0].removeAttribute("hidden");
  const url = `http://api.weatherapi.com/v1/current.json?key=6dae3b9666804e129c2114032231107&q=${cityname}&aqi=no`;
  console.log(`showing data for ${cityname} PLZZ WAIT....`);
  const wdata = await fetch(url);
  const Wreport = await wdata.json();
  console.log(Wreport);
  weather_report = Wreport;
  inputbox.value = weather_report.location.name;
  temp.innerHTML = `${weather_report.current.temp_c}°C`;
  wcondition = weather_report.current.condition.text;
  Wcondition.innerHTML = wcondition;
  if (wcondition.search("Thunder") >= 0) {
    weather_img.src = "/images/thunderstorm.gif";
  } else if (wcondition.search("rain") >= 0) {
    weather_img.src = "/images/RAIN.gif";
  } else if (wcondition.search("Clear") >= 0) {
    weather_img.src = "/images/clear.gif";
  } else if (wcondition.search("Sunny") >= 0) {
    weather_img.src = "/images/SUNNY.gif";
  } else if (wcondition.search("Cloudy") >= 0) {
    weather_img.src = "/images/cloudy.gif";
  } else if (wcondition.search("Mist") >= 0) {
    weather_img.src = "/images/mist.gif";
  } else if (wcondition.search("snow") >= 0) {
    weather_img.src = "/images/snow.gif";
  } else if (wcondition.search("Partly cloudy") >= 0) {
    weather_img.src = "/images/partlycloudy.gif";
  } else if (wcondition.search("Overcast") >= 0) {
    weather_img.src = "/images/overcast.gif";
  }

  humidity.innerHTML = `${weather_report.current.humidity}%`;
  windspeed.innerHTML = `${weather_report.current.wind_kph} KM/H`;
};

search_btn.addEventListener("click", () => {
  showWeather(inputbox.value);
});

// console.log(inputbox
inputbox.addEventListener("keydown",(e)=>{
  // console.log(e.key);
  if (e.key==="Enter") {
    showWeather(inputbox.value)
    
  }

})