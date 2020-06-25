import React from "react";
import Joke from "./Joke";
import JokeData from "./JokeData";

function JokeApp() {
	const jokeComponents = JokeData.map((joke) => (
		<Joke id={joke.id} question={joke.question} punchline={joke.punchline} />
	));
	return <div className="joke">{jokeComponents}</div>;
}

export default JokeApp;
