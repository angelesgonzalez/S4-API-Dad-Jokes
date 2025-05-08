import { nextJokeButton, showJoke, clearAllInput } from "./utilities/dom";
import { scoreJoke } from "./utilities/scoreJokes";
import { errors } from "./utilities/errorLog";

document.addEventListener("DOMContentLoaded", (event) => {
	showJoke();
	scoreJoke();
});

nextJokeButton.addEventListener("click", (event) => {
	clearAllInput();
	showJoke();
});
