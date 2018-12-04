import React, { Component } from "react";
import { Row, Input, Button, Card, Col } from "react-materialize";
import axios from "axios";

export default class Login extends Component {
	state = {
		password: "",
		email: "",
		name: ""
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });
	onSubmit = e => {
		const { email, password } = this.state;
		const { history } = this.props;
		e.preventDefault();
		const newUser = {
			email,
			password
		};
		axios
			.post("http://localhost:8080/user/login", newUser)
			.then(res => {
				this.setState({ name: res.data.name });
				this.props.updateUser(res.data.name, true);
				history.push("/runner-home");
			})

			.catch(err => console.log(err));
	};
	render() {
		const { password, email } = this.state;
		return (
			<div className="login-container">
				<div className="container">
					<Row>
						<Col m={12} s={12}>
							<Card
								className="white darken-1 login-card"
								textClassName="black-text"
								title="Login"
							>
								<form onSubmit={this.onSubmit}>
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
										Login
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
