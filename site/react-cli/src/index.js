import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch, PrivateRoute } from "react-router-dom";
// import "../node_modules/antd/dist/antd.css"
// import "antd/dist/antd.css";
import { Input } from 'antd'

function TopPage() {
	return (
		<div>
			--
			<Input />
			{/* <Router>
				<Switch>
					<Route path='/' exact component={() => <div><Input /></div>} />
					<PrivateRoute path="/home" exact component={() => <div>home</div>} />
					<Redirect to='/'></Redirect>
				</Switch>
			</Router> */}
		</div>
	)
}

ReactDOM.render(
	<TopPage />,
	document.getElementById('root')
);
