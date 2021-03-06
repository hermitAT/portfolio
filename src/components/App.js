import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import NavBar from "components/NavBar";
import Footer from "./Footer";
import Contact from "./Contact";
import Home from "components/Home";
import About from "components/About";
import Projects from "components/Projects";

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
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}
