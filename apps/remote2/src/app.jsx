import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <h2>This the root view in Remote2</h2>
      <nav className="horizontal-nav">
        <Link to="page-a">Remote2/Page A</Link>
        <Link to="page-b">Remote2/Page B</Link>
      </nav>
      <Routes>
        <Route
          path="page-a"
          element={<div className="page-a page">This is page A in remote2</div>}
        />
        <Route
          path="page-b"
          element={<div className="page-b page">This is page B in remote2</div>}
        />
      </Routes>
    </div>
  );
}
