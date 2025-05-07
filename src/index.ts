import { nextJokeButton, showJoke } from "./utilities/dom";

document.addEventListener("DOMContentLoaded", (event) => {
	showJoke();
});

nextJokeButton.addEventListener("click", (event) => {
	showJoke();
});
