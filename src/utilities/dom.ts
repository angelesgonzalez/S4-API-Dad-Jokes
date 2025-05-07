import { createJoke } from "./createJokes";

export let updateHTML = (id: string, update: string) => {
	const htmlElement = document.getElementById(id);
	if (htmlElement) htmlElement.innerHTML = update;
};

export let showJoke = async () => {
	let newJoke = await createJoke();
	if (newJoke) {
		updateHTML("joke-display__text", `${newJoke}`);
	}
};

/* 

document.addEventListener("DOMContentLoaded", (event) => {
	const newJoke = createJoke();
	updateHTML("joke-display__text", `${newJoke}`);
});



*/

export const nextJokeButton = document.getElementById("joke-display__button");
