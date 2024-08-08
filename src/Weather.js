import axios from "axios";
import React from "react";
import { useState } from "react";

export default function (props) {
  let [temp, setTemp] = useState(null);
  let [wind, setWind] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [description, setDescription] = useState(null);
  let [icon, setIcon] = useState(null);

  function showWeather(response) {
    console.log(response.data);
    setTemp(Math.round(response.data.main.temperature.current));
    setDescription(response.condition.description);
    setWind(response.wind.speed);
    setHumidity(response.temperature.humidity);
    setIcon(response.condition.icon_url);
  }

  function search() {
    const apiKey = "6c4a1fa1oe455fb969c4b3876f90t341";
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  return (
    <ul>
      <li>Temperature: {temp}°C</li>
      <li>Description: {description}</li>
      <li>Humidity: {humidity}%</li>
      <li>Wind: {wind}km/h</li>
      <li>{icon}</li>
    </ul>
  );
}
