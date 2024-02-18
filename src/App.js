import logo from './logo.svg';
import './App.css';
import react, { useState } from "react";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(null);
  const [desc, setDesc] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  function showTemp(response) {
    console.log(response);
    setTemp(Math.round(response.data.main.temp));
    setDesc(response.data.weather[0].description);
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e3e5873dd1cc627eb6ff6bc0d7327f5&units=metric`;
    axios.get(url).then(showTemp);
  }

  function updateCity(event) {
    let city = event.target.value;
    setCity(city);
  }

  if (temp) {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={updateCity} placeholder="Enter a city" />
          <input type="submit" value="Search" />
        </form>
        <h3>Temperature: {temp}</h3>
        <h3>Description: {desc}</h3>
        <h3>Humidity: {humidity}</h3>
        <h3>Wind: {wind}</h3>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={updateCity} placeholder="Enter a city" />
          <input type="submit" value="Search" />
        </form>
       
      </div>
    );
  }
}
