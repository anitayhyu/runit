import React, { Component } from "react";
import { Card, CardTitle, Col, Row } from "react-materialize";

export default class Results extends Component {
	render() {
		const images = [
			"https://images.unsplash.com/photo-1511536830243-d4cf5a1ebfca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fdc7468f67db7546c5473eddcb7ddcf3&auto=format&fit=crop&w=800&q=60",
			"https://images.unsplash.com/photo-1511835395240-60717c19396e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d61a2b8d1cfc425c81699d4d25ce8e83&auto=format&fit=crop&w=800&q=60",
			"https://images.unsplash.com/photo-1520774779505-a7782b3fb733?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1bf55a8b4e2922c6b55060c3fa4579fa&auto=format&fit=crop&w=800&q=60",
			"https://images.unsplash.com/photo-1515064659140-5d30c77ee4cf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=13ed1f79ea3218aa70706b4562c07f74&auto=format&fit=crop&w=800&q=60",
			"https://images.unsplash.com/photo-1456613820599-bfe244172af5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ef20eb657eb4d15d1a5154a0246a015e&auto=format&fit=crop&w=800&q=60",
			"https://images.unsplash.com/photo-1524046026319-4a3bce40c999?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=95928c2b3a393c009f8f610a98c03387&auto=format&fit=crop&w=800&q=60"
		];

		const { results } = this.props;
		let randomIndex = Math.floor(Math.random() * 6);
		const result = results.map((result, i) => (
			<Col m={4} s={12} key={i}>
				<Card
					header={
						<CardTitle
							reveal
							image={images[randomIndex]}
							waves="light"
							style={{ height: "250px" }}
						/>
					}
					title={result.grp}
					reveal={
						<h6>
							<br />
							{result.meet}
							<br />
							<br />
							{result.city}
							<br />
							<br />
							{result.date}
							<br />
							<br />
							{result.time}
							<br />
							<br />
							{result.desc}
						</h6>
					}
				>
					<p>Distance: {result.distance} </p>
				</Card>
			</Col>
		));
		return (
			<div>
				<Row>{result}</Row>
			</div>
		);
	}
}
