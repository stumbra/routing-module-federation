import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <h2>This the root view in Homepage</h2>
      <nav className="horizontal-nav">
        <Link to="">Homepage</Link>
        <Link to="energy-consumption">Energy Consumption</Link>
        <Link to="charging-behaviour">Charging Behaviour</Link>
        <Link to="charger-health">Charger Health</Link>
      </nav>
      <Routes>
        <Route index element={<div className="page">Homepage Component</div>} />
        <Route
          path="energy-consumption"
          element={<div className="page">Energy Consumption Component</div>}
        />
        <Route
          path="/charging-behaviour"
          element={<div className="page">Charging Behaviour Component</div>}
        />
        <Route
          path="/charger-health"
          element={<div className="page">Charger Health Component</div>}
        />
      </Routes>
    </div>
  );
}
