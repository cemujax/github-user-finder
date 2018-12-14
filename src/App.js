import React, { Component } from "react";
import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import DefaultPage from "pages/DefaultPage";
import UserDetailPage from "pages/UserDetailPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/search" component={DefaultPage} />
          <Route exact path="/:userName" component={UserDetailPage} />
          <Redirect to="/search" />
        </Switch>
      </Router>
    );
  }
}

export default App;
