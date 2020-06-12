import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'
import { HomeView } from '../page/home'
import { LodashView } from '../page/lodash'
import { style } from 'typestyle'

const navList = [
    {
        name: 'Home',
        router: '/home',
        component: HomeView
    }, {
        name: 'Lodash',
        router: '/lodash',
        component: LodashView
    },
]
const sty = {
    linkWrap: style({
        textAlign: 'center'
    }),
    link: style({
        display: 'inline-block',
        marginRight: 10,
        textDecoration: 'none',
        color: '#000',
        $nest: {
            '&:hover': {
                color: 'orange'
            }
        }
    }),
    activeLink: style({
        color: 'red'
    }),
    body: style({
        width: '80%',
        height: '100%',
        margin: '0 auto',
        border: '1px solid green',
        padding: 20,
        minHeight: 100
    })
}
export class Router extends Component {
    render() {
        const activeLink = location.pathname;
        return (
            <BrowserRouter>
                <div className={sty.linkWrap}>
                    {navList.map(v =>
                        <Link key={v.name} className={`${sty.link} ${v.router === activeLink && sty.activeLink}`} to={v.router}> {v.name} </Link>
                    )}
                </div>
                <div className={sty.body}>
                    <Switch>
                        <Route path='/' exact component={navList[0]['component']} />
                        {navList.map(v =>
                            <Route key={v.name} path={v.router} component={v.component} />
                        )}
                        {/* <Route component={() => <div> ------page is no</div>} /> */}
                        <Redirect to='/' />
                    </Switch>
                </div>
            </BrowserRouter >
        )
    }
}