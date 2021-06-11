class Weather {
  constructor(city, state) {
    this.apiKey = "e498ebfb9a49dcb18a3442af688023bc";
    this.city = city;
    this.state = state;
  }

  async getOneCall(lat, lon) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${this.apiKey}`
    );

    const data = await response.json();

    return data;
  }

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=imperial&appid=${this.apiKey}`
    );

    const res = await response.json();

    return res;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
