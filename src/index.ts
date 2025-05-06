import { showJoke, nextJokeButton } from "./services/dom";

document.addEventListener("DOMContentLoaded", (event) => {
	showJoke();
});

nextJokeButton.addEventListener("click", (event) => {
	showJoke();
});
