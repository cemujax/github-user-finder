import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import DefaultPage from "pages/DefaultPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/search" component={DefaultPage} />
          <Redirect to="/search" />
        </Switch>
      </Router>
    );
  }
}

export default App;
