import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import "./styles.css";

const RemoteRootApp1 = React.lazy(() => import("remote1/RemoteRootApp1"));
const RemoteRootApp2 = React.lazy(() => import("remote2/RemoteRootApp2"));

export default function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
      <h2>This the root App in Main</h2>
      <nav className="horizontal-nav">
        <Link to="/">Homepage</Link>
        <Link to="/">Remote2</Link>
      </nav>
      <React.Suspense fallback="Loading">
        <Routes>
          <Route path="/*" element={<RemoteRootApp1 />} />
          <Route path="/*" element={<RemoteRootApp2 />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}
