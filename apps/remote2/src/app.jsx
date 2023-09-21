import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import PageA from './pages/page-a';
import PageB from './pages/page-b';
import Home from './pages/home';
import './styles.css';

export default function App() {
  return (
    <div className="app">
      <h2>This the root view in Remote2</h2>
      <nav className="horizontal-nav">
        <Link to="page-a">Remote2/Page A</Link>
        <Link to="page-b">Remote2/Page B</Link>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="page-a" element={<PageA />} />
        <Route path="page-b" element={<PageB />} />
      </Routes>
    </div>
  );
}
