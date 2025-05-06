import { showJoke, nextJokeButton } from "./services/dom";
import { createJoke } from "./services/createJokes";


document.addEventListener("DOMContentLoaded", (event) => {
	showJoke();
});

nextJokeButton.addEventListener("click", (event) => {
	showJoke();
});
