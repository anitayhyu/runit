import React, { Component } from "react";
import { Row, Input, Button, Card, Col } from "react-materialize";
import axios from "axios";

export default class CreateGroup extends Component {
	state = {
		grp: "",
		city: "",
		meet: "",
		date: "",
		time: "",
		distance: "",
		desc: ""
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });
	onSubmit = e => {
		const { grp, city, meet, date, time, distance, desc } = this.state;
		const { history } = this.props;
		e.preventDefault();
		const newGroup = {
			grp,
			city,
			meet,
			date,
			time,
			distance,
			desc
		};
		axios
			.post("http://localhost:8080/results", newGroup)
			.then(res => history.push("/runner-home"))
			.catch(err => console.log(err));
	};
	render() {
		const { grp, city, meet, date, time, distance, desc } = this.state;
		return (
			<div className="create-container">
				<div className="container">
					<Row>
						<Col m={12} s={12}>
							<Card
								className="white darken-1 create-card"
								textClassName="black-text"
								title="Create your own running group"
							>
								<form onSubmit={this.onSubmit}>
									<Input
										type="text"
										s={12}
										label="Group Name"
										name="grp"
										onChange={this.onChange}
										value={grp}
									/>
									<Input
										type="text"
										s={12}
										label="City"
										name="city"
										onChange={this.onChange}
										value={city}
									/>
									<Input
										type="text"
										s={12}
										label="Meet"
										name="meet"
										onChange={this.onChange}
										value={meet}
									/>
									<Input
										type="text"
										s={12}
										label="Date"
										name="date"
										onChange={this.onChange}
										value={date}
									/>
									<Input
										type="text"
										s={12}
										label="Time"
										name="time"
										onChange={this.onChange}
										value={time}
									/>
									<Input
										type="text"
										s={12}
										label="Distance"
										name="distance"
										onChange={this.onChange}
										value={distance}
									/>
									<Input
										type="text"
										s={12}
										label="Description"
										name="desc"
										onChange={this.onChange}
										value={desc}
									/>
									<Button
										wave="light"
										style={{ color: "black" }}
										className="lime accent-2 z-depth-3"
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
