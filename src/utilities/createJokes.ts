import { Joke } from "./Joke";
import { reportJokes } from "./reportJokes";
import { getDadJoke } from "./apis/dadJokeApi";
import { getWorkJoke } from "./apis/workJokeApi";

export let createJoke = async () => {
	const randomNumber = Math.random();

	let joke = randomNumber < 0.5 ? await getDadJoke() : await getWorkJoke();
	if (joke) {
		const newJoke = new Joke(joke);
		reportJokes.push(newJoke);
		console.log(reportJokes);
		return newJoke;
	}
};
