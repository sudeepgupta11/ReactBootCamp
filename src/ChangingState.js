import React, { Component } from "react";

export class ChangingState extends Component {
	constructor() {
		super();
		this.state = {
			count: 1,
		};
		this.doubleMe = this.doubleMe.bind(this);
		this.half = this.half.bind(this);
	}
	doubleMe() {
		this.setState((prevState) => {
			return {
				count: prevState.count * 2,
			};
		});
	}
	half() {
		this.setState((prevState) => {
			return {
				count: prevState.count / 2,
			};
		});
	}
	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<br />
				<button onClick={this.doubleMe}>Dobule Me</button>
				<br />
				<button onClick={this.half}>Half Me</button>
			</div>
		);
	}
}

export default ChangingState;
