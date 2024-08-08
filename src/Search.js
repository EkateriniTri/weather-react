import React from "react";
import { useState } from "react";
import Weather from "./Weather";

export default function SearchForm() {
  const [city, enterCity] = useState("props.defaultCity");

  function handleSubmit(event) {
    event.preventDefault();
    <Weather defaultCity={city} />;
  }

  function updateCity(event) {
    enterCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city.." onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
