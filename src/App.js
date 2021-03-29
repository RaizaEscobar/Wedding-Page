import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Registration from "./Pages/Registration"
import Information from "./Pages/Information"
import Gallery from "./Pages/Gallery"
import Playlist from "./Pages/Playlist"
import Honeymoon from "./Pages/Honeymoon"

function App(props) {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home/:lang?" component={Home} />
      <Route exact path="/registration/:lang?" component={Registration} />
      <Route exact path="/information/:lang?" component={Information} />
      <Route exact path="/gallery/:lang?" component={Gallery} />
      <Route exact path="/playlist/:lang?" component={Playlist} />
      <Route exact path="/honeymoon/:lang?" component={Honeymoon} />
        </Switch>

    </Router>
  </>
  );
}

export default App;
