import { updateHTML, nextJokeButton } from "./utilities/dom";
import { createJoke } from "./utilities/createJokes";
import { showJoke } from "./utilities/dom";

document.addEventListener("DOMContentLoaded", (event) => {
	showJoke();
});

nextJokeButton.addEventListener("click", (event) => {
	const newJoke = createJoke();
	if (newJoke) {
		updateHTML("joke-display__text", `${newJoke}`);
	}
});
