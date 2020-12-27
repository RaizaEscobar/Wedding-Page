import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Home from "./Pages/Home"

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
        </Switch>

    </Router>
  </>
  );
}

export default App;
