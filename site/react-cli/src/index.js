import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch, PrivateRoute, Link } from "react-router-dom";
import HomeView from './page/home';
import LoginView from './page/login';
// import "../node_modules/antd/dist/antd.css"
// import "antd/dist/antd.css";
import { Input } from 'antd'

class TopPage extends React.Component {
	render() {
		return (
			<div>
				{/*  */}
				<Router>
					<Link to="/login">Login</Link>
					<Link to="/home">Home</Link>
					<Switch>
						<Route path='/' exact component={HomeView} />
						<Route path="/login" component={LoginView} />
						<Redirect to='/'></Redirect>
					</Switch>
				</Router>
			</div>
		)
	}
}

ReactDOM.render(
	<TopPage />,
	document.getElementById('root')
);
