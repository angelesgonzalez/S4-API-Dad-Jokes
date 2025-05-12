import { reportJokes } from "./reportJokes";
import { getDadJoke } from "./apis/dadJokeApi";
import { getWorkJoke } from "./apis/workJokeApi";
import { jokeFactory } from "./jokeFactory";

export let createJoke = async () => {
	const randomNumber = Math.random();
	let jokeText: string;
	let type: string;

	if (randomNumber < 0.5) {
		jokeText = await getDadJoke();
		type = "Dad Joke";
	} else {
		jokeText = await getWorkJoke();
		type = "Work Joke";
	}

	const newJoke = jokeFactory(jokeText, type);
	reportJokes.push(newJoke);
	console.log("New Joke added", reportJokes);

	return newJoke;
};
