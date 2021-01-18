import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Home from "./Pages/Home"
import Registration from "./Pages/Registration"
import Information from "./Pages/Information"
import Gallery from "./Pages/Gallery"

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/information" component={Information} />
      <Route exact path="/Gallery" component={Gallery} />
        </Switch>

    </Router>
  </>
  );
}

export default App;
