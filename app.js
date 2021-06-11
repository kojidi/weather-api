document.addEventListener("DOMContentLoaded", runFetching);

const weather = new Weather("new york", "us");

const city = document.getElementById("city"),
  state = document.getElementById("state"),
  changeLoBtn = document.getElementById("w-change-btn");

changeLoBtn.addEventListener("click", () => {
  if (city.value !== "") {
    weather.changeLocation(city.value, state.value);
    runFetching();
    changeLoBtn.setAttribute("data-dismiss", "modal");
  } else {
    changeLoBtn.removeAttribute("data-dismiss", "modal");
  }
});

function runFetching() {
  weather
    .getWeather()
    .then((res) => {
      showResults(res);
      weather.getOneCall(res.coord.lat, res.coord.lon).then((data) => {
        console.log(data);
        showExtra(data);
      });
    })
    .catch((err) => console.log(err));
}
