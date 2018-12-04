import React, { Component } from "react";

export default class SearchBar extends Component {
	state = {
		userInput: ""
	};
	onChange = e => {
		const { handleSearch } = this.props;
		this.setState({ userInput: e.target.value });
		handleSearch(this.state.userInput);
	};
	render() {
		return (
			<div className="container center">
				<div className="row">
					<div className="input-field col s12">
						<input
							id="search"
							type="search"
							placeholder="Enter a city"
							onChange={this.onChange}
							required
						/>
						<label className="label-icon" forhtml="search">
							<i className="material-icons">search</i>
						</label>
					</div>
				</div>
			</div>
		);
	}
}
