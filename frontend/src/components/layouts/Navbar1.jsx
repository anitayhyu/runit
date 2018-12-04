import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-materialize";

export default class Navbar1 extends Component {
	render() {
		const logoIcon = <i className="logo-run material-icons">directions_run</i>;
		const loggedIn = {
			display: this.props.loggedIn ? "none" : "block"
		};
		const loggedOut = {
			display: !this.props.loggedIn ? "none" : "block"
		};
		return (
			<div>
				<Navbar
					brand={logoIcon}
					left
					style={style}
					className={"nav-wrapper grey darken-3"}
				>
					<li style={loggedIn}>
						<NavLink to="/register">Register</NavLink>
					</li>
					<li style={loggedIn}>
						<NavLink to="/login">Login</NavLink>
					</li>
					<li style={loggedOut}>
						<NavLink to="/add-meetup">Create</NavLink>
					</li>
					<li style={loggedOut}>
						<NavLink to="/" onClick={this.props.logout}>
							Logout
						</NavLink>
					</li>
				</Navbar>
			</div>
		);
	}
}

const style = {
	position: "fixed",
	zIndex: "100",
	top: "0",
	left: "0"
};
