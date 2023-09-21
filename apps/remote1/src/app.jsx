import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <h2>This the root view in Remote1</h2>
      <nav className="horizontal-nav">
        <Link to="page-a">Remote1/Page A</Link>
        <Link to="page-b">Remote1/Page B</Link>
      </nav>
      <Routes>
        <Route
          index
          element={
            <div className="home page">
              This is the home view from remote1. Click the links above to
              navigate.
            </div>
          }
        />
        <Route
          path="page-a"
          element={<div className="page-a page">This is page A in remote1</div>}
        />
        <Route
          path="page-b"
          element={<div className="page-b page">This is page B in remote1</div>}
        />
      </Routes>
    </div>
  );
}
