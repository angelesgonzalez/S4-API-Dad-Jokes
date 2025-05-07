import { createJoke } from "./createJokes";

export let updateHTML = (id: string, update: string, jokeId: number) => {
	const htmlElement = document.getElementById(id);
	if (htmlElement) {
		htmlElement.innerHTML = update;
		htmlElement.dataset.id = jokeId.toString();
	}
};

export let showJoke = async () => {
	let newJoke = await createJoke();
	if (newJoke) {
		updateHTML("joke-display__text", `${newJoke.text}`, newJoke.id);
	}
};

export const nextJokeButton = document.getElementById("joke-display__button");

/* 




*/