import { nextJokeButton, showJoke, clearAllInput } from "./utilities/dom";
import { scoreJoke } from "./utilities/scoreJokes";

document.addEventListener("DOMContentLoaded", (event) => {
	showJoke();
	scoreJoke();
});

nextJokeButton.addEventListener("click", (event) => {
	clearAllInput();
	showJoke();
});
