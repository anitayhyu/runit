import React, { Component } from "react";
import { Row, Input, Button, Card, Col } from "react-materialize";
import axios from "axios";

export default class Register extends Component {
	state = {
		name: "",
		password: "",
		email: ""
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });
	onSubmit = e => {
		const { name, email, password } = this.state;
		const { history } = this.props;
		e.preventDefault();
		const newUser = {
			name,
			email,
			password
		};
		axios
			.post("http://localhost:8080/user/register", newUser)
			.then(res => history.push("/login"))
			.catch(err => console.log(err));
	};
	render() {
		const { name, password, email } = this.state;
		return (
			<div className="register-container">
				<div className="container">
					<Row className="register-row">
						<Col m={12} s={12}>
							<Card
								className="white darken-1 register-card"
								textClassName="black-text"
								title="Register"
							>
								<form onSubmit={this.onSubmit}>
									<Input
										type="text"
										s={12}
										label="Full Name"
										name="name"
										onChange={this.onChange}
										value={name}
									/>
									<Input
										type="email"
										label="Email"
										s={12}
										name="email"
										onChange={this.onChange}
										value={email}
									/>
									<Input
										type="password"
										label="password"
										s={12}
										name="password"
										onChange={this.onChange}
										value={password}
									/>
									<Button
										className="waves-effect lime accent-2 btn"
										style={{ color: "black" }}
										onClick={this.onClick}
									>
										Submit
									</Button>
								</form>
							</Card>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}
