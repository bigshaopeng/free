import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch, PrivateRoute, Link } from "react-router-dom";
import HomeView from './page/home';
import LoginView from './page/login';
require('!style-loader!css-loader!antd/dist/antd.css');

class TopPage extends React.Component {
	render() {
		return (
			<div>
				{/* <div className='wrap'>zsp</div> */}
				<Router>
					{/* <Link to="/login">Login</Link>
					<Link to="/home">Home</Link> */}
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
