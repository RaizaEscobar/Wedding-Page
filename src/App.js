import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Home from "./Pages/Home"
import Registration from "./Pages/Registration"
import ComingSoon from "./Pages/ComingSoon";

function App() {
  return (
    <>
    <Router>
      {/* <Navbar /> */}
      <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/it" component={ComingSoon} />
      <Route exact path="/es" component={ComingSoon} />
      <Route exact path="/" component={ComingSoon} />
      <Route exact path="/registration" component={Registration} />
        </Switch>

    </Router>
  </>
  );
}

export default App;
