import { getJoke } from "./api";

export let updateHTML = (id: string, update: string) => {
	const htmlElement = document.getElementById(id);
	if (htmlElement) htmlElement.innerHTML = update;
};

export let showJoke = async () => {
	let joke = await getJoke();
	if (joke) {
		updateHTML("joke-display__text", `${joke}`);
	}
};

export const nextJokeButton = document.getElementById("joke-display__button"); 

