const title = document.getElementById("w-location"),
  wDesc = document.getElementById("w-desc"),
  wString = document.getElementById("w-string"),
  wIcon = document.getElementById("w-icon"),
  wHumidity = document.getElementById("w-humidity"),
  wDewpoint = document.getElementById("w-dewpoint"),
  wFeelsLike = document.getElementById("w-feels-like"),
  wWind = document.getElementById("w-wind");

function showResults(data) {
  title.textContent = `${data.name}, ${data.sys.country}`;
  const desc = data.weather[0].description.split(" ");
  let descOutput = "";
  desc.forEach((desc) => {
    descOutput += `${desc[0].toUpperCase() + desc.substring(1)} `;
    return descOutput;
  });
  wDesc.textContent = descOutput;
}

function showExtra(data) {
  wString.textContent = `${Math.floor(data.current.dew_point)}°F  (${Math.floor(
    (data.current.dew_point - 32) * (5 / 9)
  )}°C)`;
  wIcon.src = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
  wHumidity.innerHTML = `<b>Relative Humidity</b> : ${data.current.humidity}%`;
  wDewpoint.innerHTML = `<b>Dewpoint</b> : ${Math.floor(
    data.current.dew_point
  )}°F  (${Math.floor((data.current.dew_point - 32) * (5 / 9))}°C)`;
  wFeelsLike.innerHTML = `<b>Feels Like</b> : ${Math.floor(
    data.current.feels_like
  )}°F  (${Math.floor((data.current.feels_like - 32) * (5 / 9))}°C)`;
  wWind.innerHTML = `<b>Wind</b> : ${data.current.wind_speed} MPH`;
}
