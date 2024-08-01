import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.city} is ${response.data.temperature.current}C`
    );
  }

  let apiKey = "6c4a1fa1oe455fb969c4b3876f90t341";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}
