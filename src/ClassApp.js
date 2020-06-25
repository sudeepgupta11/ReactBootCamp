import React, { Component } from "react";

// Challenge:
// Given an incomplete class-based component without a constructor,
// add a constructor and initialize state to fix the broken component.

class ClassApp extends Component {
	constructor() {
		super();
		this.state = {
			name: "Sudeep Gupta",
			age: 21,
		};
	}
	render() {
		return (
			<div>
				<h1>{this.state.name}</h1>
				<h3>{this.state.age} years old</h3>
			</div>
		);
	}
}

export default ClassApp;
