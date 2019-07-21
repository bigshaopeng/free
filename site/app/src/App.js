import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Login } from './page/login/login'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {/* <Route exact path='/home' component={Home} /> */}
          <Route path='/' component={Login} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
