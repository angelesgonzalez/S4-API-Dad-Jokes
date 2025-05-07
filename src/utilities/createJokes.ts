import { Joke } from "./Joke";
import { reportJokes } from "./reportJokes";
import { getJoke } from "./api";
// import { logError } from "./errorLog";

export let createJoke = async () => {
	let joke = await getJoke();
	if (joke) {
		const newJoke = new Joke(joke);
		reportJokes.push(newJoke);
		console.log(reportJokes);
		return newJoke.text;
	}
};
