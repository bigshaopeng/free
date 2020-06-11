import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'

export class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={() => <div><Link to='home'>do to home</Link>-----99-zsp</div>} />
                    <Route path='/home' component={() => <div> ------home</div>} />
                    {/* <Route component={() => <div> ------page is no</div>} /> */}
                    <Redirect to='/' />

                </Switch>
            </BrowserRouter>
        )
    }
}