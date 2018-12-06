import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import header from "components/common/header";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/search" component={header} />
          <Redirect to="/search" />
        </Switch>
      </Router>
    );
  }
}

export default App;
