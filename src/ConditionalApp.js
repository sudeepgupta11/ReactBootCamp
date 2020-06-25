import React from "react";
import Conditional from "./Conditional";

class ConditionalApp extends React.Component {
	constructor() {
		super();
		this.state = {
			//isLoading: true,
			unreadMessages: ["Hi there", "Complete your task."],
		};
	}

	// componentDidMount() {
	// 	setTimeout(() => {
	// 		this.setState({
	// 			isLoading: false,
	// 		});
	// 	}, 1500);
	// }

	render() {
		//return <Conditional isLoading={this.state.isLoading} />;

		return (
			<div>
				{this.state.unreadMessages.length > 0 && (
					<h2>You have {this.state.unreadMessages.length} unread messages.</h2>
				)}
			</div>
		);
	}
}
export default ConditionalApp;
