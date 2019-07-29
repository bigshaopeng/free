import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Login } from './page/login'
import { Logout } from './page/logout';
import { Home } from './page/home'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Redirect to={'/'} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
