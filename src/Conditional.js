import React from "react";

function Conditional(props) {
	// if (props.isLoading === true) {
	// 	return (
	// 		<div>
	// 			<h1>Hi there it's loading</h1>
	// 		</div>
	// 	);
	// } else {
	// 	return (
	// 		<div>
	// 			<h1>Now it's false</h1>
	// 		</div>
	// 	);
	// }

	return (
		<div>
			{props.isLoading === true ? (
				<h1>Hi there it's loading</h1>
			) : (
				<h1>Now it's false</h1>
			)}
		</div>
	);
}

export default Conditional;
