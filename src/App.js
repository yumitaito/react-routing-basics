import { BrowserRouter, Link } from 'react-router-dom';
import React from 'react';
import './style.css';
import { Router } from './router/Router';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
      </div>
      <Router />
    </BrowserRouter>
  );
}
