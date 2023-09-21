import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import PageA from './pages/page-a';
import PageB from './pages/page-b';
import Home from './pages/home';
import './styles.css';

const RemoteRootApp1 = React.lazy(() => import('remote1/RemoteRootApp1'))
const RemoteRootApp2 = React.lazy(() => import('remote2/RemoteRootApp2'))

export default function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
      <h2>This the root App in Main</h2>
      <nav className="horizontal-nav">
        <Link to="/page-a">Main/Page A</Link>
        <Link to="/page-b">Main/Page B</Link>
        <Link to="/remote1">Remote1</Link>
        <Link to="/remote2">Remote2</Link>
      </nav>
      <React.Suspense fallback="Loading">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page-a" element={<PageA />} />
          <Route path="/page-b" element={<PageB />} />
          <Route path="/remote1/*" element={<RemoteRootApp1 />} />
          <Route path="/remote2/*" element={<RemoteRootApp2 />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}
