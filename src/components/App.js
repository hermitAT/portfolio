import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import NavBar from "components/NavBar";

import './App.scss';

export default function App() {
  return (
    <Router>
      <main className="layout">
        <NavBar />
      </main>
    </Router>
  );
}
