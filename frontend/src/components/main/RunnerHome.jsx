import React, { Component } from "react";
import Results from "./Results";
import SearchBar from "./SearchBar";
import axios from "axios";

export default class RunnerHome extends Component {
	state = {
		results: [],
		searchedTerm: ""
	};
	onChange = term => this.setState({ searchedTerm: term });
	componentDidMount() {
		axios
			.get("http://localhost:8080/results")
			.then(({ data }) => this.setState({ results: data }))
			.catch(err => console.log(err));
	}
	render() {
		const { results, searchedTerm } = this.state;
		const filteredList = results.filter(result =>
			result.city.toLowerCase().includes(searchedTerm.toLowerCase())
		);
		return (
			<div style={{ marginTop: "100px" }}>
				<SearchBar handleSearch={this.onChange} />
				{searchedTerm === "" ? null : <Results results={filteredList} />}
			</div>
		);
	}
}
