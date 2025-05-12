import { Joke } from "./Joke";

export let jokeFactory = (text: string, type: string) => {
	return new Joke(text, type);
};
