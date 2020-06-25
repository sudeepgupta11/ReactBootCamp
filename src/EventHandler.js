import React, { Component } from "react";

function clicked() {
	console.log("clicked");
}
export class EventHandler extends Component {
	render() {
		return (
			<div>
				<img
					onMouseOver={() => {
						console.log("hover!");
					}}
					src="http://www.fillmurray.com/g/300/300"
				/>
				<br />

				<button onClick={clicked}>Click Me!</button>
			</div>
		);
	}
}

export default EventHandler;
