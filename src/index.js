import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import MapView from "./MapView";

function App() {
  return (
    <div className="App">
      <MapView />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
