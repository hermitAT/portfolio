import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import NavBar from "components/NavBar";
import Home from "components/Home";
import About from "components/About";

import './App.scss';

export default function App() {
  return (
    <Router>
      <main className="layout">
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
