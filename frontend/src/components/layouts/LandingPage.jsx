import React, { Component } from "react";

class LandingPage extends Component {
	render() {
		return (
			<header className="v-header container">
				<div className="fullscreen-video-wrap">
					<video src="running.mov" autoPlay={true} loop={true} />
					<div className="header-overlay">
						<div className="header-content">
							<h1>Hello Runners</h1>
							<p>Welcome to runIt!</p>
							<p>
								Discover and join your local running groups{" "}
								<i className="material-icons">mood</i>
							</p>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default LandingPage;
