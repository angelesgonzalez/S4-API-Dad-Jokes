import { Joke } from "./Joke";
import { reportJokes } from "./reportJokes";
import { getJoke } from "./apis/dadJokeApi";

export let createJoke = async () => {
	let joke = await getJoke();
	if (joke) {
		const newJoke = new Joke(joke);
		reportJokes.push(newJoke);
		return newJoke;
	}
};
