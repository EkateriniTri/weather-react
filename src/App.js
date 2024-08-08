import React from "react";
import "./App.css";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <h1>World City Weather</h1>
      <Search />

      <footer>
        This project was coded by Katerina Tri and is{" "}
        <a
          href="https://github.com/EkateriniTri/weather-react.git"
          target="_blank">
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://earnest-croquembouche-925bd3.netlify.app"
          target="_blank"
          rel="noopener noreferrer">
          {" "}
          hosted on Netlify{" "}
        </a>
      </footer>
    </div>
  );
}
