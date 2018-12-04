import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import RunnerHome from "./components/main/RunnerHome";
import CreateGroup from "./components/main/CreateGroup";
import { Navbar1, LandingPage, Register, Login } from "./components/layouts/";

class App extends Component {
	state = {
		name: "",
		loggedIn: false
	};
	updateUser = (name, loggedIn) => {
		this.setState({ name: name, loggedIn: loggedIn });
	};

	logout = () => {
		this.setState({ loggedIn: false, name: "" });
	};

	render() {
		let welcome = this.state.loggedIn ? (
			<h4 className="login-h3">Welcome, {this.state.name} !</h4>
		) : (
			""
		);

		return (
			<div className="App">
				<Navbar1 loggedIn={this.state.loggedIn} logout={this.logout} />
				{welcome}
				<Route exact path="/" component={LandingPage} />
				<Route path="/register" component={Register} />
				<Route
					path="/login"
					render={props => <Login {...props} updateUser={this.updateUser} />}
				/>
				<Route path="/runner-home" component={RunnerHome} />
				<Route path="/add-meetup" component={CreateGroup} />
			</div>
		);
	}
}

export default App;
