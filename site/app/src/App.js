import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import { Login } from './page/login'
import { Logout } from './page/logout';
import { Home } from './page/home'
import { Antd } from './page/antd'
import 'antd/dist/antd.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/antd' component={Antd} />
          <Redirect to={'/'} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
