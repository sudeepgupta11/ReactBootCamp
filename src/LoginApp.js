import React from "react";

class LoginApp extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoggedIn: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((prevState) => {
			return {
				isLoggedIn: !prevState.isLoggedIn,
			};
		});
	}
	render() {
		let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
		let displayText = this.state.isLoggedIn
			? "You are logged in"
			: "You are logged out";
		return (
			<div>
				<button onClick={this.handleClick}>{buttonText}</button>
				<p>{displayText}</p>
			</div>
		);
	}
}

export default LoginApp;
