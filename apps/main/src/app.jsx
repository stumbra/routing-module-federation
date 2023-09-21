import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import "./styles.css";

const Homepage = React.lazy(() => import("homepage/App"));
const Manage = React.lazy(() => import("manage/App"));

export default function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
      <h2>This the root App in Main</h2>
      <nav className="horizontal-nav">
        <Link to="/">Homepage</Link>
        <Link to="/">Manage</Link>
      </nav>
      <React.Suspense fallback="Loading">
        <Routes>
          <Route path="/*" element={<Homepage />} />
          <Route path="/*" element={<Manage />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}
