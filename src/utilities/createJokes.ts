import { Joke } from "./Joke";
import { reportJokes } from "./reportJokes";
import { getDadJoke } from "./apis/dadJokeApi";
import { getWorkJoke } from "./apis/workJokeApi";
import { cleanScoring } from "./dom";

export let createJoke = async () => {
	const randomNumber = Math.random();
	let jokeType = randomNumber < 0.5 ? "Dad Joke" : "Work Joke";

	let joke = randomNumber < 0.5 ? await getDadJoke() : await getWorkJoke();
	if (joke) {
		const newJoke = new Joke(joke);
		newJoke.type = jokeType;
		reportJokes.push(newJoke);
		console.log("New Joke added", reportJokes);
		cleanScoring();
		return newJoke;
	} 
};
