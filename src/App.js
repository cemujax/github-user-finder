import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Header from "components/common/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/search" component={Header} />
          <Redirect to="/search" />
        </Switch>
      </Router>
    );
  }
}

export default App;
